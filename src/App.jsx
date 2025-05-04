import { Routes, Route, useLocation } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import InstallmentsPage from "./components/InstallmentsPage";
import SplitPaymentPage from "./components/SplitPaymentPage";
import ApplicationForm from "./components/ApplicationForm";
import SuccessPage from "./components/SuccessPage";
import DiscountForm from "./components/DiscountForm";
import StickyDiscountBar from "./components/StickyDiscountBar";
import PaymentOptionsPage from './components/PaymentOptionsPage';
import CheckoutSuccessPage from "./components/CheckoutSuccessPage";
import SprintDashboard from "./components/SprintDashboard";
import AuthPage from './pages/AuthPage';
import ProtectedRoute from './components/ProtectedRoute';

import CodeLab from "./components/CodeLab"; // ✅ add at the top

import "./App.css";

function App() {
  const location = useLocation();
  const whitePages = ["/success", "/discount-form", "/payment-options"];
  const isWhitePage = whitePages.includes(location.pathname);

  return (
    <div className={`min-h-screen ${isWhitePage ? "bg-white text-black" : "bg-[#0D0D0D] text-white"}`}>
      <StickyDiscountBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <section id="VIT_landing" className="py-20 px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-[0_0_10px_#00FF9F]">
                  Why Choose VIT?
                </h2>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-12">
                  Vanguard Institute of Technology isn’t just another bootcamp. We prepare you for the real world — with startup experience, AI projects, and weekly hackathons that push your limits.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-[#111] rounded-xl p-6 border border-[#00FF9F33] shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-primary mb-2">Real Startups</h3>
                    <p className="text-gray-400">Work with actual startups, not fake mock apps. Gain experience that matters.</p>
                  </div>
                  <div className="bg-[#111] rounded-xl p-6 border border-[#00FF9F33] shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-primary mb-2">Personal AI Projects</h3>
                    <p className="text-gray-400">Build your own AI tools, assistants, or automations guided by real engineers.</p>
                  </div>
                  <div className="bg-[#111] rounded-xl p-6 border border-[#00FF9F33] shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-primary mb-2">Hackathons With Prizes</h3>
                    <p className="text-gray-400">Compete weekly for real cash prizes and grow under pressure.</p>
                  </div>
                </div>
              </section>
              <PricingSection />
            </>
          }
        />
        <Route path="/installments" element={<InstallmentsPage />} />
        <Route path="/split" element={<SplitPaymentPage />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/discount-form" element={<DiscountForm />} />
        <Route path="/payment-options" element={<PaymentOptionsPage />} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
        <Route path="/dashboard" element={<SprintDashboard />} />
        <Route path="/auth" element={<AuthPage />} />
        

      </Routes>
    </div>
  );
}

export default App;



