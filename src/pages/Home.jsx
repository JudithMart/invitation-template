import React from 'react'
import Hero from '../components/Hero'
import Date from '../components/Date'
import Separator from '../components/Separator'
import Location from '../components/Location'
import DressCode from '../components/DressCode'
import ButtonConfirmation from '../components/ButtonConfirmation'
import ImagenFondo from '../components/ImagenFondo'


function Home() {
  return (
    <div className=" 
      min-h-screen 
      bg-cover bg-center
      md:bg-fixed
      bg-[url('/bg/image.webp')] 
      md:bg-[url('/bg/desktop.webp)] ">
        <Hero/>
        <Date/>
        <Separator/>
        <Location/>
        <DressCode/>
        <ButtonConfirmation/>
       <ImagenFondo/>
    </div>
  )
}

export default Home