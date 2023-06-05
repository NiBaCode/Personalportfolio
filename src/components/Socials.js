import React, { useContext } from 'react';
//import icons
import {
  
  ImBehance,
  ImGithub,

} from 'react-icons/im';

import { CursorContext } from '../context/CursorContext';
import { Link } from 'react-router-dom';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return <div
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
    
      
      
        <a href='https://behance.net/921433c1_NiWebDesign' target='_blank'>
        <ImBehance /></a>
       
      
      
        <a href='https://github.com/NiBaCode' target='_blank' >
        <ImGithub /></a>
      
    </ul>
  </div>;
};

export default Socials;
