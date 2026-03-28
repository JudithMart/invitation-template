import { motion } from "framer-motion";
import Music from "./Music";

export default function Hero() {
  return (
    <section className="pt-40 ">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[16px] md:text-xl px-6 drop-shadow-md tracking-wide"
        >
          <span className="font-serif text-black ">
            Tenemos el gusto de inivtarte en este día tan importante de nuestras
            vidas
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[43px] md:text-5xl font-serif text-[#B28B5C] mt-6 drop-shadow-lg tracking-wider"
        >
          <span className="font-script">Nuestra Boda</span>
        </motion.h1>

        <Music />

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[60px] md:text-7xl text-[#2E6515] mt-8 drop-shadow-xl t"
        >
          <span className="font-script">Enrique y Vanessa</span>
        </motion.h2>
      </div>
    </section>
  );
}
