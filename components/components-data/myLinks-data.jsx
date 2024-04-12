import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";

// MARK: NAVIGATION LINKS
export const navigationlinks = [
    { url: "/", name: "Home" },
    { url: "/projects", name: "My Projects" },
    { url: "/contact", name: "Contact" },
];

// MARK: SOCIAL DATA
export const social = [
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
