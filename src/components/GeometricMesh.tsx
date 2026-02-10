import { useEffect, useRef } from "react";

const GeometricMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    const spacing = 20;
    const mouseRadius = 150;
    let cols = 0;
    let rows = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      cols = Math.ceil(w / spacing) + 1;
      rows = Math.ceil(h / spacing) + 1;
    };

    const draw = () => {
      time += 0.015;
      ctx.clearRect(0, 0, w, h);

      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const baseX = col * spacing;
          const baseY = row * spacing;

          // Flag wave: horizontal wave + slight vertical ripple
          const wave = Math.sin(col * 0.15 - time * 2) * 4 +
                       Math.sin(row * 0.1 + col * 0.08 - time * 1.5) * 3;
          const waveY = Math.cos(col * 0.12 - time * 1.8) * 2.5 +
                        Math.sin(row * 0.15 + time) * 1.5;

          let x = baseX + wave;
          let y = baseY + waveY;

          // Mouse interaction
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let proximity = 0;

          if (dist < mouseRadius && dist > 0) {
            const force = (1 - dist / mouseRadius) * 20;
            x += (dx / dist) * force;
            y += (dy / dist) * force;
            proximity = 1 - dist / mouseRadius;
          }

          const r = 1.2 + proximity * 1.5;
          const alpha = 0.45 + proximity * 0.5;

          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(174, 72%, 52%, ${alpha})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleLeave = () => { mouse.current = { x: -9999, y: -9999 }; };

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
      style={{ opacity: 0.85 }}
    />
  );
};

export default GeometricMesh;
