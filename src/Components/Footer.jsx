// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import Logo from "../Utils/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#FFF7F9] relative overflow-hidden pt-20 pb-10">

      {/* glow */}
      <div className="absolute w-72 h-72 bg-[#FAD4DC] blur-[120px] rounded-full -top-24 -left-24" />
      <div className="absolute w-72 h-72 bg-[#F7C6D0] blur-[120px] rounded-full -bottom-24 -right-24" />

      <div className="max-w-6xl mx-auto px-6">

        {/* MAIN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >

          {/* name / brand */}
          <div className="flex justify-center">
          <Logo/>
          </div>

          <p className="mt-3 text-sm text-[#6B7280] max-w-md mx-auto">
            UI/UX Designer focused on creating clean, modern and meaningful digital experiences.
          </p>

          {/* social icons */}
          <div className="mt-6 flex justify-center gap-5 text-[#E89CB0] text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaDribbble /></a>
          </div>

          {/* nav links */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#6B7280]">
            <a href="#home" className="hover:text-[#E89CB0] transition">Home</a>
            <a href="#skills" className="hover:text-[#E89CB0] transition">Skills</a>
            <a href="#projects" className="hover:text-[#E89CB0] transition">Projects</a>
            <a href="#contact" className="hover:text-[#E89CB0] transition">Contact</a>
          </div>

        </motion.div>

        {/* divider */}
        <div className="my-10 border-t border-pink-100"></div>

        {/* bottom */}
        <div className="text-center text-xs text-[#9CA3AF]">
          © 2026 All Rights Reserved • Designed with ❤️ by You
        </div>

      </div>
    </footer>
  );
};

export default Footer;