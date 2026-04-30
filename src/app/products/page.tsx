"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";

const products: Product[] = [
  {
    sku: "RS-AIR-001",
    name: "Shop Air Filtration System",
    description: "4-side air intake, bottom exhaust. Hanging or portable dual-use. Captures dust, smoke, and fine particles in workshops and garages.",
    image: "",
    category: "Shop Equipment",
  },
  {
    sku: "RS-TFL-001",
    name: "Automatic Toilet Flush Kit",
    description: "Convert any standard toilet to hands-free automatic flushing. Easy installation, no plumbing modification required. Battery or AC powered.",
    image: "",
    category: "Bathroom",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">All Products</h1>
          <p className="text-gray-500 mt-2">Explore the full RidgeSun collection</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.sku} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
