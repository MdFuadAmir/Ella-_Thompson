// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import Title from "../Utils/Title";

const experiences = [
  {
    role: "UI/UX Designer",
    company: "Freelance",
    period: "2024 - Present",
    desc: "Designing modern web and mobile interfaces for startups with strong focus on usability and visual storytelling.",
  },
  {
    role: "Junior UI Designer",
    company: "Creative Studio",
    period: "2023 - 2024",
    desc: "Worked on dashboards, SaaS UI, landing pages and improved design systems with structured UX flow.",
  },
  {
    role: "Web Design Intern",
    company: "Digital Agency",
    period: "2023",
    desc: "Assisted in real client projects, wireframing, responsive UI and learned production-level workflow.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-[#f8f3f3] dark:bg-[#1C1014] relative overflow-hidden border-b border-gray-200 dark:border-gray-600/50"
    >
      {/* background */}
      <div className="absolute w-80 h-80 bg-[#FBD5E0]/30 dark:bg-[#4A1D28]/20 blur-[120px] rounded-full -top-24 -left-24" />
      <div className="absolute w-80 h-80 bg-[#FCE7EE]/30 dark:bg-[#3D141F]/20 blur-[120px] rounded-full -bottom-24 -right-24" />

      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <Title
          icon={FaBriefcase}
          subtitle="Experience"
          title="My Professional "
          highlight="Journey"
          desc="A mix of real timeline growth and modern project-based experience in
            UI/UX design."
          animation="rotate"
        />

        {/* HYBRID LAYOUT */}
        <div className="relative mt-12">
          {/* center soft line (not strict timeline) */}
          <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-linear-to-b from-transparent via-pink-200/40 to-transparent"></div>

          <div className="space-y-14">
            {experiences.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* LEFT / RIGHT FLOAT CARD */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="
                      p-6 rounded-3xl
                      bg-white/80 dark:bg-[#2A181D]
                      backdrop-blur-xl
                      border border-[#F7D6E0] dark:border-[#522531]
                      shadow-md
                      relative overflow-hidden
                    "
                  >
                    {/* decorative dot */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FAD4DC]/40 dark:bg-[#4A1D28]/30 rounded-full blur-2xl" />

                    {/* role */}
                    <h3 className="text-lg font-semibold text-[#3A3A3A] dark:text-[#F7EBEF]">
                      {item.role}
                    </h3>

                    {/* company */}
                    <p className="text-sm font-medium text-[#E9A6B8] dark:text-[#F29BB2] mt-1">
                      {item.company} • {item.period}
                    </p>

                    {/* desc */}
                    <p className="mt-4 text-sm text-gray-500 dark:text-[#CBB5BC] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>

                {/* CENTER DOT (floating hybrid marker) */}
                <div className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-[#E89CB0] text-white font-semibold shadow-md z-10">
                  {i + 1}
                </div>

                {/* empty spacer for balance */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
