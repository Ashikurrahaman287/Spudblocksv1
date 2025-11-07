import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundBlockchain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Block {
      x: number;
      y: number;
      size: number;
      opacity: number;
      pulsePhase: number;
    }

    const blocks: Block[] = [];
    const blockCount = 30;

    for (let i = 0; i < blockCount; i++) {
      blocks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 20,
        opacity: Math.random() * 0.3 + 0.1,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blocks.forEach((block, i) => {
        const pulse = Math.sin(time + block.pulsePhase) * 0.1 + 0.9;
        const opacity = block.opacity * pulse;

        // Draw block
        ctx.strokeStyle = `rgba(59, 158, 255, ${opacity})`;
        ctx.lineWidth = 2;
        ctx.strokeRect(
          block.x - block.size / 2,
          block.y - block.size / 2,
          block.size,
          block.size
        );

        // Draw connections to nearby blocks
        blocks.forEach((otherBlock, j) => {
          if (i < j) {
            const dx = otherBlock.x - block.x;
            const dy = otherBlock.y - block.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
              const lineOpacity = (1 - distance / 200) * 0.2;
              ctx.strokeStyle = `rgba(139, 92, 246, ${lineOpacity * pulse})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(block.x, block.y);
              ctx.lineTo(otherBlock.x, otherBlock.y);
              ctx.stroke();
            }
          }
        });
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.15 }}
    />
  );
}
