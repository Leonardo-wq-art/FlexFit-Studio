"use client"
import {motion} from "framer-motion"
import workingOut from "@/public/undraw_working_out_re_nhkg.svg"
import Image from 'next/image'
const Hero = () => {
  return (
    <section id='Home' className='px-5 flex md:flex-row flex-col  pb-20
    my-10 h-full w-full'>
   
    <div 
    className='md:text-left 
     text-center flex flex-col md:items-end
      items-center  justify-center w-full'>
    <h2 className={`font-poppins 
      font-bold  sm:text-5xl text-4xl text-black
     w-full max-w-sm
 my-3`}>Welcome to FlexFit Studio </h2>
      <p className={` text-gray-600 max-w-sm md:w-[448px] w-full py-5`}>
      Unleash your inner athlete
      </p>

      <div className='flex items-center   md:justify-start justify-center my-2 
        max-w-sm  md:w-[448px] w-full '>
    <button className="px-3 py-3 rounded-xl
     border-white border   bg-blue-600
   v4"> <p className=" text-white  font-bold ">Get started</p></button>
  
</div>

</div>
<div className={`h-full w-full flex items-center  md:justify-start justify-center`}>

<Image src={workingOut} priority={true} 
 alt="undraw working out " className="w-[245px] h-[302px]"/>

      </div>
    
  </section>
  )
}

export default Hero