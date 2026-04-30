"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import type { Product } from "@/lib/types";

const products: Product[] = [
  { sku: "RS-1001", name: "Smart Temperature Mug", description: "Precise temperature control, long-lasting insulation. 316 stainless steel inner wall, OLED touch display. Smart temperature chip auto-adjusts to your drink type. 48-hour heat retention, 12-hour cold retention.", image: "", category: "Living" },
  { sku: "RS-1002", name: "Portable Outdoor Speaker", description: "IPX7 waterproof, 30-hour battery life. Your adventure companion. Bluetooth 5.3, TWS pairing, bass enhancement technology delivers stunning sound outdoors.", image: "", category: "Outdoor" },
  { sku: "RS-1003", name: "Wireless Charging Station", description: "Multi-device desk charger with MagSafe fast charging. Charge phone + earbuds + watch at once. Smart temperature control for safe charging.", image: "", category: "Tech" },
  { sku: "RS-1004", name: "LED Eye-Care Desk Lamp", description: "Flicker-free lighting, smart dimming, easy on your eyes. Ra>95 CRI, color temperature 2700K-6500K, 45-minute timer to remind you to rest.", image: "", category: "Living" },
  { sku: "RS-1005", name: "Foldable Storage Bin", description: "Large capacity collapsible bin, 30lb capacity. Reinforced PP material, fold-flat design when not in use. 60-liter volume for all your storage needs.", image: "", category: "Home" },
  { sku: "RS-1006", name: "Car Phone Mount", description: "Magnetic quick-release mount, shockproof and stable. Nano-suction base grips any dashboard, 360° rotation, one-hand operation.", image: "", category: "Auto" },
];

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.sku === params.sku);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product Not Found</h1>
          <Link href="/products" className="text-amber-600 hover:underline mt-2 inline-block">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/products"
          className="text-sm text-gray-500 hover:text-amber-600 transition-colors mb-8 inline-block"
        >
          &larr; Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center"
          >
            <svg
              className="w-40 h-40 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-sm text-amber-600 font-medium">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`https://amazon.com/dp/${product.sku}`}
                target="_blank"
                className="block w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-xl text-center transition-colors"
              >
                Buy on Amazon
              </a>
              <Link
                href="/support/register"
                className="block w-full border border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-600 font-medium py-3 px-6 rounded-xl text-center transition-colors"
              >
                Register Product &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
