import React from 'react';

function AvatarSilhouette() {
  return (
    <div className="relative mx-auto h-28 w-28 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 shadow-sm ring-1 ring-black/10">
      {/* Minimal abstract silhouette using mask */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <mask id="cut">
            <rect width="100" height="100" fill="white" />
            {/* head */}
            <circle cx="50" cy="38" r="16" fill="black" />
            {/* shoulders */}
            <path d="M20 88c8-16 24-22 30-22s22 6 30 22" fill="black" />
          </mask>
        </defs>
        {/* ink-like ring */}
        <circle cx="50" cy="50" r="46" fill="none" stroke="black" strokeOpacity="0.15" strokeWidth="2" />
        {/* Paper feel */}
        <rect width="100" height="100" fill="url(#g)" mask="url(#cut)" />
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#e6e6e6" />
            <stop offset="100%" stopColor="#d4d4d4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function ProfileCard() {
  return (
    <div className="relative mx-auto max-w-3xl px-6 text-center">
      <AvatarSilhouette />

      {/* Role title */}
      <h2 className="mt-8 font-['IBM_Plex_Sans',ui-sans-serif] text-2xl tracking-[0.06em] text-black">
        Full Stack Developer
      </h2>

      {/* Subheadline with Japanese-inspired separator */}
      <div className="mt-3 flex items-center justify-center gap-3 text-sm text-black/60">
        <span className="inline-block h-px w-10 bg-gradient-to-r from-transparent via-black/40 to-transparent" />
        <span className="uppercase tracking-[0.3em] text-[0.74rem]">Craft • Code • Calm</span>
        <span className="inline-block h-px w-10 bg-gradient-to-r from-transparent via-black/40 to-transparent" />
      </div>

      {/* Bio paragraph */}
      <p className="mx-auto mt-5 max-w-2xl text-balance font-['Inter',ui-sans-serif] text-[0.98rem] leading-7 text-black/70">
        Building clean, resilient interfaces and services with a focus on clarity, performance, and timeless aesthetics. Centered on JavaScript ecosystems with careful attention to details that feel effortless.
      </p>
    </div>
  );
}
