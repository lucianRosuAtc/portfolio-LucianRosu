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
    <div className="bg-[#eheheh] dark:bg-secondary/80 pt-8 border-t-2 border-primary ">
      <div className="grid lg:grid-cols-3 justify-center items-center gap-y-8">
        <div className="mx-auto">
          <Logo />
        </div>

        {/* MARK: Navigation Links
         */}
        <div className="flex gap-x-8 items-center justify-center">
          {navigationlinks.map((navlink) => (
            <Link
              className={`link text-secondary/80 dark:text-white hover:text-primary pb-1 font-semibold ${
                pathname === navlink.url ? "active" : ""
              }`}
              key={navlink.url}
              href={navlink.url}
            >
              {navlink.name}
            </Link>
          ))}
        </div>

        {/* MARK: Social Media */}
        <div className="flex gap-x-8 items-center justify-center">
          {social.map((item, index) => (
            <a
              href={item.url}
              key={index}
              target="_blank"
              className="text-secondary/80 hover:text-primary dark:text-orange-100 dark:hover:text-primary text-3xl transition-all shadow-lg p-2 rounded-full bg-gray-50 dark:bg-black/20 dark:shadow-gray-600 dark:shadow-sm object-cover object-center"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center px-4 text-secondary/80 dark:text-white py-8 lg:pt-14">
        <p className="text-sm text-center font-medium">
          <span className="pr-1">&copy;</span>{" "}
          {`${year} Lucian Dev, All rights reserved.`}{" "}
        </p>
      </div>
    </div>
  );
}
