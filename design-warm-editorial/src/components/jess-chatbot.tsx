"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, MessageCircle, Sparkles, Phone, ChevronRight, ArrowRight, Leaf } from "lucide-react";
import { SITE_CONFIG, getPhoneUrl, getWhatsAppUrl } from "@/lib/config";
import { callLLM, type ChatMessage } from "@/lib/chat-api";

/* ─── Types ─── */
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

/* ─── Quick Suggestions ─── */
const suggestions = [
  "What services do you offer?",
  "How much does scarifying cost?",
  "Do you cover my area?",
  "Is it safe for my dog?",
];


/* ─── Chat Bubble (renders markdown-lite bold) ─── */
function ChatBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  // Simple markdown: **bold** → <strong>
  const formatContent = (text: string) => {
    return text.split("\n").map((line, i) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <span key={i}>
          {i > 0 && <br />}
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={j} className="font-semibold">{part.slice(2, -2)}</strong>;
            }
            return <span key={j}>{part}</span>;
          })}
        </span>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Avatar */}
      {!isUser && (
        <div className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden border border-[#c4a882]/30 shadow-sm mt-0.5">
          <Image
            src="/images/real/jess-portrait.jpg"
            alt="Jess"
            width={28}
            height={28}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Bubble */}
      <div
        className={`max-w-[82%] px-3.5 py-2.5 text-[13.5px] leading-relaxed rounded-2xl ${
          isUser
            ? "bg-[#1a9a8a] text-white rounded-br-md"
            : "bg-[#ece5d8] text-[#2a1f14] rounded-bl-md border border-[#c4a882]/15"
        }`}
      >
        {formatContent(message.content)}
      </div>
    </motion.div>
  );
}

/* ─── Typing Indicator ─── */
function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex gap-2.5"
    >
      <div className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden border border-[#c4a882]/30 shadow-sm mt-0.5">
        <Image
          src="/images/real/jess-portrait.jpg"
          alt="Jess"
          width={28}
          height={28}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-bl-md bg-[#ece5d8] border border-[#c4a882]/15">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#5a4a38]/40"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */
export default function JessChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Auto-scroll to newest message */
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  /* Focus input when opened */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  /* Welcome message on first open */
  const handleOpen = () => {
    setIsOpen(true);
    if (!hasInteracted) {
      setHasInteracted(true);
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "Hi there! 👋 I'm Jess, your Green Stripe assistant. Whether you've got moss troubles, bare patches, or just want a lawn that makes the neighbours jealous — I'm here to help!\n\nWhat can I help you with today?",
          timestamp: new Date(),
        },
      ]);
    }
  };

  /* Send a message */
  const handleSend = async (text?: string) => {
    const msg = (text || input).trim();
    if (!msg) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: msg,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Build conversation history for context
    const history: ChatMessage[] = messages
      .filter((m) => m.id !== "welcome")
      .map((m) => ({ role: m.role, content: m.content }));

    try {
      const response = await callLLM(history, msg);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: "assistant" as const,
          content: "Sorry, I'm having a moment! Please try again, or call us on **" + SITE_CONFIG.phoneDisplay + "** for immediate help.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* ─── Floating Trigger Button ─── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={handleOpen}
            className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
            aria-label="Chat with Jess AI Assistant"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#1a9a8a]/20 animate-ping" />

            {/* Button face */}
            <span className="relative flex items-center gap-2 pl-1 pr-4 py-1 rounded-full bg-[#2a1f14] border border-[#c4a882]/30 shadow-[0_8px_30px_rgba(42,31,20,0.3)] group-hover:shadow-[0_8px_40px_rgba(26,154,138,0.25)] transition-shadow duration-500">
              <span className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#c4a882]/40 flex-shrink-0">
                <Image
                  src="/images/real/jess-portrait.jpg"
                  alt="Jess"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </span>
              <span className="flex flex-col items-start">
                <span className="text-[11px] font-medium text-[#c4a882] tracking-wide leading-none">Ask Jess</span>
                <span className="text-[10px] text-white/50 leading-tight">AI Assistant</span>
              </span>
            </span>

            {/* Notification dot */}
            {!hasInteracted && (
              <motion.span
                className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#1a9a8a] border-2 border-[#2a1f14]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── Chat Panel ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-4 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] flex flex-col bg-[#faf6ef] rounded-2xl border border-[#c4a882]/20 shadow-[0_25px_80px_rgba(42,31,20,0.25)] overflow-hidden"
            style={{ maxHeight: "min(600px, calc(100vh - 6rem))" }}
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* ── Header ── */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#2a1f14] border-b border-[#c4a882]/15 flex-shrink-0">
              <div className="relative">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#c4a882]/40">
                  <Image
                    src="/images/real/jess-portrait.jpg"
                    alt="Jess AI Assistant"
                    width={36}
                    height={36}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Online dot */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#1a9a8a] border-2 border-[#2a1f14]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-[#faf6ef] tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                    Jess
                  </h3>
                  <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[#1a9a8a]/20 border border-[#1a9a8a]/30">
                    <Sparkles className="w-2.5 h-2.5 text-[#1a9a8a]" />
                    <span className="text-[9px] font-medium text-[#1a9a8a] tracking-wider uppercase">AI</span>
                  </span>
                </div>
                <p className="text-[11px] text-[#c4a882] tracking-wide">Green Stripe AI Assistant</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-[#c4a882]" />
              </button>
            </div>

            {/* ── Messages ── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0" style={{ scrollbarWidth: "thin", scrollbarColor: "#c4a882 transparent" }}>
              {messages.map((msg) => (
                <ChatBubble key={msg.id} message={msg} />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* ── Quick Suggestions (only if ≤1 messages) ── */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex-shrink-0">
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSend(s)}
                      className="group/pill flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium text-[#5a4a38] bg-[#ece5d8] hover:bg-[#1a9a8a] hover:text-white rounded-full border border-[#c4a882]/15 hover:border-[#1a9a8a] transition-all duration-300"
                    >
                      <ArrowRight className="w-2.5 h-2.5 opacity-0 -ml-2 group-hover/pill:opacity-100 group-hover/pill:ml-0 transition-all duration-300" />
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Input ── */}
            <div className="px-3 py-3 border-t border-[#c4a882]/10 bg-[#f5f0e8] flex-shrink-0">
              <div className="flex items-center gap-2 bg-white rounded-xl border border-[#c4a882]/15 focus-within:border-[#1a9a8a]/40 focus-within:shadow-[0_0_0_3px_rgba(26,154,138,0.08)] transition-all duration-300 px-3 py-2">
                <Leaf className="w-4 h-4 text-[#c4a882]/50 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about our services..."
                  className="flex-1 text-[13px] text-[#2a1f14] placeholder:text-[#5a4a38]/40 bg-transparent outline-none"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#1a9a8a] hover:bg-[#22b8a5] disabled:bg-[#c4a882]/20 disabled:cursor-not-allowed transition-colors duration-300"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
              <p className="text-center text-[9px] text-[#5a4a38]/40 mt-1.5 tracking-wide">
                Powered by Green Stripe · <span className="text-[#1a9a8a]/50">AI responses are informational only</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
