import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { GoArrowUpRight } from 'react-icons/go'
import ServicesCardDropdown from './ServicesCardDropdown'

const serviceSlugMap = {
  'UPVC Windows': 'upvc-windows',
  'UPVC Doors': 'upvc-doors',
  'UPVC Interior': 'upvc-interior',
  'Wooden Doors': 'wooden-doors',
  'Wooden Frames': 'wooden-frames',
  'Interior Room Doors': 'interior-room-doors',
  'WPC Doors': 'wpc-doors',
  'Screens & Blinds': 'screens-and-blinds',
}

const mobileServicesCards = [
  { label: 'UPVC Windows', color: 'bg-teal-600', links: ['Sliding Windows', 'Casement Windows'] },
  { label: 'UPVC Doors', color: 'bg-amber-500', links: ['Sliding Door', 'Folding Door'] },
  { label: 'UPVC Interior', color: 'bg-gray-800', links: ['Modern Kitchen', 'Loft covering'] },
  { label: 'Wooden Doors', color: 'bg-teal-600', links: ['Teak Wood Door', 'Vengai Wood Door'] },
  { label: 'Wooden Frames', color: 'bg-amber-500', links: ['Teak Wood Frame', 'Vengai Wood Frame'] },
  { label: 'Interior Room Doors', color: 'bg-gray-800', links: ['Lamination Door', 'Steel Beading Door'] },
  { label: 'WPC Doors', color: 'bg-teal-600', links: ['Plain Door', 'Carving Doors'] },
  { label: 'Screens & Blinds', color: 'bg-amber-500', links: ['Zebra Screen', 'Mosquito Window Screen'] },
]

function MobileServicesSection({ onLinkClick }) {
  return (
    <div className="mt-2 sm:mt-3 pl-1">
      {/* View All Services → at top (new model) */}
      <NavLink
        to="/services"
        className="flex items-center gap-2 text-teal-600 font-medium text-sm sm:text-base py-2 touch-manipulation"
        onClick={onLinkClick}
      >
        View All Services
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </NavLink>
      {/* Colored card blocks */}
      <div className="mt-2 sm:mt-3 flex flex-col gap-2 sm:gap-2.5">
        {mobileServicesCards.map((item) => {
          const slug = serviceSlugMap[item.label]
          const detailPath = slug ? `/services/${slug}` : '/services'
          return (
            <div key={item.label} className={`rounded-lg p-3 sm:p-4 ${item.color} text-white`}>
              <div className="font-semibold text-sm sm:text-base mb-2">{item.label}</div>
              <div className="flex flex-col gap-1">
                {item.links.map((lnk) => (
                  <NavLink
                    key={lnk}
                    to={detailPath}
                    className="inline-flex items-center gap-2 text-sm sm:text-base hover:opacity-90 py-0.5 touch-manipulation"
                    onClick={onLinkClick}
                  >
                    <GoArrowUpRight className="shrink-0" />
                    {lnk}
                  </NavLink>
                ))}
              <NavLink
                to="/services"
                className="inline-flex items-center gap-2 text-sm sm:text-base hover:opacity-90 mt-1 touch-manipulation"
                onClick={onLinkClick}
              >
                <GoArrowUpRight className="shrink-0" />
                View All
              </NavLink>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && setServicesOpen(false)
    if (servicesOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [servicesOpen])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isOpen])

  // Close mobile menu on Escape
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && setIsOpen(false)
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/services', label: 'Services', dropdown: true },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const linkClass = ({ isActive }) =>
    `block py-2 transition-colors ${
      isActive ? 'text-teal-600 border-b-2 border-teal-600 pb-2' : 'text-slate-800 hover:text-teal-600'
    }`

  const closeServices = () => setServicesOpen(false)
  const toggleServices = () => setServicesOpen((prev) => !prev)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm pt-[env(safe-area-inset-top)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8 relative">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-[72px] lg:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center shrink-0" onClick={closeServices}>
            <img
              src="https://res.cloudinary.com/dcc2v0usg/image/upload/v1770790337/logo_awkalb.webp"
              alt="Rayyan Windows - UPVC Windows and Doors"
              className="h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 w-auto object-contain max-h-12"
            />
          </NavLink>

          {/* Desktop nav links - center */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.dropdown ? (
                  <button
                    type="button"
                    onClick={toggleServices}
                    className={`flex items-center gap-1 py-2 transition-colors ${
                      servicesOpen ? 'text-teal-600' : 'text-slate-800 hover:text-teal-600'
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <NavLink to={link.to} end={link.end} className={linkClass} onClick={closeServices}>
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Services card dropdown - desktop */}
          {servicesOpen && (
            <div
              className="hidden lg:block fixed inset-0 top-20 z-40"
              onClick={closeServices}
              role="button"
              tabIndex={0}
              aria-label="Close menu"
            />
          )}
          <div className={`hidden lg:block absolute left-0 right-0 top-20 pt-2 z-50 ${!servicesOpen ? 'pointer-events-none' : ''}`}>
            <ServicesCardDropdown isOpen={servicesOpen} onClose={closeServices} />
          </div>

          {/* Get Quote button */}
          <div className="hidden lg:block">
            <NavLink
              to="/contact"
              className="inline-flex items-center px-5 lg:px-6 py-2.5 text-sm lg:text-base font-medium rounded-md bg-teal-600 text-white shadow-md hover:bg-teal-700 active:bg-teal-800 transition-colors"
              onClick={closeServices}
            >
              Get Quote
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 sm:p-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 active:bg-slate-200 transition-colors touch-manipulation"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu: off-canvas overlay + left panel (new model) */}
        {isOpen && (
          <>
            {/* Dark overlay - tap to close */}
            <div
              className="lg:hidden fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm transition-opacity"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            />
            {/* White slide-in panel */}
            <div
              className="lg:hidden fixed inset-y-0 left-0 z-[70] w-[min(320px,85vw)] max-w-full bg-white shadow-2xl flex flex-col pt-[env(safe-area-inset-top)] animate-slide-in-left"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Panel header: logo + close */}
              <div className="flex items-center justify-between shrink-0 px-4 sm:px-5 pt-4 pb-3 border-b border-slate-200">
                <NavLink to="/" className="flex items-center shrink-0" onClick={() => setIsOpen(false)}>
                  <img
                    src="https://res.cloudinary.com/dcc2v0usg/image/upload/v1770790337/logo_awkalb.webp"
                    alt="Rayyan Windows - UPVC Windows and Doors"
                    className="h-9 sm:h-10 w-auto object-contain"
                  />
                </NavLink>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 active:bg-slate-200 transition-colors touch-manipulation"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable nav links */}
              <div className="flex-1 overflow-y-auto overscroll-contain py-4 px-3 sm:px-4">
                <div className="flex flex-col gap-0.5">
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 min-h-[44px] rounded-lg text-sm sm:text-base transition-colors touch-manipulation ${
                        isActive ? 'text-teal-700 font-medium bg-teal-50' : 'text-slate-800 hover:bg-slate-50 active:bg-slate-100'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </NavLink>

                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className={`w-full px-4 py-3 min-h-[44px] rounded-lg text-left text-sm sm:text-base font-semibold transition-colors flex items-center justify-between touch-manipulation ${
                        mobileServicesOpen ? 'text-teal-600 bg-teal-50' : 'text-slate-800 hover:bg-slate-50 active:bg-slate-100'
                      }`}
                    >
                      Services
                      <svg
                        className={`w-4 h-4 transition-transform shrink-0 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <MobileServicesSection onLinkClick={() => setIsOpen(false)} />
                    )}
                  </div>

                  {navLinks.slice(2).map((link) => (
                    <NavLink
                      key={link.label}
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-3 min-h-[44px] rounded-lg text-sm sm:text-base transition-colors touch-manipulation ${
                          isActive ? 'text-teal-600 font-medium bg-teal-50' : 'text-slate-800 hover:bg-slate-50 active:bg-slate-100'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Get Quote - full width at bottom */}
              <div className="shrink-0 p-4 pt-3 pb-[env(safe-area-inset-bottom)] border-t border-slate-200">
                <NavLink
                  to="/contact"
                  className="flex items-center justify-center w-full py-3 mb-3 min-h-[48px] text-sm sm:text-base font-medium rounded-lg bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 transition-colors touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Teal separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600" aria-hidden="true" />
    </nav>
  )
}

export default Navbar
