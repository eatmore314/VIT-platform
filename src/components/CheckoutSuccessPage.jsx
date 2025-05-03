// src/components/CheckoutSuccessPage.jsx
import { Link } from "react-router-dom";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 You're In!</h1>
        <p className="text-lg mb-6">
          Thank you for enrolling in Vanguard Institute of Technology.<br />
          We've received your payment and will follow up via email within 24–48 hours.


        </p>
        <Link
          to="/"
          className="inline-block bg-[#00FF9F] text-black font-bold py-3 px-6 rounded hover:bg-[#00e68c] transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
