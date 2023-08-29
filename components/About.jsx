import React from 'react'
import Image from 'next/image'
import tracker from "@/public/undraw_fitness_tracker_3033.svg"
const About = () => {
  return (
    <section id="About" className='px-5 flex md:flex-row-reverse flex-col py-20
    my-10 h-full w-full '>

    <div className='md:text-left 
     text-center flex flex-col md:items-start
      items-center  justify-center w-full'>
    <h2 className={`font-poppins 
      font-bold  sm:text-5xl text-4xl text-black
     w-full max-w-sm
 my-3`}>About FlexFit Studio </h2>
      <p className={` text-gray-600 max-w-sm md:w-[448px] w-full py-5 `}>
      At FlexFit Studio, we understand that every body is
       unique. That's why our team of certified personal trainers
        is dedicated to crafting workout and meal 
      plans tailored to your individual needs, preferences, and goals.
      </p>

    

</div>
<div className={`h-full w-full flex items-center  md:justify-end justify-center`}>
<Image src={tracker} alt='undraw fitness tracker' 
className="w-[550px] h-[251px]"/>
      </div>


    </section>
  )
}

export default About