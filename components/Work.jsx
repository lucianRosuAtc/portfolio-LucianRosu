"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardHeader, CardDescription } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const projectData = [
  {
    img: "/img/work/Fun with Sanity.webp",
    category: "full-stack",
    name: "Fun with Sanity",
    description:
      "A straightforward blog website constructed with Nextjs and Sanity.io.",
    link: "https://sanity-nextjs-lucian.vercel.app/",
    gitHub: "/",
  },
  {
    img: "/img/work/TMDB App.webp",
    category: "Nextjs",
    name: "The Movie Data Base",
    description:
      "Invoking The Movie Database API to maintain an application that stays updated with the latest films.",
    link: "https://tmdb-api-eta.vercel.app/",
    gitHub: "/",
  },
  {
    img: "/img/work/Media Player.webp",
    category: "JavaScript",
    name: "Music Player",
    description:
      "A simple music player constructed with HTML, CSS and Javascript",
    link: "https://music-player-13.netlify.app/",
    gitHub: "/",
  },
  {
    img: "/img/work/Password Generator.png",
    category: "JavaScript",
    name: "Password Generator",
    description:
      "A Password Generator able to generate paswords with a length between 10 and 16 caracteres constructed with HTML, CSS and Javascript",
    link: "https://password-generator13.netlify.app/",
    gitHub: "/",
  },
];

export default function Work() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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


    <div className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center xl:items-start mb-12 max-w-sm text-center mx-auto xl:mx-0 xl:text-left xl:h-80">
          <h2 className="mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, saepe?
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>


        <div className="">
          <Slider {...settings} className="">

            {projectData.map((project, index) => (
              <div key={index} >

                <Card className="mx-1 md:mx-4">
                <Badge className="absolute top-6 ml-4 md:ml-14 mb-2 uppercase text-sm font-medium">
  {project.category}
</Badge>
                <Image
                  src={project.img}
                  alt="project"
                  width={300}
                  height={300}
                  className=" shadow-2xl w-[300px] md:w-80 h-80 mx-auto object-cover object-center rounded-lg mt-4"
                  priority="true"
                  />
                <CardHeader className="">{project.name}</CardHeader>
                    <CardDescription className="subtitle px-5">{project.description}</CardDescription>
                  </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
