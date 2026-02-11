import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About Us' },
  ]

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

  const services = Object.keys(serviceSlugMap)

  return (
    <footer className="bg-white text-slate-800 mt-auto border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-3 sm:mb-4">
              <img
                src="https://res.cloudinary.com/dcc2v0usg/image/upload/v1770790337/logo_awkalb.webp"
                alt="Rayyan Windows - UPVC Windows and Doors"
                className="h-9 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Premium windows and doors solutions for Indian homes and commercial spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-slate-900 text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-600 text-sm sm:text-base hover:text-teal-600 transition-colors inline-block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-slate-900 text-sm sm:text-base mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-slate-600 text-xs sm:text-sm">
              <li>
                <a href="tel:+919360189417" className="hover:text-teal-600 transition-colors inline-block py-0.5">
                  +91-93601-89417
                </a>
              </li>
              <li>
                <a href="tel:+917092514039" className="hover:text-teal-600 transition-colors inline-block py-0.5">
                  +91-70925-14039
                </a>
              </li>
              <li>
                <a href="mailto:sales@rayyanwindow.in" className="hover:text-teal-600 transition-colors inline-block py-0.5">
                  sales@rayyanwindow.in
                </a>
              </li>
              <li className="pt-1">
                No. 2/20D, Railway Mettu Street<br />
                Near Nehru Hr. Sec. School<br />
                TENKASI - 627811
              </li>
              <li className="pt-1">
                No:29/12, Near BSNL Office, South Bye Pass Road<br />
                Vannarpettai, Tirunelveli-627003<br />
                Tamil Nadu
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-slate-900 text-sm sm:text-base mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${serviceSlugMap[service]}`}
                    className="text-slate-600 text-sm sm:text-base hover:text-teal-600 transition-colors inline-block py-1"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator & Bottom */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t-2 border-teal-600">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-slate-600">
              © {currentYear} Rayyan Window. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Made for Indian homes • Energy-efficient & secure solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
