import Image from 'next/image';
export default function DevImg() {
  return (
    <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden">
    <Image
      src="/img/LucianRosuPortfolio.webp"
      layout="fill"
      objectFit="cover"
      alt="Lucian Rosu"
    />
  </div>
  )
}
