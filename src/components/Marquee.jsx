import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20 bg-[#004D43] rounded-t-3xl'>
        <div className='text border-t-[1px] border-b-[1px] border-zinc-500 flex gap-10 overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0 }} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:8 }}  className='text-[28vw] leading-none pt-3 font-semibold uppercase -mb-[9.5vw] font-["Founders_Grotesk_X"]'>We are ochi We are ochi</motion.h1>
            <motion.h1 initial={{x:0 }} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:8 }}  className='text-[28vw] leading-none pt-3 font-semibold uppercase -mb-[9.5vw] font-["Founders_Grotesk_X"]'>We are ochi We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee