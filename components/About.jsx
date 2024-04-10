import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
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

const qualificationData = [
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
        qualification: "Web Developer",
        years: "2023-2024",
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
];

const skillData = [
  {
    title: "skils",
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
        imgPath: "/images/figma.png",
      },
      {
        imgPath: "/imag/about/VsCode.webp",
      },
      {
        imgPath: "/images/figma.svg",
      },
      {
        imgPath: "/images/VsCode.svg",
      },
    ],
  },
];

export default function About() {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  console.log(qualificationData);
  return (
    <section className="xl:h-[860px] pb-12 xl:py-12">
      <div className="container mx-auto mt-6 lg:mt-0 ">
        <h2 className="relative flex items-center justify-between gap-x-3 text-4xl font-bold w-max mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden relative xl:flex flex-1">
            <DevImg />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skils">Skils</TabsTrigger>
              </TabsList>
              <div className="">
                <TabsContent value="personal">personal info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
