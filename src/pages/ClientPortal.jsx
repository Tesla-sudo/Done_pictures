// src/pages/ClientPortal.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Calendar,
  Camera,
  MessageSquare,
  Send,
  CheckCircle,
  XCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "254717546693"; // +254717546693 without the +

export default function ClientPortal() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("booking");

  // ==== Form states ====
  const [shootType, setShootType] = useState("");
  const [shootDate, setShootDate] = useState("");
  const [description, setDescription] = useState("");
  const [feedback, setFeedback] = useState("");

  // ==== UI states ====
  const [message, setMessage] = useState(null); // {type:'success'|'error', text:string}
  const [isLoading, setIsLoading] = useState(false);

  // ---- Toast helper ----
  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  // ---- Build WhatsApp text ----
  const buildWhatsAppMessage = (type, data) => {
    if (type === "booking") {
      return `
*New Booking Request*

*Client:* ${data.clientName}
*Email:* ${data.clientEmail}
*Shoot Type:* ${data.shootType}
*Date:* ${data.shootDate}
*Details:* ${data.description}
      `.trim();
    } else {
      return `
*New Feedback*

*Client:* ${data.clientName}
*Email:* ${data.clientEmail}
*Message:* ${data.message}
      `.trim();
    }
  };

  // ==== Booking submit ====
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const bookingData = {
      clientName: user?.name || "Guest",
      clientEmail: user?.email || "Email not available",
      shootType,
      shootDate,
      description,
    };

    try {
      const waText = encodeURIComponent(buildWhatsAppMessage("booking", bookingData));
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

      // Open WhatsApp – admin just taps “Send”
      window.open(waUrl, "_blank", "noopener,noreferrer");

      showMessage(
        "success",
        "WhatsApp opened – please tap **Send** to forward the booking."
      );

      // Reset form
      setShootType("");
      setShootDate("");
      setDescription("");
    } catch (err) {
      console.error(err);
      showMessage("error", "Could not open WhatsApp. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // ==== Feedback submit ====
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const feedbackData = {
      clientName: user?.name || "Guest",
      clientEmail: user?.email || "Email not available",
      message: feedback,
    };

    try {
      const waText = encodeURIComponent(
        buildWhatsAppMessage("feedback", feedbackData)
      );
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

      window.open(waUrl, "_blank", "noopener,noreferrer");

      showMessage(
        "success",
        "WhatsApp opened – please tap **Send** to forward the feedback."
      );

      setFeedback("");
    } catch (err) {
      console.error(err);
      showMessage("error", "Could not open WhatsApp. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // ==== Render ====
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 text-black">
          <h2 className="text-3xl md:text-4xl font-bold">
            Welcome,{" "}
            <span className="underline decoration-2 underline-offset-4">
              {user?.name || "Client"}
            </span>
          </h2>
          <p className="mt-2 text-yellow-900 font-medium">
            Book a shoot or send feedback — **via WhatsApp**
          </p>
        </div>

        <div className="p-8">
          {/* Toast */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center gap-3 p-4 rounded-xl mb-6 ${
                message.type === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <XCircle className="w-6 h-6" />
              )}
              <span className="font-medium">{message.text}</span>
            </motion.div>
          )}

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              {
                id: "booking",
                label: "Book a Shoot",
                icon: <Calendar className="w-5 h-5" />,
              },
              {
                id: "feedback",
                label: "Send Feedback",
                icon: <MessageSquare className="w-5 h-5" />,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMessage(null);
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all shadow-sm ${
                  activeTab === tab.id
                    ? "bg-yellow-400 text-black shadow-yellow-400/50"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* ==== Booking Form ==== */}
          {activeTab === "booking" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Camera className="w-7 h-7 text-yellow-500" />
                Book a Shoot
              </h3>

              <form onSubmit={handleBookingSubmit} className="space-y-6 max-w-2xl">
                {/* Shoot Type */}
                <div className="relative">
                  <select
                    value={shootType}
                    onChange={(e) => setShootType(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none cursor-pointer transition text-gray-700"
                  >
                    <option value="" disabled>
                      Select Shoot Type
                    </option>
                    <option>Wedding</option>
                    <option>Event</option>
                    <option>Documentary</option>
                    <option>Music Video</option>
                    <option>Promotional</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <input
                    type="date"
                    value={shootDate}
                    onChange={(e) => setShootDate(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                  />
                </div>

                {/* Description */}
                <div>
                  <textarea
                    placeholder="Location, style, special requests, guest count..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none transition placeholder-gray-400"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full transition transform hover:scale-105 shadow-lg disabled:bg-gray-300 disabled:shadow-none"
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {isLoading ? "Opening…" : "Send via WhatsApp"}
                </button>
              </form>
            </motion.div>
          )}

          {/* ==== Feedback Form ==== */}
          {activeTab === "feedback" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <MessageSquare className="w-7 h-7 text-yellow-500" />
                Send Feedback
              </h3>

              <form onSubmit={handleFeedbackSubmit} className="space-y-6 max-w-2xl">
                <textarea
                  placeholder="Your experience, suggestions, or any questions..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none transition placeholder-gray-400"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full transition transform hover:scale-105 shadow-lg disabled:bg-gray-300 disabled:shadow-none"
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {isLoading ? "Opening…" : "Send via WhatsApp"}
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}