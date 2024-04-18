import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/img/logo&header/DevLuc.png"
        width={240}
        height={64}
        alt="Logo"
        className="object-cover w-36 md:w-60 h-10 md:h-16 rounded-md border-2 border-goldText cursor-pointer"
        priority
      />
    </Link>
  );
}
