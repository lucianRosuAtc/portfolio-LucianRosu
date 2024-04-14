'use client'
import {useState} from 'react'
import {Tabs} from '@/components/ui/tabs'
import { projectData } from "@/components/components-data/work-data"

const categories = ['all projects', ...new Set(projectData.map((project) => project.category))]

console.log(categories)

export default function Projects() {
  return (
    <section className="min-h-screen pt-12">
      projects
    </section>
  )
}
