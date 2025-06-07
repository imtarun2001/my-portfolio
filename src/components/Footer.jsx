import React from 'react';

function Footer() {
  return (
    <footer className="w-full py-6 px-4 border-t border-black mt-12">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-8">
          &copy; {new Date().getFullYear()} Tarun Kumar Behera. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;