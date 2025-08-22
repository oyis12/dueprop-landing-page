import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";

export default function LossesAndHowItWorks() {
  return (
    <section className="w-full px-4 md:px-16 py-10 md:py-16 bg-white">
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-base md:text-xl font-bold mb-6 leading-snug">
          Estimated Losses That Should Be Averted In Nigeria Annually (Every Year).
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-[#A60DD9] text-white rounded-lg shadow p-4 md:p-6">
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
              ₦3 Trillion Loss.
            </h3>
            <div className="border-t border-white/40 pt-2 md:pt-3">
              <p className="text-xs md:text-sm leading-relaxed">
                More than 36 Million Homes Lack Formal Titles.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#316371] text-white rounded-lg shadow p-4 md:p-6">
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
              500,000 Scams
            </h3>
            <div className="border-t border-white/40 pt-2 md:pt-3">
              <p className="text-xs md:text-sm leading-relaxed">
                Land Scam Cases Reported from just two states in Nigeria.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#B8E9E5] text-black rounded-lg shadow p-4 md:p-6">
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
              70% Wrong Documentation
            </h3>
            <div className="border-t border-black/30 pt-2 md:pt-3">
              <p className="text-xs md:text-sm leading-relaxed">
                Over 70% of land titles in Nigeria are considered defective.
              </p>
            </div>
          </div>
        </div>

        {/* Offerings */}
        <div className="mb-10 md:mb-12">
          <h3 className="font-semibold mb-2 text-sm md:text-base">Our Offerings</h3>
          <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
            With these alarming figures above, we’re bridging the trust gap in Nigeria’s real estate
            sector by offering gradual, expert-backed due diligence services that make it safer for
            buyers, investors, and developers to avoid costly mistakes.
          </p>
          <p className="text-gray-700 text-xs md:text-sm leading-relaxed mt-2 md:mt-3">
            Whether it’s verifying true land ownership, confirming accurate location and boundaries,
            or validating authentic documentation, Duespro ensures every step of your property
            transaction is backed by data, legal checks, and insight from vetted professionals.
          </p>
          <p className="text-gray-700 text-xs md:text-sm leading-relaxed mt-2 md:mt-3">
            We’re not just preventing fraud—we’re building confidence. One verification at a time,
            Duespro helps Nigerians make smarter, safer real estate decisions.
          </p>
        </div>

        {/* How It Works Section */}
        <div>
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
      </div>
    </section>
  );
}
