import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
// import icons
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

const Header = () => {
  // header state
  const [isActive, SetIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // event listner
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? SetIsActive(true) : SetIsActive(false);
    });
  });
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md ' : 'bg-none py-6'} fixed w-full z-10 transition-all item-center`}>
      <div className=' container mx-auto  flex item-center  justify-between h-full'>
        {/* logo */}
        <Link to={'/'}>
          <div>
            <img className='w-[40px]' src={Logo} alt='' />
          </div>
        </Link>
        {/* signup */}
        <div>
          <Link to='/src/components/LoginSignupPage'>
            <div className='cursor-pointer flex relative'>Login/Signup</div>
          </Link>
        </div>
        {/* cart */}
        <div>
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative '><BsBag className='text-2x1' />
            <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

