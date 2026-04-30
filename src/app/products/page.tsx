"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";

const products: Product[] = [
  { sku: "RS-1001", name: "Smart Temperature Mug", description: "Precise temperature control, long-lasting insulation. 316 stainless steel inner wall, OLED touch display.", image: "", category: "Living" },
  { sku: "RS-1002", name: "Portable Outdoor Speaker", description: "IPX7 waterproof, 30-hour battery. Bluetooth 5.3, TWS pairing, deep bass for outdoor adventures.", image: "", category: "Outdoor" },
  { sku: "RS-1003", name: "Wireless Charging Station", description: "Multi-device MagSafe fast charger. Charge phone, earbuds, and watch simultaneously.", image: "", category: "Tech" },
  { sku: "RS-1004", name: "LED Eye-Care Desk Lamp", description: "Flicker-free, smart dimming. Ra>95 CRI, color temp 2700K-6500K, 45-min timer.", image: "", category: "Living" },
  { sku: "RS-1005", name: "Foldable Storage Bin", description: "Large capacity collapsible bin, 30lb capacity. 60L volume, no-tool assembly.", image: "", category: "Home" },
  { sku: "RS-1006", name: "Car Phone Mount", description: "Magnetic quick-release, shockproof. Nano-suction base, 360° rotation, one-hand operation.", image: "", category: "Auto" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.sku} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
