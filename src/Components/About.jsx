// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaUserPen, FaLightbulb, FaHeart } from "react-icons/fa6";
import Title from "../Utils/Title";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-28 bg-[#f8f3f3] dark:bg-[#1C1014] overflow-hidden border-b border-gray-200 dark:border-gray-600/50"
    >
      {/* SOFT BACKGROUND (same hero style) */}
      <div className="absolute w-96 h-96 bg-[#FBD5E0]/30 dark:bg-[#4A1D28]/20 rounded-full -top-20 -left-20 -z-10" />
      <div className="absolute w-80 h-80 bg-[#FCE7EE]/40 dark:bg-[#3D141F]/30 rounded-full -bottom-20 -right-20 -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <Title
          icon={FaUserPen}
          subtitle="About Me"
          title="Crafting thoughtful"
          highlight="digital experiences"
          desc="I am a UI/UX Designer focused on crafting human-centered,
            emotionally engaging digital experiences with simplicity and
            clarity."
          animation="pulse"
        />

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-14 items-center mt-16">
          {/* LEFT - STORY */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#3A3A3A] dark:text-[#F7EBEF] leading-snug">
              I believe design is not decoration — it’s{" "}
              <span className="text-[#DE7390]">communication</span>.
            </h3>

            <p className="mt-6 text-gray-500 dark:text-[#CBB5BC] text-sm sm:text-base leading-relaxed">
              My focus is on building intuitive interfaces that guide users
              naturally without confusion. Every pixel has purpose, and every
              interaction tells a story.
            </p>

            <p className="mt-4 text-gray-500 dark:text-[#CBB5BC] text-sm sm:text-base leading-relaxed">
              I combine UX research, visual design and interaction design to
              create products that feel simple, emotional and modern.
            </p>

            {/* FLOATING ICON (animated) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mt-10 flex items-center gap-3 text-[#DE7390]"
            >
              <FaHeart className="text-2xl" />
              <span className="text-sm text-gray-500 dark:text-[#CBB5BC]">
                Designed with passion & emotion
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT - NO BOX CARDS (PURE TYPOGRAPHY STYLE) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            {/* ITEM 1 */}
            <div className="flex gap-4 items-start group">
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-[#DE7390] text-2xl mt-1"
              >
                <FaUserPen />
              </motion.div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold text-[#3A3A3A] dark:text-[#F7EBEF] group-hover:text-[#DE7390] transition">
                  User First Approach
                </h4>
                <p className="text-gray-500 dark:text-[#CBB5BC] text-sm mt-2 leading-relaxed">
                  I design based on real user needs, not assumptions or trends.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex gap-4 items-start group">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-[#DE7390] text-2xl mt-1"
              >
                <FaLightbulb />
              </motion.div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold text-[#3A3A3A] dark:text-[#F7EBEF] group-hover:text-[#DE7390] transition">
                  Creative Thinking
                </h4>
                <p className="text-gray-500 dark:text-[#CBB5BC] text-sm mt-2 leading-relaxed">
                  Every design starts with exploration, ideas and structured
                  thinking.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex gap-4 items-start group">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-[#DE7390] text-2xl mt-1"
              >
                <FaHeart />
              </motion.div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold text-[#3A3A3A] dark:text-[#F7EBEF] group-hover:text-[#DE7390] transition">
                  Emotional Design
                </h4>
                <p className="text-gray-500 dark:text-[#CBB5BC] text-sm mt-2 leading-relaxed">
                  I create interfaces that feel soft, human and meaningful.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
