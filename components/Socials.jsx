"use client";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";

const social = [
  {
    url: "https://www.linkedin.com/feed/?trk=nav_back_to_linkedin",
    name: <RiLinkedinFill />,
  },
  {
    url: "https://github.com/lucianRosuAtc",
    name: <RiGithubFill />,
  },
  {
    url: "mailto:lucian.rosu.atc@gmail.com",
    name: <TfiEmail />,
  },
  {
    url: "https://twitter.com/LucianRosuATC",
    name: <FaXTwitter />,
  },
];


export default function Socials({ containerStyles, linkStyles}) {
  return (
  
    <div className={`${containerStyles}`}>
      {social.map((item, index) => (
        <a href={item.url} key={index} target="_blank"
         className={`${linkStyles}`}>
          {item.name}
        </a>
      ))}
    </div>
  );
}
