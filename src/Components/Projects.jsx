import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../public/Images/p1.png";
import img2 from "../../public/Images/p2.png";
import img3 from "../../public/Images/p3.png";

const projects = [
  {
    title: "Fintech Mobile App",
    desc: "A modern mobile banking experience focused on simplicity, trust and fast transactions.",
    image: img1,
    tag: "UI/UX Case Study",
    problem: "Users were confused with traditional banking flow and slow transaction steps.",
    solution: "Redesigned with simple navigation, fast actions and trust-based UI elements.",
    tools: "Figma • UX Research • Prototyping",
    result: "Improved user satisfaction and faster transaction completion",
    color: "#E89CB0",
  },
  {
    title: "E-commerce Dashboard",
    desc: "Clean and scalable admin dashboard for product and order management.",
    image: img2,
    tag: "Web App Design",
    problem: "Complex data visualization made it hard for users to understand analytics.",
    solution: "Simplified layout with better hierarchy and structured charts system.",
    tools: "Figma • UX Audit",
    result: "Increased usability and workflow speed",
    color: "#F7B2C4",
  },
  {
    title: "Mobile Banking UX",
    desc: "Smooth and secure mobile UX for financial operations.",
    image: img3,
    tag: "Mobile UX Design",
    problem: "Poor navigation and low trust signals in old design.",
    solution: "Improved flow, security visuals and micro-interactions.",
    tools: "Figma • Wireframing",
    result: "Higher engagement and trust from users",
    color: "#F4A7B9",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#FFF7F9] relative overflow-hidden">

      {/* background glow */}
      <div className="absolute w-72 h-72 bg-[#FAD4DC] blur-[120px] rounded-full -top-24 -left-24" />
      <div className="absolute w-72 h-72 bg-[#F7C6D0] blur-[120px] rounded-full -bottom-24 -right-24" />

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-[#E89CB0] text-sm">Case Studies</p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#3A3A3A]">
            Selected Projects
          </h2>

          <p className="mt-4 text-sm md:text-base text-[#6B7280] max-w-xl mx-auto">
            Real UI/UX case studies focused on solving problems with clean,
            human-centered design approach.
          </p>
        </div>

        {/* LIST */}
        <div className="mt-16 space-y-20">

          {projects.map((project, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-10 items-center">

              {/* IMAGE / GRADIENT */}
              <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-3xl overflow-hidden shadow-lg"
                >

                  {/* image or fallback */}
                  {project.image ? (
                    <img
                      src={project.image}
                      className="h-80 w-full object-cover"
                    />
                  ) : (
                    <div
                      className="h-80 w-full"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}, #fff)`,
                      }}
                    />
                  )}

                  {/* TAG */}
                  <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-xl px-4 py-1 rounded-full text-xs text-[#3A3A3A] shadow">
                    {project.tag}
                  </div>
                </motion.div>
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-2xl font-semibold text-[#3A3A3A]">
                  {project.title}
                </h3>

                <p className="mt-3 text-[#6B7280] text-sm leading-relaxed">
                  {project.desc}
                </p>

                <p className="mt-3 text-xs text-[#E89CB0] font-medium">
                  {project.tools}
                </p>

                <button
                  onClick={() => setSelected(project)}
                  className="mt-6 text-sm px-5 py-2 rounded-full bg-[#E89CB0] text-white shadow hover:scale-105 transition"
                >
                  View Case Study →
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full relative shadow-2xl overflow-hidden"
            >

              {/* CLOSE */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                ✕
              </button>

              {/* IMAGE */}
              {selected.image ? (
                <img
                  src={selected.image}
                  className="rounded-2xl mb-5 h-64 w-full object-cover"
                />
              ) : (
                <div
                  className="h-64 w-full rounded-2xl mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${selected.color}, #fff)`,
                  }}
                />
              )}

              {/* TAG */}
              <span className="text-xs bg-pink-100 text-[#E89CB0] px-3 py-1 rounded-full">
                {selected.tag}
              </span>

              {/* TITLE */}
              <h3 className="mt-3 text-2xl font-semibold text-[#3A3A3A]">
                {selected.title}
              </h3>

              {/* CONTENT */}
              <div className="mt-5 space-y-4 text-sm text-[#6B7280] leading-relaxed">

                <p>
                  <span className="font-medium text-[#3A3A3A]">Problem:</span>{" "}
                  {selected.problem}
                </p>

                <p>
                  <span className="font-medium text-[#3A3A3A]">Solution:</span>{" "}
                  {selected.solution}
                </p>

                <p>
                  <span className="font-medium text-[#3A3A3A]">Tools:</span>{" "}
                  {selected.tools}
                </p>

                <p>
                  <span className="font-medium text-[#3A3A3A]">Result:</span>{" "}
                  {selected.result}
                </p>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;