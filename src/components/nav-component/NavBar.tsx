import  PorkerLogo  from '../../assets/images/PorkerLogo.svg';
import SearchLogo from '../../assets/images/SearchLogo.svg';
import  CartLogo  from '../../assets/images/CartLogo.svg';
import { AiOutlineDown } from 'react-icons/ai'
import { useEffect, useRef, useState } from "react";
import { HamburgerMenuIcon } from '../../assets/icons';
import { IoIosHelpCircleOutline } from 'react-icons/io'
// import { BiSearchAlt2 } from 'react-icons/bi'
// import { BsCart4 } from 'react-icons/bs'


const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null); 
  const handleDropDown = (state: boolean) => {
    setOpen(!state)
  };
  
  const handleClickOutsideDropdown = (e:any) => {
    if(open && dropdownRef.current?.contains(e.target as Node)){
      setOpen(true)
      
    };
  };
  window.addEventListener("click", handleClickOutsideDropdown)

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target !== dropdownRef.current) {
        setOpen(false)
      }
    })
  
    return () => {
      
    }
  }, [])
  
  
  return (
    <div className="navigation">
      <nav className='px-5 py-4 md:px-14 md:py-3 flex gap-3 items-center'>
        {/* Menu Btn */}
        <button className='bg-slate-50 p-[6px] rounded lg:hidden' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <HamburgerMenuIcon />
        </button>

        {/* Logo */}
        <div className="app-logo whitespace-nowrap">
          <a href="./" className='flex items-center gap-1'>
              <img src= {PorkerLogo} alt=""/>
              <h1 className='porker text-lg font-bold text-[#197B30] pt-1'>Porker Hut</h1>
          </a>
        </div>

        {/* Nav Links */}
          <div className=' hidden lg:block ml-20'>

            <ul className='flex gap-12 pt-1 text-lg'>
              <li>
                  <h1 className=' hover:text-[#479559] cursor-pointer font-normal'>Home</h1>
              </li>
              <li>
                  <h1 className=' hover:text-[#479559] cursor-pointer font-normal'>Product</h1>
              </li>

              <li ref={dropdownRef} onClick={(e) => handleDropDown(open)}>
                  <h1  className=' hover:text-[#479559] cursor-pointer font-normal flex items-center gap-1'>Services
                  <AiOutlineDown size={14} />
                  </h1>
                      {open && 
                      <ul className=' absolute top-[60px] text-[15px] text-white'>
                        <li>Agro Services</li>
                        <li>Vet Services</li>
                        <li>Weekend Kills</li>
                      </ul>
                      }
              
              </li>
              <li>
                  <h1 className=' hover:text-[#479559] cursor-pointer font-normal'>About</h1>
              </li>
              <li>
                  <h1 className=' hover:text-[#479559] cursor-pointer font-normal'>Contact</h1>
              </li>
            </ul>

          </div>

        {/* Action Buttons */}
        <div className="action-btns flex gap-3 ml-auto mr-4">
          <button className='bg-slate-50 p-[6px] rounded w-8'><img className='w-6' src={ SearchLogo} alt="" /></button>
          <button className='bg-slate-50 p-[6px] rounded w-8'><img className='w-6' src={ CartLogo} alt="" /></button>
        </div>

        {/* Authentication Buttons */}
        <div className="auth-btns gap-3 hidden md:flex">
          <button className='border border-[#479559] text-sm py-3 px-[35px] rounded-md text-[#197B30] hover:text-white hover:bg-[#479559] transition-all duration-500 active:scale-90 select-none tracking-wider font-medium whitespace-nowrap'>
            Login
          </button>
          <button className='border border-[#479559] text-sm py-2 px-[30px] rounded-md text-[#fff] bg-[#479559] hover:bg-white hover:text-[#479559] md:inline-block select-none tracking-wider font-medium whitespace-nowrap'>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-navigation px-5 py-4 md:px-14 md:py-3 flex flex-col gap-20 fixed z-[999] bg-[#197B30] w-full h-full">
          {/* Authentication Buttons */}
          <div className="auth-btns gap-3 flex">
            <button className='border border-[white] text-sm py-3 px-[35px] rounded-md text-[#197B30] bg-white hover:text-white hover:bg-[white] transition-all duration-500 active:scale-90 select-none tracking-wider font-medium whitespace-nowrap'>
              Login
            </button>
            <button className='border border-[white] text-sm py-2 px-[30px] rounded-md text-[#fff] bg-[#197B30] hover:bg-white hover:text-[#479559] md:inline-block select-none tracking-wider font-medium whitespace-nowrap'>
              Sign Up
            </button>
          </div>
          <ul className='flex flex-col gap-12 pt-1 text-lg'>
            <li>
                <h1 className=' hover:text-[#479559] cursor-pointer font-normal'>Home</h1>
            </li>
            <li>
                <h1 className=' hover:text-[#479559] cursor-pointer font-normal'>Product</h1>
            </li>

            <li ref={dropdownRef} onClick={(e) => handleDropDown(open)}>
                <h1  className=' hover:text-[#479559] cursor-pointer font-normal flex items-center gap-1'>Services
                <AiOutlineDown className='mt-1' size={14} />
                </h1>
                    {open && 
                    <ul className='pl-5 text-[15px] text-white'>
                      <li className='py-1'>Agro Services</li>
                      <li className='py-1'>Vet Services</li>
                      <li className='py-1'>Weekend Kills</li>
                    </ul>
                    }
            
            </li>
            <li>
                <h1 className=' hover:text-[#479559] cursor-pointer font-normal'>About</h1>
            </li>
            <li>
                <h1 className=' hover:text-[#479559] cursor-pointer font-normal'>Contact</h1>
            </li>

            <li className=' flex items-center gap-1'>
              <IoIosHelpCircleOutline  size={25}/>
              <h1 className=''> Help</h1>
              <AiOutlineDown className='mt-1' size={14} />
            </li>
          </ul>

        </div>
      )}
    </div>
  )
}

export default NavBar