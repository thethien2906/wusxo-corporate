"use client";

import React, { useRef, useEffect, useState } from "react";

interface MovingGridProps {
  className?: string;
  gridSize?: number;
  gridColor?: string;
  speed?: number;
}

export const MovingGrid: React.FC<MovingGridProps> = ({
  className = "",
  gridSize = 50,
  gridColor = "rgba(255, 255, 255, 0.08)",
  speed = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    let offset = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate parallax offset based on mouse position
      const parallaxX = (mousePos.x / window.innerWidth - 0.5) * 20;
      const parallaxY = (mousePos.y / window.innerHeight - 0.5) * 20;

      // Draw vertical lines
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      for (let x = -gridSize + (offset % gridSize) + parallaxX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = -gridSize + (offset % gridSize) + parallaxY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      offset += speed;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos, gridSize, gridColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ 
        opacity: 1,
        maskImage: 'radial-gradient(ellipse 100% 100% at 50% 30%, black 70%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 30%, black 70%, transparent 100%)'
      }}
    />
  );
};
