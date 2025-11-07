import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import type { ButtonProps } from "@/components/ui/button";

interface LiquidButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function LiquidButton({ children, className = "", ...props }: LiquidButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Button
      {...props}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: '1000px' }}
    >
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-purple-400/40 to-transparent pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 2, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </Button>
  );
}
