import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-10 sm:py-12 lg:py-20 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Headline & Buttons */}
            <div>
              <h1
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium uppercase leading-tight mb-6 sm:mb-8"
              >
                <span className="block text-slate-900">BUILDING</span>
                <span className="block text-slate-900">TRUST, ONE </span>
                <span className="block text-teal-600">WINDOW </span>
                <span className="block text-slate-900">AT A TIME</span>
              </h1>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
                >
                  CONTACT US
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-medium rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors"
                >
                  VIEW PROJECTS
                </Link>
              </div>
            </div>
            {/* Right - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://res.cloudinary.com/dcc2v0usg/image/upload/v1770789422/about_ly3cd4.webp"
                  alt="Modern interior with large windows"
                  className="w-full aspect-[4/3] lg:aspect-[5/4] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-2xl overflow-hidden shadow-lg border-2 border-teal-600">
                <img
                  src="https://res.cloudinary.com/dcc2v0usg/image/upload/v1770789434/Our_Story_rcsukg.webp"
                  alt="Professional team"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-teal-100 text-slate-800 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                OUR STORY
              </span>
              <h2
                className="font-serif text-3xl sm:text-4xl font-medium mb-6"
              >
                <span className="text-slate-900">OUR </span>
                <span className="text-teal-600 font-sans">STORY</span>
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Founded with a vision to bring world-class window and door solutions to Indian homes, Rayyan Window started as a small team of passionate engineers and craftsmen. Today, we&apos;ve grown into a trusted name serving thousands of satisfied customers across major Indian cities.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We understand the unique challenges of the Indian climate - from scorching summers to heavy monsoons, from urban noise to dust pollution. Our products are specifically engineered to handle these conditions while maintaining energy efficiency and aesthetic appeal.
              </p>
              {/* Stat boxes */}
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[120px] sm:min-w-[140px] bg-teal-600 rounded-xl p-4 sm:p-6 text-white">
                  <p className="text-3xl font-semibold">10+</p>
                  <p className="text-sm mt-1">Years Experience</p>
                </div>
                <div className="flex-1 min-w-[120px] sm:min-w-[140px] bg-amber-500 rounded-xl p-4 sm:p-6 text-white">
                  <p className="text-3xl font-semibold">1500+</p>
                  <p className="text-sm mt-1">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 lg:py-24 bg-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider rounded mb-4">
              OUR VALUES
            </span>
            <h2
              className="font-serif text-3xl sm:text-4xl font-medium mb-4"
            >
              <span className="text-slate-900">OUR CORE </span>
              <span className="text-teal-600 font-sans">VALUES</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Quality First */}
            <div className="bg-white rounded-xl border-2 border-teal-200 p-8">
              <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Quality First</h3>
              <p className="text-slate-600 leading-relaxed">
                We never compromise on quality. Every product undergoes rigorous testing to ensure durability and performance.
              </p>
            </div>

            {/* Customer Focus */}
            <div className="bg-white rounded-xl border-2 border-teal-200 p-8">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Customer Focus</h3>
              <p className="text-slate-600 leading-relaxed">
                Your satisfaction is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white rounded-xl border-2 border-teal-200 p-8">
              <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.2 3-3.3 3-5.7 0-3.9-3.1-7-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600 leading-relaxed">
                We continuously invest in new technologies and techniques to bring you the latest in window and door solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Rayyan Window */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-slate-800 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              WHY CHOOSE US
            </span>
            <h2
              className="font-serif text-3xl sm:text-4xl font-medium"
            >
              <span className="text-slate-900">WHY CHOOSE </span>
              <span className="text-teal-600">RAYYAN WINDOW?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: 'In-House Manufacturing', desc: 'Complete control over quality and timelines' },
              { title: 'Expert Team', desc: 'Experienced engineers and installation specialists' },
              { title: 'Warranty & Support', desc: 'Comprehensive warranty and after-sales service' },
              { title: 'Custom Solutions', desc: 'Tailored designs to match your needs' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border-2 border-teal-200 p-6 text-center"
              >
                <h3 className="text-lg font-medium text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 lg:py-24 bg-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              OUR PROCESS
            </span>
            <h2
              className="font-serif text-3xl sm:text-4xl font-medium mb-4"
            >
              <span className="text-slate-900">OUR </span>
              <span className="text-teal-600">PROCESS</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A streamlined approach from consultation to installation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: '01',
                numBg: 'bg-teal-600',
                blockBg: 'bg-teal-100',
                title: 'Site Visit & Consultation',
                desc: 'Our team visits your site, takes precise measurements, and discusses your project details, budget, and design preferences.',
              },
              {
                num: '02',
                numBg: 'bg-amber-500',
                blockBg: 'bg-amber-100',
                title: 'Design & Fabrication',
                desc: 'We create detailed CAD drawings, help you select colors and finishes, and fabricate your windows/doors in our facility with strict quality checks.',
              },
              {
                num: '03',
                numBg: 'bg-teal-600',
                blockBg: 'bg-teal-100',
                title: 'Installation & Handover',
                desc: 'Our professional installation team ensures dust-free installation, proper sealing, and finishing. Final inspection and demo before handover.',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="relative bg-white rounded-xl border-2 border-teal-200 p-8 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${step.blockBg} rounded-bl-full opacity-80`} />
                <div className={`inline-flex items-center justify-center w-12 h-12 ${step.numBg} text-white text-lg font-medium rounded-lg mb-6 relative`}>
                  {step.num}
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-3 relative">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed relative">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6"
          >
            Let&apos;s Work Together
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Experience the Rayyan Window difference. Get in touch with us today for a free consultation and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 bg-white text-teal-700 font-medium rounded-lg shadow-lg hover:bg-slate-50 transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
