import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Date from '../components/Date';
import Separator from '../components/Separator';
import Location from '../components/Location';
import DressCode from '../components/DressCode';
import ButtonConfirmation from '../components/ButtonConfirmation';
import ImagenFondo from '../components/ImagenFondo';
import Photos from '../components/Photos';

function Home() {
  return (
    <main className="relative min-h-screen bg-cover bg-center bg-fixed 
    bg-black/70" >
      {/* Overlay para opacar el fondo */}
      {/* <div className="absolute inset-0 bg-[#F2F2F3]/45 z-0 pointer-events-none"></div> */}
      {/* <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      > */}
        <Hero />
        <Date />
        <ButtonConfirmation />
        {/* <Separator />
        <Location />
        <DressCode />
        
        <ImagenFondo />
        <Photos /> */}
      {/* </motion.div> */}
    </main>
  );
}

export default Home;