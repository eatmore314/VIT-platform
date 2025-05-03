// src/components/DiscountForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DiscountForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Simulate delay before redirect
    setTimeout(() => navigate('/payment-options'), 1000);
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white text-black rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Claim Your 25% Discount</h2>
        <p className="mb-4 text-gray-700">
          Fill out the form below to unlock exclusive payment options with 25% off tuition.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#00FF9F] text-black font-bold py-3 rounded-md hover:bg-[#00e68c] transition"
          >
            Claim Discount & View Options
          </button>
        </form>
        {submitted && <p className="mt-4 text-green-600 font-medium">Redirecting...</p>}
      </div>
    </div>
  );
}
