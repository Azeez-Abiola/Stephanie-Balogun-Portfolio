"use client"

// Define the categories array with correct item groupings and counts
const categories = [
  {
    name: "Music Videos",
    description: "Music video color grading and visual effects",
    slug: "music-videos",
    items: [
      { title: "Abeke", slug: "abeke" },
      { title: "Blood for Blood", slug: "blood-for-blood" },
      { title: "Ceiling", slug: "ceiling" },
      { title: "Inciting", slug: "inciting" },
      { title: "Timeless", slug: "timeless" },
      { title: "Spacemen", slug: "spacemen" }
    ]
  },
  {
    name: "Films",
    description: "Feature films and short films color grading",
    slug: "films",
    items: [
      { title: "We Are All We Have", slug: "we-are-all-we-have" },
      { title: "Salamatu's Rhapsody", slug: "salamatus-rhapsody" },
      { title: "God's Wife", slug: "gods-wife" }
    ]
  },
  {
    name: "Commercials",
    description: "Commercial and advertising color grading",
    slug: "commercials",
    items: [
      { title: "Hollyland", slug: "holy-land" }
    ]
  },
  {
    name: "Social Media",
    description: "Social media content color grading",
    slug: "social-media",
    items: [
      { title: "Rotate", slug: "rotate" }
    ]
  }
]

export default function CategorySpecificPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl mb-12">Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-turquoise/50 transition-all duration-500"
            >
              <h2 className="font-serif text-2xl mb-4">
                {category.name} 
                <span className="ml-2 text-sm text-gray-400">({category.items.length})</span>
              </h2>
              <p className="text-gray-400 mb-6">{category.description}</p>
              
              <div className="mt-4">
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Projects:</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.slug}>
                      <a 
                        href={`/work/${item.slug}`}
                        className="text-turquoise hover:text-white transition-colors duration-300"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href={`/category/${category.slug}`}
                className="inline-block mt-6 text-orange hover:text-white transition-colors duration-300"
              >
                View All {category.name} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}