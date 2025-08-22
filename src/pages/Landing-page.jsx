import Engineered from "../components/Engineered";
import FAQAccordion from "../components/FAQAccordion ";
import Hero from "../components/Hero";
import LossesAndHowItWorks from "../components/LossesAndHowItWorks";

export default function LandingPage() {
  return (
   <>
      <Hero />
      <LossesAndHowItWorks />
      <Engineered />
      <FAQAccordion />
   </>
  );
}
