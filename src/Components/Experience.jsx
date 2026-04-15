// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const experiences = [
  {
    role: "UI/UX Designer",
    company: "Freelance",
    period: "2024 - Present",
    desc: "Designing modern web and mobile interfaces for startups and personal brands with focus on usability and visual clarity.",
  },
  {
    role: "Junior UI Designer",
    company: "Creative Studio",
    period: "2023 - 2024",
    desc: "Worked on landing pages, dashboards and mobile UI projects. Improved design systems and user experience flows.",
  },
  {
    role: "Web Designer Intern",
    company: "Digital Agency",
    period: "2023",
    desc: "Assisted in UI design, wireframing and responsive web design. Learned real-world product design workflow.",
  },
];

const Experience = () => {
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
            Experience
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#3A3A3A]">
            My Professional Journey
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-[#6B7280]">
            A brief overview of my design experience, growth and hands-on work
            in UI/UX and product design.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="mt-20 relative">

          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-pink-100"></div>

          <div className="space-y-16">

            {experiences.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ${
                  i % 2 === 0 ? "" : "md:flex-row-reverse text-left md:text-right"
                }`}
              >

                {/* DOT */}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#E89CB0] text-white flex items-center justify-center font-semibold shadow-md">
                    0{i + 1}
                  </div>
                </div>

                {/* CARD */}
                <div className="bg-white/70 backdrop-blur-xl border border-pink-100 rounded-2xl p-6 shadow-md max-w-md">

                  <h3 className="text-lg font-semibold text-[#3A3A3A]">
                    {item.role}
                  </h3>

                  <p className="text-sm text-[#E89CB0] font-medium mt-1">
                    {item.company} • {item.period}
                  </p>

                  <p className="mt-3 text-sm text-[#6B7280] leading-relaxed">
                    {item.desc}
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

export default Experience;