"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, Eye, Clock, Calendar, Award } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  
  // Updated project data with your actual cover images
  const projects = [
    {
      title: "Abeke",
      category: "Music Videos",
      slug: "abeke",
      heroImage: "/assets/images/abeke.jpg",
      coverImages: ["/assets/images/abeke.jpg"], // Single image
      client: "Nollywood Productions",
      year: "2024",
      description: "A compelling Nigerian drama that explores tradition and modernity.",
      overview: "As the colorist for Abeke, I focused on enhancing the rich cultural elements while maintaining a contemporary aesthetic that bridges traditional and modern storytelling.",
      videoUrl: "https://www.youtube-nocookie.com/embed/bZQm-V8Do-g?si=SCHQ4jx8Pq1zGbsU",
      services: ["Color Grading", "Look Development", "Color Consultation"],
    },
    {
      title: "God's Wife",
      category: "Films",
      slug: "gods-wife",
      heroImage: "/assets/images/Godswife1.jpg",
      coverImages: [
        "/assets/images/Godswife1.jpg",
        "/assets/images/Godswife2.jpg",
        "/assets/images/Godswife3.jpg",
        "/assets/images/Godswife4.jpg",
        "/assets/images/Godswife5.jpg",
        "/assets/images/Godswife6.jpg",
        "/assets/images/Godswife7.jpg",
        "/assets/images/Godswife8.jpg",
        "/assets/images/Godswife9.jpg",
        "/assets/images/Godswife10.jpg"
      ],
      client: "Film Production House",
      year: "2024",
      description: "Sophisticated color treatment for dramatic effect.",
      overview: "Created a sophisticated color palette that enhances the dramatic narrative while maintaining visual consistency throughout the film.",
      videoUrl: "https://www.youtube.com/embed/your-gods-wife-video-id",
      services: ["Color Grading", "Look Development", "DI"],
    },
    {
      title: "Blood for Blood",
      category: "Music Videos",
      slug: "blood-for-blood",
      heroImage: "/assets/images/bloodforblood.jpg",
      coverImages: ["/assets/images/bloodforblood.jpg"], // Single image
      client: "Brand Client",
      year: "2024",
      description: "A powerful commercial with striking visuals and dramatic color treatment.",
      overview: "The color grading for Blood for Blood was designed to intensify the dramatic narrative while maintaining a polished commercial aesthetic.",
      videoUrl: "https://www.youtube.com/embed/huSSYFsZT6Q?si=4KylypuZADK6KUbs",
      services: ["Commercial Color", "Color Grading", "Look Development"],
    },
    {
      title: "CEILING",
      category: "Music Videos",
      slug: "ceiling",
      heroImage: "/assets/images/ceiling1.jpg",
      coverImages: ["/assets/images/ceiling1.jpg"], // Single image
      client: "Nigerian Filmmakers Collective",
      year: "2023",
      description: "A powerful narrative showcasing Nigerian storytelling at its finest.",
      overview: "The color palette for CEILING was carefully crafted to enhance the emotional depth of the story, using subtle gradients and controlled contrast to maintain the authenticity of the narrative.",
      videoUrl: "https://www.youtube.com/embed/7iZK8WiiyUw?si=hixMQoDHVl3DM1Vn",
      services: ["Color Grading", "Final Color", "DI"],
    },
    {
      title: "Hollyland",
      category: "Commercials",
      slug: "holy-land",
      heroImage: "/assets/images/HollyLand1.jpg",
      coverImages: ["/assets/images/HollyLand1.jpg"], // Single image
      client: "Music Artist",
      year: "2024",
      description: "A visually stunning music video blending spiritual elements.",
      overview: "Created an ethereal atmosphere through careful color treatment while maintaining the vibrancy of performance scenes.",
      videoUrl: "https://www.youtube.com/embed/_2WlxJifLL8?si=Sc1rUWmIpUFrUdMm",
      services: ["Music Video Color", "Look Development"],
    },
    {
      title: "Rotate",
      category: "Social Media",
      slug: "rotate",
      heroImage: "/assets/images/Rotate1.jpg",
      coverImages: [
        "/assets/images/Rotate1.jpg",
        "/assets/images/Rotate2.jpg",
        "/assets/images/Rotate3.jpg",
        "/assets/images/Rotate4.jpg",
        "/assets/images/Rotate5.jpg",
        "/assets/images/Rotate6.jpg",
        "/assets/images/Rotate7.jpg",
        "/assets/images/Rotate8.jpg",
        "/assets/images/Rotate9.jpg",
        "/assets/images/Rotate10.jpg"
      ],
      client: "Social Media Client",
      year: "2024",
      description: "Engaging social media content with polished color work.",
      overview: "Developed a vibrant color palette optimized for social media platforms while maintaining professional quality.",
      videoUrl: "https://www.youtube.com/embed/your-rotate-video-id",
      services: ["Social Media Color", "Color Grading"],
    },
    {
      title: "Salamatu's Rhapsody",
      category: "Films",
      slug: "salamatus-rhapsody",
      heroImage: "/assets/images/Salamatu1.jpg",
      coverImages: [
        "/assets/images/Salamatu1.jpg",
        "/assets/images/Salamatu2.jpg",
        "/assets/images/Salamatu3.jpg",
        "/assets/images/Salamatu4.jpg",
        "/assets/images/Salamatu5.jpg",
        "/assets/images/Salamatu6.jpg",
        "/assets/images/Salamatu7.jpg",
        "/assets/images/Salamatu8.jpg",
        "/assets/images/Salamatu9.jpg",
        "/assets/images/Salamatu10.jpg"
      ],
      client: "Film Production",
      year: "2024",
      description: "Rich color palette enhancing the film's narrative.",
      overview: "Created a rich, emotional color palette that supports the film's narrative arc and enhances the storytelling experience.",
      videoUrl: "https://www.youtube.com/embed/your-salamatu-video-id",
      services: ["Color Grading", "Look Development", "Final Color"],
    },
    {
      title: "Timeless",
      category: "Music Videos",
      slug: "timeless",
      heroImage: "/assets/images/Timeless1.jpg",
      coverImages: ["/assets/images/Timeless1.jpg"], // Single image
      client: "Music Artist",
      year: "2024",
      description: "A timeless piece showcasing artistic excellence.",
      overview: "Developed a unique color palette that emphasizes the timeless nature of the music and visuals.",
      videoUrl: "https://www.youtube.com/embed/yOg-wJpdaA4?si=rnBUA6DjJCPtRdgn",
      services: ["Music Video Color", "Color Grading"],
    },
    {
      title: "Spacemen",
      category: "Music Videos",
      slug: "spacemen",
      heroImage: "/assets/images/spacemen.jpg",
      coverImages: ["/assets/images/spacemen.jpg"], // Single image
      client: "Music Artist",
      year: "2024",
      description: "A visually captivating music video with cosmic themes.",
      overview: "Created a distinctive visual atmosphere through careful color grading to enhance the cosmic themes while maintaining visual consistency.",
      videoUrl: "https://www.youtube.com/embed/YXcgCGR4oCw?si=DEhvVBSwqg9Fgbrd",
      services: ["Music Video Color", "Color Grading"],
    },
    {
      title: "We Are All We Have",
      category: "Films",
      slug: "we-are-all-we-have",
      heroImage: "/assets/images/Weareallwehave1.jpg",
      coverImages: ["/assets/images/Weareallwehave1.jpg"], // Single image
      client: "Music Artist",
      year: "2024",
      description: "An emotional journey through visual storytelling.",
      overview: "Created a cohesive visual narrative through careful color treatment and mood enhancement.",
      videoUrl: "https://www.youtube.com/embed/psJ9hD42AeA?si=d_cjkYYAKI3XmN1z",
      services: ["Film Color", "Look Development"],
    },
    {
      title: "Inciting",
      category: "Music Videos",
      slug: "inciting",
      heroImage: "/assets/images/Inciting1.jpg",
      coverImages: ["/assets/images/Inciting1.jpg"], // Single image
      client: "Brand Name",
      year: "2024",
      description: "A dynamic commercial that pushes creative boundaries.",
      overview: "The color grade for Inciting was designed to create a bold, memorable look that aligns with the brand's identity while maintaining a premium feel.",
      videoUrl: "https://www.youtube.com/embed/-aKed-YfpYA?si=F4F0csoO8S3ykLGY",
      services: ["Music Video Color", "Brand Color Consistency"],
    },
  ]

  const project = projects.find((p) => p.slug === params.slug)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  if (!project) return null

  const handleBackClick = () => {
    router.back()
  }

  const handlePlayClick = () => {
    if (project.slug === 'rotate') {
      // For Rotate project, open Instagram link in new tab
      window.open('https://www.instagram.com/reel/DHLlZl8g3Is/?igsh=NnQ4Z2IyczhnZHlx', '_blank')
    } else {
      // For other projects, play video normally
      setIsVideoPlaying(true)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Full-screen background image or video */}
        <div className="absolute inset-0">
          {!isVideoPlaying ? (
            <>
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </>
          ) : (
            <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
              {/* Close/Exit Video Button */}
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Video Container */}
              <div className="w-full max-w-6xl mx-4" style={{ aspectRatio: '16/9' }}>
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative h-full">
          <div className="absolute top-6 left-6" style={{ zIndex: 9999 }}>
            <a
              href="/work"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors duration-300 bg-black/50 hover:bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm"
              style={{ 
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Work
            </a>
          </div>

          {!isVideoPlaying && (
            <>
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayClick}
                  className="w-20 h-20 rounded-full bg-turquoise/80 flex items-center justify-center hover:bg-turquoise transition-colors duration-300"
                >
                  <Play className="h-8 w-8 text-white ml-1" />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-7xl mx-auto"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-turquoise/20 rounded-full text-sm">
                      {project.category}
                    </span>
                    <span className="text-white/50">•</span>
                    <span className="text-white/70">{project.year}</span>
                  </div>
                  <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">{project.title}</h1>
                  <p className="text-xl text-white/70 max-w-2xl">{project.description}</p>
                </motion.div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Cover Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {project.coverImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="aspect-video relative rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Cover ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
              </motion.div>
            ))}
          </div>

          {/* Stills Section - Replacing Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-24"
          >
            <h2 className="font-serif text-3xl mb-8 text-center">Stills</h2>
            
            {/* Stills Grid - Dynamic based on project */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(() => {
                // Define stills for each project
                const stillsMap: Record<string, string[]> = {
                  'abeke': Array.from({length: 7}, (_, i) => `/assets/images/Abekestill${i + 1}.jpg`),
                  'blood-for-blood': Array.from({length: 7}, (_, i) => `/assets/images/Bloodstill${i + 1}.jpg`),
                  'ceiling': Array.from({length: 6}, (_, i) => `/assets/images/Ceilingstill${i + 1}.jpg`),
                  'holy-land': Array.from({length: 10}, (_, i) => `/assets/images/Hollylandstill${i + 1}.jpg`),
                  'inciting': Array.from({length: 8}, (_, i) => `/assets/images/Incitingstill${i + 1}.jpg`),
                  'spacemen': Array.from({length: 7}, (_, i) => `/assets/images/Spacestill${i + 1}.jpg`),
                  'we-are-all-we-have': Array.from({length: 7}, (_, i) => `/assets/images/Westill${i + 1}.jpg`),
                  // For projects without specific stills, use cover images or placeholders
                  'gods-wife': project.coverImages,
                  'salamatus-rhapsody': project.coverImages,
                  'timeless': [project.heroImage],
                  'rotate': project.coverImages
                };

                const stills = stillsMap[project.slug] || [project.heroImage];

                return stills.map((stillImage: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="aspect-video relative rounded-lg overflow-hidden"
                  >
                    <Image
                      src={stillImage}
                      alt={`${project.title} - Still ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                ));
              })()}
            </div>
          </motion.div>

          {/* Project Info - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            <div>
              <h3 className="text-lg mb-2">Client</h3>
              <p className="text-white/70 mb-6">{project.client}</p>
              
              <h3 className="text-lg mb-2">Year</h3>
              <p className="text-white/70">{project.year}</p>
            </div>
            <div>
              <h3 className="text-lg mb-2">Services</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/70"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Sample project stats
const projectStats = [
  {
    icon: <Eye className="h-6 w-6 text-turquoise" />,
    label: "Views",
    value: "1,234,567",
  },
  {
    icon: <Clock className="h-6 w-6 text-turquoise" />,
    label: "Duration",
    value: "2:34:56",
  },
  {
    icon: <Calendar className="h-6 w-6 text-turquoise" />,
    label: "Date",
    value: "June 15, 2023",
  },
  {
    icon: <Award className="h-6 w-6 text-turquoise" />,
    label: "Awards",
    value: "Best Music Video",
  },
]

