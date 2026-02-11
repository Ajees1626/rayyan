import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  const headerRef = useRef(null)
  const carouselRef = useRef(null)
  const dotsRef = useRef(null)

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
    }, 3000)

    return () => clearTimeout(timer)
  }, [activeIndex, isHovered])

  // Scroll-triggered animations
  useEffect(() => {
    const header = headerRef.current
    const carousel = carouselRef.current
    const dots = dotsRef.current
    if (!header || !carousel) return

    gsap.fromTo(header, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' },
    })

    const cards = carousel.querySelectorAll('[data-index]')
    gsap.fromTo(cards, { opacity: 0, y: 60 }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: { trigger: carousel, start: 'top 88%', toggleActions: 'play none none none' },
    })

    if (dots) {
      gsap.fromTo(dots, { opacity: 0, scale: 0.8 }, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.2)',
        scrollTrigger: { trigger: dots, start: 'top 95%', toggleActions: 'play none none none' },
      })
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-6 sm:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-teal-600 text-white text-xs font-semibold uppercase tracking-wider rounded mb-3 sm:mb-4">
            OUR SERVICES
          </span>
          <h2
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium mb-3 sm:mb-4"
          >
            <span className="text-slate-900">PREMIUM </span>
            <span className="text-teal-600">SOLUTIONS</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto px-1">
            Comprehensive windows and doors solutions for residential and commercial spaces
          </p>
        </div>

        {/* Cards Carousel */}
        <div
          ref={(el) => {
            scrollRef.current = el
            carouselRef.current = el
          }}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 snap-x snap-mandatory scrollbar-hide overflow-y-hidden px-1 -mx-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              data-index={index}
              className="flex-shrink-0 w-[260px] min-[360px]:w-[280px] min-[400px]:w-[300px] sm:w-[340px] snap-center snap-always bg-white rounded-lg sm:rounded-xl shadow-md border border-teal-100 p-4 sm:p-6 hover:shadow-lg hover:-translate-y-1 hover:border-teal-200 active:scale-[0.99] transition-all duration-300 touch-pan-y"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-100 flex items-center justify-center mb-3 sm:mb-4 shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-600 rounded flex items-center justify-center text-white">
                  {service.icon}
                </div>
              </div>
              {/* Title */}
              <h3 className={`text-lg sm:text-xl font-medium mb-2 sm:mb-3 ${service.titleColor}`}>{service.title}</h3>
              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">{service.description}</p>
              {/* Checklist */}
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
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
                className="inline-flex items-center gap-2 font-medium text-sm text-teal-600 hover:text-amber-500 hover:underline transition-colors min-h-[44px] touch-manipulation"
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
        <div ref={dotsRef} className="flex justify-center gap-2 sm:gap-2.5 mt-4">
          {services.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 touch-manipulation min-w-[28px] min-h-[28px] sm:min-w-0 sm:min-h-0 ${
                activeIndex === index
                  ? 'bg-teal-600 scale-110 sm:scale-125'
                  : 'bg-teal-200 hover:bg-teal-300 active:bg-teal-400'
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
