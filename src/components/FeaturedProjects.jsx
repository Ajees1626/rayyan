import { Link } from 'react-router-dom'
import projectsData from '../data/projects.json'

const { projects } = projectsData

function FeaturedProjects() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider rounded mb-3 sm:mb-4">
            FEATURED PROJECTS
          </span>
          <h2
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 sm:mb-4"
          >
            <span className="text-slate-900">OUR </span>
            <span className="text-teal-600 ">WORK</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto px-1">
            Explore our portfolio of completed projects across India
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-lg sm:rounded-xl border border-teal-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-teal-200 active:scale-[0.99] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                {/* Category tag - pulse animation */}
                <span
                  className={`absolute top-2 right-2 sm:top-3 sm:right-3 px-2.5 py-1 sm:px-3 sm:py-1 ${project.categoryColor} text-white text-xs font-semibold uppercase rounded animate-pulse-subtle`}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-5 lg:p-6">
                <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-2">{project.title}</h3>
                <div className="flex items-center gap-1.5 text-teal-600 text-xs sm:text-sm mb-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{project.location}</span>
                </div>
                <p className="text-teal-700 font-medium text-xs sm:text-sm mb-3 sm:mb-4">{project.service}</p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] border border-teal-500 bg-white text-teal-600 text-sm font-medium rounded-lg hover:bg-teal-50 hover:border-teal-600 active:bg-teal-50 transition-all duration-300 touch-manipulation"
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
