// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaArrowUp,
} from "react-icons/fa";
import Logo from "../Utils/Logo";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden pb-10 bg-[#FBEAF0] dark:bg-[#120B0E] border-t border-[#F4D2DD] dark:border-[#2A181D]">
      {/* glow */}
      <div className="absolute w-80 h-80 bg-[#F6B3C6]/30 blur-[140px] rounded-full top-0 left-0" />
      <div className="absolute w-80 h-80 bg-[#DE7390]/20 blur-[140px] rounded-full bottom-0 right-0" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* top area */}
          <div className="grid md:grid-cols-3 gap-12 items-start pt-10">
            {/* Brand */}
            <div>
              <Logo />

              <p className="mt-5 text-sm leading-relaxed text-gray-500 dark:text-[#BFA8AF] max-w-sm">
                Crafting clean, modern and meaningful UI/UX experiences that
                balance aesthetics with usability.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-[#DE7390] dark:text-[#EAA0B4] font-semibold mb-5">
                Navigation
              </h4>

              <div className="space-y-3 text-sm">
                {["Home", "About", "Services", "Projects", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-500 dark:text-[#CBB5BC] hover:text-[#DE7390] transition"
                    >
                      {item}
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-[#DE7390] dark:text-[#EAA0B4] font-semibold mb-5">
                Let’s Connect
              </h4>

              <div className="flex gap-4">
                {[FaFacebook, FaLinkedin, FaGithub, FaDribbble].map(
                  (Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -5, scale: 1.08 }}
                      className="w-11 h-11 rounded-2xl flex items-center justify-center
                    bg-white/70 dark:bg-[#211419]
                    text-[#DE7390] dark:text-[#EAA0B4]
                    shadow-md"
                    >
                      <Icon />
                    </motion.a>
                  ),
                )}
              </div>

              <p className="mt-5 text-sm text-gray-500 dark:text-[#BFA8AF]">
                Ready to build something meaningful together.
              </p>
            </div>
          </div>

          {/* divider */}
          <div className="my-10 border-t border-[#F2CAD6] dark:border-[#2A181D]" />

          {/* bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <p className="text-xs text-gray-400 dark:text-[#8F7A81]">
              © 2026 All Rights Reserved • Designed by Md Fuad Amir
            </p>

            <motion.a
              href="#home"
              whileHover={{ y: -4 }}
              className="w-11 h-11 rounded-full flex items-center justify-center
              bg-[#F6B3C6] dark:bg-[#C95B79]
              text-white shadow-lg"
            >
              <FaArrowUp />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
