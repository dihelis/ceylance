import { useEffect, useRef } from "react";

// Fullscreen WebGL fragment shader — fluid teal/orange field
// that responds to cursor position and velocity.
const VERT = `
attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2  u_resolution;
uniform float u_time;
uniform vec2  u_mouse;      // 0..1
uniform float u_mouseVel;   // 0..1

// hash + value noise
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i+vec2(0,0)), hash(i+vec2(1,0)), u.x),
             mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for(int i=0;i<5;i++){ v += a*noise(p); p *= 2.02; a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = uv;
  p.x *= u_resolution.x / u_resolution.y;

  vec2 m = u_mouse;
  m.x *= u_resolution.x / u_resolution.y;

  float t = u_time * 0.08;
  // domain warp — flowing field
  vec2 q = vec2(fbm(p + t), fbm(p - t + 5.0));
  vec2 r = vec2(fbm(p + q + vec2(1.7,9.2) + t*1.3),
                fbm(p + q + vec2(8.3,2.8) - t*1.1));
  float f = fbm(p + r * (1.2 + u_mouseVel * 1.8));

  // cursor influence — warm ripple pulling the field toward the mouse
  float d = distance(p, m);
  float pull = smoothstep(0.55, 0.0, d) * (0.35 + u_mouseVel * 0.9);

  vec3 bg     = vec3(0.02, 0.025, 0.03);
  vec3 teal   = vec3(0.18, 0.83, 0.75);
  vec3 deep   = vec3(0.05, 0.20, 0.28);
  vec3 warm   = vec3(1.00, 0.42, 0.20);

  vec3 col = bg;
  col = mix(col, deep,  smoothstep(0.15, 0.85, f));
  col = mix(col, teal,  smoothstep(0.55, 0.95, f) * 0.9);
  col = mix(col, warm,  pull * (0.6 + 0.4 * f));

  // grain
  float g = hash(gl_FragCoord.xy + u_time) - 0.5;
  col += g * 0.025;

  // vignette
  float v = smoothstep(1.15, 0.35, distance(uv, vec2(0.5)));
  col *= mix(0.55, 1.0, v);

  gl_FragColor = vec4(col, 1.0);
}
`;

const ShaderField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn(gl.getShaderInfoLog(s));
      }
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes   = gl.getUniformLocation(prog, "u_resolution");
    const uTime  = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uVel   = gl.getUniformLocation(prog, "u_mouseVel");

    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, vel: 0, lastX: 0.5, lastY: 0.5 };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left) / r.width;
      mouse.ty = 1 - (e.clientY - r.top) / r.height;
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0]; if (!t) return;
      const r = canvas.getBoundingClientRect();
      mouse.tx = (t.clientX - r.left) / r.width;
      mouse.ty = 1 - (t.clientY - r.top) / r.height;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });

    const start = performance.now();
    let raf = 0;
    const render = () => {
      const time = (performance.now() - start) / 1000;
      // ease mouse
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;
      const dx = mouse.x - mouse.lastX, dy = mouse.y - mouse.lastY;
      const inst = Math.min(1, Math.sqrt(dx*dx + dy*dy) * 22);
      mouse.vel = mouse.vel * 0.9 + inst * 0.1;
      mouse.lastX = mouse.x; mouse.lastY = mouse.y;

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, time);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uVel, mouse.vel);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
};

export default ShaderField;