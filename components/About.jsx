import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { GraduationCap, Briefcase } from "lucide-react";
import {
  infoData,
  educationData,
  skillData,
  experienceData,
  toolsData,
} from "./components-data/about-data";
import SkillsToolsCarousel from "@/components/SkillsToolsCarousel";

export default function About() {
  return (
    <section className="pb-16 my-3 md:my-7 xl:my-12">
      <div className="flex flex-col px-4 md:px-12 mx-auto">
        <h2 className="relative flex items-center justify-between mb-8 xl:mb-16 mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="bg-transparent grid md:grid-cols-3 max-w-xl gap-y-2 md:border dark:border-none mx-auto">
                <TabsTrigger value="personal">My Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skils">Skils</TabsTrigger>
              </TabsList>
              {/*MARK:  My Info */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center max-w-2xl mx-auto">
                    <h3 className="mb-4">
                      Unmatch Service Quality for Over 15 Months.
                    </h3>
                    <p className="subtitle max-w-2xl mx-auto">
                      My expertise lies in creating innovative websites using
                      advanced technology, providing a dynamic and captivating
                      user experience.
                    </p>
                    <div className="grid gap-4 my-12 max-w-xl mx-auto">
                      {infoData.map((info, index) => (
                        <div
                          className="flex items-center gap-x-4 sm:mx-auto"
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
                  <h3 className="mb-8 text-center">My Awesome Journey</h3>

                  <div className="grid md:grid-cols-2 gap-y-8 max-w-2xl mx-auto">
                    {/*MARK:  experience
                     */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-xl text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">Experience</h4>
                      </div>

                      <div className="flex flex-col gap-y-8">
                        {experienceData.map((experience, index) => (
                          <div className="flex gap-x-8 group" key={index}>
                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                              <Briefcase className="w-[20px] h-[20px] rounded-full text-primary bg-gray-50 dark:bg-lightDark absolute -left-[9px] group-hover:translate-y-[84px] trasition-all duration-700" />
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

                    {/*MARK: education  */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-xl text-primary -ml-2">
                        <GraduationCap size={36} />
                        <h4 className="capitalize font-medium">Education</h4>
                      </div>

                      <div className="flex flex-col gap-y-8">
                        {educationData.map((education, index) => (
                          <div className="flex gap-x-8 group" key={index}>
                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                              <GraduationCap className="w-[26px] h-[26px] rounded-full text-primary bg-gray-50 dark:bg-lightDark absolute -left-[13px] group-hover:translate-y-[84px] trasition-all duration-700" />
                            </div>

                            <div>
                              <div className="font-semibold text-xl leading-none mb-2">
                                {education.university}
                              </div>
                              <div className="text-lg leading-none text-muted-foreground mb-4">
                                {education.qualification}
                              </div>
                              <div className="text-base font-medium">
                                {education.years}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/*MARK: skils */}
                <TabsContent value="skils">
                  <div className="text-center max-w-2xl mx-auto">
                    <h3 className="mb-8">The Skills and Tools I Use Daily</h3>
                    <div className="mb-16">
                      <h4 className="mb-2">Skils</h4>
                      <div className="border border-b mb-4"></div>

                      <div className="grid grid-cols-2 gap-y-3 xl:gap-y-6 text-xs sm:text-lg">
                        {skillData.map((skill, index) => (
                          <div
                            className="w-1/2 text-center mx-auto"
                            key={index}
                          >
                            <div className="flex items-center gap-x-3">
                              <div className="font-medium text-primary">
                                {skill.icon}
                              </div>
                              <div className="font-medium">{skill.name}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2">Tools</h4>
                      <div className="border border-b mb-4"></div>

                      <div className="grid grid-cols-2 gap-y-3 xl:gap-y-6 text-xs sm:text-lg">
                        {toolsData.map((tool, index) => (
                          <div
                            className="w-1/2  text-center mx-auto"
                            key={index}
                          >
                            <div className="flex items-center gap-x-3">
                              <div className="font-medium text-primary">
                                {tool.icon}
                              </div>
                              <div className="font-medium">{tool.name}</div>
                            </div>
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
      <SkillsToolsCarousel />
    </section>
  );
}
