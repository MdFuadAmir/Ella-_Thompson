// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaCode } from "react-icons/fa6";
import { FaWandMagicSparkles } from "react-icons/fa6";
import Title from "../Utils/Title";
import {projects} from "../assets/ProjectData"


const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-[#f8f3f3] dark:bg-[#1C1014] relative overflow-hidden border-b border-gray-200 dark:border-gray-600/50"
    >
      {/* background (same system as other sections) */}
      <div className="absolute w-96 h-96 bg-[#FBD5E0]/30 dark:bg-[#4A1D28]/20 rounded-full -top-20 -left-20 -z-10" />
      <div className="absolute w-80 h-80 bg-[#FCE7EE]/40 dark:bg-[#3D141F]/30 rounded-full -bottom-20 -right-20 -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER (FIXED + ICON ADDED) */}

        <Title
          icon={FaWandMagicSparkles}
          subtitle="Case Studies"
          title="Selected"
          highlight="Projects"
          desc="Real UI/UX case studies focused on solving problems with clean,
            human-centered design approach."
          animation="rotate"
        />

        {/* LIST */}
        <div className="mt-16 space-y-20">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`${i % 2 !== 0 ? "md:order-2" : ""}`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    className="h-80 w-full object-cover"
                  />

                  <div className="absolute top-4 left-4 bg-white/70 dark:bg-black/40 backdrop-blur-xl px-4 py-1 rounded-full text-xs text-[#3A3A3A] dark:text-[#F7EBEF]">
                    {project.tag}
                  </div>
                </div>
              </motion.div>

              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-[#3A3A3A] dark:text-[#F7EBEF]">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-500 dark:text-[#CBB5BC] text-sm leading-relaxed">
                  {project.desc}
                </p>

                <p className="mt-3 text-xs text-[#DE7390] dark:text-[#EAA0B4] font-medium">
                  {project.tools}
                </p>

                {/* ROUTE BUTTON */}
                <Link
                  to={`/project/${project.id}`}
                  className="mt-6 inline-block text-sm px-5 py-2 rounded-full bg-[#E89CB0] dark:bg-[#C95B79] text-white shadow hover:scale-105 transition"
                >
                  View Case Study →
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
