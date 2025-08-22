import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";

export default function HowItWorks() {
  return (
    <section className="w-full px-4 md:px-16 py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-lg md:text-xl font-bold mb-6 md:mb-8">How It Works</h2>

        {/* Step 1 */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-10 md:mb-12">
          <div className="flex justify-center">
            <img src={one} alt="Provide Land Documents" className="max-w-[220px] md:max-w-sm" />
          </div>
          <div>
            <span className="bg-[#1C7139] text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-base font-bold mb-2 md:mb-3">
              1
            </span>
            <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">
              Provide Land Documents.
            </h3>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              Easily upload your property documents for quick verification such as:
              <br />- Certificate of Occupancy (C of O)
              <br />- Right of Occupancy (R of O)
              <br />- Deed of Assignment (Deed)
              <br />- Certificate of Occupancy (Excision)
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-10 md:mb-12">
          <div className="order-2 md:order-1">
            <span className="bg-[#1C7139] text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-base font-bold mb-2 md:mb-3">
              2
            </span>
            <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">
              We Verify With Official Sources.
            </h3>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              Our experts validate these documents directly from the rightful issuing bodies to
              confirm authenticity and avoid fraud. We also run location checks and boundary
              verifications.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img src={two} alt="We Verify With Official Sources" className="max-w-[220px] md:max-w-sm" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="flex justify-center">
            <img src={three} alt="Receive Report" className="max-w-[220px] md:max-w-sm" />
          </div>
          <div>
            <span className="bg-[#1C7139] text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-base font-bold mb-2 md:mb-3">
              3
            </span>
            <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Receive Your Report.</h3>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              A comprehensive verification report is shared with you, giving you the confidence to
              proceed with your property transaction or to avoid fraudulent deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
