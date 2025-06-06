"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const videoRef = useRef(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error)
      })
    }
  }, [])

  const scrollToVideo = () => {
    const videoSection = document.getElementById('hero-video-section')
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
  }

  return (
    <div className="relative min-h-screen">
      {/* Hero Section - Changed to solid black background */}
      <section className="relative h-screen overflow-hidden bg-black">
        <motion.div
          className="absolute top-1/3 -left-20 w-40 h-40 rounded-full bg-orange/30 blur-3xl mix-blend-lighten"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-turquoise/30 blur-3xl mix-blend-lighten"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-center mb-6 relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative">
              Stephanie Balogun
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange"></span>
            </span>
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl uppercase tracking-widest mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Film Colorist
          </motion.h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/work"
              className="bg-orange hover:bg-orange-light text-white px-8 py-3 uppercase tracking-widest text-sm transition-colors duration-300 flex items-center"
            >
              View Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          {/* Watch Showreel Button */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-48"
          >
            <button
              onClick={scrollToVideo}
              className="w-16 h-16 rounded-full bg-turquoise/80 hover:bg-turquoise flex items-center justify-center transition-all duration-300 hover:scale-110 mx-auto"
            >
              <Play className="w-6 h-6 text-white ml-1" />
            </button>
          </motion.div>
        </div>

        {/* Removed Watch Showreel Button */}

        {/* Hero Video Section */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-r from-black to-gray-900">
          {!isVideoPlaying ? (
            <div className="relative w-full h-full">
              <Image
                src={'/assets/images/Bloodforblood.jpg'}
                alt="Showreel Thumbnail"
                width={1280}
                height={720}
                className="object-cover"
                priority
              />
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={() => setIsVideoPlaying(true)}
              >
                <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/huSSYFsZT6Q?si=4KylypuZADK6KUbs&autoplay=1"
                title="YouTube video player"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* Optional: Add a poster/thumbnail that shows before the video loads */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      </section>

      {/* Showreel Section */}
      {/* Reduce vertical padding here */}
      <section id="hero-video-section" className="pt-2 pb-12 md:pt-2 md:pb-16 px-6 md:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">
           Color is my language
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
            I craft visual narratives through color, enhancing the emotional impact of every frame. My work spans
            Films, music videos, and commercials, each with a unique color story.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image
                src="/assets/images/collage.jpg"
                alt="Work Collage"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.p
            className="text-center text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          </motion.p>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-beige-lighter to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl mb-4 md:mb-0">Selected Work</h2>
            <div className="h-px w-32 bg-orange hidden md:block"></div>
            <Link
              href="/work"
              className="text-orange hover:text-orange-light transition-colors duration-300 flex items-center text-sm uppercase tracking-widest"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/work/${project.slug}`} className="group block">
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                    
                    {/* Added Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                  <p className="text-turquoise text-sm uppercase tracking-wider font-medium">
                    {project.category}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Updated Design */}
      <section className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-turquoise/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-orange/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="font-serif text-3xl md:text-5xl mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-turquoise/50 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-turquoise/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-turquoise/20 flex items-center justify-center mb-6 group-hover:bg-turquoise/30 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-xl mb-4 text-white group-hover:text-turquoise transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm uppercase tracking-widest text-turquoise hover:text-white transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-turquoise rounded-full opacity-20"></div>
              <Image
                src="/assets/images/headshot.JPG"
                alt="Stephanie Balogun"
                width={500}
                height={500}
                className="rounded-lg relative z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-5xl mb-6">About Me</h2>
              <div className="h-1 w-16 bg-orange mb-6"></div>
              <p className="text-lg">
              Stephanie Balogun is a Nigerian-based filmmaker who specializes in cinematography and coloring. Scratch that, let me talk about me. I have always had a passion and an interest in visual art. It started with a love for acting and photography, and then it morphed into a love for the art of filmmaking- I no longer wanted to simply be in movies, I wanted to tell stories.
              </p>
            
              <div className="pt-6">
                <Link
                  href="/about"
                  className="inline-block bg-black text-white px-6 py-3 uppercase tracking-widest text-sm hover:bg-orange transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-12 bg-beige-lighter">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-serif text-3xl md:text-5xl mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Client Testimonials
          </motion.h2>

          <div className="relative">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-orange to-orange-light text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-serif text-3xl md:text-5xl mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            className="text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always interested in new projects and collaborations. If you'd like to discuss your project or have any
            questions, feel free to reach out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-orange px-8 py-3 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Updated projects with correct categories and image names
const projects = [
  {
    title: "Abeke",
    category: "Music Videos",
    slug: "abeke",
    thumbnail: "/assets/images/abeke.jpg",
  },
  {
    title: "CEILING",
    category: "Music Videos",
    slug: "ceiling",
    thumbnail: "/assets/images/ceiling1.jpg",
  },
  {
    title: "Hollyland",
    category: "Commercials",
    slug: "holy-land",
    thumbnail: "/assets/images/HollyLand1.jpg",
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
    title: "Blood for Blood",
    category: "Music Videos",
    slug: "blood-for-blood",
    thumbnail: "/assets/images/bloodforblood.jpg",
  },
]

const services = [
  {
    title: "Color Grading",
    description: "Professional color grading services for films, commercials, music videos, and other visual content.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "Color Consultation",
    description: "Pre-production color consultation to help plan your project's visual aesthetic and color palette.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Look Development",
    description: "Custom look development to create unique visual styles that enhance your storytelling.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote: "Thank you Stephanie! The new video color scheme is captivating, I like how the grade complements the atmosphere in every scene enhancing the visuals without overpowering the content. It's truly a feast for the eyes! Na you dey reign!!!!!!!",
    name: "Victor Josiah",
    avatar: "/assets/images/avatar-1.jpg",
  },
  {
    quote: "Omggg I just watched the videoo! I love ittt.\nIt's even better than I expected!\nI saw the part where you added the write up. It looks so good.\nThank you!",
    name: "Efue",
    avatar: "/assets/images/avatar-2.jpg",
  },
  {
    quote: "I've worked with Stephanie on a wide range of projects including films, music videos and short documentaries. Her dedication, efficiency and speed are qualities that I really admire and I find them very important for our collaboration. She gets the job done!",
    name: "Raymond Yusuff",
    avatar: "/assets/images/avatar-3.jpg",
  },
  {
    quote: "My Humble Colorist",
    name: "Godwin",
    avatar: "/assets/images/avatar-4.jpg",
  },
  {
    quote: "Baddest. Top professional. i had a very good work experience with her. she delivered as exactly when promised.",
    name: "Shimataver",
    avatar: "/assets/images/avatar-5.jpg",
  },
]

function TestimonialsCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <>
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
                <div className="flex items-center mb-6">
                  {/* Avatar and grey circle removed */}
                  <div>
                    <h3 className="font-medium text-xl">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-orange"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-orange" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </>
  )
}
