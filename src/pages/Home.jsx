// src/pages/Home.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cameraImg from "../assets/hero-videography.jpeg";
import natureImg from "../assets/done5.jpeg";
import { Instagram, Mail, Phone } from "lucide-react";

const HERO_IMAGE = cameraImg;

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Nature videography in action"
            className="h-full w-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 font-medium tracking-widest text-yellow-400 uppercase text-xs md:text-sm"
          >
            Capture • Edit • Inspire
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Welcome to{' '}
            <span className="text-yellow-500">Done Pictures</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-base md:text-lg text-gray-200 drop-shadow-md"
          >
            Professional videography and editing for your perfect moment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="rounded-full bg-yellow-500 px-8 py-3 font-semibold text-black transition hover:bg-yellow-400"
            >
              Explore Services
            </a>
            <Link
              to="/register"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-4xl font-bold text-gray-900"
          >
            Our Services
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {["Weddings", "Corporate", "Creative Reels"].map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="rounded-xl bg-white p-8 shadow-lg"
              >
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center">
                  <span className="text-2xl">Camera</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service}</h3>
                <p className="text-gray-600">
                  Cinematic storytelling tailored to your vision.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nature Videography Story Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nature is My Canvas
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At <span className="font-semibold text-yellow-600">Done Pictures</span>, we specialize in{" "}
                <strong>nature videography</strong> — capturing the raw beauty of landscapes, wildlife, and
                untouched environments with cinematic precision.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From sunrise over the savanna to waterfalls in hidden forests, we bring the soul of the wild to life
                through storytelling, color grading, and sound design that feels as real as being there.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether it's a conservation documentary, eco-tourism promo, or personal adventure reel —{" "}
                <em>we don’t just record nature, we honor it.</em>
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={natureImg}
                alt="Nature videography by Done Pictures"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Compact Footer – Mobile-First */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center text-xs md:text-sm"
          >
            {/* Contact Info – 1 or 2 lines */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mb-2">
              <a
                href="tel:+254717546693"
                className="flex items-center gap-1 hover:text-yellow-400 transition"
              >
                <Phone className="w-3 h-3" />
                +254 717 546 693
              </a>
              <span className="hidden sm:inline text-gray-600">•</span>
              <a
                href="mailto:evansmuholo14@gmail.com"
                className="flex items-center gap-1 hover:text-yellow-400 transition"
              >
                <Mail className="w-3 h-3" />
                evansmuholo14@gmail.com
              </a>
              <span className="hidden sm:inline text-gray-600">•</span>
              <a
                href="https://instagram.com/donepictures"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-yellow-400 transition"
              >
                <Instagram className="w-3 h-3" />
                @donepictures
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Done Pictures. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}