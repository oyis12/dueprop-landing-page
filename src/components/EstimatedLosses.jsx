


export default function EstimatedLosses () {
  return (
    <section className='w-full py-10 md:py-16 bg-white'>
      {/* <div className="max-w-7xl mx-auto"> */}
      {/* <div className="w-11/12 mx-auto"> */}

     

      <div className='w-11/12 mx-auto'>
        {/* Heading */}
        <h2 className='text-base md:text-xl font-bold mb-6 leading-snug'>
          Estimated Losses That Should Be Averted In Nigeria Annually (Every
          Year).
        </h2>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-8'>
          {/* Card 1 */}
          <div className='bg-[#A60DD9] text-white rounded-lg shadow p-4 md:p-6'>
            <h3 className='text-lg md:text-2xl font-bold mb-2 md:mb-4'>
              ₦3 Trillion Loss.
            </h3>
            <div className='border-t border-white/40 pt-2 md:pt-3'>
              <p className='text-xs md:text-sm leading-relaxed'>
                More than 36 Million Homes Lack Formal Titles.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-[#316371] text-white rounded-lg shadow p-4 md:p-6'>
            <h3 className='text-lg md:text-2xl font-bold mb-2 md:mb-4'>
              500,000 Scams
            </h3>
            <div className='border-t border-white/40 pt-2 md:pt-3'>
              <p className='text-xs md:text-sm leading-relaxed'>
                Land Scam Cases Reported from just two states in Nigeria.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className='bg-[#B8E9E5] text-black rounded-lg shadow p-4 md:p-6'>
            <h3 className='text-lg md:text-2xl font-bold mb-2 md:mb-4'>
              70% Wrong Documentation
            </h3>
            <div className='border-t border-black/30 pt-2 md:pt-3'>
              <p className='text-xs md:text-sm leading-relaxed'>
                Over 70% of land titles in Nigeria are considered defective.
              </p>
            </div>
          </div>
        </div>

        {/* Offerings Section */}
        <div className='flex flex-col md:flex-row items-start gap-6 md:gap-10'>
          {/* Left side - YouTube Embed */}
          <div className='w-full md:w-1/2'>
            <div className='relative w-full aspect-video overflow-hidden rounded-lg'>
              <iframe
                className='w-full h-full'
                src='https://www.youtube.com/embed/rzmyNG4cbZM?si=_8sk0mUOl5swOW8Q'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right side - Content */}
          <div className='w-full md:w-1/2'>
            <h3 className='text-lg md:text-2xl font-bold mb-2 md:mb-4'>
              Our Offerings
            </h3>
            <p className='text-gray-700 text-xs md:text-sm leading-relaxed'>
             With the report above emanating from the World Bank, we are bridging the gap in Nigeria real estate sector by offering expert due diligence services that make it easier for buyers, investors and developers to avoid costly mistakes.
Are you verifying true land ownership, confirming location and boundaries or validating authentic documentation, Dueprop.com ensures every step of your property transaction is backed by data, legal checks and insights from vetted professionals.
            </p>
            <p className='text-gray-700 text-xs md:text-sm leading-relaxed mt-2 md:mt-3'>
             We are not just cubing menace and fraud, we are building confidence. One verification at a time, Dueprop.com help make smarter, safer real estate decisions.
If you are a first time buyer or a seasoned investor, Dueprop.com simplifies land/property verification. Our platform combines government data with analysis and expert-backed insights – empowering you to make secure, informed real estate/property purchase with confidence across Nigeria.

            </p>
             
          </div>
        </div>
      </div>
    </section>
  )
}
