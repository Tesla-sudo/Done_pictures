// src/pages/About.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import camers from "../assets/camers.JPG";
import { Camera, Film, Sparkles, Heart, Mountain, Leaf, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import done5 from "../assets/done5.jpg"; // Your brightest nature hero shot

const founderImg = camers;;

export default function About() {
  return (
    <>
      {/* Hero Section - Your Own Bright Nature Shot */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700">
        <div className="absolute inset-0">
          <img
            src={done5}
            alt="Evans Muholo capturing nature"
            className="w-full h-full object-cover brightness-110 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-2xl">
            We Tell <span className="text-yellow-400">Nature’s</span> Stories
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-lg max-w-2xl mx-auto">
            Student passion. Cinematic mastery. Unforgettable films.
          </p>
        </motion.div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={founderImg}
                alt="Evans Muholo – Founder"
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <p className="text-lg font-semibold">Dan Mburu</p>
                <p className="text-sm opacity-90">Founder & Lead Videographer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">Meet Dan</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm <span className="font-semibold text-yellow-600">Dan Mburu</span> , a university student who traded textbooks for tripods and lecture halls for hidden forests.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What began as filming sunrises on campus has evolved into <span className="font-medium">Done Pictures</span>  a love letter to nature, captured in 4K, edited with soul, and delivered with pride.
            </p>
            <p className="text-gray-600 italic">
              “Every landscape has a voice. My job is to help it speak.”
            </p>
            <div className="flex gap-3 text-sm">
              <span className="flex items-center gap-1 text-green-600">
                <Leaf className="w-4 h-4" /> Nature-First
              </span>
              <span className="flex items-center gap-1 text-yellow-600">
                <Zap className="w-4 h-4" /> Student Hustle
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values – Nature-Centric */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-16"
          >
            Our Promise to You (and the Planet)
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Mountain className="w-9 h-9" />,
                title: "Nature-First Filmmaking",
                desc: "Low-impact shoots. Zero trace left behind.",
              },
              {
                icon: <Film className="w-9 h-9" />,
                title: "Cinematic Storytelling",
                desc: "Every frame feels like a memory.",
              },
              {
                icon: <Palette className="w-9 h-9" />,
                title: "Hand-Crafted Edits",
                desc: "Color, sound, emotion — all tuned by hand.",
              },
              {
                icon: <Heart className="w-9 h-9" />,
                title: "Student Pricing",
                desc: "Pro gear. Pro results. 50% of agency rates.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="text-yellow-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear & Process (Optional but Powerful) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900">Tools of the Trade</h2>
            <p className="text-lg text-gray-600 mt-3">Pro gear. Student heart.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { name: "Canon R5", desc: "50MP stills + 8K video", icon: <Camera /> },
              { name: "DJI Mini 3 Pro", desc: "Silent drone, epic skies", icon: <Sparkles /> },
              { name: "Adobe Suite", desc: "Premiere, After Effects, Lightroom", icon: <Palette /> },
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl"
              >
                <div className="text-yellow-600 mb-3">{tool.icon}</div>
                <h4 className="font-bold text-gray-900">{tool.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - WhatsApp + Portfolio */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Capture Your Story
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-medium">
            From epic nature films to framed portraits — your vision deserves the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254717546693?text=Hi Evans! I'd love to book a nature shoot or portrait session."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition shadow-lg"
            >
              Book via WhatsApp
            </a>
            <Link
              to="/portfolio"
              className="border-2 border-black px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}