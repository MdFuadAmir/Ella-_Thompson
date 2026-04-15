// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        // setSuccess(true);
        reset();
        toast.success("Message sent successfully");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to send message!");
      });
  };

  return (
    <section id="contact" className="py-28 bg-[#FFF7F9] relative overflow-hidden">
      {/* glow */}
      <div className="absolute w-72 h-72 bg-[#FAD4DC] blur-[120px] rounded-full -top-24 -left-24" />
      <div className="absolute w-72 h-72 bg-[#F7C6D0] blur-[120px] rounded-full -bottom-24 -right-24" />

      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#E89CB0] text-sm font-medium">Contact</p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#3A3A3A]">
            Let’s Work Together
          </h2>

          <p className="mt-4 text-sm md:text-base text-[#6B7280] max-w-xl mx-auto">
            Have an idea or project? Let’s create something amazing together.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* card 1 */}
            <div className="flex items-center gap-4 bg-white/70 backdrop-blur-xl border border-pink-100 p-5 rounded-2xl shadow-md">
              <FaEnvelope className="text-[#E89CB0] text-xl" />
              <div>
                <p className="text-sm text-[#6B7280]">Email</p>
                <p className="text-[#3A3A3A] font-medium">
                  mdfuadamir@gmail.com
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="flex items-center gap-4 bg-white/70 backdrop-blur-xl border border-pink-100 p-5 rounded-2xl shadow-md">
              <FaPhone className="text-[#E89CB0] text-xl" />
              <div>
                <p className="text-sm text-[#6B7280]">Phone</p>
                <p className="text-[#3A3A3A] font-medium">+880 1705470131</p>
              </div>
            </div>

            {/* card 3 */}
            <div className="flex items-center gap-4 bg-white/70 backdrop-blur-xl border border-pink-100 p-5 rounded-2xl shadow-md">
              <FaMapMarkerAlt className="text-[#E89CB0] text-xl" />
              <div>
                <p className="text-sm text-[#6B7280]">Location</p>
                <p className="text-[#3A3A3A] font-medium">
                  Kushtia, Bangladesh
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              bg-white/70 backdrop-blur-xl
              border border-pink-100
              rounded-3xl
              shadow-lg
              p-8
              space-y-5
            "
          >
            <input
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:border-[#E89CB0]"
            />

            <input
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:border-[#E89CB0]"
            />

            <textarea
              {...register("message", { required: true })}
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:border-[#E89CB0]"
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-3
                bg-[#E89CB0]
                text-white
                rounded-full
                shadow-md
                hover:scale-105 transition
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
