import Link from "next/link"
import { Button } from "/components/ui/Button"


// import 'swiper/css'
// import 'swiper/css/pagination'

// import {Pagination} from 'swiper/modules'

// import ProjectCard from '/components/ProjectCard'

const projectData =[
  {
    img:'/img/DevOpsLucian.png',
    category:'Nextjs & Sanity',
    name: 'Fun with Sanity',
    description: 'A simple blog website built with Nextjs and Sanity.io',
  },
  {
    img:'/img/DevOpsLucian.png',
    category:'Nextjs',
    name: 'The Movie Database API(TMDB API)',
    description: 'A simple blog website built with Nextjs and Sanity.io',
  },
]

export default function Work() {
  return (
    <div>
     <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veritatis optio iste, ratione minima soluta nisi quo dignissimos rerum repellendus. </p>
    </div>
  )
}
