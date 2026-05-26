import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

export default function AiMonk() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi, I’m AI Monk. Ask me anything about Yash." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const typeMessage = (text, callback) => {
    let i = 0;
    let current = "";

    const interval = setInterval(() => {
      current += text[i];
      i++;

      callback(current);

      if (i >= text.length) clearInterval(interval);
    }, 10);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://ai-monk-backend-e3qk.onrender.com/api/monk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);

      const index = messages.length + 1;

      setTimeout(() => {
        typeMessage(data.reply, (typed) => {
          setMessages((prev) => {
            const updated = [...prev];
            updated[index] = { role: "assistant", text: typed };
            return updated;
          });
        });
      }, 200);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Something went wrong.", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 md:right-6 bg-black/70 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-105 transition z-50 flex items-center justify-center"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
          alt="AI Monk"
          className="w-7 h-7 object-contain"
        />
      </button>

      {/* Chat Modal */}
      {open && (
        <div className="fixed bottom-20 right-4 md:right-6 w-[90vw] max-w-sm bg-[#0f172a]/80 backdrop-blur-xl text-white rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.15)] border border-white/10 z-50 flex flex-col">
          
          <div className="p-3 border-b border-white/10 font-semibold tracking-wide">
            AI Monk
          </div>

          <div className="p-3 flex flex-wrap gap-2 border-b border-white/10">
            {[
              "Tell me about Yash",
              "Show projects",
              "What skills does he have",
              "Contact details"
            ].map((q, i) => (
              <button
                key={i}
                onClick={() => {
                  setInput(q);
                  setTimeout(() => sendMessage(), 100);
                }}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="p-3 h-64 overflow-y-auto space-y-2 text-sm select-text">
            {messages.map((m, i) => {
              const formattedText = m.text.replace(
                /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
                "[$1](mailto:$1)"
              );
              return (
                <div
                  key={i}
                  className={`${
                    m.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <span className={`inline-block px-3 py-2.5 rounded-xl text-left select-text cursor-text border ${
                    m.role === "user"
                      ? "bg-white/5 border-emerald-400/30 shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                      : "bg-white/5 border-indigo-400/30 shadow-[0_0_12px_rgba(99,102,241,0.25)]"
                  }`}>
                    <div className="text-sm leading-relaxed select-text break-words">
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-2">{children}</p>,
                          li: ({ children }) => <li className="ml-4 list-disc mb-1">{children}</li>,
                          strong: ({ children }) => (
                            <strong className="text-white font-semibold">{children}</strong>
                          ),
                          a: ({ href, children }) => {
                            const isEmail = href && href.startsWith("mailto:");
                            const isGitHub = href && href.includes("github.com");
                            const isLinkedIn = href && href.includes("linkedin.com");

                            let label = children;

                            if (isEmail) label = "Email";
                            if (isGitHub) label = "GitHub";
                            if (isLinkedIn) label = "LinkedIn";

                            return (
                              <div className="flex gap-2 flex-wrap mt-2">
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
                                >
                                  <span>{label}</span>
                                </a>
                                {isEmail && (
                                  <button
                                    onClick={() => handleCopy(href.replace("mailto:", ""))}
                                    className="text-xs px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 transition-all duration-200"
                                  >
                                    Copy
                                  </button>
                                )}
                              </div>
                            );
                          },
                        }}
                      >
                        {formattedText}
                      </ReactMarkdown>
                    </div>
                    {m.role === "user" && (
                      <div className="text-[10px] opacity-50 mt-1 text-right">
                        {m.time}
                      </div>
                    )}
                    {m.role === "assistant" && (
                      <div className="text-[10px] opacity-50 mt-1 text-left">
                        {m.time}
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
            {loading && (
              <div className="flex gap-1 items-center px-2">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex border-t border-white/10 bg-white/5 backdrop-blur-md">
            <input
              className="flex-1 bg-transparent p-2 outline-none placeholder-white/40"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="px-3 border-l border-white/10 hover:bg-white/10 transition-all duration-200"
            >
              →
            </button>
          </div>
        </div>
      )}
      {copied && (
        <div className="fixed bottom-32 right-6 bg-[#0f172a]/90 backdrop-blur-md text-white text-xs px-3 py-2 rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.2)] border border-white/10 z-50">
          Copied to clipboard
        </div>
      )}
    </>
  );
}