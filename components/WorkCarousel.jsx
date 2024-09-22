"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardDescription } from "./ui/card";
import { RiGithubFill } from "react-icons/ri";
import { Globe } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { projectData } from "./components-data/work-data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function WorkCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative my-4 lg:my-12 container mx-auto">
      <div className="flex flex-col mx-auto">
        <div className="flex flex-col justify-center items-center xl:items-start mb-20 max-w-md text-center mx-auto xl:mx-0 xl:text-left">
          <h2 className="my-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Here are some of my most recent projects. I'm always looking for new
            challenges and opportunities to learn new technologies.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        <div>
          <Slider {...settings} className="mx-auto">
            {projectData.map((project, index) => (
              <div key={index} className="mx-auto">
                <Card className="group relative mx-2 md:mx-4 shadow-xl dark:bg-[#0C0A09] dark:shadow-secondary dark:shadow-lg max-w-[400px] mb-12 p-1">
                  <Badge className="absolute top-6 left-3 md:left-5 mb-2 uppercase text-sm font-medium shadow-lg dark:shadow-lg dark:shadow-secondary">
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
                      href={project.link}
                      target="_blank"
                      className="absolute top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-secondary w-[54px] h-[54px] rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 text-white hover:text-primary hover:border-2 hover:border-primary z-20"
                    >
                      <Globe />
                    </Link>

                    <Link
                      href={project.gitHub}
                      target="_blank"
                      className="absolute top-1/3 transform -translate-y-1/2 flex justify-center items-center bg-secondary w-[54px] h-[54px] rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 text-white hover:text-primary hover:border-2 hover:border-primary z-10"
                    >
                      <RiGithubFill size={34} />
                    </Link>
                  </div>
                  <h4 className="pl-4 py-5">{project.name}</h4>
                  <CardDescription className="text-muted-foreground text-sm md:text-base xl:text-lg mb-2 font-light line-clamp-2 px-5 pb-12">
                    {project.description}
                  </CardDescription>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
