import React,{useContext} from 'react';

//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
//import cursor pointer
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (<motion.section
  initial={{ opacity: 0, y:'100%'}}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y:'100%'}}
        transition={transition1}
  className='section overflow-auto'>
    <div className='container mx-auto h-full relative'>
      <div className=' h-full
      items-center justify-start columngap text-center 
      lg:text-left pt-24 lg:pt-36 pb-8'>
        {/**text */}

        <motion.div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        initial={{ opacity: 0, y:'80%'}}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y:'80%'}}
        transition={transition1}
        className='flex flex-col justify-center items-center text-center'>
          <h1 className='h1 shadows'>Portfolio</h1>
          <p className='mb-12 max-w-lg px-4 justify-center items-center'><br />Let's go in to my world! <br/>Here you will find a selection of my best <br/>
          web design and development projects. <br/>
          Each work is the result of a process of research, analysis and a consequent creative approach.<br/> <br/><b>Thanks for looking.  </b>

          </p>
          <Link to={'/contact'} className='btn mb-[30px] inline-block float-left
          mx-auto '>
            Hire me
          </Link>

        </motion.div>
        {/*images grid*/}
       <div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='mobgrid shadows'>
           {/*images*/}
         
           <div className="gallery-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadows">
  <a href='https://www.behance.net/gallery/166037771/UIUX-Candles-Shop-HomepageAbout-us-page-Design' className="item item-1 bg-cover bg-center h-80 md:h-96 lg:h-auto"></a>
  <a href='https://www.behance.net/gallery/166037771/UIUX-Candles-Shop-HomepageAbout-us-page-Design' className="item item-2 bg-cover bg-center h-80 md:h-96 lg:h-auto" ></a>
  <a href='https://www.behance.net/gallery/162165075/UIUX-Landing-page-House-Wine-Cantina-Azzoni-Design' className="item item-3 bg-cover bg-center h-80 md:h-96 lg:h-auto" ></a>
  <a href='https://www.behance.net/gallery/170489375/UIUX-Cars-Website-Design' className="item item-4 bg-cover bg-center h-80 md:h-96 lg:h-auto" ></a>
  <a href='http://nico93.altervista.org/' className="item item-5 bg-cover bg-center h-80 md:h-96 lg:h-auto" ></a>
  <a href='https://www.behance.net/gallery/166408663/UIUX-Interior-Design-Agency-Homepage-Design' className="item item-6 bg-cover bg-center h-80 md:h-96 lg:h-auto" ></a>

</div>
         
        </div>

      </div>

    </div>
  </motion.section>);
};

export default Portfolio;
