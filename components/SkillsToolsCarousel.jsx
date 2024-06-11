"use client";

import { skillsToolsData } from "./components-data/about-data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SkillsToolsCarousel() {
  const settingsRtl = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 1700,
    slidesToShow: 13,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    rtl: true,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsLtr = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 1700,
    slidesToShow: 13,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    rtl: false,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-12 max-w-[280px] md:max-w-md lg:max-w-2xl mx-auto">
      <div className="flex flex-col mx-auto slider-container">
        <div className="flex flex-col gap-y-3">
          <Slider
            {...settingsRtl}
            className="mx-auto max-w-[280px] md:max-w-md lg:max-w-2xl px-4 md:px-0"
          >
            {skillsToolsData.map((skillsTools, index) => (
              <div key={index} className="mx-auto">
                <div className="mx-2">
                  <div className="flex items-center">
                    <div className="text-primary">{skillsTools.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <Slider
            {...settingsLtr}
            className="mx-auto max-w-[280px] md:max-w-md lg:max-w-2xl px-4 md:px-0"
          >
            {skillsToolsData.map((skillsTools, index) => (
              <div key={index} className="mx-auto">
                <div className="mx-2">
                  <div className="flex items-center">
                    <div className="text-primary">{skillsTools.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
