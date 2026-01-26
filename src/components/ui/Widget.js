import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-6 right-6 z-50
          bg-blue-600 hover:bg-blue-700
          text-white w-14 h-14 rounded-full
          shadow-xl shadow-blue-500/40
          flex items-center justify-center
          text-2xl font-bold
        "
      >
        💬
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Feedback Panel */}
            <motion.div
              className="
                fixed bottom-6 right-6 z-50
                w-80 p-6 rounded-2xl
                bg-white/10 border border-white/20 backdrop-blur-xl
                shadow-2xl text-white
              "
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
            >
              <h3 className="text-xl font-semibold mb-3">Send Feedback</h3>

              <form
                action="https://formsubmit.co/yprajapati7621@gmail.com"
                method="POST"
                className="space-y-3"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Feedback"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Your name (optional)"
                  className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/20 text-white placeholder-gray-300 focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email (optional)"
                  className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/20 text-white placeholder-gray-300 focus:outline-none"
                />

                <textarea
                  name="message"
                  placeholder="Your feedback..."
                  required
                  rows="4"
                  className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/20 text-white placeholder-gray-300 focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition font-semibold"
                >
                  Submit
                </button>

                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="w-full py-2 rounded-md bg-gray-600/40 hover:bg-gray-600 transition font-semibold mt-2"
                >
                  Close
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}