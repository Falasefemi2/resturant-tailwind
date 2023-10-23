import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { images } from '../constant'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex justify-between items-center bg-[color:var(--color-black)] py-[1rem] px-[2rem]'>

      {/* Logo */}
      <div className='flex justify-start items-center'>
        <img src={images.gericht} alt="app logo" className='w-[150px]' />
      </div>

      {/* NavLinks */}
      <ul className='flex-1 flex justify-center items-center list-none hover:text-[var(--color-grey)]'>
        <li className='p-opensans my-0 mx-[1rem] hover:text-[var(--color-grey)]'><a href="#home">Home</a></li>
        <li className='p-opensans my-0 mx-[1rem] hover:text-[var(--color-grey)]'><a href="#about">About</a></li>
        <li className='p-opensans my-0 mx-[1rem] hover:text-[var(--color-grey)]'><a href="#menu">Menu</a></li>
        <li className='p-opensans my-0 mx-[1rem] hover:text-[var(--color-grey)]'><a href="#awards">Awards</a></li>
        <li className='p-opensans my-0 mx-[1rem] hover:text-[var(--color-grey)]'><a href="#contact">Contact</a></li>
      </ul>

      {/* Login links */}
      <div className='flex justify-end items-center'>
        <a href="#login" className='p-opensans my-0 mx-[1rem] transition-[0.5s] hover:border-b-[1px]  border-solid border-[var(--color-golden)]'>Log In / Register</a>
        <div className='w-[1px] h-[30px] bg-[color:var(--color-grey)]' />
        <a href="/" className='p-opensans my-0 mx-[1rem] transition-[0.5s] hover:border-b-[1px]  border-solid border-[var(--color-golden)]'>Book Table</a>
      </div>

      {/* smaller devices */}

      <div className='fixed top-0 left-0 w-full h-screen bg-[color:var(--color-black)] transition-[0.5s] flex-col z-[5] 2xl:flex'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggle(true)} />

        {toggle && (
          <div className='flex-center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="text-[27px] text-[var(--color-golden)] cursor-pointer absolute top-5 right-5" onClick={() => setToggle(false)} />
            {/* NavLinks */}
            <ul className=''>
              <li className='p-opensans my-0 mx-[1rem] hover:text-[var(--color-grey)]'><a href="#home">Home</a></li>
              <li className='p-opensans my-0 mx-[1rem] hover:text-[var(--color-grey)]'><a href="#about">About</a></li>
              <li className='p-opensans my-0 mx-[1rem] hover:text-[var(--color-grey)]'><a href="#menu">Menu</a></li>
              <li className='p-opensans my-0 mx-[1rem] hover:text-[var(--color-grey)]'><a href="#awards">Awards</a></li>
              <li className='p-opensans my-0 mx-[1rem] hover:text-[var(--color-grey)]'><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}




      </div>
    </nav>
  )
}

export default Navbar