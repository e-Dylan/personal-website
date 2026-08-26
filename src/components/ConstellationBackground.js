"use client";

import { useEffect, useRef } from "react";

function ConstellationBackground({ children }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, dpr;
    let particles = [];
    let rafId = null;
    let running = true;

    const PARTICLE_COUNT = 100; // tune density here
    const LINK_DISTANCE = 120; // px before a line stops drawing
    const SPEED = 1.5; // px per frame, keep slow
    const FPS_CAP = 30;
    const frameInterval = 1000 / FPS_CAP;
    let lastFrame = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5); // cap DPR like before
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
      }));
    }

    function step(timestamp) {
      rafId = requestAnimationFrame(step);
      if (!running) return;
      if (timestamp - lastFrame < frameInterval) return;
      lastFrame = timestamp;

      ctx.clearRect(0, 0, width, height);

      // update + draw dots
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(180, 200, 255, 0.8)";
        ctx.fill();
      }

      // draw links between nearby particles — O(n^2) but n is tiny (70)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i],
            b = particles[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(140, 170, 255, ${0.25 * (1 - dist / LINK_DISTANCE)})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }
    }

    resize();
    initParticles();
    rafId = requestAnimationFrame(step);

    const handleResize = () => {
      resize();
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    const handleVisibility = () => {
      running = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const observer = new IntersectionObserver(
      ([entry]) => {
        running =
          entry.isIntersecting && document.visibilityState === "visible";
      },
      { threshold: 0 },
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="constellation-bg">
      <div className="constellation-bg__gradient" />
      <canvas ref={canvasRef} className="constellation-bg__canvas" />
      <div className="constellation-bg__content">{children}</div>
    </div>
  );
}

export default ConstellationBackground;
