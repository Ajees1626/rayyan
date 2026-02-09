function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { href: '#', label: 'Features' },
      { href: '#', label: 'Pricing' },
      { href: '#', label: 'FAQ' },
    ],
    Company: [
      { href: '#', label: 'About' },
      { href: '#', label: 'Blog' },
      { href: '#', label: 'Careers' },
    ],
    Legal: [
      { href: '#', label: 'Privacy' },
      { href: '#', label: 'Terms' },
      { href: '#', label: 'Cookies' },
    ],
  }

  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Rayyan</h3>
            <p className="text-sm text-slate-400">
              Building exceptional digital experiences with modern technology.
            </p>
          </div>

          {/* Link sections */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500 text-center">
            © {currentYear} Rayyan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
