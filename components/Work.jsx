'use client'

import Link from "next/link"
import { Button } from "./ui/button" 


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const projectData =[
  {
    img:'/img/work/Fun with Sanity.webp',
    category:'Nextjs & Sanity',
    name: 'Fun with Sanity',
    description: 'A simple blog website built with Nextjs and Sanity.io',
    link:'https://sanity-nextjs-lucian.vercel.app/',
    gitHub:'/',
  },
  {
    img:'/img/work/TMDB App.webp',
    category:'Nextjs',
    name: 'The movie Data Base',
    description: 'Calling the movie Database api to have an update with the latest movies',
    link:'https://tmdb-api-eta.vercel.app/',
    gitHub:'/',
  },
  {
    img:'/img/work/Media Player.webp',
    category:'Javascript',
    name: 'Music Player',
    description: 'A simple music player built with HTML, CSS and Javascript',
    link:'https://music-player-13.netlify.app/',
    gitHub:'/',
  },
]

export default function Work() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <samplePrevArrow currentSlide={0} slideCount={0} />,
        nextArrow: <sampleNextArrow currentSlide={0} slideCount={0} />,
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
    }
  return (
    <div className="relative bg-orange-100">
        <Slider {...settings} className="z-10 m-auto flex items-center justify-center text-center max-h-[580px] max-w-5xl">
                        {projectData.map((project, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                                <img src={project.img} alt="project" className="w-64 h-64 object-cover rounded-lg" />
                        </div>
                        ))}
                 </Slider>
                </div>
            )
        }


    const samplePrevArrow = ({
        curentSlide,
        slideCount,
        ...props
    }) => (
        <button
        {...props}
        className="absolute top-1/2 left-0 z-10"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
     )

     const sampleNextArrow = ({
        curentSlide,
        slideCount,
        ...props    
    }) => ( 
        <button
        {...props}
        className="absolute top-1/2 right-0 z-10"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
                />
            </svg>
        </button>
    )