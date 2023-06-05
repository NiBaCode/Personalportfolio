import React,{useContext, useRef, useState} from 'react';
//import images
import WomanImg from '../img/contact/woman.png';
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
//import cursor pointer
import { CursorContext } from '../context/CursorContext';
//emailjs
import emailjs from '@emailjs/browser';
//import alert
import { Alert, Collapse } from '@mui/material';

const Contact = () => {
const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

const form = useRef();
const [submitMessage, setSubmitMessage] = useState(null);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_azvt8lf', 'template_510wasu', form.current, 'thCiflvGciH-fkAMz')
  .then((result) => {
  console.log(result.text);
  console.log("message sent");
  setSubmitMessage("Your message has been sent successfully!"); // set success message state
  setTimeout(() => setSubmitMessage(null), 4000); // hide the success message after 4 seconds
  form.current.reset(); // reset form fields
  }, (error) => {
  console.log(error.text);
  });
};

return (
<motion.section
initial={{ opacity: 0, y: '-80%' }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: '-80%' }}
transition={transition1}
className='section bg-white overflow-auto'>
<div className='container mx-auto h-full'>
<div className='flex flex-col md:flex-row h-full
items-center justify-start pt-36 gap-x-8 text-center
lg:text-left'>

      {/**bg */}
      <motion.div
        initial={{ opacity: 0, y: '-80%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-80%' }}
        transition={transition1}

        className='hidden lg:flex bg-[#EAF0F5]
        absolute bottom-0 left-0 right-0 top-72 -z-10 '></motion.div>
      {/*text e form */}
      <div 
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='lg:flex-1 lg:pt-25 px-4'>
        <h1 className='h1 shadows'>Contact Me</h1>
        <p className='mb-8 text-center'> If you have <b>questions</b>, are interested in <b>collaborating</b>, or need <b>assistance</b> with a project, 
        I will be happy to help.
         Contact me to discuss your needs and find the perfect solution for you.  
        </p>
        
        {/** form*/}

        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'>
          <div className='flex gap-x-10'>

            <input className='outline-none border-b
          border-b-primary h-[60px] bg-transparent
          font-secondary w-full pl-3
          placeholder:text-[#757879]'
              type='text'
              name="user_name"
              placeholder='Your name' />


            <input className='outline-none border-b
          border-b-primary h-[60px] bg-transparent
          font-secondary w-full pl-3
          placeholder:text-[#757879]'
              type='text'
              name="user_email"
              placeholder='Your Email' />

          </div>

          <input className='outline-none border-b
          border-b-primary h-[60px] bg-transparent
          font-secondary w-full pl-3
          placeholder:text-[#757879]'
            type='text'
            name="message"
            placeholder='Your Message' />

            

          <button type ="submit" value="Send" className='btn mb-[30px] mx-auto lg:mx-0 self-center pt-'>Send it </button>
          {/*success message */}
          <Collapse in={!!submitMessage}>
            <Alert severity="success">{submitMessage}</Alert>
          </Collapse>
        </form>
      </div>
      {/*image */}
      <motion.div 
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      initial={{ opacity: 0, y:'80%'}}
      animate={{ opacity: 1, y: 0}}
      exit={{ opacity: 0, y:'80%'}}
      transition={transition1}
      className='lg:flex-1  mx-8'>
        <img src={WomanImg} alt='' />
      </motion.div>
    </div>
  </div>
</motion.section>
);
};

export default Contact;


  
  
  
  
