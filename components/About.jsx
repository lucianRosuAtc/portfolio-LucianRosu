import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  infoData,
  qualificationData,
  skillData,
  experienceData,
  toolsData
} from "./about-data";
import { GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 my-3 md:my-7 xl:my-12">
      <div className="flex flex-col px-4 md:px-12 mx-auto">
        <h2 className="relative flex items-center justify-between mb-8 xl:mb-16 mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden relative xl:flex flex-1 justify-center">
            <DevImg />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="bg-transparent grid md:grid-cols-3 max-w-xl gap-y-2 md:border dark:border-none mx-auto xl:mx-0">
                <TabsTrigger value="personal">My Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skils">Skils</TabsTrigger>
              </TabsList>
              {/*  My Info */}
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
                      {infoData.map((info, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{info.icon}</div>
                          <div className="">{info.text}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <p className="text-primary">Language Skills</p>
                      <div className="border-b border"></div>
                      <p className="">English, Spanish, Romanian</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qualifications">
                  <h3 className="mb-8 text-center xl:text-left">
                    My Awesome Journey
                  </h3>
                  {/*  experience & education  */}
                  <div className="grid md:grid-cols-2 gap-y-8">
                    {/*  experience  */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-xl text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">Experience</h4>
                      </div>

                      <div className="flex flex-col gap-y-8">
                        {experienceData.map((experience, index) => (
                          <div className="flex gap-x-8 group" key={index}>
                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                              <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] trasition-all duration-700"></div>
                            </div>

                            <div>
                              <div className="font-semibold text-xl leading-none mb-2">
                                {experience.company}
                              </div>
                              <div className="text-lg leading-none text-muted-foreground mb-4">
                                {experience.role}
                              </div>
                              <div className="text-base font-medium">
                                {experience.years}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* education  */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-xl text-primary">
                        <GraduationCap size={28} />
                        <h4 className="capitalize font-medium">Education</h4>
                      </div>

                      <div className="flex flex-col gap-y-8">
                        {qualificationData.map((qualification, index) => (
                          <div className="flex gap-x-8 group" key={index}>
                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                              <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] trasition-all duration-700"></div>
                            </div>

                            <div>
                              <div className="font-semibold text-xl leading-none mb-2">
                                {qualification.university}
                              </div>
                              <div className="text-lg leading-none text-muted-foreground mb-4">
                                {qualification.qualification}
                              </div>
                              <div className="text-base font-medium">
                                {qualification.years}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* skils */}
                <TabsContent value="skils">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-8">The Skills and Tools I Use Daily</h3>
                    <div className="mb-16">
                      <h4 className="mb-2">Skils</h4>
                      <div className="border border-b mb-4"></div>

                      <div>
                        {skillData.map((skill, index) => (
                          <div
                            className="w-1/2 text-center xl:text-left mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="font-medium">{skill.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2">Tools</h4>
                      <div className="border border-b mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {toolsData.map((tool, index) => (
                          <div key={index}>
                            <Image
                              src={tool.imgPath}
                              width={48}
                              height={48}
                              alt="The tools I use everyday"
                              priority
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
