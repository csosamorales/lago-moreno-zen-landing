import React from 'react';
import type { ContentPart } from '@/i18n/types';

interface BusLineCardProps {
  number: string;
  route: string;
  description: ContentPart[];
  detail: ContentPart[];
}

function renderParts(parts: ContentPart[]) {
  return parts.map((part, i) => {
    if (part.br) return <br key={i} />;
    if (part.bold) return <span key={i} className="font-semibold text-whiskey">{part.text}</span>;
    return <React.Fragment key={i}>{part.text}</React.Fragment>;
  });
}

export default function BusLineCard({ number, route, description, detail }: BusLineCardProps) {
  return (
    <div
      className="flex flex-col gap-1 border-l-2 border-whiskey-dark px-6 py-5"
      style={{ background: 'rgba(255, 255, 255, 0.04)' }}
    >
      <h2 className="font-raleway text-[32px] font-light leading-none text-whiskey">{number}</h2>
      <p className="font-raleway text-xxs font-semibold uppercase tracking-[1.8px]" style={{ color: 'rgba(242, 236, 226, 0.5)' }}>
        {route}
      </p>
      <div className="mt-2">
        <p className="font-raleway text-sm leading-[1.8] text-dawn-pink/80">{renderParts(description)}</p>
      </div>
      <div className="mt-0">
        <p className="font-raleway text-sm leading-[1.8] text-dawn-pink/80">{renderParts(detail)}</p>
      </div>
    </div>
  );
}
