import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

import { navigationlinks } from "./myLinks-data";
import { social } from "./myLinks-data";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="dark:bg-lightDark w-full">
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center justify-between gap-y-32">
            <SheetClose asChild>
              <Link href="/">
                <Image
                  src="/img/DevLuc.png"
                  width={240}
                  height={60}
                  alt="Logo"
                  className="object-cover w-44 md:w-60 h-auto md:h-16 rounded-md border-2 border-goldText cursor-pointer"
                  priority
                />
              </Link>
            </SheetClose>
            <div className="flex flex-col items-center text-2xl gap-y-6">
              {navigationlinks.map((navlink) => (
                <SheetClose asChild key={navlink.url}>
                  <Link
                    href={navlink.url}
                    className="relative hover:text-primary transition-all"
                  >
                    {navlink.url === pathname && (
                      <motion.span
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        transition={{ type: "tween" }}
                        layoutId="underline"
                        className="absolute left-0 top-full h-[2px] bg-primary w-full mt-1"
                      />
                    )}
                    {navlink.name}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </div>
          <SheetClose asChild>
            <div className="flex gap-x-8">
              {social.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="text-4xl hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
