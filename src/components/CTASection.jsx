import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-teal-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center">
        <h2
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white uppercase mb-5 sm:mb-6 md:mb-8"
        >
          Ready to start
          <br />
          your project?
        </h2>
        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto px-1">
          Get a free consultation and quote. No obligation, no hard selling.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center min-h-[44px] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold uppercase rounded-lg bg-white text-teal-700 shadow-md hover:bg-slate-50 active:bg-slate-100 transition-colors w-full sm:w-auto touch-manipulation"
          >
            GET FREE QUOTE
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center min-h-[44px] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold uppercase rounded-lg bg-transparent text-white border-2 border-white hover:bg-white/10 active:bg-white/20 transition-colors w-full sm:w-auto touch-manipulation"
          >
            VIEW PROJECTS
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
