"use client";
import CountUp from "react-countup";

export default function Badge({
  containerStyles,
  icon,
  badgeText,
  endCountNum,
  endCountText,
}) {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-2xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={7} />
          {endCountText}
        </div>
        <div className="max-w-[80px] text-sm leading-none font-medium text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
}
