// src/pages/Portfolio.jsx
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Import all 17 local images
import done1 from "../assets/done1.jpg";
import done2 from "../assets/done2.jpeg";
import done3 from "../assets/done3.jpg";
import done4 from "../assets/done4.jpg";
import done5 from "../assets/done5.jpg";
import done6 from "../assets/done6.jpg";
import done7 from "../assets/done7.jpg";
import done8 from "../assets/done8.jpg";
import done9 from "../assets/done9.jpg";
import done10 from "../assets/done10.jpg";
import done11 from "../assets/done11.jpg";
import done12 from "../assets/done12.jpg";
import done13 from "../assets/done13.jpg";
import done14 from "../assets/done14.jpg";
import done15 from "../assets/done15.jpg";
import done16 from "../assets/done16.jpg";
import done17 from "../assets/done17.jpg";

// Portfolio data
const portfolioItems = [
  { id: 1, src: done1, title: "Golden Hour Safari" },
  { id: 2, src: done2, title: "Sunrise Bloom" },
  { id: 3, src: done3, title: "Savanna Sunset" },
  { id: 4, src: done4, title: "Forest Canopy" },
  { id: 5, src: done5, title: "Mountain Dawn" },
  { id: 6, src: done6, title: "Wildlife Portrait" },
  { id: 7, src: done7, title: "Coastal Drone" },
  { id: 8, src: done8, title: "Desert Bloom" },
  { id: 9, src: done9, title: "Rainforest Mist" },
  { id: 10, src: done10, title: "Lake Whispers" },
  { id: 11, src: done11, title: "Safari Adventure" },
  { id: 12, src: done12, title: "Birds in Flight" },
  { id: 13, src: done13, title: "Eco-Tourism Reel" },
  { id: 14, src: done14, title: "Conservation Story" },
  { id: 15, src: done15, title: "Behind the Lens" },
  { id: 16, src: done16, title: "Lunar Whisper" },
  { id: 17, src: done17, title: "Forest Vows" },
];

export default function Portfolio() {
  // eslint-disable-next-line no-unused-vars
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Hero Section - BRIGHT & BOLD */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400">
        <div className="absolute inset-0">
          <img
            src={done5} // Your brightest, most stunning shot
            alt="Done Pictures — Nature in Full Glory"
            className="w-full h-full object-cover opacity-90"
            onLoad={() => setLoaded(true)}
          />
          {/* Subtle animated overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl mb-4 tracking-tight">
            OUR <span className="text-yellow-300">WORK</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            Nature • Emotion • Cinematic
          </p>
        </motion.div>

        {/* Pulsing CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white"
          >
            Scroll to Explore
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Grid - All Images, No Filters */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -12, scale: 1.03 }}
                >
                  {/* Image */}
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                    />
                    
                    {/* Bright Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    
                    {/* Title on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-6 group-hover:translate-y-0 transition-all duration-400">
                      <h3 className="font-bold text-lg drop-shadow-md line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA - Bright & Fun */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            See More on Instagram
          </h2>
          <p className="text-xl mb-8 font-medium">
            Daily nature, behind-the-scenes, and cinematic magic.
          </p>
          <a
            href="https://instagram.com/donepictures"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-900 transition shadow-lg"
          >
            Follow @donepictures
          </a>
        </motion.div>
      </section>
    </>
  );
}