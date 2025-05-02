"use client"

// Define the categories array
const categories = [
  {
    name: "Films",
    description: "Feature films and short films color grading",
    slug: "films",
  },
  {
    name: "Music Videos",
    description: "Music video color grading and visual effects",
    slug: "music-videos",
  },
  {
    name: "Commercials",
    description: "Commercial and advertising color grading",
    slug: "commercials",
  },
]

export default function CategorySpecificPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl mb-12">Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-turquoise/50 transition-all duration-500"
            >
              <h2 className="font-serif text-2xl mb-4">{category.name}</h2>
              <p className="text-gray-400 mb-6">{category.description}</p>
              <a
                href={`/category/${category.slug}`}
                className="text-turquoise hover:text-white transition-colors duration-300"
              >
                View Projects →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}