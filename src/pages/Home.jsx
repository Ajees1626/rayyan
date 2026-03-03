import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import FeaturedProjects from '../components/FeaturedProjects'
import WhyChooseUs from '../components/WhyChooseUs'
import CTASection from '../components/CTASection'
import AnimateIn from '../components/AnimateIn'
import Seo from '../components/Seo'

function Home() {
  return (
    <main className="min-h-screen">
      <Seo
        title="Home"
        description="Rayyan UPVC Windows & Doors – Premium windows and doors for Indian homes. Energy-efficient, secure, low maintenance. Tenkasi, Tirunelveli, Chennai."
        canonical="/"
      />
      <Hero />
      <AnimateIn scroll>
        <ServicesSection />
      </AnimateIn>
      <AnimateIn scroll>
        <FeaturedProjects />
      </AnimateIn>
      <AnimateIn scroll>
        <WhyChooseUs />
      </AnimateIn>
      <AnimateIn scroll>
        <CTASection />
      </AnimateIn>
    </main>
  )
}

export default Home
