import { User2, MailIcon, HomeIcon, PhoneCall } from "lucide-react";

// MARK: INFO
export const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Lucian Rosu",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "07505709297",
  },
  {
    icon: <MailIcon size={20} />,
    text: "lucian.rosu.atc@gmail.com",
  },

  {
    icon: <HomeIcon size={20} />,
    text: "Exeter, UK",
  },
];

// MARK: EDUCATION
export const qualificationData = [
  {
    university: "University of Leads",
    qualification: "BSc in Computer Science",
    years: "2010-2014",
  },
  {
    university: "University of Scrimba ",
    qualification: "Diploma in Web Development",
    years: "2018-2019",
  },
  {
    university: "University of Intequal",
    qualification: "Diploma in Software Development",
    years: "2023-2024",
  },
];

// MARK: EXPERIENCE
export const experienceData = [
  {
    company: "Adopstar",
    role: "Web Developer",
    years: "2023-2024",
  },
  {
    company: "Frelancer",
    role: "Web Developert",
    years: "2022-2023",
  },
];

// MARK: SKILLS
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";
import { GiZeppelin } from "react-icons/gi";
import { CgFigma } from "react-icons/cg";

export const skillData = [
  {
    name: "HTML",
    icon: <TiHtml5 size={20} />,
  },
  {
    name: "CSS",
    icon: <IoLogoCss3 size={20} />,
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss size={20} />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript size={20} />,
  },
  {
    name: "React",
    icon: <FaReact size={20} />,
  },
  {
    name: "Nextjs",
    icon: <TbBrandNextjs size={20} />,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript size={20} />,
  },
  {
    name: "Vercel",
    icon: <IoLogoVercel size={20} />,
  },
];

// MARK: TOOLS DATA
import { TbBrandVscode } from "react-icons/tb";
import { SiPnpm } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";

export const toolsData = [
  {
    icon: <TbBrandVscode size={50} />,
  },
  {
    icon: <SiPnpm size={40} />,
  },
  {
    icon: <GiZeppelin size={50} />,
  },
  {
    icon: <CgFigma size={50} />,
  },
  {
    icon: <FaGithub size={50} />,
  },
];
