// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import owner from "../assets/ella.png";
import { Link } from "react-scroll";
import { FaHandsClapping } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
// Intro Animations for Content Loading
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Subtle Floating Loop for Image Frame
const floatAnimation = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className=" flex items-center bg-[#f8f3f3] dark:bg-[#1C1014] relative overflow-hidden py-24 md:py-28 border-b border-gray-200 dark:border-gray-600/50"
    >
      {/* SOFT BACKGROUND (NO GLOW EFFECT - MIXED WITH LIGHT/DARK PINK ONBOARDING) */}
      <div className="absolute w-100 h-100 bg-[#FBD5E0]/40 dark:bg-[#4A1D28]/30 rounded-full -top-30 -left-30 -z-10" />
      <div className="absolute w-87.5 h-87.5 bg-[#FCE7EE]/50 dark:bg-[#3D141F]/40 rounded-full -bottom-30 -right-25 -z-10" />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        {/* RIGHT IMAGE (Mobile First: Displays on top on small screens) */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="flex justify-center md:order-2"
        >
          <motion.div
            variants={floatAnimation}
            animate="animate"
            className="max-w-90 h-fit bg-white dark:bg-[#2A181D] rounded-3xl shadow-md border border-[#F7D6E0] dark:border-[#522531] relative overflow-hidden"
          >
            <img
              src={owner}
              alt="Ella Thompson"
              className="w-full h-full object-cover"
            />

            {/* Soft Overlay (Fixed Blend) */}
            <div className="absolute inset-0 bg-linear-to-t from-white/60 dark:from-[#2A181D]/70 to-transparent" />

            {/* Floating Decoration Shapes (Controlled opacity without blur/glow) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-8 h-8 bg-[#FAD1DE]/60 dark:bg-[#662837]/60 rounded-full top-5 right-5 animate-ping [animation-duration:2s]"
            />

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute w-12 h-12 bg-[#FCE7EE]/70 dark:bg-[#541D2A]/70 rounded-full bottom-5 left-5"
            />

            {/* Name Tag */}
            <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-[#1C1014]/90 backdrop-blur px-3 py-2 rounded-xl border border-[#F7D6E0] dark:border-[#522531] transition-colors duration-300">
              <p className="text-[#3A3A3A] dark:text-[#F3D1DC] font-medium text-sm">
                Ella Thompson
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                UI/UX Designer
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="text-center md:text-left md:order-1"
        >
          {/* Greeting Badge */}
          <motion.p
            variants={fadeInUp}
            className="text-[#E9A6B8] dark:text-[#F29BB2] font-semibold text-sm sm:text-base tracking-wide flex items-center gap-2"
          >
            <FaHandsClapping className=" animate-pulse" />
            Hello, I’m Ella Thompson
          </motion.p>

          {/* Main Title (Fully Responsive with Smooth Dark/Light Color Accents) */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A3A3A] dark:text-[#F7EBEF] leading-tight mt-3"
          >
            UI/UX Designer crafting <br />
            <span className="text-[#DE7390] dark:text-[#EAA0B4]">
              soft & meaningful
            </span>{" "}
            experiences
          </motion.h1>

          {/* Subtitle / Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-500 dark:text-[#CBB5BC] mt-5 text-sm sm:text-base leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            I design elegant, user-friendly interfaces with a focus on
            simplicity, emotion and usability. Every design is crafted with love
            and purpose.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex gap-4 justify-center md:justify-start"
          >
            <a
              href="https://docs.google.com/document/d/12K2cXFu7bpCguwRwaytDKMEsww5fUsbcZP4UmAU-N6E/export?format=pdf"
              download
              className="px-6 py-3 rounded-full bg-[#F6B3C6] dark:bg-[#C95B79] text-white font-medium shadow-sm hover:scale-105 active:scale-95 transition-all text-center flex items-center gap-2 justify-center"
            >
              <FaDownload /> Download CV
            </a>

            <Link
              to="projects"
              className="cursor-pointer px-6 py-3 rounded-full border border-[#F7D6E0] dark:border-[#522531] text-[#3A3A3A] dark:text-[#E8D5DA] bg-transparent hover:bg-white dark:hover:bg-[#2A181D] transition-colors text-center font-medium"
            >
              View Projects
            </Link>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center md:justify-start gap-8 sm:gap-10 mt-10 border-t border-gray-100 dark:border-[#331C22] pt-6"
          >
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#3A3A3A] dark:text-[#EAD5DA]">
                20+
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Projects
              </p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#3A3A3A] dark:text-[#EAD5DA]">
                2+
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#3A3A3A] dark:text-[#EAD5DA]">
                15+
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Happy Clients
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
