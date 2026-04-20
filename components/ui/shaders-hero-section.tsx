"use client";

import { PulsingBorder, MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setIsActive] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onEnter = () => setIsActive(true);
    const onLeave = () => setIsActive(false);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen w-full relative overflow-hidden">
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#0f0f1a", "#a81d22", "#f4ecd8", "#1a325a", "#d4902a"]}
        speed={0.3}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60"
        colors={["#0f0f1a", "#f4ecd8", "#a81d22", "#0f0f1a"]}
        speed={0.2}
      />

      {children}
    </div>
  );
}

export function PulsingCircle() {
  return (
    <div className="absolute bottom-8 right-8 z-30">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <PulsingBorder
          colors={["#a81d22", "#d4902a", "#6aa3d4", "#7ab36a", "#f4ecd8"]}
          colorBack="#00000000"
          speed={1.5}
          roundness={1}
          thickness={0.1}
          softness={0.2}
          intensity={5}
          spots={4}
          spotSize={0.1}
          pulse={0.1}
          smoke={0.5}
          smokeSize={4}
          scale={0.65}
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transform: "scale(1.6)" }}
        >
          <defs>
            <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text className="text-[7px] fill-white/80 font-instrument italic">
            <textPath href="#circle" startOffset="0%">
              CS155 · NP-Concepts · Interactive · CS155 · NP-Concepts · Interactive ·
            </textPath>
          </text>
        </motion.svg>
      </div>
    </div>
  );
}

export function HeroContent() {
  return (
    <main className="absolute bottom-10 left-8 z-20 max-w-xl">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{ filter: "url(#glass-effect)" }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10 font-mono tracking-widest uppercase">
            CS155 · Spring 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl md:leading-[1.05] tracking-tight font-light text-white mb-5">
          <span className="font-medium italic font-instrument text-vermillion">NP</span>
          <span className="text-white">-Concepts</span>
          <br />
          <span className="font-light tracking-tight text-white font-instrument italic">Visualizer</span>
        </h1>

        <p className="text-sm font-light text-white/80 mb-6 leading-relaxed max-w-md">
          Step through classic graph algorithms — approximate vertex cover and 2-coloring —
          with annotated pseudocode, arbitrary-choice exploration, and proven approximation bounds.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <Link
            href="/vertex-cover"
            className="px-7 py-3 rounded-full bg-vermillion text-white font-medium text-xs uppercase tracking-widest transition-all duration-200 hover:bg-vermillion/90 cursor-pointer font-mono"
          >
            Approx · Vertex Cover
          </Link>
          <Link
            href="/two-coloring"
            className="px-7 py-3 rounded-full bg-transparent border border-white/40 text-white font-medium text-xs uppercase tracking-widest transition-all duration-200 hover:bg-white/10 hover:border-white/60 cursor-pointer font-mono"
          >
            2-Coloring · BFS
          </Link>
        </div>
      </div>
    </main>
  );
}

export function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 border-2 border-white/80 flex items-center justify-center font-instrument italic text-white text-lg">
          C
        </div>
        <span className="font-instrument italic text-white text-xl tracking-tight hidden md:inline">
          Compendium
        </span>
      </div>

      <nav className="flex items-center space-x-1">
        <Link
          href="/vertex-cover"
          className="text-white/80 hover:text-white text-[10px] font-mono uppercase tracking-widest px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Vertex Cover
        </Link>
        <Link
          href="/two-coloring"
          className="text-white/80 hover:text-white text-[10px] font-mono uppercase tracking-widest px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          2-Coloring
        </Link>
      </nav>

      <div className="font-mono text-[10px] uppercase tracking-widest text-white/70">
        Vol. I · §35
      </div>
    </header>
  );
}
