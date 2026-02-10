import { useState } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: 'Resort',
    location: 'Tenkasi, Old Cuttralam',
    service: 'UPVC Sliding Windows',
    category: 'RESIDENTIAL',
    categoryColor: 'bg-teal-600',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
    overlayText: 'Team Crete window replacement for 200+ units with soundproof UPVC sliding windows.',
  },
  {
    id: 2,
    title: 'Collector Office',
    location: 'Tirunelveli',
    service: 'Aluminium French Doors',
    category: 'RESIDENTIAL',
    categoryColor: 'bg-teal-600',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    overlayText: 'Custom-designed aluminium French doors and glass railings for a premium villa.',
  },
  {
    id: 3,
    title: 'Windows and Doors',
    location: 'Surandai',
    service: 'Glass Façade System',
    category: 'COMMERCIAL',
    categoryColor: 'bg-teal-700',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    overlayText: null,
  },
  {
    id: 4,
    title: 'Windows and Doors',
    location: 'Melagaram',
    service: 'UPVC Casement Windows',
    category: 'RESIDENTIAL',
    categoryColor: 'bg-teal-600',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    overlayText: null,
  },
  {
    id: 5,
    title: 'Windows and Doors',
    location: 'Tenkasi',
    service: 'Balcony Sliding Doors',
    category: 'RESIDENTIAL',
    categoryColor: 'bg-teal-600',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    overlayText: null,
  },
  {
    id: 6,
    title: 'Windows and Doors',
    location: 'Agara kattu',
    service: 'Structural Glazing',
    category: 'COMMERCIAL',
    categoryColor: 'bg-teal-700',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    overlayText: null,
  },
]

const filters = ['ALL', 'RESIDENTIAL', 'COMMERCIAL']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="bg-slate-50">
      {/* Hero Section - Recent Indian Projects */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Heading & Buttons */}
            <div>
              <h1
className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium uppercase mb-8"
              >
                <span className="block text-slate-900">RECENT</span>
                <span className="block text-teal-600">INDIAN PROJECTS</span>
              </h1>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
                >
                  GET FREE QUOTE
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-medium rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors"
                >
                  VIEW SERVICES
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Elegant interior with double doors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-lg font-medium text-sm uppercase transition-colors ${
                  activeFilter === filter
                    ? 'bg-teal-600 text-white'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white rounded-xl border border-teal-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span
                    className={`absolute top-3 right-3 px-3 py-1 ${project.categoryColor} text-white text-xs font-semibold uppercase rounded`}
                  >
                    {project.category}
                  </span>
                  {project.overlayText && (
                    <div className="absolute inset-0 bg-slate-900/60 flex items-end p-4">
                      <p className="text-white text-sm line-clamp-2">{project.overlayText}</p>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-medium text-slate-900 mb-2">{project.title}</h2>
                  <div className="flex items-center gap-1.5 text-teal-600 text-sm mb-4">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-block px-3 py-1.5 bg-teal-100 text-teal-700 text-sm font-medium rounded">
                      {project.service}
                    </span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-teal-600 text-sm font-medium hover:underline"
                    >
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '1500+', label: 'Projects Completed' },
              { value: '10+', label: 'Years Experience' },
              { value: '50+', label: 'Cities Served' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-amber-50/80 rounded-xl p-8 text-center"
              >
                <p className="text-3xl sm:text-4xl font-semibold text-teal-600 mb-2">{stat.value}</p>
                <p className="text-slate-800 font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 uppercase mb-6"
          >
            Ready to start your
            <br />
            project?
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how we can transform your space with premium windows and doors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors w-full sm:w-auto justify-center"
            >
              GET FREE QUOTE
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3.5 bg-white text-teal-600 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors w-full sm:w-auto justify-center"
            >
              VIEW SERVICES
            </Link>
          </div>
        </div>
        <div className="mt-16 border-b-2 border-teal-600" aria-hidden="true" />
      </section>
    </div>
  )
}

export default Projects
