"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import type { Product } from "@/lib/types";

const products: Product[] = [
  {
    sku: "RS-AIR-001",
    name: "Shop Air Filtration System",
    description: "4-side air intake, bottom exhaust. Hanging or portable dual-use. Captures dust, smoke, and fine particles in workshops and garages. 3-stage filtration: pre-filter, HEPA, and activated carbon. Covers up to 700 sq ft. Remote control included.",
    image: "",
    category: "Shop Equipment",
    longDescription: "The RidgeSun Shop Air Filtration System is designed for workshops, garages, and home studios. With 4-sided air intake and bottom exhaust, it maximizes airflow while minimizing noise. Mount it overhead or use it portable — the choice is yours.\n\n- 3-Stage Filtration: Washable pre-filter + True HEPA + Activated Carbon\n- Coverage: Up to 700 sq ft\n- Airflow: 350 CFM on high speed\n- Dual-Use: Hanging brackets included + built-in carry handle\n- Remote Control: Speed settings, timer, filter replacement indicator\n- Noise Level: 35-55 dB (whisper quiet on low)\n- Power: 120V / 60Hz, CSA certified",
  },
  {
    sku: "RS-TFL-001",
    name: "Automatic Toilet Flush Kit",
    description: "Convert any standard toilet to hands-free automatic flushing. Easy installation, no plumbing modification required. Battery or AC powered.",
    image: "",
    category: "Bathroom",
    longDescription: "Transform your standard toilet into a modern touchless automatic flushing system with the RidgeSun Automatic Toilet Flush Kit. No plumbing modifications needed — installs in minutes.\n\n- Universal Fit: Works with most standard 2-piece toilets\n- Dual Power: 4x AA batteries (included) or optional AC adapter\n- Sensor Range: Adjustable 20-40 cm detection zone\n- Flush Modes: Automatic sensor or manual push-button\n- Water Saving: Dual-flush compatible, uses standard tank mechanism\n- Easy Install: No tools required, self-adhesive sensor mount\n- Battery Life: Up to 12 months with normal use",
  },
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
            className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center overflow-hidden"
          >
            {product.sku === "RS-AIR-001" ? (
              <svg className="w-40 h-40 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="1.2" />
                <path strokeLinecap="round" strokeWidth="1.5" d="M3 10h18" />
                <path strokeLinecap="round" strokeWidth="1.2" d="M9 6V4M15 6V4" />
                <path strokeLinecap="round" strokeWidth="1.2" d="M5 18l-1 2M19 18l1 2" />
                <path strokeLinecap="round" strokeWidth="1" d="M7 14l2-2 2 2 4-4 2 2" opacity="0.6" />
                <path strokeLinecap="round" strokeWidth="0.8" d="M1 8l1 2M23 8l-1 2" opacity="0.4" />
              </svg>
            ) : (
              <svg className="w-36 h-36 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="7" y="2" width="10" height="6" rx="1.5" strokeWidth="1.2" />
                <path strokeWidth="1.2" d="M5 8h14l-1.5 8h-11L5 8z" />
                <rect x="9" y="16" width="6" height="2" rx="0.5" strokeWidth="1" />
                <rect x="8" y="18" width="8" height="4" rx="1" strokeWidth="1" />
                <path strokeWidth="0.8" d="M12 22v1" opacity="0.5" />
                <path strokeWidth="0.8" d="M8 12h8" opacity="0.5" />
                <circle cx="9" cy="11.5" r="0.5" fill="currentColor" opacity="0.3" />
                <circle cx="15" cy="11.5" r="0.5" fill="currentColor" opacity="0.3" />
              </svg>
            )}
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

            {product.longDescription && (
              <div className="mt-6 space-y-2 text-sm text-gray-600">
                {product.longDescription.split('\n').map((line, i) => {
                  if (line.startsWith('- ')) {
                    return (
                      <div key={i} className="flex gap-2 pl-2">
                        <span className="text-amber-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        <span>{line.slice(2)}</span>
                      </div>
                    );
                  }
                  if (line.trim() === '') return null;
                  return <p key={i} className="font-medium text-gray-900 pt-2">{line}</p>;
                })}
              </div>
            )}

            <div className="mt-8 space-y-4">
              <a
                href={`https://amazon.com/dp/${product.sku}`}
                target="_blank"
                rel="noopener noreferrer"
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
              {product.sku === "RS-AIR-001" && (
                <Link
                  href="/go"
                  className="block w-full border border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-600 font-medium py-3 px-6 rounded-xl text-center transition-colors"
                >
                  📱 Product Support Page
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
