import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { navigationlinks } from "./components-data/myLinks-data";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="hidden xl:flex gap-x-8 items-center">
      {navigationlinks.map((navlink) => (
        <Link
          className="relative hover:text-primary transition-all"
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
  );
}
