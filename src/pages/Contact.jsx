function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Headline */}
            <div>
              <h1
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium uppercase leading-tight mb-6"
              >
                <span className="block text-slate-900">SHARE YOUR</span>
                <span className="block text-teal-600 text-5xl sm:text-6xl lg:text-7xl">PROJECT</span>
                <span className="block text-teal-600 text-5xl sm:text-6xl lg:text-7xl">DETAILS</span>
              </h1>
              <p className="text-slate-700 text-lg">
                Get a customised quotation with recommended profiles, glass types and hardware options. No obligation, no hard selling.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Interior with windows and natural light"
                  className="w-full aspect-[4/3] lg:aspect-[5/4] object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Quick Enquiry */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Information */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-teal-100 text-slate-800 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                CONTACT INFORMATION
              </span>
              <h2
                className="font-serif text-3xl sm:text-4xl font-medium mb-4"
              >
                <span className="text-slate-900">CONTACT </span>
                <span className="text-teal-600 font-sans">INFORMATION</span>
              </h2>
              <p className="text-slate-600 mb-8">
                Reach out to us through any of these channels. Our team is ready to assist you with your windows and doors needs.
              </p>

              <div className="space-y-4">
                {/* Call & WhatsApp */}
                <div className="p-6 rounded-xl border-2 border-teal-200 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-medium mb-1">Call & WhatsApp</p>
                      <a href="tel:+919360189417" className="block text-slate-900 font-medium hover:text-teal-600">+91-93601-89417</a>
                      <a href="tel:+917092514039" className="block text-slate-900 font-medium hover:text-teal-600">+91-70925-14039</a>
                      <p className="text-sm text-slate-500 mt-2">Mon-Sat, 10:00 am - 7:00 pm</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-xl border-2 border-amber-200 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-medium mb-1">Email</p>
                      <a href="mailto:sales@rayyanwindow.in" className="block text-slate-900 font-medium hover:text-teal-600">sales@rayyanwindow.in</a>
                      <p className="text-sm text-slate-500 mt-2">Share your floor plan / site photos for faster response.</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="p-6 rounded-xl border-2 border-teal-200 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-medium mb-1">Address</p>
                      <p className="text-slate-900">
                        No. 2/20D, Railway Mettu Street<br />
                        Near Nehru Hr. Sec. School<br />
                        TENKASI - 627811
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Quick Enquiry Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg border border-teal-200 p-8">
                <span className="inline-block px-4 py-1.5 bg-teal-100 text-slate-800 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                  QUICK ENQUIRY
                </span>
                <h3 className="text-xl font-medium text-slate-900 mb-6">
                  Fill this form and our team will call you within 24 hours.
                </h3>

                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-slate-700 mb-2">Mobile Number *</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-4 py-2.5 bg-slate-100 border border-r-0 border-slate-300 rounded-l-lg text-slate-600 text-sm">+91-</span>
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          required
                          className="flex-1 px-4 py-2.5 border border-slate-300 rounded-r-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-2">City *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        placeholder="Eg. Mumbai"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-white"
                    >
                      <option value="">Select option</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="renovation">Renovation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="windowsDoors" className="block text-sm font-medium text-slate-700 mb-2">Approx. number of windows / doors</label>
                    <input
                      type="text"
                      id="windowsDoors"
                      name="windowsDoors"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      placeholder="Eg. 8 / 3"
                    />
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-slate-700 mb-2">Additional Information</label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows="4"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
                      placeholder="Share any specific details or project challenges..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-teal-600 text-white font-medium uppercase rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    Submit Enquiry
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to receive calls / WhatsApp messages related to your enquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Showroom */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-teal-200 overflow-hidden bg-white">
            <div className="p-8 lg:p-10">
              <span className="inline-block text-teal-600 text-xs font-semibold uppercase tracking-wider mb-2">
                VISIT OUR SHOWROOM
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium mb-4">
                <span className="text-slate-900">Visit Our </span>
                <span className="text-teal-600">Showroom</span>
              </h2>
              <p className="text-slate-600 mb-6">
                Experience our products in person at our showroom. Schedule a visit today.
              </p>
              <p className="text-slate-900 font-semibold mb-8">
                No. 2/20D, Railway Mettu Street<br />
                Near Nehru Hr. Sec. School<br />
                TENKASI - 627811
              </p>

              <div className="rounded-xl overflow-hidden border border-slate-200 aspect-video">
                <iframe
                  title="Rayyan Windows Showroom - Tenkasi"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.65!2d77.31!3d8.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04284a1b2c3d4e%3A0x5e0!2sTenkasi%2C%20Tamil%20Nadu%20627811!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
