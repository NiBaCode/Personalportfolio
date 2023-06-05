import React,{useContext} from 'react';
//import images
import WomanImg from '../img/about/this-image-in-magritte-style-.png';
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
//import cursor pointer
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return <motion.section 
  initial={{ opacity: 0}}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={transition1}
  className='section overflow-auto'>
    <div 
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    className='container mx-auto h-full '>
      {/*text and image wrap*/}
      <div className=' flex flex-col lg:flex-row
      h-full items-center justify-center gap-x-24 text-center
      lg:text-left lg:pt-40' >
        {/*image*/}
        <div className='flex-1 max-h-96 lg:max-h-max
      order-2 lg:order-none  shadows'> 
          <img src={WomanImg} alt='' />
        </div>
        {/**text */}
        <motion.div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        initial={{ opacity: 0, y:'80%'}}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y:'80%'}}
        transition={transition1}
        id='abouttext'
        className='flex-1 pb-14 lg:pt-0
      lg:w-auto z-10 flex flex-col justify-center
      items-center lg:items-center'><h1 className='h1 shadows'> About Me</h1>
          <p className='mb-12 max-w-lg px-4 text-center'>
            <br />
            Welcome to my creative world!<br/> I'm Nicola, 
             I'm a passionate <b>Web designer</b> and <b>jr Frontend</b> developer with a 
             love for technology, art, and photography. I thrive on turning ideas into 
             compelling digital products. With meticulous attention to detail and unwavering dedication,
             I offer innovative and engaging digital solutions that will give you the chance to have a solid online presence.."<br/><br/>
          <b>.TEAMWORKER</b>
          <b>.THINKER</b>
          <b>.CODER</b>
            
         
          </p>
          <Link to={'/portfolio'} className='btn text-center'>
            View my work
          </Link>

        </motion.div>
      </div>
    </div>
  </motion.section>;
};

export default About;
