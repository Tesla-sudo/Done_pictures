// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Sticky shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/services", label: "Services" },
  ];

  // No TypeScript: just use simple comparison
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center gap-2 text-2xl font-black text-yellow-400 tracking-tight"
            >
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="inline-block"
              >
                
              </motion.span>
              <span className="transition group-hover:text-yellow-300">
                Done Pictures
              </span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="relative text-sm font-medium transition-colors duration-200"
                  >
                    <span
                      className={`${
                        isActive(link.to)
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                    {isActive(link.to) && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"
                      />
                    )}
                  </Link>
                </li>
              ))}

              {/* Auth Buttons */}
              {user ? (
                <>
                  <li>
                    <Link
                      to="/portal"
                      className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-bold text-sm hover:bg-yellow-500 transition transform hover:scale-105 shadow-md"
                    >
                      Client Portal
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="text-gray-300 hover:text-red-400 transition text-sm font-medium"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-bold text-sm hover:bg-yellow-500 transition transform hover:scale-105 shadow-md"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full font-bold text-sm hover:bg-yellow-400 hover:text-gray-900 transition"
                    >
                      Get in Touch
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-gray-800 border-t border-gray-700"
            >
              <ul className="px-4 py-5 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-lg text-lg font-medium transition ${
                        isActive(link.to)
                          ? "bg-yellow-400 text-gray-900"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* Mobile Auth */}
                {user ? (
                  <>
                    <li>
                      <Link
                        to="/portal"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
                      >
                        Client Portal
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                        className="w-full bg-red-600 py-3 rounded-lg font-bold hover:bg-red-700 transition"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center border border-yellow-400 text-yellow-400 py-3 rounded-lg font-bold hover:bg-yellow-400 hover:text-gray-900 transition"
                      >
                        Get in Touch
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/254717546693?text=Hi! I'd love to book a shoot or get a quote."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2Dashboard hover:bg-green-600 transition transform hover:scale-110"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={28} />
      </motion.a>
    </>
  );
}