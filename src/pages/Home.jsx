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
    <div className="relative min-h-screen bg-cover bg-center bg-fixed 
    bg-[url('/bg/image5.webp')] md:bg-[url('/bg/image.jpg')]  lg:bg-[url('/bg/image.jpg')]">
      {/* Overlay para opacar el fondo */}
      <div className="absolute inset-0 bg-[#F2F2F3]/45 z-0 pointer-events-none"></div>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Hero />
        <Date />
        <Separator />
        <Location />
        <DressCode />
        <ButtonConfirmation />
        <ImagenFondo />
        <Photos />
      </motion.div>
    </div>
  );
}

export default Home;