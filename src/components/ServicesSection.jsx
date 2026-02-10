import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 1,
    title: 'UPVC Windows',
    titleColor: 'text-teal-600',
    description: 'Premium UPVC windows designed for Indian climate conditions. Energy-efficient, soundproof, and low maintenance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    learnMoreColor: 'text-teal-600',
    features: ['Premium Quality', 'Custom Design', 'Professional Installation'],
  },
  {
    id: 2,
    title: 'UPVC Doors',
    titleColor: 'text-teal-600',
    description: 'Secure and stylish main entrance doors that make a strong first impression while ensuring safety.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    learnMoreColor: 'text-amber-500',
    features: ['Premium Quality', 'Custom Design', 'Professional Installation'],
  },
  {
    id: 3,
    title: 'UPVC Interior',
    titleColor: 'text-teal-600',
    description: 'Elegant interior doors and partitions for modern homes and offices.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    learnMoreColor: 'text-teal-600',
    features: ['Premium Quality', 'Custom Design', 'Professional Installation'],
  },
  {
    id: 4,
    title: 'Wooden Doors',
    titleColor: 'text-teal-600',
    description: 'Classic and elegant wooden doors with premium finishes for timeless appeal.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    ),
    learnMoreColor: 'text-teal-600',
    features: ['Premium Quality', 'Custom Design', 'Professional Installation'],
  },
  {
    id: 5,
    title: 'Wooden Frames',
    titleColor: 'text-teal-600',
    description: 'Durable wooden frames that complement any architectural style.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    learnMoreColor: 'text-teal-600',
    features: ['Premium Quality', 'Custom Design', 'Professional Installation'],
  },
  {
    id: 6,
    title: 'Screens & Blinds',
    titleColor: 'text-teal-600',
    description: 'Window screens and blinds for comfort and style in every space.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    learnMoreColor: 'text-teal-600',
    features: ['Premium Quality', 'Custom Design', 'Professional Installation'],
  },
]

function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef(null)

  const scrollToIndex = (index) => {
    setActiveIndex(index)
    const card = scrollRef.current?.querySelector(`[data-index="${index}"]`)
    if (card) {
      const container = scrollRef.current
      const cardLeft = card.offsetLeft
      const cardWidth = card.offsetWidth
      const containerWidth = container.offsetWidth
      const scrollTarget = cardLeft - (containerWidth / 2) + (cardWidth / 2)
      container.scrollTo({ left: scrollTarget, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return
    const scrollLeft = container.scrollLeft
    const cards = container.querySelectorAll('[data-index]')
    let closestIndex = 0
    let closestDist = Infinity
    cards.forEach((card, index) => {
      const cardLeft = card.offsetLeft
      const cardCenter = cardLeft + card.offsetWidth / 2
      const containerCenter = scrollLeft + container.offsetWidth / 2
      const dist = Math.abs(cardCenter - containerCenter)
      if (dist < closestDist) {
        closestDist = dist
        closestIndex = index
      }
    })
    setActiveIndex(closestIndex)
  }

  // Auto-slide between service cards
  useEffect(() => {
    if (isHovered) return

    const timer = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % services.length
      scrollToIndex(nextIndex)
    }, 3000) // 5s per slide

    return () => clearTimeout(timer)
  }, [activeIndex, isHovered])

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-teal-600 text-white text-xs font-semibold uppercase tracking-wider rounded mb-4">
            OUR SERVICES
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4"
          >
            <span className="text-slate-900">PREMIUM </span>
            <span className="text-teal-600">SOLUTIONS</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive windows and doors solutions for residential and commercial spaces
          </p>
        </div>

        {/* Cards Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              data-index={index}
              className="flex-shrink-0 w-[320px] sm:w-[340px] snap-center bg-white rounded-xl shadow-md border border-teal-100 p-6 hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-teal-600 rounded flex items-center justify-center text-white">
                  {service.icon}
                </div>
              </div>
              {/* Title */}
              <h3 className={`text-xl font-medium mb-3 ${service.titleColor}`}>{service.title}</h3>
              {/* Description */}
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.description}</p>
              {/* Checklist */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-teal-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              {/* Learn More */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-medium text-sm text-teal-600 hover:text-amber-500 hover:underline transition-colors"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {services.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                activeIndex === index ? 'bg-teal-600' : 'bg-teal-200 hover:bg-teal-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
