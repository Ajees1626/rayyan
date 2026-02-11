import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-teal-700">
      <ScrollReveal direction="up" duration={0.7}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white uppercase mb-6"
        >
          Ready to start
          <br />
          your project?
        </h2>
        <p className="text-white/90 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">
          Get a free consultation and quote. No obligation, no hard selling.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-white text-teal-700 font-semibold uppercase rounded-lg shadow-md hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center"
          >
            GET FREE QUOTE
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-3.5 bg-transparent text-white font-semibold uppercase rounded-lg border-2 border-white hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
          >
            VIEW PROJECTS
          </Link>
        </div>
      </div>
      </ScrollReveal>
    </section>
  )
}

export default CTASection
