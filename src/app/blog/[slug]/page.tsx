"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const posts: Record<string, { title: string; date: string; author: string; content: string }> = {
  "welcome-to-ridgesun": {
    title: "Welcome to RidgeSun — Quality That Shines",
    date: "April 15, 2026",
    author: "RidgeSun Team",
    content: `RidgeSun was born from a simple belief: great products should make life better.

We are a team of designers, engineers, and quality enthusiasts. Every RidgeSun product goes through dozens of design iterations and rigorous quality tests before reaching your hands.

## Our Mission

We identify everyday pain points and solve them with innovative design and premium materials. From the Smart Temperature Mug to the Portable Outdoor Speaker, every product reflects our commitment to quality.

## Why RidgeSun?

- **Quality You Can Trust**: Every product undergoes multiple rounds of testing
- **Thoughtful Design**: User-centered design that blends aesthetics with functionality
- **Peace of Mind**: Register your product for an extended warranty and dedicated support

Thank you for choosing RidgeSun. Let's make life brighter, together.`,
  },
  "product-care-guide": {
    title: "Product Care Guide — 5 Tips to Extend Product Life",
    date: "April 10, 2026",
    author: "RidgeSun Team",
    content: `Proper care keeps your RidgeSun products performing at their best and extends their lifespan.

## 1. Clean Regularly

Wipe surfaces with a soft, dry cloth. For the Smart Mug, rinse and dry thoroughly after each use.

## 2. Avoid Extreme Temperatures

While our products are built to last, avoid prolonged exposure to extreme heat or cold when possible.

## 3. Charge Properly

Use the included charging cable. Don't overcharge — unplug once fully charged. Ensure proper ventilation when using the Wireless Charging Station.

## 4. Store Correctly

Keep products in a cool, dry place when not in use. For the Outdoor Speaker, charge every 3 months during long-term storage.

## 5. Register Your Product

Register immediately after purchase to activate your extended warranty and receive product care reminders.

Follow these tips and your RidgeSun products will serve you well for years to come.`,
  },
  "summer-essentials-2026": {
    title: "2026 Summer Essentials — Top Picks for Outdoor Fun",
    date: "April 5, 2026",
    author: "RidgeSun Team",
    content: `Summer is here — time to get outside and enjoy the sun. Here are our top RidgeSun picks for the season.

## Portable Outdoor Speaker

IPX7 waterproof rating means rain and splashes are no problem. With 30 hours of battery life, the music plays from sunrise to sunset. Bluetooth 5.3 with TWS pairing fills your campsite with rich stereo sound.

## Smart Temperature Mug

Stay hydrated in comfort. 48-hour heat retention keeps your coffee hot on morning hikes, while 12-hour cold retention keeps your water refreshingly cool. The perfect companion for any summer adventure.

## Car Phone Mount

Essential for road trips. Magnetic quick-release for easy one-hand operation. The nano-suction base stays firmly in place on any dashboard, keeping navigation in view and your hands on the wheel.

Gear up with RidgeSun and make this summer your best one yet.`,
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const post = posts[params.slug as string];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Post Not Found</h1>
          <Link href="/blog" className="text-amber-600 hover:underline mt-2 inline-block">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const htmlContent = post.content
    .replace(/^## (.+)$/gm, '</p><h2>$1</h2><p>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br/>');

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className="text-sm text-gray-500 hover:text-amber-600 transition-colors mb-8 inline-block"
        >
          &larr; Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-sm text-amber-600 font-medium">
            {post.date}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            {post.title}
          </h1>
          <p className="text-gray-400 text-sm mt-2">{post.author}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 prose prose-gray max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:leading-relaxed [&_p]:text-gray-700 [&_ul]:space-y-1 [&_li]:text-gray-700"
          dangerouslySetInnerHTML={{ __html: `<p>${htmlContent}</p>` }}
        />
      </article>
    </div>
  );
}
