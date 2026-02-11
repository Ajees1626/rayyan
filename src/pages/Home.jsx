import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import FeaturedProjects from '../components/FeaturedProjects'
import WhyChooseUs from '../components/WhyChooseUs'
import CTASection from '../components/CTASection'

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <CTASection />
    </main>
  )
}

export default Home
