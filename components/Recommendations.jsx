"use client";

import { Card, CardDescription } from "./ui/card";
import Image from "next/image";
import { recommendationsData } from "./components-data/recommendations-data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function RecommendationsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
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
    <div className="relative mb-4 max-w-7xl mx-auto">
      <div className="flex flex-col mx-auto">
        <div className="flex flex-col justify-center items-center xl:items-start mb-12 max-w-sm text-center mx-auto xl:mx-0 xl:text-left xl:h-60">
          <h2 className="mb-4">Recommendations</h2>
          <p className="subtitle mb-8">
            Here are some recomandations from the people I've work with.
          </p>
        </div>

        <div className="">
          <Slider {...settings} className="mx-auto max-w-7xl px-4 md:px-0">
            {recommendationsData.map((recommendation, index) => (
              <div key={index} className="mx-auto">
                <Card className="group relative mx-2 md:mx-4 shadow-xl dark:bg-[#0C0A09] dark:shadow-secondary dark:shadow-lg max-w-[400px] mb-12">
                  <div className="flex items-center">
                    <Image
                      src={recommendation.img}
                      alt="recommendation"
                      width={70}
                      height={70}
                      className="shadow-lg border p-1 dark:shadow-lg dark:shadow-secondary object-cover object-center rounded-full m-4"
                      priority="true"
                    />
                    <div className="flex flex-col">
                      <h4 className="px-4 pt-5">{recommendation.name}</h4>
                      <p className="px-4 pb-5 text-sm">{recommendation.job}</p>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground text-lg mb-2 font-light line-clamp-6 px-5 pb-16">
                    {recommendation.description}
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
