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

  // console.log(qualificationData);
  return (
    <section className="xl:h-[860px] pb-12 my-3 md:my-7 xl:my-12">
      <div className="flex flex-col px-4 md:px-12 mx-auto">
        <h2 className="relative flex items-center justify-between mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden relative xl:flex flex-1">
            <DevImg />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="bg-transparent grid md:grid-cols-3 max-w-xl  md:border dark:border-none mx-auto xl:mx-0">
                <TabsTrigger value="personal">My Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skils">Skils</TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-4">
                      Unmatch Service Quality for Over 15 Months.
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      My expertise lies in creating innovative websites using
                      advanced technology, providing a dynamic and captivating
                      user experience.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div className="">{item.text}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <p className="text-primary">Language Skills</p>
                      <div className="border-b border"></div>
                      <p className="">
                        English, Spanish, French, Romanian, Italian
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qualifications">
                  <h3 className="mb-8 text-center xl:text-left">
                    My Awesome Journey
                  </h3>
                  <div className="">
                    <div className="">
                      <div className="flex gap-x-4 items-center text-xl text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, "experience").title}
                        </h4>
                      </div>

                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, "experience").data.map(
                          (item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group bg-orange-100" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2"></div>  
                                {/* /// //// */}
                                <div className="">
                                  <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className="">edu</div>
                  </div>
                </TabsContent>
                <TabsContent value="skils">skils</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
