import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import registration from './registration';

export default function Home() {
  const router = useRouter();

  return (
    <div className="">
      <Head>
        <title>Model UN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* main image*/}
      <div className='bg-gradient-to-tl to-blue-900 from-sky-900 h-screen w-full relative top-0'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/UN_General_Assembly_hall.jpg"
        className='w-full h-full object-cover absolute mix-blend-overlay'/>
        <div className='mx-auto w-full py-[12em] px-10 flex flex-col gap-3 sm:px-20 md:px-36 lg:px-56'>
          <div className='text-white text-6xl font-bold'>
            Welcome to XMUN
          </div>
          <div className="text-sky-100 text-2xl font-light">
            May 1st, 2023
          </div>
          <div className="text-sky-100 text-2xl font-light">
            St. Francis Xavier Secondary School, Milton ON
          </div>
          <div className="register mt-5">
            <div class="wrapper cursor-pointer">
              <a onClick={() => router.push('/registration')}><span>REGISTER</span></a>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  )
}
