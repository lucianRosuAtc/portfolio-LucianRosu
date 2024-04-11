import Image from "next/image";
export default function DevImg() {
  return (
    <div className="w-[520px]">
      <div className="border-[10px] border-orange-300 bg-orange-300 dark:bg-orange-100 dark:border-orange-100 rounded-full">
        <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden border-4 border-primary">
          <Image
            src="/img/LucianRosuPortfolioNoBg.png"
            width={500}
            height={500}
            alt="Lucian Rosu"
            priority
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
