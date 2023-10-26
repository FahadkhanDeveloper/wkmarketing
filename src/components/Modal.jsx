import React from 'react'

const Modal = ({isOpen, onClose}) => {
  
  return (
    <div className={`fixed top-20 left-0 w-full flex items-center justify-center ${isOpen ? '' : "hidden"}`}>
      <div className='modal-container'>
       <div className='bg-blue-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md transform scale-100 hover:scale-110 duration-500'>
         
       {/* modal content  */} 
       <h2 className='text-xl font-semibold mb-4 mt-6 uppercase'>Please Login Here</h2>
       <form>
         {/* email */} 
          <div className='mb-6'>
           <input type="email" name="email" id="email" placeholder="example@gmail.com"
           className="w-full rounded border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium
            text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md " />
        </div>  
         {/* Password */} 
         <div className='mb-5'>
         <input type="password" name="password" id="password" placeholder="Enter your password"
         className="w-full rounded border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium
          text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md " />
      </div> 
       <div>
       <button className='hover:shadow-md hover:bg-orange-500 rounded-md bg-[#6a64f1] py-3 px-8 text-base font-semibold text-white outline-none mb-5' >Login</button>
       </div>
        </form>
        
        <button onClick={onClose} className='transform scale-100 hover:scale-110 duration-500 hover:bg-orange-500 hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-gray-700 py-3 px-8 text-base font-semibold text-white outline-none mb-4' >Close</button>
       </div>
      </div>
    </div>
  )
}

export default Modal
