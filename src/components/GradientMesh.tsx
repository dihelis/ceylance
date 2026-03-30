import { useEffect, useRef } from "react";

const GradientMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const blobs = [
      { cx: 0.20, cy: 0.30, rx: 0.45, ry: 0.40, speed: 0.018, phase: 0,   color: [174, 80, 55] },   // bright teal
      { cx: 0.75, cy: 0.50, rx: 0.40, ry: 0.45, speed: 0.022, phase: 2,   color: [190, 85, 45] },   // vivid cyan
      { cx: 0.50, cy: 0.20, rx: 0.38, ry: 0.32, speed: 0.014, phase: 4,   color: [210, 70, 30] },   // deep blue
      { cx: 0.85, cy: 0.25, rx: 0.30, ry: 0.35, speed: 0.026, phase: 1.5, color: [160, 65, 45] },   // emerald
      { cx: 0.10, cy: 0.75, rx: 0.42, ry: 0.35, speed: 0.020, phase: 3,   color: [200, 60, 35] },   // steel blue
      { cx: 0.55, cy: 0.70, rx: 0.35, ry: 0.30, speed: 0.016, phase: 5,   color: [174, 90, 48] },   // hot teal
      { cx: 0.35, cy: 0.55, rx: 0.28, ry: 0.32, speed: 0.024, phase: 0.8, color: [230, 50, 22] },   // midnight
    ];

    let time = 0;

    const draw = () => {
      time += 0.008;

      // Dark base
      ctx.fillStyle = "hsl(220, 25%, 6%)";
      ctx.fillRect(0, 0, w, h);

      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (const b of blobs) {
        const t = time * b.speed * 60 + b.phase;

        // Wider, more dramatic orbital movement
        let x = w * (b.cx + Math.sin(t) * 0.15 + Math.cos(t * 0.6) * 0.08);
        let y = h * (b.cy + Math.cos(t * 0.7) * 0.12 + Math.sin(t * 0.4) * 0.06);

        // Mouse attraction — blobs gently pull toward cursor
        const dx = mx - x;
        const dy = my - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const attractRadius = Math.max(w, h) * 0.5;
        if (dist < attractRadius && dist > 0) {
          const pull = (1 - dist / attractRadius) * 0.15;
          x += dx * pull;
          y += dy * pull;
        }

        // Pulsing radius
        const pulse = 1 + Math.sin(t * 1.5) * 0.15;
        const radiusX = w * b.rx * pulse;
        const radiusY = h * b.ry * pulse;
        const radius = Math.max(radiusX, radiusY);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const [hue, sat, lig] = b.color;
        gradient.addColorStop(0, `hsla(${hue}, ${sat}%, ${lig}%, 0.55)`);
        gradient.addColorStop(0.3, `hsla(${hue}, ${sat}%, ${lig}%, 0.25)`);
        gradient.addColorStop(0.6, `hsla(${hue}, ${sat}%, ${lig}%, 0.08)`);
        gradient.addColorStop(1, `hsla(${hue}, ${sat}%, ${lig}%, 0)`);

        // Use 'screen' blending for richer color mixing
        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      ctx.globalCompositeOperation = "source-over";

      animationId = requestAnimationFrame(draw);
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };

    resize();
    draw();

    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleLeave);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseleave", handleLeave);
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

export default GradientMesh;
