import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { url: "/", name: "Home" },
  { url: "/projects", name: "My Projects" },
  { url: "/contact", name: "Contact" },
];

export default function NavBar({ containerStyles, linkStyles, underlineStyles}) {
  const pathname = usePathname();
  return (
    <div className={`${containerStyles}`}>
      {links.map((link) => (
        <Link  
          className={`${linkStyles}`}
          key={link.url}
          href={link.url}
        >
          {link.url === pathname && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
    </div>
  );
}
