import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import projectsData from '../data/projects.json'

gsap.registerPlugin(ScrollTrigger)
const { projects } = projectsData

function FeaturedProjects() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const grid = gridRef.current
    if (!header || !grid) return

    gsap.fromTo(header, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' },
    })

    const cards = grid.querySelectorAll('article')
    gsap.fromTo(cards, { opacity: 0, y: 60 }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: grid, start: 'top 88%', toggleActions: 'play none none none' },
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider rounded mb-4">
            FEATURED PROJECTS
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4"
          >
            <span className="text-slate-900">OUR </span>
            <span className="text-teal-600 font-sans">WORK</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our portfolio of completed projects across India
          </p>
        </div>

        {/* Project Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-xl border border-teal-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-teal-200 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                {/* Category tag - pulse animation */}
                <span
                  className={`absolute top-3 right-3 px-3 py-1 ${project.categoryColor} text-white text-xs font-semibold uppercase rounded animate-pulse-subtle`}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-medium text-slate-900 mb-2">{project.title}</h3>
                <div className="flex items-center gap-1.5 text-teal-600 text-sm mb-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{project.location}</span>
                </div>
                <p className="text-teal-700 font-medium text-sm mb-4">{project.service}</p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-teal-500 bg-white text-teal-600 text-sm font-medium rounded-lg hover:bg-teal-50 hover:border-teal-600 transition-all duration-300"
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
