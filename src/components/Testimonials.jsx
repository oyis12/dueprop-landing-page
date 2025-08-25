import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "Emeka Okafor",
      location: "Gwarinpa, Abuja",
      text: "I was about to buy a plot in Gwarinpa that seemed very cheap at first,  when a friend advised me to run a verification with DueProp. It turned out the person claiming to own the land wasn’t the actual owner. DueProp saved me from losing 16 million naira in this hard economy. Now, I never buy land without checking first.",
    },
    {
      name: "Ngozi Chukwuma (UK)",
      location: "Wuse 2, Abuja",
      text: "Living in the UK, I wanted to buy property back home in Wuse 2. My biggest fear was being scammed. DueProp verified everything—the ownership, papers, and even pending charges. I finally invested with confidence. They are a lifesaver for Nigerians abroad.",
    },
    {
      name: "Fatima Sani",
      location: "New Karu, Nassarawa",
      text: "The seller gave me land documents that looked genuine, but DueProp’s verification showed they were forged. I realized how easy it is to fall for scams. I tell everyone now—always verify with DueProp before paying a kobo.",
    },
    {
      name: "Oluwaseun Balogun (Canada)",
      location: "Canada → Abuja",
      text: "From Canada, I kept hearing stories of people losing money on fake land deals in Nigeria. Before I sent a single kobo, I engaged DueProp. They verified the property in Abuja, sent me a full report, and confirmed it was safe. I finally bought land with peace of mind. DueProp is the bridge we need as Nigerians abroad.",
    },
    {
      name: "Ibrahim Musa",
      location: "Lokogoma, Abuja",
      text: "I loved a property in Lokogoma, but DueProp revealed that it was already tied up in a court case. Imagine if I had paid for that land! DueProp gave me peace of mind to walk away from a bad deal.",
    },
    {
      name: "Grace Adebayo",
      location: "Maitama, Abuja",
      text: "I was close to finalizing a deal in Maitama when DueProp discovered the property had been used as collateral for a bank loan. That information alone saved me from years of trouble. DueProp is a must for anyone buying property.",
    },
    {
      name: "Tunde Akinwale",
      location: "Lugbe, Abuja",
      text: "As a first-time land buyer in Lugbe, I was nervous and confused. DueProp explained every step and verified the seller’s documents. For the first time, I felt safe investing in property. Now I encourage my friends to do their due diligence too.",
    },
    
    
  ];

  const [current, setCurrent] = useState(0);
  const itemsPerView = 4;

  // Auto slide every 15s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Math.ceil(testimonials.length / itemsPerView));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % Math.ceil(testimonials.length / itemsPerView));
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? Math.ceil(testimonials.length / itemsPerView) - 1 : prev - 1
    );
  };


  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12 mx-4">
      {/* Slides */}
       <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Why Nigerians Trust DueProp
      </h2>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, pageIndex) => (
            <div key={pageIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full flex-shrink-0">
              {testimonials
                .slice(pageIndex * itemsPerView, pageIndex * itemsPerView + itemsPerView)
                .map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-2xl shadow-md mb-4 mt-4"
                  >
                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">“{t.text}”</p>
                    <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                    <p className="text-gray-500 text-xs">{t.location}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-green-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
