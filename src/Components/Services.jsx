// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaFigma,
  FaPaintBrush,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="py-28 bg-[#FFF7F9]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT (Story Section) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#E89CB0] font-medium">
            My Services
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#3A3A3A] leading-snug">
            I design digital products that feel soft, modern & meaningful
          </h2>

          <p className="mt-5 text-[#6B7280] leading-relaxed">
            I don’t just design screens — I design experiences.
            Every project focuses on clarity, emotional connection and usability.
            My goal is to make interfaces feel effortless and human.
          </p>

          {/* highlight points */}
          <div className="mt-6 space-y-3 text-sm text-[#6B7280]">
            <p>✔ Clean UI systems with strong visual hierarchy</p>
            <p>✔ User-focused UX flow and interaction design</p>
            <p>✔ Modern, minimal and emotional design approach</p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT (Feature Blocks) */}
        <div className="space-y-6">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-4 p-5 bg-white/70 backdrop-blur-xl rounded-2xl shadow-md border border-pink-100"
          >
            <FaFigma className="text-[#E89CB0] text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-[#3A3A3A]">UI Design</h3>
              <p className="text-sm text-[#6B7280]">
                Modern interface design using Figma with clean structure.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-4 p-5 bg-white/70 backdrop-blur-xl rounded-2xl shadow-md border border-pink-100"
          >
            <FaPaintBrush className="text-[#E89CB0] text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-[#3A3A3A]">Visual Design</h3>
              <p className="text-sm text-[#6B7280]">
                Soft color systems, typography and aesthetic layout building.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4 p-5 bg-white/70 backdrop-blur-xl rounded-2xl shadow-md border border-pink-100"
          >
            <FaLaptopCode className="text-[#E89CB0] text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-[#3A3A3A]">Web Design</h3>
              <p className="text-sm text-[#6B7280]">
                Responsive website design with modern UI systems.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex gap-4 p-5 bg-white/70 backdrop-blur-xl rounded-2xl shadow-md border border-pink-100"
          >
            <FaMobileAlt className="text-[#E89CB0] text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-[#3A3A3A]">Mobile UI</h3>
              <p className="text-sm text-[#6B7280]">
                Clean mobile app interfaces optimized for usability.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;