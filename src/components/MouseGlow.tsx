'use client';

import { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-[var(--bg)]">
      {/* Dynamic Mouse Tracker */}
      <div 
        className="absolute left-0 top-0 w-[800px] h-[800px] rounded-full blur-[120px] bg-primary/10 dark:bg-primary/15 transition-all duration-300 ease-out will-change-transform"
        style={{
          transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
        }}
      />
      {/* Static Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[150px] mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#8B5CF6]/10 blur-[150px] mix-blend-screen" />
    </div>
  );
}
