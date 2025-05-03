// src/components/PaymentOptionsPage.jsx
import { Link } from 'react-router-dom';

export default function PaymentOptionsPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Pick Your Plan</h1>
        <p className="mb-10 text-center text-gray-700">Choose the option that works best for you below:</p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* One-Time Payment */}
          <div className="border border-gray-300 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">One-Time Payment</h2>
            <p className="mb-4 text-gray-700">Pay once and get full access to the bootcamp.</p>
            <p className="text-xl font-bold mb-4">$5,997</p>
            <a
              href="https://buy.stripe.com/test_cN24k753D35fdDqfYY"
              className="inline-block bg-black text-white px-4 py-2 rounded hover:opacity-90"
            >
              Pay Now
            </a>
          </div>

          {/* Split Payment */}
          <div className="border border-gray-300 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Split Payment</h2>
            <p className="mb-4 text-gray-700">Pay in two parts. This is your first payment.</p>
            <p className="text-xl font-bold mb-4">$3,250</p>
            <a
              href="https://buy.stripe.com/test_fZe3g31Rr21bdDq4gh"
              className="inline-block bg-black text-white px-4 py-2 rounded hover:opacity-90"
            >
              Pay First Half
            </a>
          </div>

          {/* Installments */}
          <div className="border border-gray-300 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Installments</h2>
            <p className="mb-4 text-gray-700">Secure your seat with a deposit. Monthly payments follow.</p>
            <p className="text-xl font-bold mb-4">$2,500 deposit</p>
            <a
              href="https://buy.stripe.com/test_cN25ob53D9tDeHu7su"
              className="inline-block bg-black text-white px-4 py-2 rounded hover:opacity-90"
            >
              Pay Deposit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
