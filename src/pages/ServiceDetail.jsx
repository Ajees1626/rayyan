import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import serviceDetailsData from '../data/serviceDetails.json'

// Get service data from JSON
const serviceData = serviceDetailsData.services

function ServiceDetail() {
  const { serviceSlug } = useParams()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [revealedElements, setRevealedElements] = useState([])
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const imageRef = useRef(null)

  const service = serviceData[serviceSlug] || serviceData['upvc-windows']

  useEffect(() => {
    // Reset revealed elements when service changes
    setRevealedElements([])
    setSelectedProduct(null)
    
    // Show hero section immediately (no initial hide)
    if (titleRef.current && imageRef.current) {
      gsap.set([titleRef.current, imageRef.current], { opacity: 1, y: 0 })
    }
    if (descRef.current) {
      gsap.set(descRef.current, { opacity: 1, y: 0 })
    }
  }, [serviceSlug])

  const handleReveal = (elementType) => {
    if (revealedElements.includes(elementType)) return

    setRevealedElements((prev) => [...prev, elementType])
    
    let targetRef = null
    switch (elementType) {
      case 'title':
        targetRef = titleRef.current
        break
      case 'description':
        targetRef = descRef.current
        break
      case 'image':
        targetRef = imageRef.current
        break
    }

    if (targetRef) {
      gsap.to(targetRef, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      })
    }
  }

  const handleProductClick = (product) => {
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
    // Update selected product
    setSelectedProduct(product)
    setRevealedElements([])
    
    // Animate hero section update with smooth transition
    if (titleRef.current && imageRef.current) {
      // Fade out current content
      gsap.to([titleRef.current, imageRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          // Update content and fade in
          gsap.set([titleRef.current, imageRef.current], { y: 20 })
          gsap.to([titleRef.current, imageRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
          })
        },
      })
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} id="hero-section" className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <div>
                <h1
                  ref={titleRef}
                  className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium uppercase leading-tight text-slate-900"
                >
                  {selectedProduct
                    ? selectedProduct.name.split(' ').map((word, i) => (
                        <span key={i} className="block">
                          {word}
                        </span>
                      ))
                    : service.title.split(' ').map((word, i) => (
                        <span key={i} className="block">
                          {word}
                        </span>
                      ))}
                </h1>
              </div>
              {selectedProduct ? (
                <div className="space-y-4">
                  <div className="mb-4">
                    <p className="text-3xl sm:text-4xl font-bold text-teal-600 mb-1">
                      {selectedProduct.price}
                    </p>
                    <p className="text-sm text-slate-600">
                      {selectedProduct.priceUnit}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Terms & Conditions apply
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-teal-600 rounded"></div>
                      <h4 className="font-semibold text-slate-900">Key Features</h4>
                    </div>
                    <ul className="space-y-2">
                      {(selectedProduct?.features || service.keyFeatures).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-700">
                          <svg className="w-5 h-5 text-teal-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    Make An Enquiry
                  </Link>
                </div>
              ) : (
                <p
                  ref={descRef}
                  className="text-slate-600 text-base sm:text-lg leading-relaxed"
                >
                  {service.description}
                </p>
              )}
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div
                ref={imageRef}
                className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[5/4] bg-slate-200"
              >
                <img
                  src={selectedProduct ? selectedProduct.image : service.heroImage}
                  alt={selectedProduct ? selectedProduct.name : service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Selection Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-slate-900 mb-8 text-center">
            Select Product:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {service.products.map((product, index) => (
              <div
                key={index}
                className={`group bg-white rounded-lg border-2 overflow-hidden shadow-sm transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg duration-200 ${
                  selectedProduct?.name === product.name
                    ? 'border-teal-600 ring-2 ring-teal-200 shadow-lg'
                    : 'border-slate-200 hover:border-teal-400'
                }`}
                onClick={() => handleProductClick(product)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleProductClick(product)
                  }
                }}
                aria-label={`Select ${product.name}`}
              >
                <div className="aspect-square overflow-hidden bg-slate-100 group-hover:bg-slate-200 transition-colors duration-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className={`text-sm font-medium text-center line-clamp-2 ${
                    selectedProduct?.name === product.name
                      ? 'text-teal-600 font-semibold'
                      : 'text-slate-900'
                  }`}>
                    {product.name}
                  </p>
                  {selectedProduct?.name === product.name && (
                    <div className="mt-2 flex justify-center">
                      <div className="w-8 h-1 bg-teal-600 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="flex justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
          </div>
        </div>
      </section>

      {/* Reset Button - Show when product is selected */}
      {selectedProduct && (
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <button
                onClick={() => {
                  // Scroll to top
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })
                  
                  setSelectedProduct(null)
                  setRevealedElements([])
                  
                  // Animate back to service view
                  if (titleRef.current && imageRef.current) {
                    gsap.to([titleRef.current, imageRef.current], {
                      opacity: 0,
                      y: -20,
                      duration: 0.2,
                      ease: 'power2.in',
                      onComplete: () => {
                        gsap.set([titleRef.current, imageRef.current], { y: 20 })
                        gsap.to([titleRef.current, imageRef.current], {
                          opacity: 1,
                          y: 0,
                          duration: 0.5,
                          ease: 'power3.out',
                        })
                      },
                    })
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Back to {service.title}
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ServiceDetail
