import React from 'react';

// Soft atmospheric background: misty gradients + subtle paper grain
export default function BackgroundTextureLayer() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 select-none overflow-hidden"
      data-layer="background-texture"
    >
      {/* Misty radial gradients */}
      <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.04)_35%,transparent_70%)] blur-3xl" />
      <div className="absolute top-1/3 -left-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06)_0%,transparent_65%)] blur-2xl" />
      <div className="absolute bottom-0 -right-20 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] blur-2xl" />

      {/* Paper grain (tileable noise) */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\" viewBox=\"0 0 140 140\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.25\"/></svg>')",
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
