import React from 'react'

function Certificate({certificate}) {
  return (
    <div className='sm:w-[70vw] w-full flex-shrink-0 flex flex-col justify-between items-center gap-1 bg-blue-300 px-2.5 py-1 rounded-xl hover:bg-fuchsia-200 cursor-pointer'>
      <div className='text-[3vw] font-pacifico text-black'>
        {
            certificate.certificateOf
        }
      </div>
      <img src={certificate.certificateUrl} alt="" className='h-20 sm:h-100'/>
      <div className='text-[3vw] flex justify-center items-center font-sourcecode font-bold text-black'>Certified by : <img src={certificate.certifiedBy} alt="" className='h-6 sm:h-20'/></div>
    </div>
  )
}

export default Certificate
