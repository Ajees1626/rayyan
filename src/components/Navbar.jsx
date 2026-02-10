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
    <div className="mt-2">
      {/* Simple list with vertical teal line (Image 2 style) */}
      <div className="relative pl-4 border-l-2 border-teal-500 ml-2 space-y-0">
        {mobileServicesCards.map((item) => {
          const slug = serviceSlugMap[item.label]
          const detailPath = slug ? `/services/${slug}` : '/services'
          return (
            <NavLink
              key={item.label}
              to={detailPath}
              className="block py-2.5 text-slate-800 hover:text-teal-600 text-sm"
              onClick={onLinkClick}
            >
              {item.label}
            </NavLink>
          )
        })}
      </div>
      {/* View All Services → */}
      <NavLink
        to="/services"
        className="flex items-center gap-2 mt-3 text-teal-600 font-medium text-sm"
        onClick={onLinkClick}
      >
        View All Services
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </NavLink>
      {/* Colored card blocks (Image 1 style) */}
      <div className="mt-3 flex flex-col gap-2">
        {mobileServicesCards.map((item) => {
          const slug = serviceSlugMap[item.label]
          const detailPath = slug ? `/services/${slug}` : '/services'
          return (
            <div key={item.label} className={`rounded-lg p-3 ${item.color} text-white`}>
              <div className="font-semibold text-sm mb-2">{item.label}</div>
              <div className="flex flex-col gap-1">
                {item.links.map((lnk) => (
                  <NavLink
                    key={lnk}
                    to={detailPath}
                    className="inline-flex items-center gap-2 text-sm hover:opacity-90"
                    onClick={onLinkClick}
                  >
                    <GoArrowUpRight className="shrink-0" />
                    {lnk}
                  </NavLink>
                ))}
              <NavLink
                to="/services"
                className="inline-flex items-center gap-2 text-sm hover:opacity-90 mt-1"
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3" onClick={closeServices}>
            <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none">
              <path d="M20 4L4 14v12h8v-8h4v8h8V14L20 4z" fill="#0d9488" />
              <path d="M20 4l4 4-4 2-4-2 4-4z" fill="#f59e0b" />
            </svg>
            <div>
              <span className="font-script text-2xl font-medium text-primary">
                Rayyan
              </span>
              <p className="text-[10px] text-slate-600 font-medium tracking-wide leading-tight">
                WINDOWS UPVC WINDOWS AND DOORS
              </p>
            </div>
          </NavLink>

          {/* Desktop nav links - center */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 space-x-8">
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
          <div className="hidden lg:block absolute left-0 right-0 top-20 pt-2 z-50">
            <ServicesCardDropdown isOpen={servicesOpen} onClose={closeServices} />
          </div>

          {/* Get Quote button */}
          <div className="hidden lg:block">
            <NavLink
              to="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-teal-600 text-white font-medium rounded-md shadow-md hover:bg-teal-700 transition-colors"
              onClick={closeServices}
            >
              Get Quote
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
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

        {/* Mobile nav links */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 px-4">
            <div className="flex flex-col space-y-1">
              {/* Home - with active highlight */}
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition-colors ${
                    isActive ? 'text-teal-700 font-medium bg-teal-50' : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>

              {/* Services - expandable */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className={`w-full px-4 py-3 rounded-lg text-left font-semibold transition-colors flex items-center justify-between ${
                    mobileServicesOpen ? 'text-teal-600 bg-teal-50' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <MobileServicesSection onLinkClick={() => setIsOpen(false)} />
                )}
              </div>

              {/* Projects, About, Contact */}
              {navLinks.slice(2).map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg transition-colors ${
                      isActive ? 'text-teal-600 font-medium bg-teal-50' : 'text-slate-800 hover:bg-slate-50'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Get Quote button */}
              <NavLink
                to="/contact"
                className="block mx-0 mt-4 py-3 bg-teal-600 text-white text-center font-medium rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </NavLink>
            </div>
          </div>
        )}
      </div>
      {/* Teal separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600" aria-hidden="true" />
    </nav>
  )
}

export default Navbar
