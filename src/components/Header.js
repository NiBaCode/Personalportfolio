import React,{useContext} from 'react';

//import components
import Socials from './Socials';
import Logo from '../img/header/OBLIOINSTA.png';
import MobileNav from './MobileNav';

//import link
import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
    <header className=' fixed w-full px-[30px]
  lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row
    lg:items-center  w-full justify-between'>
        { /*Logo*/}
        <Link to={'/'} className='overflow-hidden max-w-[200px] '>
          <img src={Logo} alt="" />
        </Link>
        {/*nav-initially hidden - show on dekstop mode*/}
        <nav
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='hidden xl:flex gap-x-12 font-semibold'>
          <Link
           
            to={'/'} className='text-[#111827] hover:text-primary
          transition'>
            Home
          </Link>
          <Link
            to={'/about'} className='text-[#111827] hover:text-primary
          transition'>
            About
          </Link>
          <Link
            to={'/portfolio'} className='text-[#111827] hover:text-primary
          transition'>
            Portfolio
          </Link>
          <Link
            to={'/contact'} className='text-[#111827] hover:text-primary
          transition'>
            Contact
          </Link>
        </nav>
      </div>
      {/*socials*/}
      <Socials />
      {/*Mobile nav */}
      <MobileNav />
    </header>);
};

export default Header;
