// src/pages/Services.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Check, Camera, Sparkles, Clock, Users, Star, Frame } from "lucide-react";
import done5 from "../assets/done5.jpeg"; // Bright hero image

const services = [
  {
    title: "Event Videography",
    icon: <Camera className="w-8 h-8" />,
    price: "From KES 50,000",
    features: [
      "Full-day coverage",
      "4K cinematic footage",
      "Drone shots",
      "5–7 min highlight reel",
    ],
    popular: true,
  },
  {
    title: "Nature Portraits",
    icon: <Frame className="w-8 h-8" />,
    price: "From KES 500",
    subPrice: "Framed: KES 1,000",
    features: [
      "High-res digital print",
      "Professional color grading",
      "Unframed or premium framed",
      "Delivery in 24h",
    ],
    popular: false,
  },
  {
    title: "Promotional Videos",
    icon: <Sparkles className="w-8 h-8" />,
    price: "From KES 50,000",
    features: [
      "Brand storytelling",
      "Social media optimized",
      "Script + storyboard",
      "High quality final cut",
    ],
    popular: false,
  },
];

export default function Services() {
  return (
    <>
      {/* Hero Section - Bright & Stunning */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600">
        <div className="absolute inset-0">
          <img
            src={done5}
            alt="Nature Videography & Portraits"
            className="w-full h-full object-cover brightness-110 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-2xl">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-lg">
            Cinematic nature films & stunning framed portraits.
          </p>
        </motion.div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 ${
                  service.popular ? "border-yellow-500" : "border-transparent"
                }`}
              >
                {service.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    MOST POPULAR
                  </span>
                )}

                <div className="text-yellow-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                {/* Price */}
                <p className="text-3xl font-bold text-yellow-600 mb-1">
                  {service.price}
                </p>
                {service.subPrice && (
                  <p className="text-sm text-gray-600 mb-6 italic">
                    {service.subPrice}
                  </p>
                )}

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/254717546693?text=Hi! I'd like to book *${encodeURIComponent(
                    service.title
                  )}* – ${encodeURIComponent(service.price)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-3 rounded-full font-bold transition transform hover:scale-105 ${
                    service.popular
                      ? "bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg"
                      : "bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-900 hover:to-gray-800"
                  }`}
                >
                  Book via WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-12"
          >
            Why Choose Done Pictures?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-10 h-10" />,
                title: "Fast Delivery",
                desc: "Portraits in 24h, films in 48h.",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Nature-First",
                desc: "Every shoot honors the environment.",
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: "Premium Quality",
                desc: "Pro gear, cinematic results.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6"
              >
                <div className="text-yellow-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Capture Nature?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-medium">
            From epic films to framed art — let’s create something unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254717546693?text=Hi! I saw your services and want to book a shoot."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition shadow-lg"
            >
              Book via WhatsApp
            </a>
            <a
              href="/portfolio"
              className="border-2 border-black px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}