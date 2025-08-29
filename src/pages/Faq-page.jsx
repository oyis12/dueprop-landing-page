import Engineered from '../components/Engineered'
import EstimatedLosses from '../components/EstimatedLosses'
import FAQAccordion from '../components/FAQAccordion '
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Navbar from '../components/Navbar'
import TestimonialSlider from '../components/Testimonials'

export default function FaqPage () {
  return (
    <>
      <div className='min-h-screen bg-white'>
        <Navbar />
         <FAQAccordion />
        <Footer />
      </div>
    </>
  )
}
