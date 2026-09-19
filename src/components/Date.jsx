import { motion } from "framer-motion";

export default function Date() {
  return (
    <section className="relative overflow-hidden bg-[#0D0B0C] px-6 py-24 text-[#F5F1EA] md:px-12 md:py-36">

      {/* Burgundy glow */}
      <div className="absolute left-[-150px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#4A1118]/40 blur-[120px]" />

      {/* Golden glow */}
      <div className="absolute right-[-100px] top-[20%] h-[250px] w-[250px] rounded-full bg-[#B28B5C]/10 blur-[100px]" />

      {/* Decorative horizontal line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-12 h-px w-[80%] origin-center -translate-x-1/2 bg-[#B28B5C]/20"
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-[#B28B5C]" />

          <p className="text-[10px] uppercase tracking-[0.4em] text-[#B28B5C]">
            La celebración
          </p>

          <span className="h-px w-8 bg-[#B28B5C]" />
        </motion.div>


        {/* Main information */}
        <div className="grid items-center gap-16 md:grid-cols-[1fr_auto_1fr] md:gap-12">

          {/* DATE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#F5F1EA]/40">
              La fecha
            </p>

            <div className="flex flex-col items-center md:items-end">

              <span className="font-serif text-8xl leading-none text-[#F5F1EA] md:text-9xl">
                16
              </span>

              <span className="mt-2 font-serif text-3xl tracking-[0.15em] text-[#B28B5C]">
                OCTUBRE
              </span>

              <span className="mt-2 text-xs uppercase tracking-[0.35em] text-[#F5F1EA]/50">
                Viernes · 2:30 PM
              </span>

            </div>
          </motion.div>


          {/* CENTER DECORATION */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden h-40 w-px origin-top bg-[#B28B5C]/30 md:block"
          />

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#F5F1EA]/40">
              El lugar
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#F5F1EA] md:text-5xl">
             SALÓN JARDÍN
              <br />
              <span className="text-3xl text-[#B28B5C]/80">
                 “SAN PASCUAL”
              </span>
            </h2>

            <p className="mt-4 text-sm text-[#F5F1EA]/50">
              Morelia, Michoacán
            </p>

            {/* Location button */}
            <motion.a
              href="https://www.google.com/maps/place/SAL%C3%93N+JARD%C3%8DN+%E2%80%9CSAN+PASCUAL%E2%80%9D/@19.6990605,-101.2779392,16.02z/data=!4m6!3m5!1s0x842d095a5282eb63:0xa132c8d2413b0155!8m2!3d19.6968155!4d-101.2668012!16s%2Fg%2F11hcysbmsr?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="mt-7 inline-flex items-center gap-3 border-b border-[#B28B5C]/40 pb-2 text-[10px] uppercase tracking-[0.25em] text-[#B28B5C]"
            >
              Ver ubicación
              <span className="text-base">→</span>
            </motion.a>

          </motion.div>

        </div>


    
      </div>
    </section>
  );
}