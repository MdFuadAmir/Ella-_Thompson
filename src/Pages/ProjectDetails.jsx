/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router";
import {
  FaArrowLeft,
  FaClock,
  FaLayerGroup,
  FaUserTie,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { projects } from "../assets/ProjectData";
import { useEffect } from "react";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  const navigate = useNavigate();
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl dark:text-white">
        Project Not Found
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);
  return (
    <section className="min-h-screen py-24 bg-[#FFF9FB] dark:bg-[#1C1014] relative overflow-hidden transition-colors duration-300">
      {/* background glow */}
      <div className="absolute w-72 h-72 bg-[#FAD4DC] dark:bg-[#4A1D28]/30 blur-[120px] rounded-full -top-24 -left-24" />
      <div className="absolute w-72 h-72 bg-[#F7C6D0] dark:bg-[#3D141F]/30 blur-[120px] rounded-full -bottom-24 -right-24" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-[#DE7390] dark:text-[#EAA0B4] mb-10 hover:translate-x-1 transition"
        >
          <FaArrowLeft />
          Back to Projects
        </button>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="px-4 py-1 rounded-full bg-pink-100 dark:bg-[#2A181D] text-[#DE7390] dark:text-[#EAA0B4] text-xs font-medium">
            {project.tag}
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-bold text-[#3A3A3A] dark:text-[#F7EBEF] leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-gray-500 dark:text-[#CBB5BC] max-w-3xl">
            {project.subtitle}
          </p>
        </motion.div>

        {/* Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          src={project.image}
          alt={project.title}
          className="mt-14 rounded-3xl shadow-2xl w-full object-cover"
        />

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {[
            {
              icon: <FaClock />,
              title: "Duration",
              value: project.duration,
            },
            {
              icon: <FaLayerGroup />,
              title: "Category",
              value: project.category,
            },
            {
              icon: <FaUserTie />,
              title: "Role",
              value: project.role,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white/70 dark:bg-[#2A181D]/80 backdrop-blur-xl border border-pink-100 dark:border-[#522531]"
            >
              <div className="text-[#DE7390] dark:text-[#EAA0B4] text-xl">
                {item.icon}
              </div>
              <h3 className="mt-3 text-sm text-gray-500 dark:text-[#CBB5BC]">
                {item.title}
              </h3>
              <p className="font-semibold text-[#3A3A3A] dark:text-[#F7EBEF] mt-1">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Challenge / Solution */}
        <div className="grid md:grid-cols-2 gap-10 mt-20">
          <div>
            <h2 className="text-2xl font-bold text-[#DE7390] dark:text-[#EAA0B4]">
              Challenge
            </h2>
            <p className="mt-4 text-gray-500 dark:text-[#CBB5BC] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#DE7390] dark:text-[#EAA0B4]">
              Solution
            </h2>
            <p className="mt-4 text-gray-500 dark:text-[#CBB5BC] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-[#3A3A3A] dark:text-[#F7EBEF] mb-10">
            Design Process
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {project.process.map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-6 rounded-3xl bg-white/70 dark:bg-[#2A181D]/80 border border-pink-100 dark:border-[#522531]"
              >
                <span className="text-[#DE7390] font-bold text-xl">
                  0{i + 1}
                </span>
                <p className="mt-3 font-medium dark:text-white">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-[#3A3A3A] dark:text-[#F7EBEF] mb-10">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-gray-600 dark:text-[#CBB5BC]"
              >
                <FaCheckCircle className="text-[#DE7390]" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-24 grid md:grid-cols-3 gap-6">
          {Object.entries(project.metrics).map(([key, value], i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="p-8 rounded-3xl bg-[#FDECF1] dark:bg-[#2A181D] text-center"
            >
              <h3 className="text-4xl font-bold text-[#DE7390]">{value}</h3>
              <p className="mt-2 capitalize dark:text-[#CBB5BC]">{key}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
