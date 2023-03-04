import React from 'react'
import Image from 'next/image'
import tips from '../../public/files/tips.jpg'

function tipsandtricks() {
  return (
    <div className="h-[100%]">
        <div className='h-[100%]'>
            <Image
              src={tips}
              fill
              alt="Tips and tricks for MUN"
            />
        </div>
    </div>
  )
}

export default tipsandtricks