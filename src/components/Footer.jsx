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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none">
                  <path d="M20 4L4 14v12h8v-8h4v8h8V14L20 4z" fill="#0d9488" />
                  <path d="M20 4l4 4-4 2-4-2 4-4z" fill="#f59e0b" stroke="#92400e" strokeWidth="0.5" />
                </svg>
                <div>
                  <span
                    className="font-script text-xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  >
                    Rayyan
                  </span>
                  <p className="text-xs text-slate-600 font-medium">WINDOWS</p>
                  <p className="text-[10px] text-slate-500">UPVC WINDOW AND DOORS</p>
                </div>
              </div>
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
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
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
