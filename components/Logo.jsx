import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/img/DevLuc.png"
        width={240}
        height={60}
        alt="Logo"
        className="object-cover w-36 md:w-60 h-auto md:h-16 rounded-md border-2 border-goldText cursor-pointer"
        priority
      />
    </Link>
  );
}
