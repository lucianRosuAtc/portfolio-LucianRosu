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

import { projectlinks } from "./myLinks-data";
import { social } from "./myLinks-data";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="dark:bg-lightDark">
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center justify-between gap-y-10 sm:gap-y-14 md:gap-y-20 lg:gap-y-24">
            <SheetClose asChild>
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
            </SheetClose>
            <div className="flex flex-col items-center gap-y-6">
              {projectlinks.map((link) => (
                <SheetClose asChild key={link.url}>
                  <Link
                    href={link.url}
                    className="relative hover:text-primary transition-all"
                  >
                    {link.url === pathname && (
                      <motion.span
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        transition={{ type: "tween" }}
                        layoutId="underline"
                        className="absolute left-0 top-full h-[2px] bg-primary w-full mt-1"
                      />
                    )}
                    {link.name}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </div>
          <SheetClose asChild>
            <div className="flex gap-x-4">
              {social.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="text-2xl hover:text-primary"
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
