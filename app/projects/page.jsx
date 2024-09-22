"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";

import { Card, CardDescription } from "@/components/ui/card";
import { RiGithubFill } from "react-icons/ri";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { projectData } from "@/components/components-data/work-data";
import { Globe } from "lucide-react";
// import CustomerProjects from "@/components/CustomerProjects";

const uniqueCategories = [
  "All Projects",
  ...new Set(projectData.map((item) => item.category)),
];

export default function Projects() {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("All Projects");

  const filteredProjects = projectData.filter((item) =>
    category === "All Projects" ? item : item.category === category
  );

  return (
    <section className="min-h-screen pt-12">
      {/* <CustomerProjects /> */}
      <div className="px-8 mx-auto">
        <h2 className="mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        <Tabs defaultValue={category} className="mb-12 xl:mb-24">
          <TabsList className="grid md:grid-cols-4 w-full max-w-[640px] h-full mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  key={index}
                  value={category}
                  className="capitalize w-36"
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto md:gap-5">
            {filteredProjects.map((project, index) => (
              <div key={index}>

                <Card className="group relative mx-auto shadow-xl dark:bg-[#0C0A09] dark:shadow-secondary dark:shadow-lg max-w-[400px] md:max-w-[450px] mb-12">
                  <Badge className="absolute top-6 ml-4 md:ml-8 mb-2 uppercase text-sm font-medium shadow-lg dark:shadow-lg dark:shadow-secondary">
                    {project.category}
                  </Badge>

                  <Image
                    src={project.img}
                    alt="project"
                    width={300}
                    height={300}
                    className="shadow-lg dark:shadow-lg dark:shadow-secondary w-full h-80 mx-auto object-cover object-center rounded-lg p-1 mt-4"
                    priority="true"
                  />

                  <div className="flex justify-center">
                    <Link
                      href={project.gitHub}
                       target="_blank"
                      className="absolute top-1/3 transform -translate-y-1/2 flex justify-center items-center bg-secondary w-[54px] h-[54px] rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 text-white hover:text-primary hover:border-2 hover:border-primary"
                    >
                      <RiGithubFill size={34} />
                    </Link>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="absolute top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-secondary w-[54px] h-[54px] rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 text-white hover:text-primary hover:border-2 hover:border-primary"
                    >
                      <Globe />
                    </Link>
                  </div>

                  <h4 className="px-4 py-5">{project.name}</h4>
                  <CardDescription className="text-muted-foreground text-sm md:text-base xl:text-lg mb-2 font-light line-clamp-2 px-5 pb-7 md:pb-12">
                    {project.description}
                  </CardDescription>
                </Card>
              </div>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

