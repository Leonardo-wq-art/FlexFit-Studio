import React from 'react'
import Image from "next/image";
import Link from "next/link"

const Footer_Conter = () => {
  return (
    <>
<section className=' py-20 bg-black flex items-center justify-center'>
    <div className='flex md:flex-row flex-col items-center lg:w-[1250px] w-full
     justify-between px-5'>
 
    
          
<h1 className="text-white text-xl  mx-3 font-extrabold py-10">
FlexFit Studio </h1>
 
      <ul className="flex md:flex-row flex-col text-slate-700  
    items-center justify-center gap-10">

    <li className=" underline-animation text-white font-bold
     hover:text-blue-600 transition-colors">
        <Link href="#Home">Home</Link>
    </li>
    <li className="underline-animation text-white font-bold
     hover:text-blue-600 transition-colors">
      <Link href="#About">About</Link>
    </li>

    <li className="underline-animation text-white 
    font-bold hover:text-blue-600 transition-colors">
      <Link href="#Workout_Plan">
Workout Plan</Link>
    </li>
    <li className="underline-animation text-white 
    font-bold hover:text-blue-600 transition-colors">
      <Link href="#Meal_Plan">Meal Plan</Link>
    </li>
</ul>

     </div>
     </section>
     </>
  )
}

export default Footer_Conter