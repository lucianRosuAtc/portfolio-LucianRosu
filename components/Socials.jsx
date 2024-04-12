import { social } from "./components-data/myLinks-data";

export default function Socials() {
  return (
    <div className="flex gap-x-7 mx-auto xl:mx-0">
      {social.map((item, index) => (
        <a
          href={item.url}
          key={index}
          target="_blank"
          className="text-foreground text-3xl hover:text-primary transition-all"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
