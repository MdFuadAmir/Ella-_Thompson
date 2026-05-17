// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  FaArrowRight,
  FaSpinner,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDribbble,
  FaBehance,
  FaLinkedin,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { FaPaperPlane } from "react-icons/fa6";
import Title from "../Utils/Title";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Axios Form Submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://grace-wilson-server.vercel.app/send-me",
        data,
      );
      if (response.status === 200 || response.status === 201) {
        toast.success("message send successfully");
        reset();
      }
    } catch (error) {
      toast.error("Failed to send message");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-28 bg-[#FFF9FB] dark:bg-[#1C1014] text-[#3A3A3A] dark:text-[#F7EBEF] transition-colors duration-300 relative overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* === SECTION HEADER === */}
        <Title
          icon={FaPaperPlane}
          subtitle="Get In Touch"
          title="Let’s Build Something "
          highlight="Beautiful"
          desc="Have a project idea, collaboration opportunity or just want to say
            hello? Let’s connect and create meaningful digital experiences
            together."
          animation="rotate"
        />

        {/* === 2 COLUMN LAYOUT (NO CARDS / NO BOXES) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start mt-12 md:mt-24">
          {/* COLUMN 1: CONTACT INFO & DETAILS */}
          <motion.div
            variants={fadeInUp}
            className="space-y-10 order-2 md:order-1"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#DE7390] dark:text-[#EAA0B4] mb-3">
                Ella Thompson
              </h3>
              <p className="text-sm sm:text-base text-gray-500 dark:text-[#CBB5BC] leading-relaxed max-w-sm">
                Have an exciting project idea or want to upscale your product
                UX? Feel free to reach out anytime.
              </p>
            </div>

            {/* Direct Info List */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="text-lg text-[#DE7390] dark:text-[#EAA0B4] transition-transform duration-300 group-hover:scale-110">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider">
                    Email Me
                  </p>
                  <a
                    href="mailto:ella@example.com"
                    className="text-sm sm:text-base hover:text-[#DE7390] dark:hover:text-[#EAA0B4] transition-colors"
                  >
                    mdfuadamir@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="text-lg text-[#DE7390] dark:text-[#EAA0B4]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-[#CBB5BC]">
                    Kushtia, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="pt-4">
              <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider mb-4">
                Follow My UI Journey
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-xl text-gray-400 hover:text-[#DE7390] dark:hover:text-[#EAA0B4] transition-colors"
                  aria-label="Dribbble"
                >
                  <FaDribbble />
                </a>
                <a
                  href="#"
                  className="text-xl text-gray-400 hover:text-[#DE7390] dark:hover:text-[#EAA0B4] transition-colors"
                  aria-label="Behance"
                >
                  <FaBehance />
                </a>
                <a
                  href="#"
                  className="text-xl text-gray-400 hover:text-[#DE7390] dark:hover:text-[#EAA0B4] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: WORKING CONTACT FORM */}
          <motion.div variants={fadeInUp} className="order-1 md:order-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Input */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full bg-transparent border-b ${
                    errors.name
                      ? "border-rose-500"
                      : "border-[#F7D6E0] dark:border-[#522531]"
                  } focus:border-[#DE7390] dark:focus:border-[#EAA0B4] outline-none py-2 text-base transition-colors placeholder-gray-300 dark:placeholder-zinc-700`}
                />
                {errors.name && (
                  <span className="text-xs text-rose-500 mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full bg-transparent border-b ${
                    errors.email
                      ? "border-rose-500"
                      : "border-[#F7D6E0] dark:border-[#522531]"
                  } focus:border-[#DE7390] dark:focus:border-[#EAA0B4] outline-none py-2 text-base transition-colors placeholder-gray-300 dark:placeholder-zinc-700`}
                />
                {errors.email && (
                  <span className="text-xs text-rose-500 mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Message Input */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-1">
                  Your Message
                </label>
                <textarea
                  rows="8"
                  placeholder="Tell me about your project goals..."
                  {...register("message", {
                    required: "Message cannot be empty",
                  })}
                  className={`w-full bg-transparent border-b resize-none ${
                    errors.message
                      ? "border-rose-500"
                      : "border-[#F7D6E0] dark:border-[#522531]"
                  } focus:border-[#DE7390] dark:focus:border-[#EAA0B4] outline-none py-2 text-base transition-colors placeholder-gray-300 dark:placeholder-zinc-700`}
                />
                {errors.message && (
                  <span className="text-xs text-rose-500 mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#F6B3C6] dark:bg-[#C95B79] text-white rounded-full font-semibold shadow-sm hover:scale-105 active:scale-95 disabled:scale-100 disabled:opacity-60 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <FaSpinner className="animate-spin text-sm" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
