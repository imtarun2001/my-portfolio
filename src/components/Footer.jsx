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
    <footer className="w-full text-white py-6 px-4 mt-12">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-8">
        
        {/* Social Icons */}
        <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-800 text-white rounded-full p-4 transition-all duration-300 shadow-md"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-kumar-behera-228b3b242/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 hover:bg-blue-900 text-white rounded-full p-4 transition-all duration-300 shadow-md"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
          </a>
          <a
            href="https://github.com/imtarun2001/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-700 text-white rounded-full p-4 transition-all duration-300 shadow-md"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white rounded-full p-4 transition-all duration-300 shadow-md"
            aria-label="X (Twitter)"
          >
            <FaXTwitter className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-4 transition-all duration-300 shadow-md"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
          </a>
        </div>

        <p className="text-sm text-center text-wrap">
          &copy; {new Date().getFullYear()} Tarun Kumar Behera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;