// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaPalette,
  FaFigma,
  FaSearch,
  FaLaptopCode,
  FaLayerGroup,
  FaRegLightbulb,
  FaToolbox,
} from "react-icons/fa";
import Title from "../Utils/Title";

const designSkills = [
  {
    title: "UI Design Systems",
    desc: "Creating elegant, scalable and visually consistent interfaces that feel polished and intuitive across digital products.",
  },
  {
    title: "UX Research & Strategy",
    desc: "Understanding user behavior, identifying friction points and transforming insights into thoughtful solutions.",
  },
  {
    title: "Wireframing & User Flow",
    desc: "Structuring user journeys with clarity to create effortless and natural product experiences.",
  },
  {
    title: "Interactive Prototyping",
    desc: "Designing realistic interactive flows that validate ideas before development begins.",
  },
];

const tools = [
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaSearch />, name: "UX Audit" },
  { icon: <FaLaptopCode />, name: "Prototype" },
  { icon: <FaLayerGroup />, name: "Systems" },
  { icon: <FaToolbox />, name: "Wireframe" },
  { icon: <FaPalette />, name: "Visual UI" },
  { icon: <FaRegLightbulb />, name: "Ideation" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 md:py-28 bg-[#f8f3f3] dark:bg-[#1C1014] relative overflow-hidden border-b border-gray-200 dark:border-gray-600/50"
    >
      {/* Background */}
      <div className="absolute w-96 h-96 bg-[#FBD5E0]/30 dark:bg-[#4A1D28]/20 rounded-full -top-20 -left-20 -z-10" />
      <div className="absolute w-80 h-80 bg-[#FCE7EE]/40 dark:bg-[#3D141F]/30 rounded-full -bottom-20 -right-20 -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <Title
          icon={FaPalette}
          subtitle="My Expertise"
          title="Skills & Creative"
          highlight="Tools"
          desc="A structured workflow that ensures every project is user-focused,
            clean and meaningful from idea to final product."
          animation="rotate"
        />

        {/* Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-16">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-10">
              <FaRegLightbulb className="text-[#DE7390]" />
              <h3 className="text-xl font-semibold text-[#3A3A3A] dark:text-[#F7EBEF]">
                Design Capabilities
              </h3>
            </div>

            <div className="space-y-10">
              {designSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10, y: -2 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <h4 className="text-lg font-semibold text-[#3A3A3A] dark:text-[#F7EBEF] group-hover:text-[#DE7390] dark:group-hover:text-[#EAA0B4] transition-colors duration-300">
                    {skill.title}
                  </h4>

                  <p className="mt-3 text-sm text-gray-500 dark:text-[#CBB5BC] leading-relaxed max-w-lg">
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-10">
              <FaToolbox className="text-[#DE7390]" />
              <h3 className="text-xl font-semibold text-[#3A3A3A] dark:text-[#F7EBEF]">
                Tools I Use
              </h3>
            </div>

            <div className="flex flex-wrap gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                    boxShadow: "0 12px 25px rgba(222,115,144,0.14)",
                  }}
                  className="px-5 py-4 rounded-2xl bg-white/80 dark:bg-[#2A181D] border border-[#F7D6E0] dark:border-[#522531] flex items-center gap-3 transition-all duration-300"
                >
                  <span className="text-[#DE7390] dark:text-[#EAA0B4] text-lg">
                    {tool.icon}
                  </span>

                  <p className="text-sm font-medium text-[#3A3A3A] dark:text-[#F7EBEF] whitespace-nowrap">
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
