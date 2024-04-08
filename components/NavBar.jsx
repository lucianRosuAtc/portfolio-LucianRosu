import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { url: "/", name: "Home" },
  { url: "/projects", name: "My Projects" },
  { url: "/contact", name: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="hidden xl:flex gap-x-8 items-center">
      {links.map((link) => (
        <Link
          className="relative hover:text-primary transition-all"
          key={link.url}
          href={link.url}
        >
          {link.url === pathname && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 5 }}
              transition={{ type: "tween" }}
              laypoutId="underline"
              className="absolute left-0 top-full h-[2px] bg-primary w-full duration-700"
            />
          )}
          {link.name}
        </Link>
      ))}
    </div>
  );
}
