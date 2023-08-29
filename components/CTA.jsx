
const CTA = () => {
  return (
    <div className="px-10 py-20">
    <section className='flex flex-col h-full w-full max-w-[1000px] mx-auto
     bg-blue-600 my-3 rounded-xl justify-center  items-center
      md:text-left text-center '>
    <div className={`  w-full my-10 px-5 flex 
     flex-col justify-center items-center`}>
     <h2 className={` font-poppins font-semibold  sm:text-5xl text-4xl text-white max-w-xl 
     w-full `}>les't try our service now  </h2>
    <p className={` text-white max-w-md mt-5 text-center`}>
    Everything you need to do is just accept card
     payments and grow your business anywhere on the planet
     </p>
     </div>
     <div className='flex items-center   justify-center my-2 
           w-full '>
    <button className="px-3 py-3 rounded-xl
     bg-blue-600 border-white border
   v4"> <p className=" text-white  font-bold ">Get started</p></button>
   </div>
  
   </section>
   </div>
  )
}

export default CTA