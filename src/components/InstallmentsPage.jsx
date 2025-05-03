/* InstallmentsPage.jsx */

import React from "react";

export default function InstallmentsPage() {
  return (
    <section className="py-20 px-6 text-center text-white bg-[#0F0F0F] min-h-screen">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary drop-shadow-[0_0_10px_#00FF9F]">
        Installment Payment Plan
      </h2>

      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-12">
        Flexible payments to make your journey accessible without sacrificing your future. Lock in your seat today and spread the investment over time.
      </p>

      {/* Installment Breakdown */}
      <div className="bg-[#111] rounded-xl p-8 border border-[#00FF9F33] shadow-lg hover:shadow-2xl transition max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-primary">Payment Breakdown</h3>
        <div className="text-white text-xl space-y-4 mb-8">
          <p><span className="text-primary font-bold">$2,500</span> Downpayment</p>
          <p><span className="text-primary font-bold">$1,000/month</span> × 4 months</p>
          <p>Total Program Cost: <span className="font-extrabold">$6,500</span></p>
        </div>

        <a
          href="#apply"
          className="inline-block px-8 py-4 bg-primary text-black font-bold rounded-lg hover:opacity-80 transition"
        >
          Apply for Installments
        </a>
      </div>

      {/* Important Note */}
      <div className="mt-10 text-gray-400 text-sm max-w-2xl mx-auto">
        <p>
          Note: Students must complete a short application to qualify for installment plans. Seats are limited.
        </p>
      </div>
    </section>
  );
}
