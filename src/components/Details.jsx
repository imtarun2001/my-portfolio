import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaChevronUp,FaChevronDown } from "react-icons/fa";
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const Details = () => {

  const {details} = useAppContext();

  const [showup,setShowup] = useState(false);

  const arrOfHeaders = ['projects','skills','certificates','academic'];

  const transition = {type: 'normal', duration: 1};

  return (
    <div className="details w-full md:h-screen p-[1rem] bg-gray-100 text-black tracking-wide flex flex-col justify-start sm:justify-between items-center gap-[1rem] sm:gap-0">

      {/* 1st section */}
      <div className='w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-[2rem] md:gap-0'>
        <motion.div  initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={transition}  className='text-[2rem] bg-white px-[1rem] drop-shadow-lg drop-shadow-black'>PORT<span className='text-purple-700'>FOLIO</span></motion.div>
        <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={transition}  className='flex justify-center uppercase items-center gap-[1.2rem] sm:gap-[2.5rem]'>
          {
            arrOfHeaders.map((header,index) => (
              <div key={index} className='hover:text-purple-700 text-[0.7rem] sm:text-[1rem] cursor-pointer'>
                <Link to={header} spy={true} smooth={true}>
                  <div>{header}</div>
                  <div className="w-full border-2 border-purple-700"></div>
                </Link>
              </div>
            ))
          }
        </motion.div>
        <motion.div  initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={transition} >
          <a href="Tarun_Kumar_Behera_Resume_MERN_2025.pdf" download="Tarun_Kumar_Behera_Resume_MERN_2025.pdf">
            <button className='flex justify-center items-center gap-[0.5rem] px-[1.2rem] py-[0.6rem] bg-purple-700 text-white font-semibold rounded-lg cursor-pointer drop-shadow-md drop-shadow-black'>Download CV <MdOutlineFileDownload className='text-2xl'/></button>
          </a>
        </motion.div>
      </div>


      {/* 2nd section */}
      <div className='w-full flex flex-col sm:flex-row justify-center items-center'>
        <div className='relative w-full sm:w-1/3 flex justify-center items-center'>
          <motion.img  initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={transition}img src={details.photo} alt="" className='w-1/2 sm:w-2/3 z-10 translate-y-1 sm:translate-y-2'/>
          <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={transition} className='h-[70%] rounded-t-full bg-purple-700 w-[45%] sm:w-[55%] absolute bottom-0'></motion.div>
          <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={transition}   className='h-[60%] rounded-t-full bg-black w-[35%] sm:w-[45%] absolute bottom-0'></motion.div>
        </div>
        <div className='w-full sm:w-2/3 flex flex-col justify-center sm:justify-start items-center'>
          <motion.div  initial={{opacity:0}} whileInView={{opacity:1}} transition={transition} className='w-full text-center sm:text-justify text-[1rem]'>Hello Visitor 🙋‍♂️, I am</motion.div>
          <motion.div  initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={transition} className='w-full text-center sm:text-justify text-[2rem] sm:text-[3rem] text-purple-700'>{details.name}</motion.div>
          <div className='w-full text-center sm:text-justify text-[1rem] flex justify-start items-center gap-[0.5rem]'>
            <div>and I am a</div>
            <div className='text-emerald-600 text-[1.1rem] sm:text-[1.7rem] text-nowrap'>
              <TypeAnimation
              sequence={[2000,"MERN Stack Web Developer",2000,"",1000,"Frontend Web Developer",2000,"",1000,"Backend Web Developer",2000,"",1000]}
              repeat={Infinity}
              wrapper="span"
            />
            </div>
          </div>
          <div className='text-justify text-[0.8rem] text-gray-600'>
            {details.summary}
          </div>
        </div>
      </div>
      

      {/* 3rd section */}
      <div className='w-full flex flex-col justify-center items-center sm:items-start'>
        <div className={`flex flex-col justify-center items-center gap-[1rem] px-[1rem] py-[0.6rem] rounded-md bg-black text-white ${showup ? `opacity-100` : `opacity-0`}`}>
          <div className='flex justify-center items-center text-center gap-[0.2rem] text-[1rem]'><MdCall/>+91 9249390690</div>
          <div className='flex justify-center items-center text-center gap-[0.2rem] text-[1rem]'><IoMdMail/>tarunkumarbehera8249@gmail.com</div>
        </div>
        <div className='w-full px-[1rem] py-[0.5rem] flex justify-between items-center text-white'>
          <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={transition}>
            <button className='flex justify-center items-center gap-[0.4rem] px-[1.2rem] py-[0.6rem] bg-purple-700 font-bold rounded-lg transition duration-300 cursor-pointer drop-shadow-md drop-shadow-black' onClick={() => setShowup(prev => !prev)}>
              Contact me {showup ? <FaChevronUp/> : <FaChevronDown/> }
            </button>
          </motion.div>
          <motion.div  initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={transition} className='flex justify-center items-center gap-[1rem] md:gap-[2rem] bg-purple-700 px-[1.2rem] py-[0.6rem] rounded-md text-[1.5rem]'>
              <a href="https://www.linkedin.com/in/tarun-kumar-behera-228b3b242/" target='_blank'>
                <FaLinkedin className='hover:bg-white hover:text-purple-700'/>
              </a>
              <a href="https://github.com/imtarun2001/" target='_blank'>
                <FaGithub className='hover:bg-white hover:text-purple-700 hover:rounded-md'/>
              </a>
              <a href="https://x.com/Tarunkb2001" target='_blank'>
                <FaXTwitter className='hover:bg-white hover:text-purple-700 hover:rounded-md'/>
              </a>
          </motion.div>
        </div>
      </div>


    </div>
  )
}

export default Details