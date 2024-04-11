import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar
} from "lucide-react";

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
    icon: <Calendar size={20} />,
    text: "Born on 17/06/1983",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "University of Leads",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Exeter, UK",
  },
];

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "University of Leads",
        qualification: "BSc in Computer Science",
        years: "2010-2014",
      },
      {
        university: "University of Scrimba",
        qualification: "Diploma in Web Development",
        years: "2018-2019",
      },
      {
        university: "University of Intequal",
        qualification: "Diploma in Software Development",
        years: "2023-2024",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Adopstar",
        role: "Web Developer",
        years: "2023-2024",
      },
      {
        company: "Scrimba",
        role: "Diploma in Web Development",
        years: "2018-2019",
      },
      {
        company: "Frelancer",
        role: "Diploma in Software Development",
        years: "2023-2024",
      },
    ],
  },
];

export const skillData = [
    {
      title: "skills",
      data: [
        {
          name: "HTML",
        },
        {
          name: "CSS",
        },
        {
          name: "Tailwindcss",
        },
        {
          name: "JavaScript",
        },
        {
          name: "React",
        },
        {
          name: "Nextjs",
        },
      ],
    },
    {
      title: "tools",
      data: [
        {
          imgPath: "/img/about/VsCode.webp",
        },
        {
          imgPath: "/img/about/VsCode.webp",
        },
        {
          imgPath: "/img/about/VsCode.webp",
        },
        {
          imgPath: "/img/about/VsCode.webp",
        },
      ],
    },
  ];