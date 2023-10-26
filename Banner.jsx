import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-white-500 shadow-sm shadow-md  mx-auto'>
        <div className='text-black text-center'>
            <h1 className='text-5xl lg:text-7xl loading-snug font-bold mb-5'>Welcome To The WK <span className='text-blue-600'>Marketing</span></h1>
            <p className='text-gray-900 lg:w-3/5 mx-auto mb-5 font-primary'>
                Start your blog today and join a community of writter and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips tutorials. 
            </p>
            <div >
                <Link to='/' className='font-medium hover:text-[#ffff00] inline-flex items-center py-1'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner
