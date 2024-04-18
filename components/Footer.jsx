"use client";
import Link from "next/link";
import Logo from "./Logo";
import { social } from "./components-data/myLinks-data";
import { navigationlinks } from "./components-data/myLinks-data";
import { usePathname } from "next/navigation";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="bg-secondary/90 dark:bg-secondary pt-8 border-t border-primary shadow-xl">
      <div className="grid lg:grid-cols-3 justify-center items-center gap-y-8">
        <div className="mx-auto">
          <Logo />
        </div>

        {/* MARK: Navigation Links
         */}
        <div className="flex gap-x-8 items-center justify-center">
          {navigationlinks.map((navlink) => (
            <Link
              className={`link text-white hover:text-primary pb-1 ${
                pathname === navlink.url ? "active" : ""
              }`}
              key={navlink.url}
              href={navlink.url}
            >
              {navlink.name}
            </Link>
          ))}
        </div>

        {/* MARK: Social Media
         */}
        <div className="flex gap-x-8 items-center justify-center">
          {social.map((item, index) => (
            <a
              href={item.url}
              key={index}
              target="_blank"
              className="text-primary hover:text-orange-100 dark:text-orange-100 dark:hover:text-primary text-3xl transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center px-4 text-white py-8 lg:pt-14">
        <p className="text-sm text-center">
          <span className="pr-1">&copy;</span>{" "}
          {`${year} Lucian Dev, All rights reserved.`}{" "}
        </p>
      </div>
    </div>
  );
}
