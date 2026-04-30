"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    sn: "",
    product_sku: "",
    purchase_date: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Registration successful! Thank you for purchasing RidgeSun.");
        setForm({ name: "", email: "", sn: "", product_sku: "", purchase_date: "" });
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Registration failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
      >
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">{message}</h3>
        <p className="text-green-600 text-sm">
          Your warranty has been extended to 2 years. We appreciate your trust!
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Serial Number (SN) *
        </label>
        <input
          type="text"
          required
          value={form.sn}
          onChange={(e) => setForm({ ...form, sn: e.target.value })}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
          placeholder="Found on the product or packaging"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Model (SKU)
          </label>
          <input
            type="text"
            value={form.product_sku}
            onChange={(e) => setForm({ ...form, product_sku: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            placeholder="Optional"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Purchase
          </label>
          <input
            type="date"
            value={form.purchase_date}
            onChange={(e) => setForm({ ...form, purchase_date: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-xl transition-colors disabled:opacity-50"
      >
        {status === "submitting" ? "Registering..." : "Register Your Product"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-sm text-center">{message}</p>
      )}
    </form>
  );
}
