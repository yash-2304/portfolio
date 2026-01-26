import React, { useState } from "react";

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500/30 hover:bg-blue-500/50 text-white px-5 py-3 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] border border-blue-400/40 backdrop-blur-md transition z-50"
      >
        Feedback
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl w-[90%] max-w-md">
            <h2 className="text-xl font-semibold text-white mb-4">
              Share Feedback
            </h2>

            <form
              action="https://formsubmit.co/yprajapati7621@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* FormSubmit requirements */}
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Feedback!"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 outline-none"
                required
              />

              <textarea
                name="feedback"
                placeholder="Your message..."
                rows="4"
                className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Submit Feedback
              </button>
            </form>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-white/70 hover:text-white transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
