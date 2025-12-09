"use client";

import React, { useEffect, useState } from 'react';

const BackgroundEffects = () => {
    const [particles, setParticles] = useState<{ id: number; left: string; animationDelay: string; opacity: number; scale: number; duration: string; }[]>([]);

    useEffect(() => {
        const generatedParticles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 0.5 + 0.5,
            duration: `${15 + Math.random() * 10}s`
        }));
        setParticles(generatedParticles);
    }, []);

    if (particles.length === 0) return null;

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Base Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050510] to-black"></div>
            
            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>

            {/* Glowing Orbs - Ambient Light */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-float opacity-70"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[120px] animate-float-delayed opacity-70"></div>
            <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] animate-pulse-glow"></div>

            {/* Floating Particles */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute bottom-[-20px] w-1 h-1 bg-blue-300 rounded-full animate-float-up"
                    style={{
                        left: p.left,
                        animationDelay: p.animationDelay,
                        opacity: p.opacity,
                        transform: `scale(${p.scale})`,
                        animationDuration: p.duration
                    }}
                />
            ))}
            
            {/* Grid Overlay - Sci-Fi feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-20"></div>
        </div>
    );
};

export default BackgroundEffects;
