"use client";
import Logo from "./Logo";
import { social } from "./components-data/myLinks-data";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { navigationlinks } from "./components-data/myLinks-data";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="bg-secondary/90 dark:bg-secondary pt-8 md:py-12 border-t border-primary shadow-xl">
      <div className="container mx-auto">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-y-8">
          <Logo />

          {/* MARK: navigation links 
          */}
          <div className="flex gap-x-8 items-center">
            {navigationlinks.map((navlink) => (
              <Link
                className="relative hover:text-primary transition-all text-orange-100"
                key={navlink.url}
                href={navlink.url}
              >
                {navlink.url === pathname && (
                  <motion.span
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "tween" }}
                    layoutId="underline"
                    className="absolute left-0 top-full h-[2px] bg-primary w-full"
                  />
                )}
                {navlink.name}
              </Link>
            ))}
          </div>

          {/* MARK: social media links 
           */}
          <div className="flex gap-x-8 mx-auto xl:mx-0">
            {social.map((item, index) => (
              <a
                href={item.url}
                key={index}
                target="_blank"
                className="text-primary hover:text-orange-100 dark:text-orange-100 dark:hover:text-primary text-3xl hover:text-primary transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center px-4 text-white py-8">
          <p className="text-sm md:text-sm">
            <span className="pr-1">&copy;</span>{" "}
            {`${year} Lucian Dev, All rights reserved.`}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
