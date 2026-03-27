import React, { Component } from 'react'
import { motion } from "framer-motion";

export class Date extends Component {
  render() {
    return (
      <div className=" flex items-center justify-center py-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[20px] md:text-xl text-center  mr-4"
        >
          <span className="font-serif text-[#2E6515] tracking-wide">
            SÁBADO
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[75px] h-[75px] md:w-[100px] md:h-[100px]
                     rounded-full 
                     border-[1.5px] border-[#C6A15B] 
                     flex items-center justify-center"
        >
          <span className="font-serif text-3xl md:text-5xl text-[#2E6515] font-semibold">
            18
          </span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[20px] md:text-xl text-center  ml-4"
        >
          <span className="font-serif text-[#2E6515] tracking-wide">
            ABRIL
          </span>
        </motion.p>

      </div>
    )
  }
}

export default Date