import React from 'react'
import { motion } from "framer-motion";
import Typed from 'react-typed';

const containerVariants = {
  animate: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.6,
    },
  },
};

const imgVariants = {
  initial: {
    opacity: 0,
    x: -100,
    y: 100,
    rotateZ: 20,
  },
  animate: (custom) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotateZ: custom === 0 ? -20 : custom === 1 ? 0 : 20,
  }),
};



const Cards = () => {
 
 
  return (
    <>
     <div className='py-10 bg-white-500 sm:shadow-sm shadow-md text-center text-black px-4'>
       {/* <h1 className='text-5xl lg:text-7xl loading-snug font-bold mb-5'>Cards area</h1> */}
       
       <div className="grid grid-cols-3 mx-auto max-w-screen-lg w-full mr-60 md:col-1">

      <div className="z-10 text-left col-span-2 flex gap-3 relative flex-col pt-[35vh] ">
        
      <div className="w-full lgl:w-1/2 flex flex-col md:flex ">
    <div className="">
    <p className='text-black font-bold  '>
        GROWING WITH DATA ANALYTICS
      </p>
      <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-black'>
        Grow with data.
      </h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-4xl sm:text-1xl text-xl font-bold py-4 text-black'>
          Fast, flexible financing for
        </p>
        <Typed
        className='md:text-4xl sm:text-2xl text-xl font-bold md:pl-4 pl-2 text-orange-500'
          strings={['BTB', 'BTC', 'SASS']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <p className='md:text-2xl text-xl font-bold text-black'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
      <button className='border hover:bg-orange-500 hover:text-white w-[200px] transition-all duration-200 ease-in rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
    </div>
   {/* Media */}
 
  </div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative z-40 pt-[25vh]"
      >
        <motion.img
          variants={imgVariants}
          custom={0}
          src="mark.jpg"
          className="h-[55vh] w-full -left-[12vw] -rotate-12 absolute object-cover z-10 ml-20 "
        />
        <motion.img
          custom={1}
          variants={imgVariants}
          src="mar.jpg"
          className="h-[55vh] w-full absolute object-cover z-10 ml-20"
        />
        <motion.img
          custom={2}
          variants={imgVariants}
          src="desig.jpg"
          className="h-[55vh] left-[8vw] rotate-12 w-full absolute object-cover z-10 ml-20"
        />
      </motion.div>

    </div>

       </div>


       {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex">
      <img
        src="developer.jpg"
        alt="Card Image"
        className="w-auto h-40 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Card Title</h2>
        <p className="mt-2 text-gray-600">
          Card Description goes here. This can be a longer text describing the
          card's content.
        </p>
        <div className="mt-4 flex justify-end">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2 transition-transform transform hover:scale-105"
          >
            Button
          </a>
          <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105">
            <i className="fas fa-heart mr-2"></i> Icon
          </button>
        </div>
      </div>
    </div> */}
    </>
   
  )
}

export default Cards