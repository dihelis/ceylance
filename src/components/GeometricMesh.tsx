import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

const GeometricMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const nodeCount = 80;
    const connectionDistance = 180;
    const mouseRadius = 200;
    const depth = 400;
    const fov = 600;
    const nodes: Node[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const initNodes = () => {
      nodes.length = 0;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: (Math.random() - 0.5) * w,
          y: (Math.random() - 0.5) * h,
          z: Math.random() * depth,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const project = (node: Node, cx: number, cy: number) => {
      const scale = fov / (fov + node.z);
      return { x: node.x * scale + cx, y: node.y * scale + cy, scale };
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const cx = w / 2;
      const cy = h / 2;
      ctx.clearRect(0, 0, w, h);

      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (const node of nodes) {
        // Mouse repulsion in screen space
        const p = project(node, cx, cy);
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius && dist > 0) {
          const force = (1 - dist / mouseRadius) * 1.5;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }

        // Damping
        node.vx *= 0.98;
        node.vy *= 0.98;
        node.vz *= 0.98;

        // Drift back
        node.vx += -node.x * 0.00005;
        node.vy += -node.y * 0.00005;

        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        const halfW = w * 0.6;
        const halfH = h * 0.6;
        if (node.x < -halfW || node.x > halfW) node.vx *= -1;
        if (node.y < -halfH || node.y > halfH) node.vy *= -1;
        if (node.z < 0) { node.z = 0; node.vz *= -1; }
        if (node.z > depth) { node.z = depth; node.vz *= -1; }
      }

      // Sort by z for proper layering
      const sorted = [...nodes].sort((a, b) => b.z - a.z);
      const projected = sorted.map(n => ({ ...project(n, cx, cy), node: n }));

      // Draw connections
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const avgScale = (a.scale + b.scale) / 2;
            const alpha = (1 - dist / connectionDistance) * 0.3 * avgScale;
            ctx.strokeStyle = `hsla(174, 72%, 52%, ${alpha})`;
            ctx.lineWidth = 0.6 * avgScale;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const p of projected) {
        const r = Math.max(1, 2.5 * p.scale);
        const alpha = 0.3 + 0.5 * p.scale;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(174, 72%, 52%, ${alpha})`;
        ctx.fill();
      }

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
    initNodes();
    draw();

    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleLeave);
    window.addEventListener("resize", () => { resize(); initNodes(); });

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
      style={{ opacity: 0.7 }}
    />
  );
};

export default GeometricMesh;
