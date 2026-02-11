import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import projectsData from '../data/projects.json'

const { projects, filters } = projectsData

function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [activeProject, setActiveProject] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeProject])

  const openProjectModal = (project) => {
    setActiveProject(project)
    setActiveImageIndex(0)
  }

  const closeProjectModal = () => {
    setActiveProject(null)
  }

  const handlePrevImage = () => {
    if (!activeProject?.gallery?.length) return
    setActiveImageIndex((prev) =>
      prev === 0 ? activeProject.gallery.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    if (!activeProject?.gallery?.length) return
    setActiveImageIndex((prev) =>
      prev === activeProject.gallery.length - 1 ? 0 : prev + 1
    )
  }

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="bg-slate-50">
      {/* Hero Section - Recent Indian Projects */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-center">
            {/* Left - Heading & Buttons */}
            <div>
              <h1
                className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium uppercase mb-5 sm:mb-6 md:mb-8"
              >
                <span className="block text-slate-900">RECENT</span>
                <span className="block text-teal-600">INDIAN PROJECTS</span>
              </h1>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center min-h-[44px] px-5 sm:px-6 py-3 text-sm sm:text-base font-medium rounded-lg bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 transition-colors touch-manipulation"
                >
                  GET FREE QUOTE
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center min-h-[44px] px-5 sm:px-6 py-3 text-sm sm:text-base font-medium rounded-lg bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 active:bg-teal-100 transition-colors touch-manipulation"
                >
                  VIEW SERVICES
                </Link>
              </div>
            </div>
            {/* Right - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4]">
                <img
                  src="https://res.cloudinary.com/dcc2v0usg/image/upload/v1770789426/Projects_xlsnyx.webp"
                  alt="Elegant interior with double doors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-3 mb-6 sm:mb-8 md:mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-6 py-2.5 rounded-lg font-medium text-xs sm:text-sm uppercase transition-colors cursor-pointer min-h-[44px] flex items-center touch-manipulation ${
                  activeFilter === filter
                    ? 'bg-teal-600 text-white'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white rounded-xl border border-teal-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-teal-200 transition-all duration-200 cursor-pointer touch-manipulation"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span
                    className={`absolute top-2 sm:top-3 right-2 sm:right-3 px-2.5 sm:px-3 py-1 ${project.categoryColor} text-white text-xs font-semibold uppercase rounded`}
                  >
                    {project.category}
                  </span>
                </div>
                <div className="p-4 sm:p-5 md:p-5">
                  <h2 className="text-base sm:text-lg font-medium text-slate-900 mb-2">{project.title}</h2>
                  <div className="flex items-center gap-1.5 text-teal-600 text-sm mb-4">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-block px-3 py-1.5 bg-teal-100 text-teal-700 text-xs sm:text-sm font-medium rounded">
                      {project.service}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        openProjectModal(project)
                      }}
                      className="inline-flex items-center gap-2 min-h-[44px] text-teal-600 text-sm font-medium hover:underline touch-manipulation"
                    >
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-3 sm:p-4 md:p-6 overflow-y-auto">
          <div className="relative w-full max-w-6xl bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl my-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
            {/* Close button */}
            <button
              type="button"
              onClick={closeProjectModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 inline-flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow hover:bg-slate-100 touch-manipulation min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0"
              aria-label="Close project details"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left - Main image with slider controls */}
              <div className="relative bg-teal-300 flex items-center justify-center p-4 sm:p-5 md:p-6">
                <div className="w-full max-h-[520px] aspect-[4/3] overflow-hidden rounded-2xl lg:rounded-3xl">
                  <img
                    src={activeProject.gallery?.[activeImageIndex] || activeProject.image}
                    alt={activeProject.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {activeProject.gallery?.length > 1 && (
                  <>
                    {/* Prev */}
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-teal-400 bg-white/90 text-teal-700 shadow hover:bg-white touch-manipulation"
                      aria-label="Previous image"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {/* Next */}
                    <button
                      type="button"
                      onClick={handleNextImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-teal-400 bg-white/90 text-teal-700 shadow hover:bg-white touch-manipulation"
                      aria-label="Next image"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Counter */}
                    <div className="absolute left-4 top-4 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-white">
                      {activeImageIndex + 1} / {activeProject.gallery.length}
                    </div>
                  </>
                )}
              </div>

              {/* Right - Details */}
              <div className="flex flex-col gap-5 sm:gap-6 p-5 sm:p-6 md:p-8 lg:p-10 bg-slate-50">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-600 mb-2">
                    Completed Project
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-slate-900 mb-3">
                    {activeProject.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                    <div className="inline-flex items-center gap-1.5 text-slate-700">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 21s-6.5-4.485-6.5-10A6.5 6.5 0 1118.5 11c0 5.515-6.5 10-6.5 10z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                      <span>{activeProject.location}</span>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 border border-teal-200">
                      {activeProject.category}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800 mb-1.5">
                        About This Project
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {activeProject.about}
                      </p>
                    </div>

                    <div className="rounded-xl border border-teal-100 bg-white px-4 py-3 flex items-start gap-3 shadow-sm">
                      <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white">
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-1.414 0L3.293 11.5a1 1 0 011.414-1.414l3.043 3.043 7.543-7.543a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-800">
                          Solution Provided
                        </p>
                        <p className="text-sm font-medium text-slate-900">
                          {activeProject.solution || activeProject.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project gallery thumbnails */}
                {activeProject.gallery?.length > 1 && (
                  <div className="mt-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800 mb-3">
                      Project Gallery
                    </h3>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {activeProject.gallery.map((img, idx) => (
                        <button
                          key={img}
                          type="button"
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative aspect-[4/3] overflow-hidden rounded-lg border touch-manipulation ${
                            activeImageIndex === idx ? 'border-teal-500 ring-2 ring-teal-200' : 'border-slate-200'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${activeProject.title} thumbnail ${idx + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA buttons */}
                <div className="mt-auto flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center min-h-[44px] rounded-lg bg-teal-600 px-5 sm:px-6 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 active:bg-teal-800 transition-colors touch-manipulation"
                    onClick={closeProjectModal}
                  >
                    Get Free Quote
                  </Link>
                  <button
                    type="button"
                    onClick={closeProjectModal}
                    className="inline-flex items-center justify-center min-h-[44px] rounded-lg border border-slate-300 px-5 sm:px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors touch-manipulation"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { value: '1500+', label: 'Projects Completed' },
              { value: '10+', label: 'Years Experience' },
              { value: '50+', label: 'Cities Served' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-amber-50/80 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 text-center"
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-teal-600 mb-2">{stat.value}</p>
                <p className="text-slate-800 font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8 text-center">
          <h2
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 uppercase mb-5 sm:mb-6 md:mb-8"
          >
            Ready to start your
            <br />
            project?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto px-2 sm:px-0">
            Let&apos;s discuss how we can transform your space with premium windows and doors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-h-[44px] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 transition-colors w-full sm:w-auto touch-manipulation"
            >
              GET FREE QUOTE
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center min-h-[44px] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold rounded-lg bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 active:bg-teal-100 transition-colors w-full sm:w-auto touch-manipulation"
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
