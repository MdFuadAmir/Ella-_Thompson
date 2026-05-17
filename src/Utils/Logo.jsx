// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaFeatherAlt } from "react-icons/fa";
// import { Link } from "react-scroll";

const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="flex items-center gap-2 px-3 py-2 w-fit"
    >
      {/* icon */}
      <div className="text-[#E89CB0] text-lg">
        <FaFeatherAlt />
      </div>

      {/* text */}
      <h1
        className="
            text-lg md:text-xl font-semibold tracking-wide
            bg-linear-to-r from-[#E89CB0] to-[#F7B2C4]
            text-transparent bg-clip-text
          "
      >
        Ella Thompson
      </h1>
    </motion.div>
  );
};

export default Logo;
