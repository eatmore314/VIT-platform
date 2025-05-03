// Updated PricingSection.jsx
export default function PricingSection() {
    return (
      <section id="VIT_landing" className="py-20 px-6 text-center text-white bg-[#0D0D0D]">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-[0_0_10px_#00FF9F]">
          Choose Your Plan
        </h2>
  
        <p className="text-sm md:text-base text-gray-300 italic mb-10">
          💸 14-Day Money-Back Guarantee — If you don’t love it, get a full refund. No risk.
        </p>
  
        <div className="grid md:grid-cols-3 gap-8">
          {/* Full Payment Card */}
          <div className="bg-[#111] rounded-xl p-6 border border-[#00FF9F33] shadow-md">
            <h3 className="text-xl font-bold text-primary mb-2">One-Time Payment</h3>
            <p className="text-2xl font-bold mb-2">$5,997</p>
            <p className="text-gray-400 mb-4">Pay once and get full access to the bootcamp.</p>
            <a href="/apply" className="bg-primary text-black font-bold py-2 px-4 rounded hover:opacity-90 transition">
              Apply Now
            </a>
          </div>
  
          {/* Installments Card */}
          <div className="bg-[#111] rounded-xl p-6 border border-[#00FF9F33] shadow-md">
            <h3 className="text-xl font-bold text-primary mb-2">Installments</h3>
            <p className="text-2xl font-bold mb-2">$2,500 down + $1,000/mo</p>
            <p className="text-gray-400 mb-4">Break the cost into smaller monthly payments.</p>
            <a href="/installments" className="bg-primary text-black font-bold py-2 px-4 rounded hover:opacity-90 transition">
              See Plan
            </a>
          </div>
  
          {/* Split Payment Card */}
          <div className="bg-[#111] rounded-xl p-6 border border-[#00FF9F33] shadow-md">
            <h3 className="text-xl font-bold text-primary mb-2">Split Payment</h3>
            <p className="text-2xl font-bold mb-2">$3,250 now + $3,250 later</p>
            <p className="text-gray-400 mb-4">Split into 2 payments: now and after graduation.</p>
            <a href="/split" className="bg-primary text-black font-bold py-2 px-4 rounded hover:opacity-90 transition">
              See Option
            </a>
          </div>
        </div>
      </section>
    );
  }
  