import React from 'react'
import Image from "next/image"
import cooking from "@/public/undraw_cooking_p7m1.svg"
const Meal = () => {
  return (
 

    <section id='Meal_Plan' >
      <div className='flex items-center justify-center  flex-col py-10 px-5'>
      <h1 className='text-black font-bold text-3xl
       max-w-lg text-center'>   Ready to Transform Your Life?</h1>
    <p className=" text-gray-500 max-w-lg text-center">
    Join Gymance today and embark on a fitness journey that's
 truly yours. Sign up for a free consultation 
with one of our expert trainers and start
 unlocking your full potential.
    </p>
    </div>
      <div className="className='px-5 flex md:flex-row flex-col  py-20
    my-10 h-full w-full'">
   
    <div className='md:text-left 
     text-center flex flex-col md:items-end
      items-center  justify-center w-full'>
    <h2 className={`font-poppins 
      font-bold  sm:text-5xl text-4xl text-black
     w-full max-w-sm
 my-3`}>Personalized Meal Plans </h2>
      <p className={` text-gray-500 max-w-sm md:w-[448px] w-full py-5 `}>
      Fuel your body with the right nutrients for maximum results. 
      Our nutrition experts will design a meal plan that complements 
      your fitness goals, 
      accommodates dietary restrictions, and satisfies your taste buds.
      </p>

      <div className='flex items-center   md:justify-start justify-center my-2   max-w-sm  md:w-[448px] w-full '>
    <button className="px-3 py-3 rounded-xl
     border-white border   bg-blue-600
   v4"> <p className=" text-white  font-bold ">Get started</p></button>
  
</div>
 
</div>
<div className={`h-full w-full flex items-center  md:justify-start justify-center`}>
<Image src={cooking} alt="undraw cooking"  className="w-[330px] h-[270px]"/>

      </div>
    </div>
  </section>
  )
}

export default Meal