import { motion, AnimatePresence } from "framer-motion";
import tt from "../assets/info.png";
import { useEffect, useState } from "react";
import DueDiligenceForm from './DueDiligenceForm'

const points = [
  "Real Properties. Real Owners. Verified Documents.",
  "Where Property Meets Proof.",
  "No Scams. No Surprises. Just Real Estate Done Right.",
  "Properties You Can Trust.",
];

export default function Engineered() {
    const [showModal, setShowModal] = useState(false)
  
    // Prevent body scroll when menu or modal is open
    useEffect(() => {
      document.body.style.overflow = showModal ? 'hidden' : ''
    }, [showModal])

  return (
    <>
    <section className="w-full bg-[#EAEAEA] py-10">
      {/* Top intro text */}
      <div className="px-6 lg:px-16">
        <p className="text-slate-700 max-w-3xl">
          Whether you're a first-time buyer or a seasoned investor, Dueprop
          simplifies land verification. Our platform combines Government data
          with analysis and expert-backed insights—empowering you to make secure,
          informed Real Estate purchases with confidence across Nigeria.
        </p>
      </div>

      {/* Main grid */}
      <div className="mt-10 grid w-full grid-cols-1 items-center gap-y-10 lg:grid-cols-2 lg:gap-x-12">
        {/* Left: text */}
        <div className="px-6 lg:pl-16 lg:pr-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Engineered for Today’s <br /> Real Estate Landscape.
          </h2>

          <p className="mt-3 max-w-xl text-slate-600">
            We combine local expertise, deep insights, and cutting-edge
            technology to bring transparency and trust to Nigeria’s real estate
            landscape—empowering you to verify land and property with confidence
            before you invest.
          </p>

          {/* Bordered list */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {points.map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-3 border-t border-slate-900  px-2 py-2"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-400 text-xs font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-medium text-slate-800 text-sm">{text}</p>
            </div>
          ))}
        </div>

          {/* CTA */}
          <div className="mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="cursor-pointer inline-flex items-center rounded-full bg-[#1C7139] px-5 py-2 font-medium text-white shadow-sm hover:bg-green-700 transition-colors"
            >
              Apply Now
              <svg
                className="ml-2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right: image flush to right */}
        <div className="relative w-full flex justify-end">
          <div className="overflow-hidden rounded-tl-3xl rounded-bl-3xl max-w-[680px] w-full">
            <img
              src={tt}
              alt="Aerial property view"
              className="h-[300px] sm:h-[380px] md:h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
         {/* ✅ Modal with Framer Motion */}
          <AnimatePresence>
            {showModal && (
              <>
                {/* Overlay */}
                <motion.div
                  className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowModal(false)}
                />
                {/* Modal */}
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <DueDiligenceForm onClose={() => setShowModal(false)} />
                </motion.div>
              </>
            )}
          </AnimatePresence>
    </>
  );
}
