// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import Logo from "../Utils/Logo";

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "#home" },
    { name: "About", id: "#about" },
    { name: "Services", id: "#services" },
    { name: "Projects", id: "#projects" },
    { name: "Contact", id: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#FFF9FB]/80 backdrop-blur-xl border-b border-[#F7D6E0] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Logo/>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id}
              onClick={() => setActive(link.id)}
              className="relative text-[#6B7280] hover:text-[#E9A6B8] transition"
            >
              {link.name}

              {active === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#F6B3C6] rounded"
                />
              )}
            </a>
          ))}

          <a href="mailto:mdfuadamir@gmail.com?subject=Project Inquiry" className="px-5 py-2 rounded-full bg-[#F6B3C6] text-white">
            Hire Me
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#3A3A3A]"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU (SMOOTH ANIMATION FIXED) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-[#FFF9FB]"
          >

            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.id}
                onClick={() => {
                  setActive(link.id);
                  setOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`text-lg transition ${
                  active === link.id
                    ? "text-[#E9A6B8]"
                    : "text-[#6B7280]"
                }`}
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a href="mailto:mdfuadamir@gmail.com?subject=Project Inquiry"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-2 px-5 py-2 rounded-full bg-[#F6B3C6] text-white w-fit"
            >
              Hire Me
            </motion.a>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;