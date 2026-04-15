// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaFigma,
  FaPaintBrush,
  FaPenNib,
  FaLaptopCode,
  FaSearch,
  FaRegLightbulb,
} from "react-icons/fa";

const skillsData = [
  {
    icon: <FaFigma />,
    title: "UI Design",
    desc: "Clean, modern and user-centered interface design using Figma.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Visual Design",
    desc: "Soft color systems, typography and aesthetic layouts.",
  },
  {
    icon: <FaPenNib />,
    title: "UX Research",
    desc: "User behavior analysis and problem solving for better experience.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Prototyping",
    desc: "Interactive prototypes for real product feeling and flow.",
  },
  {
    icon: <FaSearch />,
    title: "Usability Testing",
    desc: "Testing designs with real users for improvement.",
  },
  {
    icon: <FaRegLightbulb />,
    title: "Creative Thinking",
    desc: "Innovative ideas for unique and modern UI solutions.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#FFF7F9]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#E89CB0] font-medium text-sm md:text-base">
            My Expertise
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#3A3A3A] leading-snug">
            I design calm, meaningful & human-centered digital experiences
          </h2>

          <p className="mt-5 md:mt-6 max-w-xl mx-auto text-sm sm:text-base text-[#6B7280] leading-relaxed">
            I am a UI/UX designer focused on simplicity, clarity and emotional
            design. My goal is to make digital products feel natural, effortless
            and beautiful.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="
                relative p-7
                bg-white/70 backdrop-blur-xl
                rounded-[30px]
                shadow-[0_10px_40px_rgba(232,156,176,0.15)]
                border border-pink-100
                overflow-hidden
              "
            >
              {/* soft decorative blob */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl"></div>

              {/* Icon */}
              <div className="text-3xl text-[#E89CB0] mb-4 relative">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#3A3A3A]">
                {skill.title}
              </h3>

              {/* Desc */}
              <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;