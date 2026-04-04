interface BusLineCardProps {
  number: string;
  route: string;
  description: React.ReactNode;
  detail: React.ReactNode;
}

export default function BusLineCard({ number, route, description, detail }: BusLineCardProps) {
  return (
    <div
      className="flex flex-col gap-1 border-l-2 border-whiskey-dark px-6 py-5"
      style={{ background: "rgba(255, 255, 255, 0.04)" }}
    >
      {/* Route number */}
      <h2 className="font-raleway text-[32px] font-light leading-none text-whiskey">
        {number}
      </h2>

      {/* Route name */}
      <p
        className="font-raleway text-xxs font-semibold uppercase tracking-[1.8px]"
        style={{ color: "rgba(242, 236, 226, 0.5)" }}
      >
        {route}
      </p>

      {/* Description */}
      <div className="mt-2">
        {typeof description === "string" ? (
          <p className="font-raleway text-sm leading-[1.8] text-dawn-pink/80">
            {description}
          </p>
        ) : (
          description
        )}
      </div>

      {/* Detail / schedule */}
      <div className="mt-0">{detail}</div>
    </div>
  );
}