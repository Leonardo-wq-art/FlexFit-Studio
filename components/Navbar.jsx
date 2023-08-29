
import Link from "next/link"
import Image from "next/image";

import Icons from "./Icons";
const Navbar = () => {
 
  return (

    <nav className='h-full w-full p-5 bg-white 
    flex flex-row justify-center items-center md:px-10 px-5
     '>
      <div className=" flex flex-row justify-between lg:w-[1250px] w-full items-center md:px-10 px-5">
  <div className="flex flex-row items-center justify-center ">
  
<h1 className="text-black text-xl  mx-3 font-extrabold">
FlexFit Studio </h1>
  </div>

  <ul className="lg:flex hidden text-slate-700  
   flex-row items-center justify-center gap-10">

    <li className=" underline-animation text-black font-bold
     hover:text-blue-600 transition-colors">
        <Link href="#Home">Home</Link>
    </li>
    <li className="underline-animation text-black font-bold
     hover:text-blue-600 transition-colors">
      <Link href="#About">About</Link>
    </li>

    <li className="underline-animation text-black 
    font-bold hover:text-blue-600 transition-colors">
      <Link href="#Workout_Plan">
Workout Plan</Link>
    </li>
    <li className="underline-animation text-black 
    font-bold hover:text-blue-600 transition-colors">
      <Link href="#Meal_Plan">Meal Plan</Link>
    </li>
   
  </ul>
   <button className="px-3 py-3 rounded-xl
     border-white border  lg:block hidden bg-blue-600
   v4"> <p className=" text-white  font-bold ">Support</p></button>
<Icons/>

</div>
  </nav>

  );
};


export default Navbar