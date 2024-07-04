
"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import { navigationlinks } from "./components-data/myLinks-data";
import { social } from "./components-data/myLinks-data";
import Logo from "./Logo";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer"/>
      </SheetTrigger>
      <SheetContent className="dark:bg-lightDark w-full">
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center justify-between gap-y-12">
            {/* MARK: if I call Logo as a component the sheet won't close
             */}
            <SheetClose asChild>
              <Link href="/">
                <Image
                  src="/img/logo&header/DevLuc.png"
                  width={240}
                  height={64}
                  alt="Logo"
                  className="object-cover w-36 md:w-60 h-10 md:h-16 rounded-md border-2 border-goldText cursor-pointer mt-12"
                  priority
                />
              </Link>
            </SheetClose>

            <div className="flex flex-col items-center text-2xl gap-y-8">
              {navigationlinks.map((navlink) => (
                <SheetClose asChild key={navlink.url}>
                  <Link
                    className={`link hover:text-primary pb-1 ${
                      pathname === navlink.url ? "active" : ""
                    }`}
                    key={navlink.url}
                    href={navlink.url}
                  >
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
                  // className="text-4xl hover:text-primary text-foreground transition-all"
                   className="text-secondary/80 hover:text-primary dark:text-orange-100 dark:hover:text-primary text-3xl transition-all shadow-lg p-2 rounded-full bg-gray-50 dark:bg-black/20 dark:shadow-gray-600 dark:shadow-sm object-cover object-center"
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
