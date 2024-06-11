"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";

import { Card, CardDescription } from "@/components/ui/card";

import { Link2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { customerProjectData } from "@/components/components-data/work-data";

const customerUniqueCategories = [
  "All Projects",
  ...new Set(customerProjectData.map((item) => item.category)),
];

export default function CustomerProjects() {
  const [customerCategories, setCustomerCategories] = useState(
    customerUniqueCategories
  );
  const [customerCategory, setCustomerCategory] = useState("All Projects");

  const customerFilteredProjects = customerProjectData.filter((item) =>
    customerCategory === "All Projects"
      ? item
      : item.category === customerCategory
  );

  return (
    <section className="min-h-screen pt-12">
      <div className="px-8 mx-auto">
        <h2 className="mb-8 xl:mb-16 text-center mx-auto">Client Projects</h2>
        <Tabs defaultValue={customerCategory} className="mb-12 xl:mb-24">
          <TabsList className="grid md:grid-cols-4 w-full max-w-[640px] h-full mb-12 mx-auto md:border dark:border-none">
            {customerCategories.map((customerCategory, index) => {
              return (
                <TabsTrigger
                  key={index}
                  value={customerCategory}
                  className="capitalize w-36"
                  onClick={() => setCustomerCategory(customerCategory)}
                >
                  {customerCategory}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto md:gap-5">
            {customerFilteredProjects.map((customerProject, index) => (
              <div key={index}>
                <Card className="group relative mx-auto shadow-xl dark:bg-[#0C0A09] dark:shadow-secondary dark:shadow-lg max-w-[400px] md:max-w-[450px] mb-12">
                  <Badge className="absolute top-6 ml-4 md:ml-8 mb-2 uppercase text-sm font-medium shadow-lg dark:shadow-lg dark:shadow-secondary">
                  {customerProject.category}
                  </Badge>

                  <Image
                    src={customerProject.img}
                    alt="project"
                    width={300}
                    height={300}
                    className="shadow-lg dark:shadow-lg dark:shadow-secondary w-auto h-80 mx-auto object-cover object-center rounded-lg px-1 mt-4"
                    priority="true"
                  />

                  <div className="flex justify-center">
                    <Link
                      href={customerProject.link}
                      target="_blank"
                      className="absolute top-1/3 transform -translate-y-1/2 flex justify-center items-center bg-secondary w-[54px] h-[54px] rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 text-white hover:text-primary hover:border-2 hover:border-primary"
                    >
                      <Link2Icon />
                    </Link>
                  </div>

                  <h4 className="px-4 py-5">{customerProject.name}</h4>
                  <CardDescription className="text-muted-foreground text-lg mb-2 font-light line-clamp-2 px-5 pb-16">
                    {customerProject.description}
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
