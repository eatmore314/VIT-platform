import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function SuccessPage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Set window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    // Stop confetti after 5 seconds
    const timeout = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-8">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={300}
          gravity={0.5} // makes them fall more naturally
          recycle={false} // prevents respawning
        />
      )}

      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">🎉 Application Received!</h1>
        <p className="mb-6 text-lg">
          Thank you for applying to Vanguard Institute of Technology.<br />
          We’ll review your application and follow up via email within 24–48 hours.
        </p>
        <a
          href="/"
          className="inline-block mt-4 bg-primary text-black font-semibold py-3 px-6 rounded hover:opacity-90 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
