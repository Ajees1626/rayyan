import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About Us' },
  ]

  const services = [
    'UPVC Windows',
    'UPVC Doors',
    'UPVC Interior',
    'Wooden Doors',
    'Wooden Frames',
    'Interior Room Doors',
    'WPC Doors',
    'Screens & Blinds',
  ]

  return (
    <footer className="bg-white text-slate-800 mt-auto border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/image/logo.png"
                alt="Rayyan Windows - UPVC Windows and Doors"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              Premium windows and doors solutions for Indian homes and commercial spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-600 hover:text-teal-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <a href="tel:+919360189417" className="hover:text-teal-600 transition-colors">
                  +91-93601-89417
                </a>
              </li>
              <li>
                <a href="tel:+917092514039" className="hover:text-teal-600 transition-colors">
                  +91-70925-14039
                </a>
              </li>
              <li>
                <a href="mailto:sales@rayyanwindow.in" className="hover:text-teal-600 transition-colors">
                  sales@rayyanwindow.in
                </a>
              </li>
              <li className="pt-1">
                No. 2/20D, Railway Mettu Street
                <br />
                Near Nehru Hr. Sec. School
                <br />
                TENKASI - 627811
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-slate-600 hover:text-teal-600 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator & Bottom */}
        <div className="mt-12 pt-8 border-t-2 border-teal-600">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-sm text-slate-600">
              © {currentYear} Rayyan Window. All rights reserved.
            </p>
            <p className="text-sm text-slate-600">
              Made for Indian homes • Energy-efficient & secure solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
