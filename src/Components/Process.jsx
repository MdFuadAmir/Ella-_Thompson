// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaRoute } from "react-icons/fa";
import Title from "../Utils/Title";

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
    <section
      id="process"
      className="py-24 md:py-28 bg-[#f8f3f3] dark:bg-[#1C1014] relative overflow-hidden border-b border-gray-200 dark:border-gray-600/50"
    >
      {/* Background */}
      <div className="absolute w-72 h-72 bg-[#FBD5E0]/30 dark:bg-[#4A1D28]/20 blur-[120px] rounded-full -top-24 -left-24" />
      <div className="absolute w-72 h-72 bg-[#FCE7EE]/30 dark:bg-[#3D141F]/20 blur-[120px] rounded-full -bottom-24 -right-24" />

      <div className="max-w-5xl mx-auto px-6">
        {/* HEADER */}
        
        <Title
          icon={FaRoute}
          subtitle="My Process"
          title="How I Design Digital "
          highlight="Experiences"
          desc="A structured workflow that ensures every project is user-focused,
            clean and meaningful from idea to final product."
          animation="rotate"
        />

        {/* TIMELINE */}
        <div className="mt-20 relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-[#F7D6E0] dark:bg-[#522531] block md:hidden"></div>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                  i % 2 === 0
                    ? ""
                    : "md:flex-row-reverse text-left md:text-right"
                }`}
              >
                {/* DOT */}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#DE7390] dark:bg-[#C95B79] text-white flex items-center justify-center font-semibold shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* CONTENT */}
                <motion.div
                  whileHover={{
                    y: -6,
                    boxShadow: "0 12px 28px rgba(222,115,144,0.12)",
                  }}
                  className="bg-white/80 dark:bg-[#2A181D] backdrop-blur-xl border border-[#F7D6E0] dark:border-[#522531] rounded-2xl p-6 shadow-sm max-w-md transition-all duration-300 -mt-6 md:mt-0 ml-6"
                >
                  <h3 className="text-lg font-semibold text-[#3A3A3A] dark:text-[#F7EBEF]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 dark:text-[#CBB5BC] leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
