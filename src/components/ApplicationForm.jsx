import { useState } from "react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    paymentPlan: "",
    linkedin: "",
    background: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);

    try {
        const res = await fetch("https://api.airtable.com/v0/app6eH4JJmwsj6ALb/Contacts", {
            method: "POST",
            headers: {
                Authorization: "Bearer patBgL6fHTbPBiy5g.542ba910639243fd0d5c6b5cbaf6f7602c4c21771a840a01bf5ce71eec2902d9",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              records: [
                {
                  fields: {
                    Name: formData.name,
                    Email: formData.email,
                    "Payment Plan": formData.paymentPlan,
                    "LinkedIn / Portfolio": formData.linkedin,
                    "Background / Goals": formData.background,
                  },
                },
              ],
            }),
          });
          

          const data = await res.json();
          console.log(data);
      if (!res.ok) throw new Error("Submission failed");

      window.location.href = "/success";
      setFormData({ name: "", email: "", paymentPlan: "", linkedin: "", background: "" });
    } catch (err) {
      console.error(err);
      alert("There was an error submitting your application.");
      const errorText = await res.text();
console.error("Airtable error:", errorText);

    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white p-6 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-[#111] p-8 rounded-xl shadow-md border border-[#00FF9F33]"
      >
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Apply to VIT
        </h2>

        {/* Name */}
        <label className="block mb-4">
          <span className="text-gray-300">Full Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 bg-[#222] border border-gray-600 rounded"
          />
        </label>

        {/* Email */}
        <label className="block mb-4">
          <span className="text-gray-300">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 bg-[#222] border border-gray-600 rounded"
          />
        </label>

        {/* Payment Plan */}
        <label className="block mb-4">
          <span className="text-gray-300">Select a Payment Plan</span>
          <select
            name="paymentPlan"
            value={formData.paymentPlan}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 bg-[#222] border border-gray-600 rounded"
          >
            <option value="" disabled>
              Choose a plan
            </option>
            <option value="One-Time ($5997)">One-Time ($5997)</option>
            <option value="Installments ($2500 down + $1000/mo)">
              Installments ($2500 down + $1000/mo)
            </option>
            <option value="Split ($3250 now + $3250 later)">
              Split ($3250 now + $3250 later)
            </option>
          </select>
        </label>

        {/* LinkedIn / Portfolio */}
        <label className="block mb-4">
          <span className="text-gray-300">LinkedIn / Portfolio (optional)</span>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full mt-1 p-3 bg-[#222] border border-gray-600 rounded"
            placeholder="https://linkedin.com/in/yourname"
          />
        </label>

        {/* Background */}
        <label className="block mb-6">
          <span className="text-gray-300">Tell us about your background or goals</span>
          <textarea
            name="background"
            value={formData.background}
            onChange={handleChange}
            rows={4}
            className="w-full mt-1 p-3 bg-[#222] border border-gray-600 rounded"
            placeholder="Why do you want to join VIT?"
          />
        </label>

        <button
          type="submit"
          className="w-full py-3 bg-primary text-black font-bold rounded hover:opacity-90 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
