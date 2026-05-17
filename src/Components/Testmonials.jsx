// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaRegCommentDots } from "react-icons/fa";
import Title from "../Utils/Title";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    feedback:
      "The design was beyond expectations. Clean, modern and perfectly user-focused. My product feels significantly more polished and intuitive.",
  },
  {
    name: "Michael Lee",
    role: "Product Manager",
    feedback:
      "Excellent UI/UX thinking. Every interaction feels intentional and thoughtfully designed for real users.",
  },
  {
    name: "Emily Carter",
    role: "CEO, SaaS Company",
    feedback:
      "Amazing work. The interface feels soft, modern and highly usable. Our product experience improved dramatically.",
  },
  {
    name: "Daniel Kim",
    role: "Founder",
    feedback:
      "A smooth collaboration from research to final design. The result exceeded our expectations.",
  },
  {
    name: "Sophia Miller",
    role: "Marketing Lead",
    feedback:
      "Elegant visuals with clear user flow. The redesign helped our platform feel premium.",
  },
  {
    name: "James Wilson",
    role: "App Owner",
    feedback:
      "Creative yet practical design decisions. Every screen feels meaningful and effortless.",
  },
  {
    name: "Olivia Brown",
    role: "Product Designer",
    feedback:
      "Beautiful attention to detail and excellent UX structure throughout the project.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-28 bg-[#f8f3f3] dark:bg-[#1C1014] relative overflow-hidden border-b border-gray-200 dark:border-gray-600/50"
    >
      {/* background */}
      <div className="absolute w-72 h-72 bg-[#FBD5E0]/30 dark:bg-[#4A1D28]/20 blur-[120px] rounded-full -top-24 -left-24" />
      <div className="absolute w-72 h-72 bg-[#FCE7EE]/30 dark:bg-[#3D141F]/20 blur-[120px] rounded-full -bottom-24 -right-24" />

      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <Title
          icon={FaRegCommentDots}
          subtitle="Testimonials"
          title="What Clients Say"
          highlight="About Me"
          desc=" Real feedback from clients who trusted me to craft meaningful
            digital experiences."
          animation="rotate"
        />

        {/* HORIZONTAL SCROLL */}
        <div
          className="mt-16 flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-6"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 15px 35px rgba(222,115,144,0.12)",
              }}
              className="
                min-w-[320px]
                md:min-w-90
                bg-white/80 dark:bg-[#2A181D]
                backdrop-blur-xl
                border border-[#F7D6E0] dark:border-[#522531]
                rounded-3xl
                p-6
                shadow-sm
                relative
                snap-start
                transition-all duration-300
              "
            >
              {/* quote */}
              <div className="text-5xl text-[#F6B3C6] dark:text-[#C95B79]/40 absolute top-4 right-6">
                ”
              </div>

              {/* feedback */}
              <p className="text-sm text-gray-500 dark:text-[#CBB5BC] leading-relaxed">
                {item.feedback}
              </p>

              {/* user */}
              <div className="mt-6 border-t border-[#F7D6E0] dark:border-[#522531] pt-4">
                <h4 className="font-semibold text-[#3A3A3A] dark:text-[#F7EBEF]">
                  {item.name}
                </h4>
                <p className="text-xs text-[#DE7390] dark:text-[#EAA0B4]">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
