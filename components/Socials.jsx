import { social } from "./myLinks-data";

export default function Socials() {
  return (
    <div className="flex gap-x-6 mx-auto xl:mx-0">
      {social.map((item, index) => (
        <a
          href={item.url}
          key={index}
          target="_blank"
          className="text-foreground text-2xl hover:text-primary transition-all"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
