import React from 'react';

export default function Highlight({ children }: { children: React.ReactNode }) {
	return <span className="font-semibold text-shingle-fawn">{children}</span>;
}
