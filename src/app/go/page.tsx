"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    title: "Installation Video",
    description: "Watch step-by-step setup guide",
    href: "#",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    color: "bg-red-50 text-red-600 hover:bg-red-100",
  },
  {
    title: "Register Warranty",
    description: "Activate your extended warranty",
    href: "/support/register",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: "bg-amber-50 text-amber-600 hover:bg-amber-100",
  },
  {
    title: "Buy Replacement Filters",
    description: "Shop replacement filter sets",
    href: "#",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
  },
  {
    title: "Support & FAQ",
    description: "Get help with your product",
    href: "/support/faq",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.5M12 18h.01" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    color: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  },
];

export default function GoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Product header */}
      <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="max-w-lg mx-auto px-5 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4"
          >
            <div className="w-20 h-20 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path strokeLinecap="round" d="M3 10h18" />
                <path strokeLinecap="round" d="M9 6V4M15 6V4" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold">Shop Air Filtration System</h1>
            <p className="text-amber-100 text-sm mt-1">RS-AIR-001</p>
          </motion.div>
        </div>
      </div>

      {/* Action cards */}
      <div className="max-w-lg mx-auto px-5 -mt-4 pb-12">
        <div className="space-y-3">
          {links.map((link, i) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              {link.href.startsWith("/") ? (
                <Link
                  href={link.href}
                  className={`flex items-center gap-4 p-5 rounded-2xl transition-all active:scale-[0.98] ${link.color}`}
                >
                  <div className="flex-shrink-0">{link.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-base">{link.title}</h2>
                    <p className="text-sm opacity-70">{link.description}</p>
                  </div>
                  <svg className="w-5 h-5 flex-shrink-0 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-5 rounded-2xl transition-all active:scale-[0.98] ${link.color}`}
                >
                  <div className="flex-shrink-0">{link.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-base">{link.title}</h2>
                    <p className="text-sm opacity-70">{link.description}</p>
                  </div>
                  <svg className="w-5 h-5 flex-shrink-0 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Product info footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-4 bg-gray-50 rounded-2xl text-center"
        >
          <p className="text-xs text-gray-400">
            Scan this QR code with your phone for quick access
          </p>
          <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-400">
            <span>RidgeSun</span>
            <span>·</span>
            <a href="https://ridgesun.com" className="text-amber-600 hover:underline">
              ridgesun.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
