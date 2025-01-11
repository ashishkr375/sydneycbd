import AnnouncementBanner from '@/components/AnnouncementBanner'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ServicesGrid from '@/components/ServicesGrid'
import BrandsShowcase from '@/components/BrandsShowcase'
import WhyChooseUs from '@/components/WhyChooseUs'
import Stats from '@/components/Stats'
import CustomerStories from '@/components/CustomerStories'
import RepairProcess from '@/components/RepairProcess'
import PricingTable from '@/components/PricingTable'
import Testimonials from '@/components/Testimonials'
import TrustBadges from '@/components/TrustBadges'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'


export default function Home() {
  return (
    <>
      
      <Header />
      <AnnouncementBanner />
      <main className="overflow-hidden">
        <Hero />
        <TrustBadges />
        <Features />
        <ServicesGrid />
        <WhyChooseUs />
        <BrandsShowcase />
        <RepairProcess />
        <Stats />
        <PricingTable />
        <CustomerStories />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}

