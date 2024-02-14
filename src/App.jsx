import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import PropertySolutions from "./components/PropertySolutions.jsx";
import FeaturedProperties from "./components/FeaturedProperties.jsx";
import ClientTestimonials from "./components/ClientTestimonials.jsx";
import FaqSection from "./components/FAQSection.jsx";
import {CtaSection} from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";

function App() {


  return (
    <div className='xl:space-y-0 space-y-4'>
        <div className='xl:space-y-0 space-y-8'>
            <Header />
            <Hero />
        </div>
        <PropertySolutions />
        <FeaturedProperties />
        <ClientTestimonials />
        <FaqSection />
        <CtaSection />
        <Footer />
    </div>
  )
}

export default App
