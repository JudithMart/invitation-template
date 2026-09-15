import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0D0B0C] text-[#F5F1EA]">
      {/* Background burgundy glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,#4A1118_0%,#220B0F_30%,#0D0B0C_70%)]" />

      {/* Subtle golden glow */}
      <div className="absolute right-[15%] top-[30%] h-[350px] w-[350px] rounded-full bg-[#B28B5C]/10 blur-[130px]" />

      {/* Decorative vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute  left-8 top-24 hidden h-40 w-px origin-top bg-[#B28B5C]/50 md:block"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 md:px-12">
        <div className="grid w-full items-center gap-12 text-center md:grid-cols-[1.1fr_0.9fr] md:text-left">
          {/* LEFT SIDE */}
          <div className="relative flex flex-col items-center md:items-start">
            {/* Small technical label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#B28B5C]"
            >
              <span className="h-px w-8 bg-[#B28B5C] text-center" />
              Mi Titulación 
              <span className="h-px w-8 bg-[#B28B5C] text-center" />
            </motion.div>
             

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8"
            >
              <p className="font-script text-5xl text-[#B28B5C] md:text-6xl">
                Agui Martínez
              </p>

              <p className="mt-3 max-w-md text-xs uppercase tracking-[0.22em] text-[#F5F1EA]/60">
                Ingeniera en Sistemas Computacionales
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center md:justify-end">
            {/* Decorative circle */}
            <div className="absolute h-[360px] w-[360px] rounded-full border border-[#B28B5C]/20 md:h-[450px] md:w-[450px]" />

            {/* Burgundy circle */}
            <div className="absolute h-[280px] w-[280px] rounded-full bg-[#4A1118]/70 blur-sm md:h-[360px] md:w-[360px]" />

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10"
            >
              <img
                src="/graduation/person/Judith-Mtz.jpeg"
                alt="Judith Martínez"
                className="h-[430px] w-[320px] object-cover object-center grayscale-[20%] brightness-[0.85] contrast-[1.05] md:h-[550px] md:w-[400px]"
              />

              <div className="absolute inset-0 bg-black/40" />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0C]/70 via-transparent to-[#4A1118]/10" />

              {/* Golden frame */}
              <div className="absolute -bottom-4 -left-4 h-full w-full border border-[#B28B5C]/30" />
            </motion.div>

            {/* Floating number */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-2 top-8 z-20 font-serif text-6xl text-[#B28B5C]/30 md:text-8xl"
            >
              26
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="mb-3 text-[9px] uppercase tracking-[0.35em] text-[#F5F1EA]/40">
          Desliza
        </p>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="mx-auto h-8 w-px bg-[#B28B5C]/60"
        />
      </motion.div>
    </section>
  );
}
