"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export function ImageComparison({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  className,
}: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const clientX =
        "touches" in event
          ? event.touches[0].clientX
          : (event as React.MouseEvent).clientX;

      const xPos = clientX - containerRect.left;
      const newSliderPosition = (xPos / containerRect.width) * 100;
      const clampedPosition = Math.max(0, Math.min(100, newSliderPosition));
      setSliderPosition(clampedPosition);
    },
    [isDragging]
  );

  const handlePointerDown = () => {
    setIsDragging(true);
    setHasInteracted(true);
  };

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    const step = 2;
    setHasInteracted(true);
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - step));
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + step));
    }
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handlePointerUp);
      window.addEventListener("touchmove", handleMove, { passive: false });
      window.addEventListener("touchend", handlePointerUp);
    } else {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handlePointerUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [isDragging, handleMove, handlePointerUp]);

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Before and after lawn transformation comparison. Use arrow keys or drag to reveal."
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext={`Showing ${Math.round(sliderPosition)}% before image`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={cn(
        "relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-2xl select-none group touch-none cursor-ew-resize",
        className
      )}
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium" aria-hidden="true">
          After
        </div>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover object-center"
        />
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium" aria-hidden="true">
          Before
        </div>
      </div>

      {/* Slider Line and Handle */}
      <div
        className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center will-change-transform"
        style={{
          left: `${sliderPosition}%`,
        }}
        aria-hidden="true"
      >
        {/* R2: Breathing pulse handle */}
        <motion.div
          className="absolute w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center translate-x-1/2 right-[1px] md:scale-100 scale-90"
          animate={
            !hasInteracted
              ? {
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(255,255,255,0.4)",
                    "0 0 0 12px rgba(255,255,255,0)",
                    "0 0 0 0 rgba(255,255,255,0.4)",
                  ],
                }
              : { scale: isDragging ? 1.15 : 1 }
          }
          transition={
            !hasInteracted
              ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
              : { type: "spring", stiffness: 400, damping: 25 }
          }
        >
          <MoveHorizontal className="text-stone-800 w-5 h-5" />
        </motion.div>
      </div>
    </div>
  );
}
