// import React, { useState, useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import { RiArrowDropDownLine, RiArrowDropRightLine } from 'react-icons/ri';
// import { FcGlobe } from 'react-icons/fc';
// import { MdEmail } from 'react-icons/md';
// import { IoCall } from 'react-icons/io5';
// import { FaLocationDot } from 'react-icons/fa6';
// import { motion } from 'framer-motion';

// function Details() {
  //   const { details } = useContext(AppContext);
//   const [dropdown, setDropdown] = useState(false);

//   const motionTransition = {
//     type: 'tween',
//     duration: 1,
//     ease: 'easeInOut',
//   };

//   return (
  //     <div className="w-full px-4 py-8 border bg-black border-cyan-400 text-white tracking-wide rounded-md flex flex-col items-center gap-[2rem]">

//       {/* Intro text and profile image */}
//       <div className="flex flex-col justify-center items-center gap-[2rem]">
//         <motion.img
//             initial={{ opacity: 0}}
//             whileInView={{ opacity: 1 }}
//             transition={motionTransition}
//             src={details.photo}
//             alt="Profile"
//             className="w-28 sm:w-40 h-28 sm:h-40 rounded-full object-cover transition-transform duration-700 hover:scale-110"
//         />

//         <div className="flex flex-col items-center justify-center gap-2">
//           <motion.div
//             initial={{ opacity: 0, x: -200 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={motionTransition}
//             className="text-center text-lg sm:text-xl font-bold text-sky-600"
//           >
//             Hey visitor 🙋‍♂️, welcome to my portfolio!
//           </motion.div>

//           <div className="text-2xl sm:text-4xl font-bold text-center">
//             <TypeAnimation
//               sequence={[details.name, 2000,'',2000]}
//               repeat={Infinity}
//               wrapper="span"
//             />
//           </div>

//           <motion.div
//             initial={{ opacity: 0, x: 200 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={motionTransition}
//             className="flex justify-center items-center gap-[0.5rem] text-lg sm:text-xl text-green-600"
//           >
//             <FcGlobe className="animate-spin text-2xl" />
//             {details.role}
//           </motion.div>
//         </div>
//       </div>

//       <div className="w-full text-[0.7rem] sm:font-semibold sm:text-[1rem] text-gray-400 text-center font-normal px-2">
//         {details.summary}
//       </div>

//       <div className="w-full flex flex-col items-center gap-[1rem]">
//         <button
//           className="flex items-center gap-2 text-base sm:text-lg bg-black border-2 border-white text-white px-4 py-2 rounded-md shadow hover:shadow-lg transition duration-300
//           bg-[url('data:image/png;base64,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')]"
//           onMouseEnter={() => setDropdown(true)}
//           onMouseLeave={() => setDropdown(false)}
//         >
//           Contact me {dropdown ? <RiArrowDropRightLine /> : <RiArrowDropDownLine />}
//         </button>

//         <div
//           className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm sm:text-base text-black bg-sky-50 rounded-xl shadow-2xl px-6 py-4 transition-opacity duration-700 ${
//             dropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'
//           }`}
//         >
//           <div className="flex items-center gap-2">
//             <MdEmail />
//             <span>{details.email}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <IoCall />
//             <span>{details.phone}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaLocationDot />
//             <span>{details.address}</span>
//           </div>
//         </div>
//       </div>


//     </div>
//   );
// }

// export default Details;



import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaChevronUp,FaChevronDown } from "react-icons/fa";
import { useAppContext } from '../context/AppContext';

const Details = () => {

  const {details} = useAppContext();

  const [showup,setShowup] = useState(false);

  const arrOfHeaders = ['projects','skills','certificates','academic'];

  return (
    <div className="details w-full h-screen p-[1rem] bg-gray-300 text-black tracking-wide flex flex-col justify-between items-center gap-[2rem]
    bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==')]
    ">

      {/* 1st section */}
      <div className='w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-[2rem] md:gap-0'>
        <div className='text-[2rem] bg-white px-[1rem] drop-shadow-lg drop-shadow-black'>PORT<span className='text-purple-700'>FOLIO</span></div>
        <div className='flex justify-center uppercase items-center gap-[1.1rem] md:gap-[2.5rem]'>
          {
            arrOfHeaders.map((header,index) => (
              <div key={index} className='hover:text-purple-700 cursor-pointer'>
                <Link to={header} spy={true} smooth={true}>
                  <div>{header}</div>
                  <div className="w-full border-2 border-purple-700"></div>
                </Link>
              </div>
            ))
          }
        </div>
        <div>
          <a href="./assets/Tarun_Kumar_Behera_Resume_MERN_2025.pdf" download="Tarun_Kumar_Behera_Resume_MERN_2025.pdf">
            <button className='flex justify-center items-center gap-[0.5rem] px-[1.2rem] py-[0.6rem] bg-purple-700 text-white font-semibold rounded-lg cursor-pointer drop-shadow-md drop-shadow-black'>Download CV <MdOutlineFileDownload className='text-2xl'/></button>
          </a>
        </div>
      </div>


      {/* 2nd section */}
      <div className='w-full flex flex-col sm:flex-row justify-center items-center'>
        <div className='relative w-full sm:w-1/3 flex justify-center items-center'>
          <img src={details.photo} alt="" className='w-1/2 sm:w-2/3 z-10 translate-y-1 sm:translate-y-2'/>
          <div className='h-[70%] rounded-t-full bg-purple-700 w-[45%] sm:w-[55%] absolute bottom-0'></div>
          <div className='h-[60%] rounded-t-full bg-purple-950 w-[35%] sm:w-[45%] absolute bottom-0'></div>
        </div>
        <div className='w-full sm:w-2/3 flex flex-col justify-center sm:justify-start items-center'>
          <div className='w-full text-center sm:text-justify text-[1rem]'>Hello Visitor 🙋‍♂️, I am</div>
          <div className='w-full text-center sm:text-justify text-[2rem] sm:text-[3rem] text-purple-700'>{details.name}</div>
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
          <button className='flex justify-center items-center gap-[0.4rem] px-[1.2rem] py-[0.6rem] bg-purple-700 font-bold rounded-lg transition duration-300 cursor-pointer drop-shadow-md drop-shadow-black' onClick={() => setShowup(prev => !prev)}>Contact me {showup ? <FaChevronUp/> : <FaChevronDown/> }</button>
          <div className='flex justify-center items-center gap-[1rem] md:gap-[2rem] bg-purple-700 px-[1.2rem] py-[0.6rem] rounded-md text-[1.5rem]'>
              <a href="https://www.linkedin.com/in/tarun-kumar-behera-228b3b242/" target='_blank'>
                <FaLinkedin className='hover:bg-white hover:text-purple-700'/>
              </a>
              <a href="https://github.com/imtarun2001/" target='_blank'>
                <FaGithub className='hover:bg-white hover:text-purple-700 hover:rounded-md'/>
              </a>
              <a href="https://x.com/Tarunkb2001" target='_blank'>
                <FaXTwitter className='hover:bg-white hover:text-purple-700 hover:rounded-md'/>
              </a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Details