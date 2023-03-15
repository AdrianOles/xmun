import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence} from "framer-motion"

function invitation() {
  return (
    <div className="overflow-x-hidden">
      <div className='bg-gradient-to-tl to-purple-800 from-sky-700 h-[40vh] w-full relative top-0 shadow-xl'>
        <div className="w-full h-full absolute">
          <Image
            src={"https://i.ytimg.com/vi/QVUF17sWbJ0/maxresdefault.jpg"}
            fill
            priority
            className='object-cover absolute mix-blend-overlay brightness-90'
          />
        </div>
        <div className='mx-auto w-full h-full px-10 flex flex-col gap-3 sm:px-20 md:px-36 lg:px-56'>
          <div className='text-white my-auto mx-auto flex flex-col text-center'>
            <div className='text-6xl font-bold mb-2'><span className="text-sky-400">XMUN</span> Invitation</div>
            <div>
               Not X-Men. But XMUN. That's St.FX, and our Model UN Conference.
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 mx-auto px-6 md:px-10 lg:px-56">
        <motion.div
            initial={{opacity:0, x:200}}
            animate={{ opacity: 1, x:0}}
            transition={{ duration: .60, delay: .1 }}
            className="mb-8">
          <div className='text-lg'>
            St. Francis Xavier’s Model UN secretariat is pleased to announce its inaugural <b>Model United Nations Conference on May 12th, 2023.</b> We invite all delegates to represent different nations/characters and participate in lively debate, inspired by the Marvel Universe, Pokemon, and Divergent themes to appeal to a wide range of student interests and abilities. The student-led conference will be hosted at St. Francis Xavier, in our state of the art theater, and library/conference center.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .60, delay: .1 }}>
          <div className='mb-4'>
            Students who attend the full committee session of the United Nations will be assigned to: 
          </div>
          <div className='ml-5'>
            <ol>
              <li>
                Marvel Universe Specialized Committee
                <ul>
                  <li className='list-disc ml-10'>Topic: Sokovia Accords</li>
                </ul>
              </li>
              <li>
                Pokemon Specialized Committee
                <ul>
                  <li className='list-disc ml-10'>Topic: Animal cruelty and Genetic Modification</li>
                </ul>
              </li>
              <li id="registration-details">
                Divergent Specialized Committee
                <ul>
                  <li className='list-disc ml-10'>Topic: Reconstruction of systemized government </li>
                </ul>
              </li>
            </ol>
          </div>
          <div className='my-4'>
            Given the appropriate length of the conference, we are confident that productive and thought-provoking discussions can be had on these topics.
          </div>
        </motion.div>
        <div className="text-2xl mb-6 mt-10"><span>Registration, Fees, and Requirements </span></div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .60, delay: .1 }}
          className="mb-8">
          <div>
            XMUN registration information to be filled out by the MUN school advisors via Google Form, found on the registration page of our website. There is a delegate fee of $10 for participation to be paid on SchoolCashOnline. All proceeds will be pledged to the Halton Catholic Children’s Foundation (HCCF). <span id="delegate-info"></span>Exceptional delegates will be recognized with “Best Delegate,” and “Honourable Mention” awards. In order to qualify for such awards, position papers will be required from each delegate outlining their country’s stance on respective issues. These papers will be evaluated by the Dais alongside performance within the committee to determine award winners. 
          </div>
        </motion.div>
        <div className="text-2xl mb-4 mt-10" id='code-conduct'>Delegate Information and Training </div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .60, delay: .1 }}
          className="mb-8">
          <div className='mb-2'>
            Our website provides you information on the following things: 
          </div>
          <ul>
            <li className='list-disc ml-10'>Delegate/Model UN Procedure and tutorials on all things MUN (resources page)</li>
            <li className='list-disc ml-10'>Code of Conduct</li>
            <li className='list-disc ml-10'>Position paper writing guidelines (background guides)</li>
            <li className='list-disc ml-10'>Committee overviews including topic descriptions and detailed topic guide (Committees page)</li>
            <li className='list-disc ml-10'>Award details and criteria</li>
          </ul>
        </motion.div>
        <div className="text-2xl mb-6 mt-10">Code of Conduct</div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .60, delay: .1 }}
          className="mb-8">
          <div>
            Each committee will be moderated by the presence of school supervisors. At least one teacher will be present in each committee at all times in order to ensure proper conduct is maintained and to hold any violators accountable. Profanity and insulting language will not be tolerated during moderated debate or in unmoderated debate. Delegates may report any misconduct occurring within private channels to the Chairs or teacher supervisors. Our team will also strictly enforce our rules accordingly with the removal of unruly individuals.
            We hope and believe that HCDSB students will act respectfully in accordance with MUN procedures and etiquette. Breaking the code of conduct or failure to comply with MUN etiquette will result in removal from the conference.
          </div>
        </motion.div>
        <div className="text-2xl mb-6 mt-10">Why Model United Nations?</div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .60, delay: .1 }}
          className="mb-8">
          <div>
            Model United Nations provides the unique opportunity for students to develop public speaking, leadership, diplomatic, and research skills in a fast-paced environment while gaining insight regarding international relations and pertinent global issues. Simulating the United Nations’ procedures, our conference gives delegates valuable insight into how one of the most influential intergovernmental organizations functions and the diplomatic process behind international cooperation. 
          </div>
        </motion.div>
        <div className="text-2xl mb-6 mt-10">Why XMUN?</div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .60, delay: .1 }}
          className="mb-8">
          <div>
            St. Francis Xavier’s Model UN team is dedicated to bringing Fun MUN’s to the forefront of our conferences. Fun MUN’s are committees that focus around a fictitious and unimaginable world. There are obvious limitations in our world with finite problems, however, doing Fun MUN’s gives light to inconceivable circumstances, makes delegates think outside of the box, and shows how the principles of Model UN can be applied to even the most eccentric and impossible situations. Our first in-house conference was the World War I committee in the midst of the COVID-19 pandemic, where it was fully online. Then we had our hybrid model last year for our Marvel Universe conference and this year we have not only graduated to a fully in-person conference, but we have expanded our capabilities to run multiple committees and create the most fantasy and imagination provoking experience we can give our delegates. We are happy that we can share the Model UN experience with young, up and coming delegates from the elementary schools as well as the experienced and mature delegates from our adjacent high schools. We are highly anticipating this amazing opportunity in the coming future.
          </div>
        </motion.div>

        <div className="text-xl">
          <div className='mb-4'>Sincerely, </div>
          <div>
            <span className="text-purple-500 font-bold">XMUN</span> Secretariat 
          </div>
        </div>
      </div>
    </div>
  )
}

export default invitation