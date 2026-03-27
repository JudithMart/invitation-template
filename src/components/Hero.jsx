import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-52 ">  
    
      <div className="text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[15px] md:text-xl px-6"
        >
         <span className="font-serif"> Tenemos el gusto de inivtarte en este día tan importante de nuestras vidas</span>
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[40px] md:text-5xl font-serif text-[#B28B5C] mt-4"
        >
          <span className="font-script">Nuestra Boda</span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[58px] md:text-7xl text-[#2E6515] mt-10"
        >
              <span className="font-script">Enrique y Vanessa</span>
        </motion.h2>

      </div>
    </section>
  );
}