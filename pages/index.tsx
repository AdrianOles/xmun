import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/Header'
import { useSession } from 'next-auth/react';
import useUser from '@/hooks/useUser';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const user = useUser();

  return (
    <div className={`${inter.className} min-h-[100vh] w-full bg-black relative overflow-x-hidden`}>
      <Image
        src="https://pbs.twimg.com/media/EoEvME_WMAIMzTa?format=jpg&name=large"
        fill
        className='object-cover'
        alt="St. Francix Xavier"
      />
      <div className='absolute bg-black w-full h-full bg-opacity-70 backdrop-blur-[4px]' />
      
      <div className='flex flex-col w-full z-40 justify-between items-between h-full'>
          <Header />

        {/* TITLE */}
        <div className='w-fit flex flex-col gap-20 text-white z-40 h-full justify-end xl:p-44 lg:p-32 md:p-20 p-6 pt-10'>
          <div className='tracking-[5px] text-[32px] md:text-[50px] font-[400] flex flex-col md:flex-row justify-between items-start md:items-end gap-4'>
            <div>XMUN <br /> CONFERENCE</div>
            <div className='flex flex-col justify-end lg:items-end'>
              {
                user.auth && (
                  <div className='text-white tracking-[2px] text-[16px] max-w-[200px] truncate mb-4 opacity-80'>
                    Welcome, {user?.name?.split(' ')[0]}!
                  </div>
                )
              }
              <div className='md:text-[20px] text-[16px] w-fit cursor-pointer relative flex items-center justify-center overflow-hidden transition border border-[#DED5FFBA] hover:ring-2 ring-[#DED5FFBA]'>
                <div className="z-50 px-3 py-2">REGISTER</div>
                <div className='absolute top-0 right-0 bg-[#0a0a0a01] backdrop-blur-[50px] z-[2] w-full h-full' />
                <div className='absolute top-0 right-0 bg-[#9780FF] rounded-full z-[1] w-[50px] h-[50px] animate-pulse' />
                <div className='absolute top-0 left-0 bg-[#00AAFF] rounded-full z-[1] w-[60px] h-[50px]  diff-animate-pulse' />
                <div className='absolute top-0 left-1/2 right-1/2 -translate-x-1/2 bg-white rounded-full z-[1] w-[20px] h-[30px] grow-animate-pulse' />
                {
                  user.auth ? (
                    <Link href={'/register'} className='absolute w-full h-full z-50' />
                  ): (
                    <Link href={'/auth/signin'} className='absolute w-full h-full z-50' />
                  )
                }
              </div>
            </div>
          </div>
          <div className='flex gap-x-32 gap-y-10 w-full flex-wrap'>
            <div className='flex flex-col gap-4'>
              <div className='text-[#ACACAC] uppercase tracking-[2px]'>
                WHEN
              </div>
              <div className='flex flex-col tracking-[3px] font-[300] text-[20px]'>
                <div className='whitespace-nowrap'>MARCH 14TH</div>
                <div className='whitespace-nowrap'>8:30 AM</div>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <div className='text-[#ACACAC] uppercase tracking-[2px]'>
                WHERE
              </div>
              <div className='flex flex-col tracking-[3px] font-[300] text-[20px]'>
                <div className='whitespace-nowrap'>MILTON, ON</div>
                <div className='whitespace-nowrap'>1145 Bronte St.</div>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <div className='text-[#ACACAC] uppercase tracking-[2px]'>
                WHO
              </div>
              <div className='flex flex-col tracking-[3px] font-[300] text-[20px]'>
                <div className='whitespace-nowrap'>ST.FX&apos;s</div>
                <div className='whitespace-nowrap'>SECRETARIAT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}
