import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-black mb-10 tracking-tight"
        >
          Get in Touch
        </motion.h2>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#f5f5f7] rounded-3xl border border-[#e5e5e5] shadow-sm p-10 max-w-2xl mx-auto"
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            I’m always open to opportunities, collaborations, or just a friendly
            chat. Feel free to connect with me on any of the platforms below.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-8 mt-6">
            {/* GitHub */}
            <motion.a
              href="https://github.com/yash-2304"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -4 }}
              className="text-gray-700 hover:text-black transition text-4xl"
            >
              <FaGithub />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/yash-prajapati-29a423187"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -4 }}
              className="text-[#0071E3] hover:text-[#005bbd] transition text-4xl"
            >
              <FaLinkedin />
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:pyash7621@gmail.com"
              whileHover={{ scale: 1.15, y: -4 }}
              className="text-gray-700 hover:text-black transition text-4xl"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
