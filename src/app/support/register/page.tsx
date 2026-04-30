"use client";

import { motion } from "framer-motion";
import RegistrationForm from "@/components/RegistrationForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">
            Product Registration
          </h1>
          <p className="text-gray-500 mt-2">
            Register your product to activate the extended warranty and get
            priority support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8"
        >
          <RegistrationForm />
        </motion.div>

        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
          <strong>Why register?</strong> Extended warranty from 1 year to 2
          years, priority customer support, and exclusive product updates.
        </div>
      </div>
    </div>
  );
}
