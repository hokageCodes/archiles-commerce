import React from 'react'
import SneakerSection from '../components/hero-section/HeroSection'
import BrandsSection from '../components/our-brands/OurBrands'
import DealsSection from '../components/deals-section/DealsSection'
import StatisticsSection from '../components/stats-section/StatsSection'
import TestimonialsSection from '../components/testimonials/Testimonials'

export default function LandingPage() {
  return (
    <>
      <SneakerSection />
      <BrandsSection />
      <DealsSection />
      <StatisticsSection />
      <TestimonialsSection />
    </>
  )
}
