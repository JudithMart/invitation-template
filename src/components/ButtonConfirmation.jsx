import React from "react";
import { motion } from "framer-motion";

function ButtonConfirmation() {
  const phone = "5214434715503";
  const message = encodeURIComponent("Hola!! 🤠 confirmo mi asistencia Soy____");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg text-white  bg-[#2E6515] hover:bg-[#37791b]
           transition-colors duration-200 shadow-md shadow-[#2E6515] mt-4 font-serif  font-normal text-sm"
        >
          Confirmar asistencia 
          
        </a>
      </motion.div>
 <p className="italic text-gray-700 text-[12px] mt-2 text-center">*Válido solo para dos personas</p>
     
    </div>
  );
}

export default ButtonConfirmation;
