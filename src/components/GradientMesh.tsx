import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  birth: number;
  maxRadius: number;
}

const GradientMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const ripples = useRef<Ripple[]>([]);

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
      { cx: 0.20, cy: 0.30, rx: 0.45, ry: 0.40, speed: 0.018, phase: 0,   color: [174, 80, 55] },
      { cx: 0.75, cy: 0.50, rx: 0.40, ry: 0.45, speed: 0.022, phase: 2,   color: [190, 85, 45] },
      { cx: 0.50, cy: 0.20, rx: 0.38, ry: 0.32, speed: 0.014, phase: 4,   color: [210, 70, 30] },
      { cx: 0.85, cy: 0.25, rx: 0.30, ry: 0.35, speed: 0.026, phase: 1.5, color: [160, 65, 45] },
      { cx: 0.10, cy: 0.75, rx: 0.42, ry: 0.35, speed: 0.020, phase: 3,   color: [200, 60, 35] },
      { cx: 0.55, cy: 0.70, rx: 0.35, ry: 0.30, speed: 0.016, phase: 5,   color: [174, 90, 48] },
      { cx: 0.35, cy: 0.55, rx: 0.28, ry: 0.32, speed: 0.024, phase: 0.8, color: [230, 50, 22] },
    ];

    let time = 0;
    const RIPPLE_DURATION = 1.8; // seconds
    const RIPPLE_MAX_RADIUS = 250;

    // Spawn ripples on mouse movement (throttled)
    let lastRippleTime = 0;
    const spawnRipple = (x: number, y: number) => {
      const now = performance.now() / 1000;
      if (now - lastRippleTime < 0.08) return; // throttle: max ~12 ripples/sec
      lastRippleTime = now;
      ripples.current.push({ x, y, birth: now, maxRadius: RIPPLE_MAX_RADIUS + Math.random() * 80 });
      // Cap at 25 active ripples
      if (ripples.current.length > 25) ripples.current.shift();
    };

    const draw = () => {
      time += 0.008;
      const now = performance.now() / 1000;

      // Dark base
      ctx.fillStyle = "hsl(220, 25%, 6%)";
      ctx.fillRect(0, 0, w, h);

      const mx = mouse.current.x;
      const my = mouse.current.y;

      // Draw gradient blobs
      for (const b of blobs) {
        const t = time * b.speed * 60 + b.phase;
        let x = w * (b.cx + Math.sin(t) * 0.15 + Math.cos(t * 0.6) * 0.08);
        let y = h * (b.cy + Math.cos(t * 0.7) * 0.12 + Math.sin(t * 0.4) * 0.06);

        const dx = mx - x;
        const dy = my - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const attractRadius = Math.max(w, h) * 0.5;
        if (dist < attractRadius && dist > 0) {
          const pull = (1 - dist / attractRadius) * 0.15;
          x += dx * pull;
          y += dy * pull;
        }

        const pulse = 1 + Math.sin(t * 1.5) * 0.15;
        const radius = Math.max(w * b.rx, h * b.ry) * pulse;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const [hue, sat, lig] = b.color;
        gradient.addColorStop(0, `hsla(${hue}, ${sat}%, ${lig}%, 0.55)`);
        gradient.addColorStop(0.3, `hsla(${hue}, ${sat}%, ${lig}%, 0.25)`);
        gradient.addColorStop(0.6, `hsla(${hue}, ${sat}%, ${lig}%, 0.08)`);
        gradient.addColorStop(1, `hsla(${hue}, ${sat}%, ${lig}%, 0)`);

        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      // Draw ripples
      ctx.globalCompositeOperation = "screen";
      const activeRipples: Ripple[] = [];
      for (const r of ripples.current) {
        const age = now - r.birth;
        if (age > RIPPLE_DURATION) continue;
        activeRipples.push(r);

        const progress = age / RIPPLE_DURATION;
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const radius = r.maxRadius * eased;
        const alpha = (1 - progress) * 0.4;

        // Outer ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(174, 80%, 55%, ${alpha * 0.6})`;
        ctx.lineWidth = 2 - progress * 1.5;
        ctx.stroke();

        // Inner glow
        const glow = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, radius * 0.8);
        glow.addColorStop(0, `hsla(174, 80%, 55%, ${alpha * 0.3})`);
        glow.addColorStop(0.5, `hsla(174, 80%, 55%, ${alpha * 0.08})`);
        glow.addColorStop(1, `hsla(174, 80%, 55%, 0)`);
        ctx.fillStyle = glow;
        ctx.fill();
      }
      ripples.current = activeRipples;

      ctx.globalCompositeOperation = "source-over";
      animationId = requestAnimationFrame(draw);
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouse.current = { x, y };
      spawnRipple(x, y);
    };
    const handleLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Spawn a bigger ripple on click
      ripples.current.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        birth: performance.now() / 1000,
        maxRadius: RIPPLE_MAX_RADIUS * 1.8,
      });
    };
    const handleTouch = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) {
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        mouse.current = { x, y };
        spawnRipple(x, y);
      }
    };
    const handleTouchStart = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) {
        // Bigger ripple on tap
        ripples.current.push({
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
          birth: performance.now() / 1000,
          maxRadius: RIPPLE_MAX_RADIUS * 1.5,
        });
      }
    };

    resize();
    draw();

    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleLeave);
    canvas.addEventListener("click", handleClick);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: true });
    canvas.addEventListener("touchmove", handleTouch, { passive: true });
    canvas.addEventListener("touchend", handleLeave);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseleave", handleLeave);
      canvas.removeEventListener("click", handleClick);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouch);
      canvas.removeEventListener("touchend", handleLeave);
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
