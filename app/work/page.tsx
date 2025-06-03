"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, ArrowRight } from "lucide-react"

export default function Work() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.category.toLowerCase() === activeCategory)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        {/* Gradient Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-turquoise/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-orange/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">Portfolio</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              A collection of my work in Films, commercials, music videos and social media.
            </p>
          </motion.div>

          {/* Featured Project - Updated with video functionality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-24"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              {!isVideoPlaying ? (
                <div className="relative w-full h-full group">
                  <Image
                    src="/assets/images/spacemen.jpg"
                    alt="Featured Project"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-duration-300" />
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/20 group-hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    aria-label="Play featured video"
                  >
                    <Play className="w-8 h-8 text-white" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <h2 className="font-serif text-3xl mb-2">Featured Work</h2>
                  </div>
                </div>
              ) : (
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    src="https://www.youtube.com/embed/YXcgCGR4oCw?si=KVCCwmK-dXOjCppC&autoplay=1"
                    title="Featured Project Video"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </motion.div>

          {/* Project Categories */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative group"
              >
                <Link 
                  href={`/work/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block w-full text-left p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-turquoise/50 transition-all duration-300"
                >
                  <h3 className="font-serif text-xl mb-2 text-turquoise">{category.name}</h3>
                  <p className="text-white/70 mb-4">{category.count} Projects</p>
                  <ArrowRight className="h-5 w-5 text-turquoise transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <Link href={`/work/${project.slug}`}>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                    
                    {/* Added Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-serif text-xl mb-2">{project.title}</h3>
                      <p className="text-turquoise text-sm uppercase tracking-wider font-medium">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Updated categories with correct counts
const categories = [
  { name: "Music Videos", count: 6 },
  { name: "Films", count: 3 },
  { name: "Commercials", count: 1 },
  { name: "Social Media", count: 1 },
]

// Updated project data with correct categorization and image paths
const allProjects = [
  // Music Videos (6)
  {
    title: "Abeke",
    category: "Music Videos",
    slug: "abeke",
    thumbnail: "/assets/images/abeke.jpg",
  },
  {
    title: "Blood for Blood",
    category: "Music Videos",
    slug: "blood-for-blood",
    thumbnail: "/assets/images/Bloodforblood.jpg",
  },
  {
    title: "Ceiling",
    category: "Music Videos",
    slug: "ceiling",
    thumbnail: "/assets/images/ceiling1.jpg",
  },
  {
    title: "Inciting",
    category: "Music Videos",
    slug: "inciting",
    thumbnail: "/assets/images/Inciting1.jpg",
  },
  {
    title: "Timeless",
    category: "Music Videos",
    slug: "timeless",
    thumbnail: "/assets/images/Timeless1.jpg",
  },
  {
    title: "Spacemen",
    category: "Music Videos",
    slug: "spacemen",
    thumbnail: "/assets/images/spacemen.jpg",
  },
  
  // Films (3)
  {
    title: "We Are All We Have",
    category: "Films",
    slug: "we-are-all-we-have",
    thumbnail: "/assets/images/Weareallwehave1.jpg",
  },
  {
    title: "Salamatu's Rhapsody",
    category: "Films",
    slug: "salamatus-rhapsody",
    thumbnail: "/assets/images/Salamatu1.jpg",
  },
  {
    title: "God's Wife",
    category: "Films",
    slug: "gods-wife",
    thumbnail: "/assets/images/Godswife1.jpg",
  },
  
  // Commercials (1)
  {
    title: "Hollyland",
    category: "Commercials",
    slug: "holy-land",
    thumbnail: "/assets/images/HollyLand1.jpg",
  },
  
  // Social Media (1)
  {
    title: "Rotate",
    category: "Social Media",
    slug: "rotate",
    thumbnail: "/assets/images/Rotate1.jpg",
  }
]

