import Image from 'next/image';
export default function DevImg() {
  return (
    <div>
      <Image
        src="/img/Lucian.webp"
        width={500}
        height={500}
        alt="Lucian Rosu"
        className="rounded-full"
      />
    </div>
  )
}
