"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Play } from "lucide-react"

// Project data organized by category based on your list
const categoryData = {
  'music-videos': {
    title: "Music Videos",
    description: "Music video color grading and visual effects",
    projects: [
      {
        title: "Abeke",
        year: "2024",
        description: "A visually striking music video with vibrant color grading",
        thumbnail: "/assets/images/Abeke.jpg",
        slug: "abeke"
      },
      {
        title: "Blood for Blood",
        year: "2024",
        description: "Dramatic visuals with bold color treatment",
        thumbnail: "/assets/images/Bloodforblood.jpg",
        slug: "blood-for-blood"
      },
      {
        title: "Ceiling",
        year: "2024",
        description: "Creative color grading enhancing the atmospheric visuals",
        thumbnail: "/assets/images/CEILING.jpg",
        slug: "ceiling"
      },
      {
        title: "Inciting",
        year: "2024",
        description: "Innovative color work creating visual impact",
        thumbnail: "/assets/images/inciting.jpg",
        slug: "inciting"
      },
      {
        title: "Timeless",
        year: "2024",
        description: "A timeless piece with meticulous color grading",
        thumbnail: "/assets/images/Timeless.jpg",
        slug: "timeless"
      },
      {
        title: "Spacemen",
        year: "2024",
        description: "Cosmic themes enhanced through creative color treatment",
        thumbnail: "/assets/images/spacemen.jpg",
        slug: "spacemen"
      }
    ]
  },
  'films': {
    title: "Films",
    description: "Feature films and short films color grading",
    projects: [
      {
        title: "We Are All We Have",
        year: "2024",
        description: "Cinematic color grading for emotional storytelling",
        thumbnail: "/assets/images/we are all we have.jpg",
        slug: "we-are-all-we-have"
      },
      {
        title: "Salamatu's Rhapsody",
        year: "2024",
        description: "Rich color palette enhancing the film's narrative",
        thumbnail: "/assets/images/salamatu.jpg",
        slug: "salamatus-rhapsody"
      },
      {
        title: "God's Wife",
        year: "2024",
        description: "Sophisticated color treatment for dramatic effect",
        thumbnail: "/assets/images/Gods wife.jpg",
        slug: "gods-wife"
      }
    ]
  },
  'commercials': {
    title: "Commercials",
    description: "Commercial and advertising color grading",
    projects: [
      {
        title: "Hollyland",
        year: "2024",
        description: "Premium commercial color grading with visual impact",
        thumbnail: "/assets/images/hollyland.jpg",
        slug: "holy-land"
      }
    ]
  },
  'social-media': {
    title: "Social Media",
    description: "Social media content color grading",
    projects: [
      {
        title: "Rotate",
        year: "2024",
        description: "Engaging social media content with polished color work",
        thumbnail: "/assets/images/rotate.jpg",
        slug: "rotate"
      }
    ]
  }
}

export default function CategoryPage({ params }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const category = params.category
  const categoryInfo = categoryData[category]

  if (!categoryInfo) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        {/* Gradient Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-turquoise/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-orange/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link 
              href="/work"
              className="inline-flex items-center text-turquoise hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Work
            </Link>
          </motion.div>

          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">
              {categoryInfo.title}
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              {categoryInfo.description}
            </p>
            <p className="text-turquoise mt-4">
              {categoryInfo.projects.length} Projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryInfo.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/work/${project.slug}`}>
                  <div className="group relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 group-hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </Link>
                <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                <p className="text-turquoise text-sm uppercase tracking-wider font-medium mb-2">
                  {project.year}
                </p>
                <p className="text-white/70 text-sm">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 