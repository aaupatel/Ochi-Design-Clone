import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-36 px-12'>
            {["We Create", "Eye-Opening", "Presentations"].map((item, index)=>{
                return (
                <div className='masker'>
                    <div className='w-fit flex items-end overflow-hidden'>
                       {index === 1 && (
                        <div className='mr-[.75vw] w-[10vw] rounded-md h-[5.7vw] -top-[0.9vw] relative bg-green-600'></div>
                        )}
                       <h1 className='pt-[2vw] -mb-[1vw] uppercase font-semibold text-[9vw] leading-[.65] font-["Founders_Grotesk_X"]'>
                        {item}
                        </h1>
                    </div>
                </div>
                )
            })}
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-24 flex justify-between items-center py-4 px-10 font-["Neue_Montreal"]'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>(
                <p className='text-md font-light tracking-normal leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-2'>
                <div className='px-5 py-1.5 border-[1px] border-zinc-600 rounded-full uppercase font-light text-sm'>Start the Project</div>
                <div className='p-2 flex items-center justify-center border-[1px] border-zinc-600 rounded-full'>
                    <span className='rotate-45'><FaArrowUpLong /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage