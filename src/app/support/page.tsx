"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const supportItems = [
  {
    title: "Product Registration",
    desc: "Activate your extended warranty",
    href: "/support/register",
    icon: "📋",
  },
  {
    title: "FAQ",
    desc: "Quick answers to common questions",
    href: "/support/faq",
    icon: "💡",
  },
  {
    title: "Contact Us",
    desc: "Need more help? Get in touch",
    href: "/contact",
    icon: "✉️",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Support Center</h1>
          <p className="text-gray-500 mt-2">We&apos;re here to help</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={item.href}
                className="block p-8 bg-white rounded-2xl border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all group"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-4 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
