import { Link } from 'react-router-dom'

function Hero() {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '4500+', label: 'Projects Done' },
    { value: '92%', label: 'Satisfaction' },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="order-2 lg:order-1">
            {/* Headline */}
            <h1
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-slate-900 mb-8"
            >
              <span>LUXURY </span>
              <span className="text-teal-600">UPVC </span>
              <span className="text-teal-600">WINDOWS </span>
              <span>& </span>
              <br />
              <span>DOORS </span>
              <span>SOLUTIONS</span>
            </h1>

            {/* CTA Buttons with separator */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
              >
                GET FREE QUOTE
              </Link>
              <span className="hidden sm:block w-px h-6 bg-slate-300" aria-hidden="true" />
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-medium rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors"
              >
                VIEW PROJECTS
              </Link>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-slate-200 mb-8" />

            {/* Stats */}
            <div className="flex flex-wrap gap-8 lg:gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-medium text-teal-600">{stat.value}</p>
                  <p className="text-sm text-slate-600 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Image with badges */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[5/4]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Luxury interior with modern doors and windows"
                className="w-full h-full object-cover"
              />
              {/* Premium Quality badge - top right */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white rounded-lg shadow-lg px-4 py-3">
                <p className="text-teal-600 font-semibold text-sm">Premium</p>
                <p className="text-slate-800 font-medium text-sm">Quality</p>
              </div>
              {/* Energy Efficient badge - bottom left */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-teal-600 rounded-lg px-4 py-3 text-white">
                <p className="font-semibold text-sm">Energy Efficient</p>
                <p className="font-medium text-sm">Soundproof Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
