// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    feedback:
      "The design was beyond expectations. Clean, modern and perfectly user-focused. My product feels 10x more professional now.",
  },
  {
    name: "Michael Lee",
    role: "Product Manager",
    feedback:
      "Excellent UI/UX thinking. Every detail was carefully designed with real user experience in mind.",
  },
  {
    name: "Emily Carter",
    role: "CEO, SaaS Company",
    feedback:
      "Amazing work! The interface is simple yet powerful. Our users love the new experience.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 bg-[#FFF7F9] relative overflow-hidden">

      {/* background glow */}
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
          <p className="text-[#E89CB0] font-medium text-sm">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#3A3A3A]">
            What Clients Say About Me
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-[#6B7280]">
            Real feedback from clients who trusted me to design their digital products.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="
                bg-white/70 backdrop-blur-xl
                border border-pink-100
                rounded-3xl
                p-6
                shadow-md
                relative
              "
            >

              {/* quote mark */}
              <div className="text-5xl text-pink-200 absolute top-4 right-6">
                “
              </div>

              {/* feedback */}
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {item.feedback}
              </p>

              {/* user */}
              <div className="mt-6">
                <h4 className="font-semibold text-[#3A3A3A]">
                  {item.name}
                </h4>
                <p className="text-xs text-[#E89CB0]">
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