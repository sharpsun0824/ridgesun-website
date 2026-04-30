"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How do I register my product?",
    a: "Go to Support > Product Registration, fill in your name, email, and the product serial number (SN). Registration activates your extended warranty.",
  },
  {
    q: "Where can I find the serial number (SN)?",
    a: "The serial number is printed on the product itself or on the packaging. It's a unique alphanumeric code. If you can't find it, contact our support team.",
  },
  {
    q: "What is the warranty policy?",
    a: "All RidgeSun products come with a 1-year warranty. Register your product to extend it to 2 years at no extra cost.",
  },
  {
    q: "How do I submit a warranty claim?",
    a: "Visit our Contact page and submit a warranty request with your order number and a description of the issue. Our team will respond within 24 hours.",
  },
  {
    q: "Can I buy products directly from this site?",
    a: "RidgeSun products are available on Amazon. Search for 'RidgeSun' on Amazon to browse our full catalog. This site provides product information and support.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
          >
            {faq.q}
            <motion.svg
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
