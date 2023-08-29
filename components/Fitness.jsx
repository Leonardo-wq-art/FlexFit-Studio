 
import React from 'react'
import Image from "next/image"
import bodyShape from "@/public/body-shape-svgrepo-com.svg"
import dumbbell from "@/public/dumbbell-svgrepo-com.svg"
import health from "@/public/health-svgrepo-com.svg"
import Treadmill from "@/public/treadmill-svgrepo-com.svg"
const Fitness = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <div className='flex items-center justify-center  flex-col py-10 px-5'>
          
            <h1 className='text-black font-bold text-3xl max-w-lg text-center'>Take Control of Your Fitness Journey
</h1>
<p className=" text-gray-500 max-w-lg text-center">Discover a new era of fitness with Gymance, where our experienced personal trainers help you achieve 
  your goals through customized workout and meal plans designed just for you.</p>
        </div>
        <div className='grid lg:grid-cols-4 
md:grid-cols-2 grid-cols-1 items-center justify-center '>
   <div className=' flex flex-col items-center justify-center mx-10 my-5 aa'>
    <div className=' w-[120px]   h-[120px]'>
        <Image src={dumbbell}  alt='body-shape-svgrepo-com' 
width={120} height={120}  className=' w-[120px] 
  h-[120px] transform hover:-translate-y-2 translate-y-0 aa
   text-red-300 block'/>
</div>
<h1 className='text-black font-bold text-xl text-center'>Dynamic workouts
</h1>
<p className='text-gray-500 max-w-md
text-center'>
Adaptable and engaging exercise programs tailored to your unique goals and progress.</p>
    </div>
    <div className=' flex flex-col items-center justify-center mx-10 my-5 aa'>
    <div className=' w-[120px]   h-[120px]'>
        <Image src={health}  alt='body-shape-svgrepo-com' 
width={120} height={120}  className=' w-[120px] 
  h-[120px] transform hover:-translate-y-2 translate-y-0 aa
   text-red-300 block'/>
</div>
<h1 className='text-black font-bold text-xl text-center'>Skilled trainers

</h1>
<p className='text-gray-500 max-w-md
text-center'>Our team of highly qualified professionals 
is dedicated to guiding and motivating you on your fitness journey.</p>
    </div>
    <div className=' flex flex-col items-center justify-center mx-10 my-5 aa'>
    <div className=' w-[120px]   h-[120px]'>
        <Image src={Treadmill}  alt='body-shape-svgrepo-com' 
width={120} height={120}  className=' w-[120px] 
  h-[120px] transform hover:-translate-y-2 translate-y-0 aa
   text-red-300 block'/>
</div>
<h1 className='text-black font-bold text-xl text-center'>Tested methods

</h1>
<p className='text-gray-500 max-w-md
text-center'>Evidence-based training techniques 
to ensure the efficiency and effectiveness 
of your workouts.</p>
    </div>
    <div className=' flex flex-col items-center justify-center mx-10 my-5 aa'>
    <div className=' w-[120px]   h-[120px]'>
        <Image src={bodyShape}  alt='body-shape-svgrepo-com' 
width={120} height={120}  className=' w-[120px] 
  h-[120px] transform hover:-translate-y-2 translate-y-0 aa
   text-red-300 block'/>
</div>
<h1 className='text-black font-bold text-xl text-center'>Nutrition insights
</h1>
<p className='text-gray-500 max-w-md
text-center'>Valuable dietary
 advice, aligning your meals with 
 your fitness objectives for optimal results</p>
    </div>
</div>
    </div>
  )
}

export default Fitness