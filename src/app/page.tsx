"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";

const featuredProducts: Product[] = [
  {
    sku: "RS-1001",
    name: "Smart Temperature Mug",
    description: "Precise temperature control, long-lasting insulation. Every sip at the perfect temperature.",
    image: "",
    category: "Living",
  },
  {
    sku: "RS-1002",
    name: "Portable Outdoor Speaker",
    description: "IPX7 waterproof, 30-hour battery life. Your adventure companion.",
    image: "",
    category: "Outdoor",
  },
  {
    sku: "RS-1003",
    name: "Wireless Charging Station",
    description: "Multi-device MagSafe fast charger. Clean, efficient, powerful.",
    image: "",
    category: "Tech",
  },
  {
    sku: "RS-1004",
    name: "LED Eye-Care Desk Lamp",
    description: "Flicker-free lighting, smart dimming. Easy on your eyes.",
    image: "",
    category: "Living",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/30 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-amber-600 font-medium text-sm tracking-wide uppercase"
            >
              RidgeSun 2026 Collection
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 leading-tight"
            >
              Premium Products
              <br />
              <span className="text-amber-600">for a Brighter Life</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mt-6 leading-relaxed max-w-lg"
            >
              RidgeSun designs innovative, high-quality products that make
              everyday life easier, more comfortable, and more enjoyable.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-4 mt-8"
            >
              <Link
                href="/products"
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-xl transition-colors"
              >
                Explore Products
              </Link>
              <Link
                href="/support/register"
                className="border border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-600 font-medium px-6 py-3 rounded-xl transition-colors"
              >
                Register Product
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-500 mt-2">Discover our most-loved items</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.sku} product={product} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/products"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              View All Products
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 font-medium text-sm tracking-wide uppercase">
                Our Story
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3">
                Designed with Care, Built to Last
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                RidgeSun was born from a passion for quality. We believe great
                products don&apos;t just solve problems — they bring joy and
                comfort to your daily life. Every RidgeSun product is rigorously
                tested to meet the highest standards of quality and durability.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Available on Amazon, our products reach customers across North
                America with reliable shipping and easy returns. After your
                purchase, register your product to activate your extended warranty.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl flex items-center justify-center"
            >
              <svg
                className="w-32 h-32 text-amber-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Need Help?</h2>
            <p className="mt-3 text-amber-100 text-lg">
              Product registration, warranty support, or questions — we&apos;re
              here for you.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Link
                href="/support/register"
                className="bg-white text-amber-700 hover:bg-amber-50 font-medium px-6 py-3 rounded-xl transition-colors"
              >
                Register Product
              </Link>
              <Link
                href="/contact"
                className="border border-white/40 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-xl transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
