import React from 'react'
import Image from "next/image"
import stats from "@/public/undraw_fitness_stats_sht6.svg"
const Workout = () => {
  return (
    <section id='Workout_Plan' className='px-5 flex md:flex-row-reverse flex-col  py-20
    my-10 h-full w-full'>
   
    <div className='md:text-left 
     text-center flex flex-col md:items-start
      items-center  justify-center w-full'>
    <h2 className={`font-poppins 
      font-bold  sm:text-5xl text-4xl text-black
     w-full max-w-sm
 my-3`}>Customized Workout Plans </h2>
      <p className={` text-gray-500 max-w-sm md:w-[448px] w-full py-5 `}>
      Whether you're a beginner looking to build a strong foundation 
      or a fitness enthusiast striving for peak performance,
       our trainers will create a´
       dynamic workout plan that adapts to your progress and keeps
       you motivated.
      </p>

      <div className='flex items-center   md:justify-start justify-center my-2   max-w-sm  md:w-[448px] w-full '>
    <button className="px-3 py-3 rounded-xl
     border-white border   bg-blue-600
   v4"> <p className=" text-white  font-bold ">Get started</p></button>
  
</div>
 
</div>
<div className={`h-full w-full flex items-center 
 md:justify-end justify-center`}>
<Image src={stats} alt="undraw fitness stats"
 className="w-[330px] h-[270px]"/>

      </div>
    
  </section>
  )
}

export default Workout