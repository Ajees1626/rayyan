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

function FeaturedProjects() {
  return (
    <section className="py-16 lg:py-24 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-xl border border-teal-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category tag */}
                <span
                  className={`absolute top-3 right-3 px-3 py-1 ${project.categoryColor} text-white text-xs font-semibold uppercase rounded`}
                >
                  {project.category}
                </span>
                {/* Overlay text (when present) */}
                {project.overlayText && (
                  <div className="absolute inset-0 bg-slate-900/60 flex items-end p-4">
                    <p className="text-white text-sm line-clamp-2">{project.overlayText}</p>
                  </div>
                )}
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
                  className="inline-flex items-center gap-2 px-4 py-2 border border-teal-500 bg-white text-teal-600 text-sm font-medium rounded-lg hover:bg-teal-50 transition-colors"
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
