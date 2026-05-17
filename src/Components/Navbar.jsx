// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import Logo from "../Utils/Logo";
import DarkMood from "../Utils/DarkMood";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", id: "#home" },
    { name: "About", id: "#about" },
    { name: "Services", id: "#services" },
    { name: "Projects", id: "#projects" },
    { name: "Contact", id: "#contact" },
  ];

  const scrollToSection = (id) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  const handleNav = (id) => {
    setActive(id);
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 200);
    } else {
      scrollToSection(id);
    }
  };

  const goHome = () => {
    navigate("/");
    setOpen(false);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <nav
      className="fixed w-full top-0 left-0 z-50 backdrop-blur-xl shadow-sm 
    
    bg-[#f6eeee]/70 dark:bg-[#1d1115]/70
    border-b border-[#F7D6E0] dark:border-white/10 
    transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div onClick={goHome} className="cursor-pointer">
          <Logo />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id}
              onClick={() => handleNav(link.id)}
              className="relative"
            >
              <span
                className={`text-sm lg:text-base transition ${
                  active === link.id
                    ? "text-[#E9A6B8] dark:text-[#F9C6D5]"
                    : "text-[#6B7280] dark:text-[#E5E7EB] hover:text-[#F6B3C6]"
                }`}
              >
                {link.name}
              </span>

              {active === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute left-0 -bottom-1 w-full h-0.5 
                  bg-[#F6B3C6] dark:bg-[#F9C6D5] rounded"
                />
              )}
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <DarkMood />
          <a
            href="#contact"
            onClick={() => {
              const textarea = document.querySelector(
                'textarea[name="message"]',
              );
              if (textarea) {
                textarea.value = `Hi Md Fuad Amir,

I'm interested in working with you on a UI/UX design project. 
I'd love to discuss the project details, timeline, and how we can create something meaningful together.`;
                textarea.dispatchEvent(new Event("input", { bubbles: true }));
              }
            }}
            className="hidden lg:block px-6 py-2 rounded-full text-sm font-medium 
            bg-[#F6B3C6] dark:bg-[#C95B79]
            text-white shadow-md transition"
          >
            Hire Me
          </a>

          <button
            className="lg:hidden text-[#E9A6B8] dark:text-[#F9C6D5] text-2xl"
            onClick={() => setOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-fit w-[72%] max-w-80 
              bg-[#FFF9FB] dark:bg-[#1A1216]
              shadow-2xl z-50 lg:hidden flex flex-col p-6 rounded-bl-3xl"
            >
              {/* HEADER */}
              <div
                className="flex items-center justify-between mb-8 pb-4 
              border-b border-[#F7D6E0] dark:border-white/10"
              >
                <Logo />

                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl text-[#E9A6B8] dark:text-[#F9C6D5]"
                >
                  <FiX />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-6 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.id}
                    onClick={() => handleNav(link.id)}
                    className={`text-lg font-medium transition ${
                      active === link.id
                        ? "text-[#E9A6B8] dark:text-[#F9C6D5]"
                        : "text-[#6B7280] dark:text-[#E5E7EB] hover:text-[#F6B3C6]"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-[#F7D6E0] dark:border-white/10">
                <a
                  href="#contact"
                  onClick={() => setOpen(true)}
                  onClick={() => {
                    const textarea = document.querySelector(
                      'textarea[name="message"]',
                    );
                    if (textarea) {
                      textarea.value = `Hi Md Fuad Amir,

I'm interested in working with you on a UI/UX design project. 
I'd love to discuss the project details, timeline, and how we can create something meaningful together.`;
                      textarea.dispatchEvent(
                        new Event("input", { bubbles: true }),
                      );
                    }
                  }}
                  className="block lg:hidden px-6 py-3 rounded-xl text-center text-sm font-medium 
            bg-[#F6B3C6] dark:bg-[#C95B79]
            text-white shadow-md transition"
                >
                  Let’s Work Together
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
