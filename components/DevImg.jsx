

import Image from "next/image";
export default function DevImg() {
  return (
    <div className=" rounded-full">

    <div className="border-[10px] border-orange-300 bg-orange-300 dark:bg-orange-100 dark:border-orange-100 rounded-full">
      <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden border-4 border-primary dark:border-primary ">
        <Image
          src="/img/LucianRosuPortfolioNoBg.png"
          layout="fill"
          objectFit="cover"
          alt="Lucian Rosu"
          priority
          />
      </div>
          </div>
 
    </div>
  );
}




