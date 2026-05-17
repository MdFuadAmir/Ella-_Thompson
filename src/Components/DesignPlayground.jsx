// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaPalette } from "react-icons/fa";
import Title from "../Utils/Title";
import { projects } from "../assets/ProjectData";


const DesignPlayground = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="playground"
      className="py-24 bg-[#f8f3f3] dark:bg-[#1C1014] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute w-72 h-72 bg-[#FBD5E0]/30 dark:bg-[#4A1D28]/20 blur-[120px] rounded-full -top-24 -left-24" />
      <div className="absolute w-72 h-72 bg-[#FCE7EE]/30 dark:bg-[#3D141F]/20 blur-[120px] rounded-full -bottom-24 -right-24" />

      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* HEADER (your format) */}
        <Title
          icon={FaPalette}
          subtitle="Creative Explorations"
          title="Design"
          highlight="Playloade"
          desc="A curated collection of UI experiments, concepts and visual
            explorations crafted with a soft modern aesthetic."
          animation="rotate"
        />

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative aspect-4/3 rounded-2xl overflow-hidden group border border-[#F7D6E0] dark:border-[#522531] bg-white dark:bg-[#2A181D]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1C1014]/80 via-[#1C1014]/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 p-5 flex flex-col justify-end">
                <span className="text-xs font-medium text-[#E9A6B8] dark:text-[#F29BB2] uppercase">
                  {item.category}
                </span>

                <h3 className="text-white text-base font-semibold mt-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DesignPlayground;
