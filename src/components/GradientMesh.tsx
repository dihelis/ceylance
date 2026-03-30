import { useEffect, useRef } from "react";

const GradientMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Blob definitions — each drifts on its own slow orbit
    const blobs = [
      { cx: 0.25, cy: 0.35, rx: 0.35, ry: 0.30, speed: 0.012, phase: 0, color: [174, 72, 52] },   // teal
      { cx: 0.70, cy: 0.55, rx: 0.30, ry: 0.35, speed: 0.015, phase: 2, color: [190, 80, 42] },   // deep cyan
      { cx: 0.50, cy: 0.25, rx: 0.28, ry: 0.25, speed: 0.010, phase: 4, color: [220, 60, 25] },   // muted blue
      { cx: 0.80, cy: 0.30, rx: 0.25, ry: 0.28, speed: 0.018, phase: 1.5, color: [174, 60, 40] }, // darker teal
      { cx: 0.15, cy: 0.70, rx: 0.32, ry: 0.28, speed: 0.013, phase: 3, color: [200, 50, 30] },   // slate blue
    ];

    let time = 0;

    const draw = () => {
      time += 0.004; // very slow

      // Dark base
      ctx.fillStyle = "hsl(220, 25%, 6%)";
      ctx.fillRect(0, 0, w, h);

      for (const b of blobs) {
        const t = time * b.speed * 60 + b.phase;
        // Drift the centre slowly
        const x = w * (b.cx + Math.sin(t) * 0.08 + Math.cos(t * 0.7) * 0.04);
        const y = h * (b.cy + Math.cos(t * 0.8) * 0.06 + Math.sin(t * 0.5) * 0.03);
        const radiusX = w * b.rx;
        const radiusY = h * b.ry;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, Math.max(radiusX, radiusY));
        const [hue, sat, lig] = b.color;
        gradient.addColorStop(0, `hsla(${hue}, ${sat}%, ${lig}%, 0.35)`);
        gradient.addColorStop(0.4, `hsla(${hue}, ${sat}%, ${lig}%, 0.15)`);
        gradient.addColorStop(1, `hsla(${hue}, ${sat}%, ${lig}%, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      // Subtle noise grain overlay via compositing
      ctx.globalCompositeOperation = "overlay";
      const imgData = ctx.createImageData(w, h);
      const pixels = imgData.data;
      // Sparse grain — only set every 4th pixel for performance
      for (let i = 0; i < pixels.length; i += 16) {
        const v = Math.random() * 255;
        pixels[i] = v;
        pixels[i + 1] = v;
        pixels[i + 2] = v;
        pixels[i + 3] = 8; // very subtle
      }
      ctx.putImageData(imgData, 0, 0);
      ctx.globalCompositeOperation = "source-over";

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
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
