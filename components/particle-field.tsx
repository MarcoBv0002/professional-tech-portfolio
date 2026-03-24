"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const DOT_COUNT = 44;

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    const context = ctx;
    const cnv = canvas;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let dots: Dot[] = [];

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      return;
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      cnv.width = Math.floor(width * dpr);
      cnv.height = Math.floor(height * dpr);
      cnv.style.width = `${width}px`;
      cnv.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = Array.from({ length: DOT_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: 0.9 + Math.random() * 1.8
      }));
    }

    function render() {
      context.clearRect(0, 0, width, height);

      for (const dot of dots) {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < -20) dot.x = width + 20;
        if (dot.x > width + 20) dot.x = -20;
        if (dot.y < -20) dot.y = height + 20;
        if (dot.y > height + 20) dot.y = -20;
      }

      for (let i = 0; i < dots.length; i += 1) {
        const a = dots[i];
        for (let j = i + 1; j < dots.length; j += 1) {
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.16;
            context.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      for (const dot of dots) {
        context.fillStyle = "rgba(125, 211, 252, 0.8)";
        context.beginPath();
        context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(render);
    }

    resize();
    render();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
