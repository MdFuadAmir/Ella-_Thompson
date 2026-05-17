// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const animations = {
  rotate: {
    animate: { rotate: [0, 12, -12, 0] },
    transition: { duration: 3, repeat: Infinity },
  },

  spin: {
    animate: { rotate: 360 },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },

  float: {
    animate: { y: [0, -6, 0] },
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },

  pulse: {
    animate: { scale: [1, 1.15, 1] },
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
  route: {
    animate: {
      x: [0, 6, -6, 0],
      rotate: [0, 6, -6, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Title = ({
  icon,
  subtitle,
  title,
  highlight,
  desc,
  animation = "rotate",
  center = true,
}) => {
  const selectedAnimation = animations[animation];

  const IconComponent = icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${
        center ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <p className="text-[#E9A6B8] dark:text-[#F29BB2] font-medium text-sm flex items-center gap-2 border-b pb-2 w-fit">
        {IconComponent && (
          <motion.span
            {...selectedAnimation}
            className="text-[#DE7390] dark:text-[#EAA0B4]"
          >
            <IconComponent />
          </motion.span>
        )}

        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#3A3A3A] dark:text-[#F7EBEF] mt-3 leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-[#DE7390] dark:text-[#EAA0B4]">
            {highlight}
          </span>
        )}
      </h2>

      {desc && (
        <p className="text-gray-500 dark:text-[#CBB5BC] mt-5 max-w-2xl text-sm sm:text-base leading-relaxed">
          {desc}
        </p>
      )}
    </motion.div>
  );
};

export default Title;
