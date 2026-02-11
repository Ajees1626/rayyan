const features = [
  'In-house fabrication & installation',
  'Premium quality materials',
  'Expert engineering team',
]

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '4500+', label: 'Projects Done' },
  { value: '2000+', label: 'Client Served' },
  { value: '92%', label: 'Client Satisfaction' },
]

function WhyChooseUs() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left - Content & Features */}
          <div>
            <span className="inline-block px-3 sm:px-4 py-1.5 bg-teal-100 text-slate-900 text-xs font-semibold uppercase tracking-wider rounded mb-4 sm:mb-6">
              WHY CHOOSE US
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6">
              <span className="block text-slate-900">BUILT FOR</span>
              <span className="block text-teal-600 mt-1">EXCELLENCE</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-5 sm:mb-6 md:mb-8 leading-relaxed">
              We combine international-grade hardware with locally engineered profiles to handle Indian climate conditions. Every project is crafted with precision and attention to detail.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-100 rounded-lg"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-teal-600 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm sm:text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Statistics Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-amber-400 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col justify-center min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[130px] xl:min-h-[140px]"
              >
                <p className="font-serif text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-white">{stat.value}</p>
                <p className="text-white/95 text-xs sm:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
