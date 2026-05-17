// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdModeNight } from "react-icons/md";

const DarkMood = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const root = document.documentElement;

    root.classList.add("theme-transition");

    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    root.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);

    setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 500);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  return (
  <motion.button
  onClick={toggleTheme}
  whileTap={{ scale: 0.92 }}
  whileHover={{ scale: 1.05 }}
  className="
    relative w-10 h-10
    flex items-center justify-center
    rounded-full
    bg-[#FFF4F7] dark:bg-[#251419]
    border border-[#F7D6E0]/60 dark:border-[#522531]/60
    shadow-lg shadow-[#DE7390]/5
    backdrop-blur-xl
    overflow-hidden
    transition-colors duration-500
  "
>
  {/* Soft Pink Glow */}
  <span className="absolute inset-0 bg-[#DE7390]/5 dark:bg-[#EAA0B4]/10 blur-md"></span>

  <AnimatePresence mode="wait">
    {theme === "dark" ? (
      <motion.div
        key="light"
        initial={{ opacity: 0, scale: 0.6, rotate: -60 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.6, rotate: 60 }}
        transition={{ duration: 0.25 }}
        className="text-[#EAA0B4] text-xl z-10"
      >
        <CiLight />
      </motion.div>
    ) : (
      <motion.div
        key="dark"
        initial={{ opacity: 0, scale: 0.6, rotate: 60 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.6, rotate: -60 }}
        transition={{ duration: 0.25 }}
        className="text-[#DE7390] text-xl z-10"
      >
        <MdModeNight />
      </motion.div>
    )}
  </AnimatePresence>
</motion.button>
  );
};

export default DarkMood;
