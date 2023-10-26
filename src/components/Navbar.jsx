import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {FaBars, FaDribbble, FaFacebook, FaTwitter, FaXmark} from 'react-icons/fa6'
import Modal from './Modal'



const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [isModalOpen, setIsModalOpen] = useState(false)

   const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
   }

    // nav items 
    const navItems = [
        {path:'/', link: 'Home'},
        {path:'/services', link: 'Services'},
        {path:'/about', link: 'About'},
        {path:'/blogs', link: 'Our Portfolio'},
        {path:'/contact', link: 'Contact'},
    ]

    {/* MOdal details  */} 
    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
  return (
    <header className='bg-blue-900  text-white fixed top-0 left-0 right-0 '>
        <nav className='px-6 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href='/' className='text-xl font-bold text-white'>WK <span className='text-orange-600'>Marketing</span></a>
            {/* <img className='h-15 w-20 ' src='logo.png' /> */}


            {/* nav for large device  */}
            <ul className='md:flex gap-12 text-lg hidden '>
                {
                    navItems.map(({path, link}) => <li className='text-white hover:text-orange-500 duration-300 transition-transform transform scale-100 hover:scale-110 ' key={path}>
                        <NavLink to={path} >{link}</NavLink>
                    </li>)
                }
            </ul>

            {/* menu icons  */}
            <div className='text-white lg:flex gap-4 items-center hidden '>
                <Link to='/' className='hover:text-orange-500 transition-transform transform scale-100 hover:scale-150 duration-500'><FaFacebook/></Link>
                <Link to='/' className='hover:text-orange-500 transition-transform transform scale-100 hover:scale-150 duration-500'><FaDribbble/></Link>
                <Link to='/' className='hover:text-orange-500 transition-transform transform scale-100 hover:scale-150 duration-500'><FaTwitter/></Link>
                <button onClick={openModal} className='border px-6 py-2 font-medium rounded hover:bg-orange-500 hover:text-white-600 duration-500 transition-transform transform scale-100 hover:scale-110'>Log in</button>
            </div>

            {/* our modal component is here  */} 
            <Modal isOpen={isModalOpen} onClose={closeModal} />


            {/* mobile menu btn , display mobile screen  */}
            <div className='md:hidden'> 
            <button onClick={toggleMenu} className='cursor-pointer'>
                {
                    isMenuOpen ? <FaXmark/> : <FaBars className='w-5 h-5'/>
                }
             </button>
            </div>
        </nav>

           {/* menu items only for mobile  */}
              <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 mt-14 bg-black ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                {
                    navItems.map(({path, link}) => <li className='text-white' key={path}>
                        <NavLink to={path}>{link}</NavLink>
                    </li>)
                }
             </ul>
    </header>
  )
}

export default Navbar
