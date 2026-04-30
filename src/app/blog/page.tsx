"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "welcome-to-ridgesun",
    title: "Welcome to RidgeSun — Quality That Shines",
    excerpt: "Learn about the RidgeSun story and our commitment to quality.",
    date: "April 15, 2026",
    author: "RidgeSun Team",
  },
  {
    slug: "product-care-guide",
    title: "Product Care Guide — 5 Tips to Extend Product Life",
    excerpt: "Simple maintenance tips to keep your RidgeSun products performing like new.",
    date: "April 10, 2026",
    author: "RidgeSun Team",
  },
  {
    slug: "summer-essentials-2026",
    title: "2026 Summer Essentials — Top Picks for Outdoor Fun",
    excerpt: "Beat the heat with RidgeSun's top summer products for outdoor adventures.",
    date: "April 5, 2026",
    author: "RidgeSun Team",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
          <p className="text-gray-500 mt-2">
            Product stories, tips, and updates from RidgeSun
          </p>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl border border-gray-200 p-6 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <span className="text-sm text-amber-600 font-medium">
                  {post.date}
                </span>
                <h2 className="text-xl font-semibold text-gray-900 mt-1 hover:text-amber-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 mt-2">{post.excerpt}</p>
                <span className="text-sm text-gray-400 mt-3 block">
                  {post.author}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
