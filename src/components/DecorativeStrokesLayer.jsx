import React from 'react';

// Subtle horizontal dividers inspired by Japanese calligraphy strokes
export default function DecorativeStrokesLayer() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0"
      data-layer="decorative-strokes"
    >
      {/* Upper stroke */}
      <div className="absolute left-1/2 top-6 w-[72%] -translate-x-1/2 opacity-50">
        <svg viewBox="0 0 100 6" className="w-full h-4 text-black/50">
          <defs>
            <linearGradient id="ink" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.0" />
              <stop offset="20%" stopColor="currentColor" stopOpacity="0.35" />
              <stop offset="80%" stopColor="currentColor" stopOpacity="0.35" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M2,3 C10,4 20,2 32,3 C44,4 56,2 68,3 C80,4 90,2 98,3"
            fill="none"
            stroke="url(#ink)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Lower stroke */}
      <div className="absolute bottom-8 left-1/2 w-[68%] -translate-x-1/2 opacity-40">
        <svg viewBox="0 0 100 6" className="w-full h-4 text-black/60">
          <path
            d="M2,3 C15,2 28,4 40,3 C52,2 64,4 78,3 C88,2 94,3 98,3"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtle enso mark (for parallax) */}
      <div className="absolute right-[8%] top-20 h-24 w-24 opacity-30" data-parallax="symbol">
        <svg viewBox="0 0 100 100" className="h-full w-full text-black/70">
          <path
            d="M50 8a42 42 0 1 1-21 79"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.3"
          />
        </svg>
      </div>
    </div>
  );
}
