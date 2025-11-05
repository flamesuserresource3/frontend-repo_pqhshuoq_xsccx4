import React from 'react';

const skills = [
  { label: 'JavaScript', short: 'JS' },
  { label: 'TypeScript', short: 'TS' },
  { label: 'React', short: 'R' },
  { label: 'Node.js', short: 'N' },
  { label: 'Tailwind', short: 'TW' },
  { label: 'FastAPI', short: 'F' },
];

function Badge({ label, short }) {
  return (
    <div
      className="group relative flex items-center justify-center rounded-full border border-black/20 px-3 py-1.5 text-[0.8rem] text-black/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-sm transition-colors hover:border-black/40"
      title={label}
      aria-label={label}
    >
      <span className="font-medium tracking-wide">{short}</span>
      {/* Subtle ink dot accent */}
      <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-black/40 group-hover:bg-black/60" />
    </div>
  );
}

export default function SkillBadges() {
  return (
    <div className="mt-7 flex flex-wrap items-center justify-center gap-3" data-layer="skills">
      {skills.map((s) => (
        <Badge key={s.label} label={s.label} short={s.short} />
      ))}
    </div>
  );
}
