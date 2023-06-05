import React, {useContext} from 'react';
//import images
import WomanImg from '../img/home/serious.png';
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
//import cursor pointer
import { CursorContext } from '../context/CursorContext';


const Home = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1}
    className='section overflow-auto'>
    <div className='container mx-auto h-full relative'>
      {/**text and image wrapp */}
      <div className='flex flex-col justify-center'>
        {/**text */}
        <motion.div
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1 , y: 0}}
          exit={{ opacity: 0 , y:'-50%'}}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='w-full  pt-32 px-5 lg:pt-14 
        lg:w-auto z-10 lg:absolute flex flex-col
        justify-center items-center lg:items-starts'>
          <h1 className='h1 shadows mobtext' 
          >WEB DESIGNER .
            <br />JR FRONTEND .
          </h1>
          <p className='text-[26px] lg:text-[36px] 
          font-primary mb-4 lg:mb-12 text-[#4d4d4d]'>italy</p>
          <Link to='/contact' className='btn mb-[30px]'>Hire Me</Link>

        </motion.div>
        {/**image */}
        <div className='flex justify-end max-h-96
        lg:max-h-max'>
          <motion.div 
           initial={{opacity:0}}
           animate={{opacity:1}}
           exit={{opacity:0}}
           transition={transition1}
          className='relative lg:-right-40
          overflow-hidden'>
            <motion.img
            whileHover={{scale:1.5}}
            whileTap={{ scale: 1 }}

            transition={transition1}
            src={WomanImg} alt='' />
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
};

export default Home;
