import React from 'react'
// import Cards from '../components/Cards'
import {SlGraduation} from 'react-icons/sl'
import {FiVideo} from 'react-icons/fi'
import {SlPeople} from 'react-icons/sl'
import {BsVectorPen} from 'react-icons/bs'
import {TiHtml5} from 'react-icons/ti'
import {TbMicrophone2,TbMusic} from 'react-icons/tb'
import {HiOutlineBriefcase} from 'react-icons/hi'
import {WiSunrise} from 'react-icons/wi'
import {AiOutlineCamera} from 'react-icons/ai'
import {BiData} from 'react-icons/bi'
import {MdAttachMoney} from 'react-icons/md'
import {FaUniversity} from 'react-icons/fa'
import CategoryCard from '../components/CategoryCard'
import Typed from 'react-typed';
import Courses from '../components/Courses'
import Services from './Services'



const About = () => {
  return (
    <div>
        {/* About us header and courses start */}
      <div className='pt-40 pb-20 bg-white-500 shadow-lg text-center text-black px-4'>
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
      <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
      <button className='border hover:bg-orange-500 hover:text-white w-[200px] transition-all duration-200 ease-in rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>

      
    </div>
   {/* Media */}
   <Courses/>
 
  </div>
       </div>
       {/* About us header and courses End */}



      <div className='max-w-7xl mx-auto'>
      <div className='w-full bg-white py-20'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-center '>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Our <span className='text-black-500'>Achievements</span></h1>
                <p className='text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>
                
                <div className='grid grid-cols-2 py-16'>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'>
                            <SlGraduation 
                                size={30}
                                style={{color:'#1A906B'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>300</h1>
                            <p className='text-[#6D737A]'>Instructor</p>
                        </div>

                    </div>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#FFFAF5] rounded-xl'>
                            <FiVideo 
                                size={30}
                                style={{color:'#FFC27A'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>10,000+</h1>
                            <p className='text-[#6D737A]'>Video</p>
                        </div>

                    </div>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#FFEEF0] rounded-xl'>
                            <SlGraduation 
                                size={30}
                                style={{color:'#ED4459'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>20,000+</h1>
                            <p className='text-[#6D737A]'>Student</p>
                        </div>

                    </div>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                            <SlPeople 
                                size={30}
                                style={{color:'#0075FD'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>1,00,000+</h1>
                            <p className='text-[#6D737A]'>Users</p>
                        </div>

                    </div>

                </div>
           </div>
            
             
             <img  src='achievement.png' className="m-auto md:order-last  order-first" />
        </div>
    </div>

 {/* most popular category start */}

    <div className='w-full bg-white py-20'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-2'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Most <span className='text-black'>Popular Categories</span></h1>
                <p className='text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>
                
                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1'>
                    <CategoryCard  icons={<BsVectorPen size={30} />} title={'Design'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Development'} />
                    <CategoryCard icons={<TbMicrophone2 size={30} />} title={'Marketing'} />
                    <CategoryCard icons={<HiOutlineBriefcase size={30} />} title={'Business'} />

                    <CategoryCard icons={<WiSunrise size={30} />} title={'Lifestyle'} />
                    <CategoryCard icons={<AiOutlineCamera size={30} />} title={'Photography'} />
                    <CategoryCard icons={<TbMusic size={30} />} title={'Music'} />
                    <CategoryCard icons={<BiData size={30} />} title={'Data Science'} />

                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Personal Develop'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Health & Fitness'} />
                    <CategoryCard icons={<MdAttachMoney size={30} />} title={'Finance'} />
                    <CategoryCard icons={<FaUniversity size={30} />} title={'Teaching'} />


                    

                </div>
        
        
        </div>
    </div>

    {/* most popular category start */}

      </div>


      
       
 </div>
  )
}

export default About
