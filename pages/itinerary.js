import React from 'react';
import Image from 'next/image';
import announcementIcon from '../public/announcementIcon.png';
import blueConference from '../public/blueConference.png';
import purpleConference from '../public/purpleConference.png';
import lunch from '../public/lunch.png';
import breakIcon from '../public/breakIcon.png';
import award from '../public/award.png';

function itinerary() {

  const events = [
    {
      name: 'Opening Ceremony · Guest Speaker',
      time: '8:30 - 9:30',
      icon: announcementIcon,
    },
    {
      name: 'Session 1',
      time: '9:30 - 11:30',
      icon: blueConference,
    },
    {
      name: 'Lunch',
      time: '11:30 - 12:00',
      icon: lunch,
    },
    {
      name: 'Session 2',
      time: '12:00 - 2:00',
      icon: purpleConference,
    },
    {
      name: 'Break',
      time: '2:00 - 2:30',
      icon: breakIcon,
    },
    {
      name: 'Session 3 · Closing Ceremony · Awards',
      time: '2:30 - 4:30',
      icon: award,
    },
  ]

  return (
    <div className='w-full h-full'>
      {/* schedule */}
      <div className='flex h-full w-full lg:w-[60%] mx-auto'>
        {/* times/timeline */}
        <div className='w-[25%] text-gray-400 h-full flex flex-col gap-[6.6rem] mt-36 mx-auto text-center'>
          <div>8:30 a.m.</div>
          <div>9:30 a.m.</div>
          <div>11:30 a.m.</div>
          <div>12:00 a.m.</div>
          <div>2:00 a.m.</div>
          <div>2:30 a.m.</div>
        </div>

        {/* cards/events */}
        <div className=' w-[75%] border-l-2 border-gray-200 h-fit'>
          <div className='border-b-2 border-t-2 px-8 py-6 border-gray-200'>
            <div className='text-[1.7em] font-semibold tracking-widest'>Itinerary</div>
          </div>
          <div className="flex flex-col h-full px-4 py-6">
            {
              events.map((event, index) => (
                <div className={`border-b-2 border-gray-200 class-${index} mb-6`}>
                  <div className={`items-center gap-4 p-4 pl-4 h-fit w-full bg-purple-500 schedule-bg-${index} ring-2 ring-purple-600 rounded-lg mb-6 flex`}>
                    <div>
                      <Image
                        src={event.icon}
                        alt="icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <div>{event.name}</div>
                      <div>{event.time}</div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default itinerary