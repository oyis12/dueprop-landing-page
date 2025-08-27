// import house from "../assets/3dhouse.png";

// const Hero = () => {
//   return (
//     <section className="mx-auto flex h-auto min-h-[80vh] max-w-7xl flex-col-reverse items-center justify-center gap-6 px-4 sm:px-6 lg:min-h-[90vh] lg:grid lg:grid-cols-2 lg:gap-8 lg:px-12">
//       {/* Text Section */}
//       <div className="flex flex-col justify-center text-center lg:text-left">
//         <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-6xl">
//           Before you <br />
//           Own it,<span className="ml-1">Know It</span>
//           <br />
//           First.
//         </h1>
//         <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl lg:text-xl lg:max-w-md">
//           Start a Due Diligence Verification <br className="hidden sm:block" /> process now.
//           Reduce the risk of getting <br className="hidden sm:block" /> scammed while
//           making a property purchase.
//         </p>
//         <div className="mt-7 flex justify-center lg:justify-start">
//           <a
//             href="#verify"
//             className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-lg font-semibold hover:bg-slate-50 shadow-md transition"
//           >
//             Start Verification Now
//             <svg
//               className="ml-3"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               fill="none"
//             >
//               <path
//                 d="M5 12h14M13 5l7 7-7 7"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="flex items-center justify-center">
//         <img
//           src={house}
//           alt="Modern property"
//           className="w-[95%] max-w-2xl object-contain lg:w-full lg:max-h-[85vh]"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

// Hero.jsx

import house from '../assets/3dhouse.png'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import DueDiligenceForm from './DueDiligenceForm'

export default function Hero () {
  const [showModal, setShowModal] = useState(false)

  // Prevent body scroll when menu or modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : ''
  }, [showModal])

  return (
    <>
    <section className='mx-auto flex min-h-[80vh] max-w-7xl flex-col-reverse items-center justify-center gap-8 px-4 pb-12 sm:px-6 lg:min-h-[90vh] lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-0 overflow-hidden'>
      {/* Text Section */}
      <div className='flex flex-col justify-center text-center lg:text-left'>
        <h1 className='text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl'>
          Before you <br />
          Own it,<span className='ml-1'>Know It</span>
          <br />
          First.
        </h1>
        <p className='mt-5 text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl lg:max-w-md'>
          Start a Due Diligence Verification <br className='hidden sm:block' />{' '}
          process now. Reduce the risk of getting{' '}
          <br className='hidden sm:block' /> scammed while making a property
          purchase.
        </p>
        <div className='mt-7 flex justify-center lg:justify-start'>
          <button
            onClick={() => setShowModal(true)}
            className='cursor-pointer inline-flex items-center rounded-full text-white border border-slate-300 bg-[#1C7139] px-6 py-3 text-lg font-semibold hover:bg-green-700 shadow-md transition'
          >
            Start Verification Now
            <svg
              className='ml-3'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              stroke='currentColor'
              fill='none'
            >
              <path
                d='M5 12h14M13 5l7 7-7 7'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className='flex items-center justify-center w-full'>
        <img
          src={house}
          alt='Modern property'
          className='w-full max-w-md sm:max-w-lg lg:max-w-xl object-contain'
        />
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
  )
}
