import { Link } from 'react-router-dom'

function Hero() {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '4500+', label: 'Projects Done' },
    { value: '92%', label: 'Satisfaction' },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left column - Content */}
          <div className="order-2 lg:order-1">
            {/* Headline */}
            <h1
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium leading-tight text-slate-900 mb-4 sm:mb-6 md:mb-8"
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
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 md:gap-4 mb-5 sm:mb-6 md:mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center min-h-[44px] px-5 sm:px-6 py-3 text-sm sm:text-base font-medium rounded-lg bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 transition-colors touch-manipulation"
              >
                GET FREE QUOTE
              </Link>
              <span className="hidden sm:block w-px h-6 bg-slate-300 shrink-0" aria-hidden="true" />
              <Link
                to="/projects"
                className="inline-flex items-center justify-center min-h-[44px] px-5 sm:px-6 py-3 text-sm sm:text-base font-medium rounded-lg bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 active:bg-teal-100 transition-colors touch-manipulation"
              >
                VIEW PROJECTS
              </Link>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-slate-200 mb-5 sm:mb-6 md:mb-8" />

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium text-teal-600">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Image with badges */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl aspect-[4/3] md:aspect-[16/10] lg:aspect-[5/4] xl:aspect-[3/2]">
              <img
                src="https://res.cloudinary.com/dcc2v0usg/image/upload/v1770789425/home_zrdysm.webp"
                alt="Luxury interior with modern doors and windows"
                className="w-full h-full object-cover"
              />
              {/* Premium Quality badge - top right */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-5 lg:right-5 xl:top-6 xl:right-6 bg-white rounded-md sm:rounded-lg shadow-lg px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3">
                <p className="text-teal-600 font-semibold text-xs sm:text-sm">Premium</p>
                <p className="text-slate-800 font-medium text-xs sm:text-sm">Quality</p>
              </div>
              {/* Energy Efficient badge - bottom left */}
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 lg:bottom-5 lg:left-5 xl:bottom-6 xl:left-6 bg-teal-600 rounded-md sm:rounded-lg px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 text-white">
                <p className="font-semibold text-xs sm:text-sm">Energy Efficient</p>
                <p className="font-medium text-xs sm:text-sm">Soundproof Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
