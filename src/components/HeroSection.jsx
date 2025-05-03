import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div id="VIT_landing" className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4 bg-[#0D0D0D] text-white">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: "#0D0D0D" },
          fpsLimit: 60,
          particles: {
            color: { value: "#00FF9F" },
            links: {
              color: "#00FF9F",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "out" },
            },
            number: {
              value: 70,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />

      {/* CTA: Book a Call + Guarantee */}
      <div className="mb-4 z-10">
        <Link
          to="/apply"
          className="inline-block bg-[#00FF9F] text-black font-bold py-2 px-4 rounded hover:opacity-90 transition"
        >
          Book a Call — 14-Day Money Back Guarantee
        </Link>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-[0_0_10px_#00FF9F]">
        Forge Your Future at VIT
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-lg md:text-2xl max-w-2xl z-10 text-gray-300">
        Elite Tech Training. Cyberpunk Vibes. Real Results.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center space-x-4 mt-8 z-10">
        <Link
          to="/apply"
          className="px-6 py-3 rounded-lg border-2 border-[#00FF9F] text-[#00FF9F] font-semibold hover:bg-[#00FF9F] hover:text-black transition"
        >
          Apply Now
        </Link>
        <a
          href="#syllabus"
          className="px-6 py-3 rounded-lg border-2 border-[#00FF9F] text-[#00FF9F] font-semibold hover:bg-[#00FF9F] hover:text-black transition"
        >
          Download Syllabus
        </a>
      </div>

      {/* Reinforce Guarantee */}
      <p className="mt-6 text-sm text-gray-400 z-10 italic">
        14-Day Risk-Free Money Back Guarantee
      </p>
    </div>
  );
}

