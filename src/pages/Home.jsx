import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import FeaturedProjects from '../components/FeaturedProjects'
import WhyChooseUs from '../components/WhyChooseUs'
import CTASection from '../components/CTASection'

function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <CTASection />
    </div>
  )
}

export default Home
