// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const CTA = () => {
  return (
    <section className="py-28 bg-[#FFF7F9] relative overflow-hidden">
      {/* background glow */}
      <div className="absolute w-72 h-72 bg-[#FAD4DC] blur-[120px] rounded-full -top-24 -left-24" />
      <div className="absolute w-72 h-72 bg-[#F7C6D0] blur-[120px] rounded-full -bottom-24 -right-24" />

      <div className="max-w-5xl mx-auto px-6">
        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            text-center
            bg-white/70 backdrop-blur-xl
            border border-pink-100
            rounded-[30px]
            shadow-lg
            p-10 md:p-14
          "
        >
          {/* heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#3A3A3A]">
            Let’s Work Together
          </h2>

          <p className="mt-4 text-sm md:text-base text-[#6B7280] max-w-xl mx-auto leading-relaxed">
            I’m available for freelance UI/UX design projects. Let’s create
            something modern, clean and meaningful together.
          </p>

          {/* buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {/* CV DOWNLOAD */}
            <a
              href="https://docs.google.com/document/d/12K2cXFu7bpCguwRwaytDKMEsww5fUsbcZP4UmAU-N6E/export?format=pdf"
              download
              className="
                flex items-center justify-center gap-2
                px-6 py-3
                bg-[#E89CB0]
                text-white
                rounded-full
                shadow-md
                hover:scale-105 transition
              "
            >
              <FaDownload />
              Download CV
            </a>

            {/* CONTACT */}
            <Link
              to="contact"
              className="
                flex items-center justify-center gap-2
                px-6 py-3
                border border-[#E89CB0]
                text-[#E89CB0]
                rounded-full
                hover:bg-pink-50 transition cursor-pointer
              "
            >
              <FaEnvelope />
              Contact Me
            </Link>
          </div>

          {/* extra info */}
          <p className="mt-6 text-xs text-[#9CA3AF]">
            Available for freelance • Remote work • UI/UX Design projects
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
