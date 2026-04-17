// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import owner from "../../public/Images/ella.png";
import { Link } from "react-scroll";

const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#FFF9FB] relative overflow-hidden"
    >
      {/* SOFT BACKGROUND (FIXED - LOWER Z DEPTH) */}
      <div className="absolute w-100 h-100 bg-[#FBD5E0]/40 rounded-full blur-3xl -top-30 -left-30 -z-10" />
      <div className="absolute w-87.5 h-87.5 bg-[#FCE7EE]/50 rounded-full blur-3xl -bottom-30 -right-25 -z-10" />

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* RIGHT IMAGE (mobile first) */}
        <motion.div
          variants={floatAnimation}
          animate="animate"
          className="flex justify-center md:order-2"
        >
          <div className="w-62.5 sm:w-70 md:w-[320px] h-80 md:h-100 bg-white rounded-3xl shadow-md border border-[#F7D6E0] relative overflow-hidden">
            <img
              src={owner}
              alt="Ella Thompson"
              className="w-full h-full object-cover"
            />

            {/* soft overlay FIXED */}
            <div className="absolute inset-0 bg-linear-to-t from-white/60 to-transparent" />

            {/* floating decoration with animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-14 h-14 bg-[#FAD1DE]/60 rounded-full blur-xl top-5 right-5"
            />

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute w-12 h-12 bg-[#FCE7EE]/70 rounded-full blur-xl bottom-5 left-5"
            />

            {/* name tag */}
            <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur px-3 py-2 rounded-xl border border-[#F7D6E0]">
              <p className="text-[#3A3A3A] font-medium text-sm">
                Ella Thompson
              </p>
              <p className="text-xs text-gray-500">UI/UX Designer</p>
            </div>
          </div>
        </motion.div>

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left md:order-1">
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-[#E9A6B8] font-medium text-sm sm:text-base"
          >
            👋 Hello, I’m Ella Thompson
          </motion.p>

          <motion.h1
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#3A3A3A] leading-tight mt-3"
          >
            UI/UX Designer crafting <br />
            soft & meaningful experiences
          </motion.h1>

          <p className="text-gray-500 mt-5 text-sm sm:text-base leading-relaxed">
            I design elegant, user-friendly interfaces with a focus on
            simplicity, emotion and usability. Every design is crafted with love
            and purpose.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="https://docs.google.com/document/d/12K2cXFu7bpCguwRwaytDKMEsww5fUsbcZP4UmAU-N6E/export?format=pdf" download className="px-6 py-3 rounded-full bg-[#F6B3C6] text-white shadow-md hover:scale-105 transition">
              Download CV
            </a>

            <Link to="projects" className="cursor-pointer px-6 py-3 rounded-full border border-[#F7D6E0] text-[#3A3A3A] hover:bg-white transition">
              View Projects
            </Link>
          </div>

          {/* STATS */}
          <div className="flex justify-center md:justify-start gap-6 sm:gap-10 mt-10">
            <div>
              <p className="text-xl sm:text-2xl font-semibold text-[#3A3A3A]">
                20+
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Projects</p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl font-semibold text-[#3A3A3A]">
                2+
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Years</p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl font-semibold text-[#3A3A3A]">
                15+
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
