import { Link, useNavigate } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import servicesData from '../data/services.json'

const iconMap = {
  house: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  building: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  grid: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  cube: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  frame: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  door: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  ),
  box: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  blinds: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
}

const serviceIcons = ['house', 'building', 'grid', 'cube', 'frame', 'door', 'box', 'blinds']

// Helper function to create slug from service title
const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

function Services() {
  const navigate = useNavigate()

  const services = servicesData.services.map((s, i) => ({
    ...s,
    icon: iconMap[serviceIcons[i]] || iconMap.house,
    slug: createSlug(s.title),
  }))

  const additionalServices = [
    {
      title: 'Site Measurement & Design',
      description: 'Accurate measurements and 3D design layouts for perfect fit.',
      bg: 'bg-teal-600',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11h10M7 15h6" />
        </svg>
      ),
    },
    {
      title: 'Professional Installation',
      description: 'Experienced installation team ensuring dust-free and precise fitting.',
      bg: 'bg-amber-500',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.7 6.3l3 3-8.4 8.4H6.3v-3L14.7 6.3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.3 7.7l3 3" />
        </svg>
      ),
    },
    {
      title: 'After-Sales Support',
      description: 'Comprehensive warranty and annual maintenance contracts available.',
      bg: 'bg-teal-600',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
  ]

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="py-8 sm:py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <ScrollReveal direction="up" duration={0.6}>
            {/* Left - Heading & Buttons */}
            <div 
              onClick={() => navigate('/projects')}
              className="max-w-xl cursor-pointer p-4 sm:p-6 rounded-xl hover:bg-slate-50 transition-colors"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  navigate('/projects')
                }
              }}
            >
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium uppercase leading-tight mb-6 sm:mb-8">
                <span className="block text-slate-900">COMPLETE</span>
                <span className="block text-teal-600">WINDOWS & DOORS</span>
                <span className="block text-slate-900">SOLUTIONS</span>
              </h1>
              <p className="text-slate-600 text-sm sm:text-base mb-6 sm:mb-8">
                Explore our full range of UPVC, wooden, and aluminium solutions designed for Indian homes and
                commercial spaces.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4" onClick={(e) => e.stopPropagation()}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
                >
                  GET FREE QUOTE
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-medium rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors"
                >
                  VIEW PROJECTS
                </Link>
              </div>
            </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1} duration={0.6}>
            {/* Right - Image */}
            <div className="relative max-w-xl w-full mx-auto lg:mx-0">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[16/10] bg-slate-200">
                <img
                  src="https://res.cloudinary.com/dcc2v0usg/image/upload/v1770789425/home_zrdysm.webp"
                  alt="Modern interior entryway with doors and windows"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid - 8 cards */}
      <section className="py-8 lg:py-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={0.6}>
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-slate-800 text-xs font-medium uppercase tracking-wider rounded-full mb-4">
              OUR SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium uppercase leading-tight mb-3">
              <span className="text-slate-900">PREMIUM </span>
              <span className="text-teal-600">SOLUTIONS</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive windows and doors solutions for residential and commercial spaces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {services.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-teal-200 transition-all cursor-pointer"
                onClick={() => navigate(`/services/${service.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    navigate(`/services/${service.slug}`)
                  }
                }}
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 right-3 bg-slate-900/70 backdrop-blur-sm rounded-lg p-3 text-white">
                    <div className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">{service.icon}</span>
                      <div>
                        <p className="font-medium text-sm">{service.title}</p>
                        <p className="text-xs text-white/90 mt-0.5">
                          {service.products} Products available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="text-lg font-medium text-slate-900 mb-1">{service.title}</h2>
                  <p className="text-teal-600 text-sm font-medium mb-3">
                    {service.products} Products
                  </p>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">{service.description}</p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/services/${service.slug}`)
                    }}
                    className="mt-auto inline-flex items-center gap-1.5 text-teal-600 text-sm font-medium hover:underline"
                  >
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal direction="up" duration={0.6}>
      {/* Additional Services */}
      <section className="py-16 lg:py-20 bg-amber-50/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-900 text-xs font-medium uppercase tracking-wider rounded-full mb-4">
              ADDITIONAL SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium uppercase text-slate-900 mb-3">
              ADDITIONAL <span className="text-teal-600">SERVICES</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              We provide comprehensive support throughout your project lifecycle
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {additionalServices.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg border border-slate-200 shadow-sm px-5 py-4 flex items-center gap-4"
              >
                <div className={`w-10 h-10 rounded-md ${item.bg} text-white flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-base sm:text-lg font-medium text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-snug mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal direction="up" duration={0.6}>
      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white uppercase mb-6">
            NEED A CUSTOM SOLUTION?
          </h2>
          <p className="text-white text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Our team can design and manufacture custom windows and doors tailored to your specific needs and architectural style.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-lg uppercase"
          >
            GET FREE CONSULTATION
          </Link>
        </div>
      </section>
      </ScrollReveal>
    </div>
  )
}

export default Services
