// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaFigma,
  FaPaintBrush,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import Title from "../Utils/Title";

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      className="relative py-24 bg-[#f8f3f3] dark:bg-[#1C1014] overflow-hidden border-b border-gray-200 dark:border-gray-600/50"
    >
      {/* soft background like hero/about */}
      <div className="absolute w-96 h-96 bg-[#FBD5E0]/30 dark:bg-[#4A1D28]/20 rounded-full -top-20 -left-20 -z-10" />
      <div className="absolute w-80 h-80 bg-[#FCE7EE]/40 dark:bg-[#3D141F]/30 rounded-full -bottom-20 -right-20 -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <Title
          icon={FaGear}
          subtitle="My Services"
          title="I design digital products that feel"
          highlight="soft, modern & meaningful"
          desc="I focus on crafting clean UI systems, emotional UX flows and modern interfaces that feel effortless and human-centered."
          animation="spin"
        />

        {/* CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid md:grid-cols-2 gap-12 items-start"
        >
          {/* LEFT STORY */}
          <div>
            <motion.h3
              variants={item}
              className="text-2xl md:text-3xl font-semibold text-[#3A3A3A] dark:text-[#F7EBEF] leading-snug"
            >
              Design is not just visuals — it’s{" "}
              <span className="text-[#DE7390]">experience & emotion</span>.
            </motion.h3>

            <motion.p
              variants={item}
              className="mt-6 text-gray-500 dark:text-[#CBB5BC] text-sm sm:text-base leading-relaxed"
            >
              Every interface I create is built with clarity, usability and
              emotional impact. My goal is to make digital products feel simple
              and intuitive for real users.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 space-y-2 text-sm text-gray-500 dark:text-[#CBB5BC]"
            >
              <p>✔ Clean UI systems with strong hierarchy</p>
              <p>✔ UX focused interaction design</p>
              <p>✔ Modern minimal aesthetic approach</p>
            </motion.div>
          </div>

          {/* RIGHT SERVICES (NO BOXY LOOK — CLEAN ROW DESIGN) */}
          <div className="space-y-10">
            {/* ITEM 1 */}
            <motion.div variants={item} className="flex gap-4 group">
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-[#DE7390] text-2xl mt-1 group-hover:scale-110 transition"
              >
                <FaFigma />
              </motion.div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold text-[#3A3A3A] dark:text-[#F7EBEF] group-hover:text-[#DE7390] transition">
                  UI Design
                </h4>
                <p className="text-sm text-gray-500 dark:text-[#CBB5BC] mt-2 leading-relaxed">
                  Clean and structured interface design using Figma with modern
                  UI systems.
                </p>
              </div>
            </motion.div>

            {/* ITEM 2 */}
            <motion.div variants={item} className="flex gap-4 group">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-[#DE7390] text-2xl mt-1 group-hover:scale-110 transition"
              >
                <FaPaintBrush />
              </motion.div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold text-[#3A3A3A] dark:text-[#F7EBEF] group-hover:text-[#DE7390] transition">
                  Visual Design
                </h4>
                <p className="text-sm text-gray-500 dark:text-[#CBB5BC] mt-2 leading-relaxed">
                  Soft color systems, typography and aesthetic layout building
                  with harmony.
                </p>
              </div>
            </motion.div>

            {/* ITEM 3 */}
            <motion.div variants={item} className="flex gap-4 group">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-[#DE7390] text-2xl mt-1 group-hover:scale-110 transition"
              >
                <FaLaptopCode />
              </motion.div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold text-[#3A3A3A] dark:text-[#F7EBEF] group-hover:text-[#DE7390] transition">
                  Web Design
                </h4>
                <p className="text-sm text-gray-500 dark:text-[#CBB5BC] mt-2 leading-relaxed">
                  Responsive and modern website design focused on usability and
                  performance.
                </p>
              </div>
            </motion.div>

            {/* ITEM 4 */}
            <motion.div variants={item} className="flex gap-4 group">
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-[#DE7390] text-2xl mt-1 group-hover:scale-110 transition"
              >
                <FaMobileAlt />
              </motion.div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold text-[#3A3A3A] dark:text-[#F7EBEF] group-hover:text-[#DE7390] transition">
                  Mobile UI
                </h4>
                <p className="text-sm text-gray-500 dark:text-[#CBB5BC] mt-2 leading-relaxed">
                  Mobile-first interface design optimized for smooth user
                  experience.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
