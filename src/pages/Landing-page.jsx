import Engineered from "../components/Engineered";
import EstimatedLosses from "../components/EstimatedLosses";
import FAQAccordion from "../components/FAQAccordion ";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import TestimonialSlider from "../components/Testimonials";

export default function LandingPage() {
  return (
   <>
      <Hero />
      {/* <LossesAndHowItWorks /> */}
      <EstimatedLosses />
      <Engineered />
      <HowItWorks />
      <TestimonialSlider/>
      <FAQAccordion />
   </>
  );
}
