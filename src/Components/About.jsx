// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#FFF9FB] relative overflow-hidden">
      {/* soft background */}
      <div className="absolute w-96 h-96 bg-[#FCE7EE] rounded-full blur-3xl -top-20 -left-20 -z-10" />
      <div className="absolute w-80 h-80 bg-[#F6B3C6]/20 rounded-full blur-3xl -bottom-25 -right-20 -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#E9A6B8] font-medium">About Me</p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#3A3A3A] mt-3">
            I design experiences that feel simple, soft & meaningful
          </h2>

          <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            I am a UI/UX Designer who focuses on human-centered design. My goal
            is to make digital products easy, emotional and enjoyable to use.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* LEFT - DESIGN PROCESS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white border border-[#F7D6E0] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[#3A3A3A]">
                🎯 Understand
              </h3>
              <p className="text-[#6B7280] text-sm mt-2">
                I start by understanding user problems, business goals and
                audience needs.
              </p>
            </div>

            <div className="bg-white border border-[#F7D6E0] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[#3A3A3A]">
                ✏️ Design
              </h3>
              <p className="text-[#6B7280] text-sm mt-2">
                I create wireframes, UI layouts and interactive prototypes with
                Figma.
              </p>
            </div>

            <div className="bg-white border border-[#F7D6E0] rounded-2xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[#3A3A3A]">
                🚀 Improve
              </h3>
              <p className="text-[#6B7280] text-sm mt-2">
                I test, iterate and refine designs to improve usability and
                experience.
              </p>
            </div>
          </motion.div>

          {/* RIGHT - PERSONAL STORY */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-[#F7D6E0] rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-[#3A3A3A]">
              My Design Philosophy
            </h3>

            <p className="text-[#6B7280] mt-4 leading-relaxed text-sm sm:text-base">
              I believe good design is invisible. It should not confuse users,
              instead guide them naturally. I always try to balance aesthetics
              with usability.
            </p>

            <p className="text-[#6B7280] mt-4 leading-relaxed text-sm sm:text-base">
              Every project I work on is driven by empathy, simplicity and
              attention to detail. I don’t just design screens — I design
              experiences.
            </p>

            {/* highlight quote */}
            <div className="mt-6 p-4 bg-[#FCE7EE] border border-[#F7D6E0] rounded-xl">
              <p className="text-[#3A3A3A] text-sm font-medium">
                “Design is not what it looks like — it’s how it works.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
