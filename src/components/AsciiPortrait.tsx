import { useEffect, useRef } from "react";

// Animated ASCII "signature" — a procedural C-mark drawn with characters
// whose density is modulated by radial distance + noise + cursor proximity.
const CHARS = " ·:-=+*░▒▓█";

function n2(x: number, y: number) {
  const s = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return s - Math.floor(s);
}
function smoothNoise(x: number, y: number) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const tl = n2(xi, yi), tr = n2(xi + 1, yi);
  const bl = n2(xi, yi + 1), br = n2(xi + 1, yi + 1);
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  return (tl * (1 - u) + tr * u) * (1 - v) + (bl * (1 - u) + br * u) * v;
}

const AsciiPortrait = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0, h = 0;
    let cols = 0, rows = 0;
    const cell = 12; // px per glyph
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.floor(w / cell);
      rows = Math.floor(h / cell);
    };
    resize();

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - r.left) / r.width;
      mouse.current.y = (e.clientY - r.top) / r.height;
    };
    canvas.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);

    const start = performance.now();
    const draw = () => {
      const t = (performance.now() - start) / 1000;
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${cell - 1}px "JetBrains Mono", ui-monospace, monospace`;
      ctx.textBaseline = "top";

      const cx = cols / 2;
      const cy = rows / 2;
      const radius = Math.min(cols, rows) * 0.38;

      const mx = mouse.current.x * cols;
      const my = mouse.current.y * rows;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // radial distance to the ring
          const dx = x - cx, dy = y - cy;
          const r = Math.sqrt(dx * dx + dy * dy);
          const ringBand = 1 - Math.min(1, Math.abs(r - radius) / (radius * 0.55));

          // carve out an opening on the right to form a "C"
          const angle = Math.atan2(dy, dx); // -PI..PI
          const openness = Math.max(0, 1 - Math.abs(angle) / 0.55); // 1 near angle 0, 0 outside
          const carved = ringBand * (1 - openness * 0.95);

          // flowing noise + slow rotation of noise field
          const nx = x * 0.08 + Math.cos(t * 0.15) * 4;
          const ny = y * 0.08 + Math.sin(t * 0.12) * 4;
          const nz = smoothNoise(nx + t * 0.4, ny);

          // cursor bloom
          const md = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
          const bloom = Math.max(0, 1 - md / 14);

          const intensity = Math.min(1, carved * (0.55 + nz * 0.7) + bloom * 0.9);
          if (intensity < 0.08) continue;

          const idx = Math.min(CHARS.length - 1, Math.floor(intensity * CHARS.length));
          const ch = CHARS[idx];

          // color: teal→warm as intensity climbs
          const hue = 174 - intensity * 6;
          const lig = 30 + intensity * 55;
          ctx.fillStyle = `hsla(${hue}, 80%, ${lig}%, ${0.35 + intensity * 0.6})`;
          ctx.fillText(ch, x * cell, y * cell);
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
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

export default AsciiPortrait;