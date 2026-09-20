import { motion } from "framer-motion";

export default function ButtonConfirmation() {
  return (
    <section className="relative overflow-hidden bg-[#151012] px-6 py-20 text-[#F5F1EA] md:py-40">

   {/* Decorative horizontal line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-0 h-px w-[80%] origin-center -translate-x-1/2 bg-[#B28B5C]/20"
      />


      {/* Burgundy glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4A1118]/40 blur-[130px]" />




      {/* Decorative circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B28B5C]/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B28B5C]/5"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-[#B28B5C]" />

          <p className="text-[10px] uppercase tracking-[0.4em] text-[#B28B5C]">
            Confirma tu asistencia
          </p>

          <span className="h-px w-8 bg-[#B28B5C]" />
        </motion.div>


        {/* Main text */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="font-serif text-5xl leading-tight md:text-7xl"
        >
          ¿Nos vemos
          <br />
          <span className="text-[#B28B5C]">
            ahí?
          </span>
        </motion.h2>


        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-7 max-w-md text-sm leading-7 text-[#F5F1EA]/55"
        >
     
          Te agradecería confirmar tu asistencia para poder preparar cada detalle y hacer de este momento una celebración para recordar
        </motion.p>


        {/* Button */}
        <motion.a
          href={`https://wa.me/+524591237833?text=${encodeURIComponent(
            "Confirmo mi asistencia, soy [tu nombre] 👩🏻‍🎓✨"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="group relative mt-10 inline-flex items-center gap-5 overflow-hidden border border-[#B28B5C]/50 px-8 py-4"
        >

          {/* Hover background */}
          <span className="absolute inset-0 -translate-x-full bg-[#B28B5C] transition-transform duration-500 group-hover:translate-x-0" />

          <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-[#B28B5C] transition-colors duration-500 group-hover:text-[#0D0B0C]">
            Confirmar asistencia
          </span>

          <span className="relative z-10 text-lg text-[#B28B5C] transition-colors duration-500 group-hover:text-[#0D0B0C]">
            →
          </span>

        </motion.a>


        {/* Small detail */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 text-[9px] uppercase tracking-[0.25em] text-[#F5F1EA]/25"
        >
          Confirmación vía WhatsApp
        </motion.p>

      </div>
    </section>
  );
}