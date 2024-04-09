"use client";
import CountUp from "react-countup";
import { BriefcaseBusiness } from "lucide-react";

const endCountNum = 15;
const endCountText = "Projects Completed";
// const badgeText = "Months Of Experience";
const badgeText = "Months Of Experience";

export default function Badge() {
  return (
    <div className="badge ">
      <div className="text-3xl text-primary">
        <BriefcaseBusiness />
      </div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4} />
           {/* {endCountText} */}
        </div>
        <div className="max-w-[80px] text-sm leading-none font-medium text-black">{badgeText}</div>
      </div>
    </div>
  );
}
