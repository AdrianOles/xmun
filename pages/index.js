import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import registration from './registration';
import { Postcard } from '../components';
import { motion} from "framer-motion"

export default function Home() {
  const router = useRouter();

  const cards = [
    {
      name: 'ABOUT',
      pictureUrl: 'https://www.un.org/sites/un2.un.org/files/styles/3x2-front-thumbnail/public/field/image/model_un_landing_page.jpg?itok=ahxbap4S',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      link: '/about'
    },
    {
      name: 'REGISTER',
      pictureUrl: 'http://allamericanmun.com/wp-content/uploads/2016/10/11915445_1703974446498069_365180015501615074_n.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      link: '/registration'
    },
    {
      name: 'COMMITTEE',
      pictureUrl: 'https://bestdelegate.com/wp-content/uploads/2020/01/73333424_3236834096357247_4946619400804368384_o.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      link: '/committee'
    }
  ]

  return (
    <div className="bg-slate-200">
      <Head>
        <title>Model UN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* main image*/}
      <div className='bg-gradient-to-tl to-blue-900 from-sky-900 h-screen w-full relative top-0 shadow-xl'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/UN_General_Assembly_hall.jpg"
        className='w-full h-full object-cover absolute mix-blend-overlay brightness-90'/>
        <div className='mx-auto w-full py-[12em] px-10 flex flex-col gap-3 sm:px-20 md:px-36 lg:px-56'>
          <div className='text-white text-6xl font-bold'>
            Welcome to <span className="text-purple-400">XMUN</span>
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

      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{type: "easein", duration: .30, delay: .15}}
        >
        <div className="border-t-2 border-b-2 border-purple-600 my-10 py-6 text-center mx-auto w-[350px] md:w-[500px] text-4xl
        tracking-wide text-purple-900">
            <span className="text-colors">ST.FX WELCOMES</span>
        </div>
      </motion.div>

      <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{type: "easein", duration: .60, delay: .15}}>
          <div className="h-fit w-full px-10 md:px-16 lg:px-28 xl:px-52 text-xl pb-10">
              <p>&nbsp; &nbsp; &nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus. Quis ipsum suspendisse ultrices gravida dictum fusce. Dictum fusce ut placerat orci. Scelerisque viverra mauris in aliquam. Vitae nunc sed velit dignissim sodales ut. At tempor commodo ullamcorper a lacus. Tortor posuere ac ut consequat semper viverra nam libero. Vulputate ut pharetra sit amet aliquam. Sagittis id consectetur purus ut faucibus pulvinar elementum integer.</p>
              <br />
              <p>&nbsp; &nbsp; &nbsp; &nbsp; Massa sed elementum tempus egestas sed sed. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Donec pretium vulputate sapien nec. Tortor at risus viverra adipiscing at. Risus at ultrices mi tempus imperdiet nulla. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Dignissim enim sit amet venenatis urna. Consectetur purus ut faucibus pulvinar. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Eget arcu dictum varius duis at consectetur lorem donec massa.</p>
          </div>
      </motion.div>

      <div className='w-full h-fit pb-20 flex justify-evenly gap-4 flex-wrap sm:px-4 lg:px-20'>
        {
          cards.map((card, index) => <Postcard key={index} name={card.name} pictureUrl={card.pictureUrl} description={card.description} link={card.link} />)
        }
      </div>
        
    </div>
  )
}
