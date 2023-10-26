import React from 'react'
import { logo } from '../assets'
import {FaFacebookF,FaDribbble,FaLinkedinIn,FaInstagram,FaBehance} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full bg-white-500 py-24 border'>
   <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
            
   <div className='col-span-2'>
   <h1 className='text-4xl font-bold text-orange-500'>Practics</h1>
       <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
       <h3 className='py-2 text-[#6D737A]'>Call : +123 400 123</h3>
       <h3 className='py-2 text-[#6D737A]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in, feugiat auctor felis.</h3>
       <h3 className='py-2 text-[#363A3D]'>Email: example@mail.com</h3>
       <div className='flex gap-4 py-4'>
               <div className='p-4 bg-blue-500 hover:bg-blue-900 hover:text-white-500 rounded-xl cursor-pointer'><FaFacebookF size={25} style={{color:'black'}} /></div>
               <div className='p-4 bg-[#333] rounded-xl'><FaDribbble size={25} style={{color:'#EA4C89'}} /></div>
               <div className='p-4 hover:bg-black bg-gray-600 hover:text-white cursor-pointer rounded-xl'><FaLinkedinIn size={25} style={{color:'white'}} /></div>
               <div className='p-4 bg-red-100 hover:bg-red-400 cursor-pointer rounded-xl'><FaInstagram size={25} style={{color:'red'}} /></div>
               {/* <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaBehance size={25} style={{color:'#4DC39E'}} /></div> */}

       </div>

   </div>

   <div>
       <h3 className='text-2xl font-bold'>Explore</h3>
       <ul className='py-6 text-[#6D737A]'>
           <li className='py-2'>Home</li>
           <li className='py-2'>About</li>
           <li className='py-2'>Course</li>
           <li className='py-2'>Blog</li>
           <li className='py-2'>Contact</li>

       </ul>
   </div>

   <div>
       <h3 className='text-2xl font-bold'>Category</h3>
       <ul className='py-6 text-[#6D737A]'>
           <li className='py-2'>Design</li>
           <li className='py-2'>Development</li>
           <li className='py-2'>Marketing</li>
           <li className='py-2'>Business</li>
           <li className='py-2'>Lifestyle</li>
           <li className='py-2'>Photography</li>
           <li className='py-2'>Guiding</li>

       </ul>
   </div>

   <div className='max-[780px]:col-span-2'>
       <h3 className='text-2xl font-bold'>Subscribe</h3>
       <h3 className='py-2 text-[#6D737A]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in, feugiat auctor felis.</h3>
       <form className='py-4'>
           <input 
               className='bg-[#F2F3F4] p-4 w-full rounded' 
               placeholder='Email here' 
           />
           <button className='max-[780px]:w-full my-4 px-5 py-3 rounded-md hover:bg-orange-500 hover:text-white-600 duration-500 transition-transform transform scale-100 hover:scale-110 border text-black font-medium'>Subscribe Now</button>

       </form>


   </div>

</div>
</div>
  )
}

export default Footer
