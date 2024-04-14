'use client'
import {useState} from 'react'
import {Tabs} from '@/components/ui/tabs'
import { projectData } from "@/components/components-data/work-data"

const categories = ['all projects', ...new Set(projectData.map((project) => project.category))]


export default function Projects() {
  const [activeTab, setActiveTab] = useState(categories)
  console.log(categories);
  return (
    <section className="min-h-screen pt-12">
     <div className="mx-auto">
      <h2 className='mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
     </div>
    </section>
  )
}
