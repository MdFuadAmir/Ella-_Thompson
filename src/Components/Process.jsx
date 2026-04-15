// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Research & Understand",
    desc: "I start by understanding the problem, user needs and business goals. This helps define the right direction for the design.",
  },
  {
    number: "02",
    title: "Wireframing & Structure",
    desc: "I create low-fidelity wireframes to define layout, structure and user flow before moving into visuals.",
  },
  {
    number: "03",
    title: "UI Design & Visual System",
    desc: "I design clean and modern interfaces with a strong focus on typography, color system and consistency.",
  },
  {
    number: "04",
    title: "Prototype & Interaction",
    desc: "I build interactive prototypes to simulate real user experience and test usability before development.",
  },
  {
    number: "05",
    title: "Testing & Improvement",
    desc: "I test with users, collect feedback and refine the design to make it more intuitive and effective.",
  },
];

const Process = () => {
  return (
    <section className="py-28 bg-[#FFF7F9] relative overflow-hidden">

      {/* background glow */}
      <div className="absolute w-72 h-72 bg-[#FAD4DC] blur-[120px] rounded-full -top-24 -left-24" />
      <div className="absolute w-72 h-72 bg-[#F7C6D0] blur-[120px] rounded-full -bottom-24 -right-24" />

      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#E89CB0] font-medium text-sm">
            My Process
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#3A3A3A]">
            How I Design Digital Experiences
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-[#6B7280]">
            A structured workflow that ensures every project is user-focused,
            clean and meaningful from idea to final product.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="mt-20 relative">

          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-pink-100"></div>

          <div className="space-y-16">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:flex-row-reverse text-left md:text-right"
                }`}
              >

                {/* DOT */}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#E89CB0] text-white flex items-center justify-center font-semibold shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="bg-white/70 backdrop-blur-xl border border-pink-100 rounded-2xl p-6 shadow-md max-w-md">
                  <h3 className="text-lg font-semibold text-[#3A3A3A]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;