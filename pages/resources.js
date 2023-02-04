import React from 'react'
import Image from 'next/image'
import rhea1 from '../public/rhea/rhea1.png'
import rhea2 from '../public/rhea/rhea2.png'
import rhea3 from '../public/rhea/rhea3.png'
import rhea4 from '../public/rhea/rhea4.png'

function resources() {
  return (
    <div>
      <div className="flex flex-wrap mx-auto w-full px-auto gap-2">
        <Image
          src={rhea1}
          height={500}
          width={500}
        />
        <Image
          src={rhea2}
          height={500}
          width={500}
        />
        <Image
          src={rhea3}
          height={500}
          width={500}
        />
        <Image
          src={rhea4}
          height={500}
          width={500}
        />
      </div>
    </div>
  )
}

export default resources