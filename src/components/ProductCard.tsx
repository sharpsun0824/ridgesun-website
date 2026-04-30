"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/products/${product.sku}`} className="group block">
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            {product.sku === "RS-AIR-001" ? (
              <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="1.2" />
                <path strokeLinecap="round" strokeWidth="1.5" d="M3 10h18" />
                <path strokeLinecap="round" strokeWidth="1.2" d="M9 6V4M15 6V4" />
                <path strokeLinecap="round" strokeWidth="1" d="M7 14l2-2 2 2 4-4 2 2" opacity="0.6" />
                <path strokeLinecap="round" strokeWidth="0.8" d="M1 8l1 2M23 8l-1 2" opacity="0.4" />
              </svg>
            ) : (
              <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="7" y="2" width="10" height="6" rx="1.5" strokeWidth="1.2" />
                <path strokeWidth="1.2" d="M5 8h14l-1.5 8h-11L5 8z" />
                <rect x="9" y="16" width="6" height="2" rx="0.5" strokeWidth="1" />
                <rect x="8" y="18" width="8" height="4" rx="1" strokeWidth="1" />
                <path strokeWidth="0.8" d="M12 22v1" opacity="0.5" />
                <circle cx="9" cy="11.5" r="0.5" fill="currentColor" opacity="0.3" />
                <circle cx="15" cy="11.5" r="0.5" fill="currentColor" opacity="0.3" />
              </svg>
            )}
          </div>
        </div>
        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
      </Link>
    </motion.div>
  );
}
