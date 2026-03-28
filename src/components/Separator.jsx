import { motion } from "framer-motion";


function Separator() {
  return (
    <motion.section
      className="w-full py-16 px-6 bg-gradient-to-b from-[#2E6515]/75 via-[#5F8F47] to-[#2E6515]/85 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="font-serif text-[#F6F6F6] text-lg md:text-2xl max-w-xl mx-auto leading-relaxed">
        En este día especial estaremos junto a nuestros seres queridos
      </p>

      <div className="flex justify-center mt-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="origin-center h-[2px] w-40 bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent"
        />
      </div>
    </motion.section>
  );
}

export default Separator;
