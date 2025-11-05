import React from 'react';
import BackgroundTextureLayer from './components/BackgroundTextureLayer';
import DecorativeStrokesLayer from './components/DecorativeStrokesLayer';
import ProfileCard from './components/ProfileCard';
import SkillBadges from './components/SkillBadges';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 antialiased">
      {/* Profile Section */}
      <section
        id="profile"
        className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 py-16"
      >
        {/* Background + decorative layers (exportable as separate layers) */}
        <BackgroundTextureLayer />
        <DecorativeStrokesLayer />

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl">
          <ProfileCard />
          <SkillBadges />

          {/* Subtle bottom divider to blend with mountain hero above */}
          <div className="mx-auto mt-10 flex w-4/5 items-center justify-center opacity-70">
            <span className="inline-block h-px w-full bg-gradient-to-r from-transparent via-black/30 to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}
