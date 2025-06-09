"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, Eye, Clock, Calendar, Award } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Head from "next/head"

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
      heroImage: "/assets/images/Godswife6.jpg",
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
      heroImage: "/assets/images/Bloodforblood.jpg",
      coverImages: ["/assets/images/Bloodforblood.jpg"], // Single image
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
        "/assets/images/Rotate3.jpg",
        "/assets/images/Rotate4.jpg",
        "/assets/images/Rotate5.jpg",
        "/assets/images/Rotate6.jpg",
        "/assets/images/Rotate7.jpg",
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
    {
      title: "I Think of You",
      category: "Music Videos",
      slug: "i-think-of-you",
      heroImage: "/assets/images/thinkof1.jpg",
      coverImages: Array.from({length: 12}, (_, i) => `/assets/images/thinkof${i + 1}.jpg`),
      client: "Music Artist",
      year: "2024",
      description: "An emotional music video with thoughtful color treatment.",
      overview: "Created a warm and intimate color palette that enhances the emotional depth of the song while maintaining visual consistency throughout.",
      videoUrl: "https://www.youtube.com/embed/avVqO17wtZY?si=rcI4eZw8yMJ40h67",
      services: ["Music Video Color", "Look Development"],
    },
    {
      title: "Blue",
      category: "Social Media",
      slug: "blue",
      heroImage: "/assets/images/blue1.jpg",
      coverImages: Array.from({length: 14}, (_, i) => `/assets/images/blue${i + 1}.jpg`),
      client: "Social Media Client",
      year: "2024",
      description: "Vibrant social media content with striking blue color themes.",
      overview: "Developed a cohesive blue-themed color palette optimized for social media engagement while maintaining professional quality.",
      videoUrl: "https://www.instagram.com/reel/DGDdwtMM19e/?igsh=MnJ1Z2phazF2MjN3",
      services: ["Social Media Color", "Color Grading"],
    },
    {
      title: "Alone",
      category: "Films",
      slug: "alone",
      heroImage: "/assets/images/Alone1.jpg",
      coverImages: Array.from({length: 12}, (_, i) => `/assets/images/Alone${i + 1}.jpg`),
      client: "Independent Film",
      year: "2024",
      description: "A contemplative short film exploring solitude and introspection.",
      overview: "Created a moody and atmospheric color palette that enhances the film's themes of isolation and self-reflection.",
      videoUrl: "https://www.youtube.com/embed/e2MCURwN_Hk?si=DT8Pc9iiF3JNvhnq",
      services: ["Short Film Color", "Look Development", "Final Color"],
    },
  ]

  const project = projects.find((p) => p.slug === params.slug)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!project) return null

  // Get the stills for preloading
  const stillsMap: Record<string, string[]> = {
    'abeke': [
      "/assets/images/Abekestill1.jpg",
      "/assets/images/Abekestill2.jpg",
      "/assets/images/Abekestill3.jpg",
      "/assets/images/Abekecorrect.jpg",
      "/assets/images/Abekestill5.jpg",
      "/assets/images/Abekestill6.jpg",
      "/assets/images/Abekestill7.jpg"
    ],
    'blood-for-blood': Array.from({length: 7}, (_, i) => `/assets/images/Bloodstill${i + 1}.jpg`),
    'ceiling': Array.from({length: 6}, (_, i) => `/assets/images/Ceilingstill${i + 1}.jpg`),
    'holy-land': [
      "/assets/images/Hollylandstill3.jpg",
      "/assets/images/Hollylandstill5.jpg",
      "/assets/images/Hollylandstill7.jpg",
      "/assets/images/Hollylandstill8.jpg",
      "/assets/images/Hollylandstill10.jpg"
    ],
    'inciting': Array.from({length: 8}, (_, i) => `/assets/images/Incitingstill${i + 1}.jpg`),
    'spacemen': [
      "/assets/images/Spacestill1.jpg",
      "/assets/images/Spacestill2.jpg",
      "/assets/images/Spacestill3.jpg",
      "/assets/images/Spacestill4.jpg",
      "/assets/images/Spacestill5.jpg",
      "/assets/images/Spacestill7.jpg"
    ],
    'we-are-all-we-have': Array.from({length: 7}, (_, i) => `/assets/images/Westill${i + 1}.jpg`),
    'i-think-of-you': project.coverImages,
    'blue': project.coverImages,
    'alone': project.coverImages,
    'gods-wife': project.coverImages,
    'salamatus-rhapsody': project.coverImages,
    'timeless': [],
    'rotate': project.coverImages
  };
  
  const stills = stillsMap[project.slug] || [project.heroImage];

  const handleBackClick = () => {
    router.back()
  }

  const handlePlayClick = () => {
    if (project.slug === 'rotate') {
      // For Rotate project, open Instagram link in new tab
      window.open('https://www.instagram.com/reel/DHLlZl8g3Is/?igsh=NnQ4Z2IyczhnZHlx', '_blank')
    } else if (project.slug === 'blue') {
      // For Blue project, open Instagram link in new tab
      window.open('https://www.instagram.com/reel/DGDdwtMM19e/?igsh=MnJ1Z2phazF2MjN3', '_blank')
    } else {
      // For other projects, play video normally
      setIsVideoPlaying(true)
    }
  }

  return (
    <>
      {/* Preload critical images */}
      <Head>
        <link rel="preload" as="image" href={project.heroImage} />
        {stills.slice(0, 6).map((still, index) => (
          <link key={index} rel="preload" as="image" href={still} />
        ))}
      </Head>
      
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
                  loading="eager"
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
                    </div>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">{project.title}</h1>
                  </motion.div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Project Details */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Stills Section - Now the main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-24"
            >
              {project.slug !== 'timeless' && (
                <h2 className="font-serif text-3xl mb-8 text-center">Stills</h2>
              )}
              
              {/* Stills Grid - Using larger layout similar to covers */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {stills.map((stillImage: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="aspect-video relative rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(stillImage)}
                  >
                    <Image
                      src={stillImage}
                      alt={`${project.title} - Still ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      priority={index < 6}
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Modal/Lightbox */}
            {selectedImage && (
              <div 
                className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <div className="relative max-w-7xl max-h-full">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors duration-300 z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={selectedImage}
                      alt="Full size view"
                      width={1200}
                      height={800}
                      className="object-contain max-h-[90vh] w-auto h-auto rounded-lg"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
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

