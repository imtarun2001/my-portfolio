import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-fuchsia-600 via-violet-500 to-blue-600 text-black py-3 px-2 mt-1">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-6">
        
        {/* Social Icons */}
        <div className="w-[60%] flex flex-wrap justify-around items-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 shadow-md"
            aria-label="Facebook"
          >
            <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-800 text-white rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 shadow-md"
            aria-label="Instagram"
          >
            <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-kumar-behera-228b3b242/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 hover:bg-blue-900 text-white rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 shadow-md"
            aria-label="LinkedIn"
            >
            <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </a>
          <a
            href="https://github.com/imtarun2001/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-700 text-white rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 shadow-md"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 shadow-md"
            aria-label="X (Twitter)"
          >
            <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </a>
        </div>
        <p className="text-sm sm:text-base text-black text-center">
          &copy; {new Date().getFullYear()} Tarun Kumar Behera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;