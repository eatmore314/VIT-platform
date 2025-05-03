// StickyDiscountBar.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function StickyDiscountBar() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 mins in seconds
  const navigate = useNavigate();
  const location = useLocation();
  const isWhitePage = ["/success", "/discount-form", "/payment-options"].includes(location.pathname);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-primary py-2 px-4 flex justify-between items-center z-50 shadow-md`}>
      <span className={`font-semibold ${isWhitePage ? "text-black" : "text-primary"}`}>
  🎉 25% Off Offer Ends in {formatTime(timeLeft)}
</span>

      <button
        onClick={() => navigate("/discount-form")}
        className={`bg-black ${isWhitePage ? "text-primary" : "text-[#00FF9F]"} px-4 py-2 rounded font-bold hover:opacity-80 transition`}
      >
        Claim Offer
      </button>
    </div>
  );
}
