import React from 'react'
// import Typed from 'react-typed';
// import Media from './Media';
import  {AiOutlineSearch} from 'react-icons/ai'
import Feedback from '../components/Feedback';

function Card3({
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
}) {
  return (
    <div className={`rounded-lg p-6 shadow-sm ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
      </div>
      <h3 className="pt-5 text-[14px] font-bold text-gray-600 block">
        {heading}
      </h3>
      <p className="font-normal text-gray-900 cursor-pointer text-lg duration-300 transition hover:text-blue-500 mt-2">
        {description}
      </p>
    </div>
  );
}
const Services = () => {
  return (
    <div>
       <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-2'>
            
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-gray-600 font-medium'>START TO SUCCESS</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Access To <span className='text-orange-500'>5000+</span> Courses
                    from <span  className='text-orange-500'>300</span> Instructors 
                    & Institutions
                </h1>
                <p className='py-2 text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>
                
                <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                    <input 
                        className='bg-white'
                        type="text"
                        placeholder='What do want to learn?'
                    />
                    <button>
                        <AiOutlineSearch 
                            size={20}
                            className="icon"
                            style={{color:'#000'}}

                        />

                    </button>
                </form>
            </div>
            
            <img  src='heroImg.png' className="md:order-last  order-first" />
        </div>
        

        <div className='w-full bg-white py-[50px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-2xl font-bold text-[#536E96]'>Trusted by over 25,000 teams around the world.</h1>
            <p className='text-center  text-[#536E96] text-xl'>Leading companies use the same courses to help employees keep their skills fresh.</p>
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                  <img src='company-logo-1.png' />
                  <img src='company-logo-2.png' />
                  <img src='company-logo-3.png' />
                  <img src='company-logo-4.png' />
                </div>
            </div>
        
        </div>

    </div>


    </div>

{/* our Services */}

       <div className='bg-white-500 text-center text-black py-7 shadow-md'>
       <h1 className='text-5xl lg:text-3xl loading-snug font-bold mb-5 mt-5'>Our Services</h1>
       </div>

       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
       <Card3
         className="bg-[#f3faff]"
         heading="Web Developer"
         description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
         thumbnailSrc="developer.jpg"
       />
       <Card3
         className="bg-[#f3faff]"
         heading="UI/Ux Designer"
         description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
         thumbnailSrc="design.jpg"
       />
       <Card3
         className="bg-[#f3faff]"
         heading="Business"
         description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
         thumbnailSrc="business.jpg"
       />
     </div>

     <Feedback/>
    </div>
    
    


  )
}

export default Services
