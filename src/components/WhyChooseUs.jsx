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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content & Features */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-slate-900 text-xs font-semibold uppercase tracking-wider rounded mb-6">
              WHY CHOOSE US
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-6">
              <span className="block text-slate-900">BUILT FOR</span>
              <span className="block text-teal-600 mt-1">EXCELLENCE</span>
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We combine international-grade hardware with locally engineered profiles to handle Indian climate conditions. Every project is crafted with precision and attention to detail.
            </p>
            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 p-4 bg-slate-100 rounded-lg"
                >
                  <div className="w-10 h-10 rounded bg-teal-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Statistics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-amber-400 rounded-xl p-8 flex flex-col justify-center min-h-[140px]"
              >
                <p className="font-serif text-3xl sm:text-4xl font-semibold text-white">{stat.value}</p>
                <p className="text-white/95 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
