import { useEffect, useState } from 'react'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import { div } from 'framer-motion/client'
import { motion, AnimatePresence } from 'framer-motion'
import DueDiligenceForm from './DueDiligenceForm'

export default function HowItWorks () {
  const [showModal, setShowModal] = useState(false)

  // Prevent body scroll when menu or modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : ''
  }, [showModal])

  return (
    <>
      <section className='w-full px-4 md:px-16 py-10 md:py-16 bg-white'>
        {/* <div className="max-w-7xl mx-auto"> */}
        <div className='w-11/12 mx-auto'>
          {/* Heading */}
          <h2 className='text-lg md:text-xl font-bold mb-6 md:mb-8'>
            How It Works
          </h2>

          {/* Step 1 */}
          <div className='grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-10 md:mb-12'>
            <div className='flex justify-center'>
              <img
                src={one}
                alt='Provide Land Documents'
                className='max-w-[220px] md:max-w-sm'
              />
            </div>
            <div>
              <span className='bg-[#1C7139] text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-base font-bold mb-2 md:mb-3'>
                1
              </span>
              <h3 className='font-semibold text-base md:text-lg mb-1 md:mb-2'>
                Provide Land Documents.
              </h3>
              <p className='text-xs md:text-sm text-gray-700 leading-relaxed'>
                Easily upload your property documents for quick verification
                such as:
                <br />- Certificate of Occupancy (C of O)
                <br />- Right of Occupancy (R of O)
                <br />- Deed of Assignment (Deed)
                <br />- Certificate of Occupancy (Excision)
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className='grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-10 md:mb-12'>
            <div className='order-2 md:order-1'>
              <span className='bg-[#1C7139] text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-base font-bold mb-2 md:mb-3'>
                2
              </span>
              <h3 className='font-semibold text-base md:text-lg mb-1 md:mb-2'>
                We Verify With Official Sources.
              </h3>
              <p className='text-xs md:text-sm text-gray-700 leading-relaxed'>
                Our experts validate these documents directly from the rightful
                issuing bodies to confirm authenticity and avoid fraud. We also
                run location checks and boundary verifications.
              </p>
            </div>
            <div className='order-1 md:order-2 flex justify-center'>
              <img
                src={two}
                alt='We Verify With Official Sources'
                className='max-w-[220px] md:max-w-sm'
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className='grid md:grid-cols-2 gap-6 md:gap-8 items-center'>
            <div className='flex justify-center'>
              <img
                src={three}
                alt='Receive Report'
                className='max-w-[220px] md:max-w-sm'
              />
            </div>
            <div>
              <span className='bg-[#1C7139] text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-base font-bold mb-2 md:mb-3'>
                3
              </span>
              <h3 className='font-semibold text-base md:text-lg mb-1 md:mb-2'>
                Receive Your Report.
              </h3>
              <p className='text-xs md:text-sm text-gray-700 leading-relaxed'>
                A comprehensive verification report is shared with you, giving
                you the confidence to proceed with your property transaction or
                to avoid fraudulent deals.
              </p>
              <div className='mt-6'>
                <button
                  onClick={() => setShowModal(true)}
                  className='cursor-pointer inline-flex items-center rounded-full bg-[#1C7139] px-5 py-2 font-medium text-white shadow-sm hover:bg-green-700 transition-colors'
                >
                  Apply Now
                  <svg
                    className='ml-2'
                    width='18'
                    height='18'
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
          </div>
        </div>
      </section>

      {/* ✅ Modal with Framer Motion */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Overlay */}
            <motion.div
              className='fixed inset-0 z-40 bg-black/50 backdrop-blur-sm'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            />
            {/* Modal */}
            <motion.div
              className='fixed inset-0 z-50 flex items-center justify-center p-4'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <DueDiligenceForm onClose={() => setShowModal(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
