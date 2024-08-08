import React from 'react'

function About() {
  return (
    <>
    <div className='w-full px-14 py-24 bg-[#CDEA68] rounded-t-3xl text-black'>
        <h1 className='text-[4vw] leading-[3.8vw] tracking-tight font-["Neue_Montreal"]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
    </div>
    <div className='flex w-full px-14 py-3 pb-24 bg-[#CDEA68] border-t-[1px] border-[#b9cd6e] text-black font-["Neue_Montreal"]'>
        <div className='w-1/2'>
            <h1 className='text-lg'>What you can expect:</h1>
        </div>
        <div className='w-1/2 flex'>
            <div className='w-1/2'>
               <p className='pb-8'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
               <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className='w-1/2'>
                <div className='pt-20 pl-32'>
                    <h1 className='pb-3'>S:</h1>
                    <p className='underline'>Instagram</p>
                    <p className='underline'>Behance</p>
                    <p className='underline'>Facebook</p>
                    <p className='underline'>Linkedin</p>
                </div>
            </div>
        </div>
    </div>
    <div className='flex w-full px-14 py-3 bg-[#CDEA68] border-t-[1px] border-[#b9cd6e] rounded-b-3xl text-black font-["Neue_Montreal"]'>
        <div className='w-1/2'>
        <h1 className='text-5xl'>Our approach:</h1>
        <button className='flex gap-9 items-center px-6 py-4 text-sm bg-zinc-900 mt-5 uppercase rounded-full text-white'>Read More
            <div className='w-2 h-2 bg-zinc-300 rounded-full'></div>
        </button>
        </div>
        <div className='w-1/2 rounded-xl  overflow-hidden'>
            <img className='object-cover w-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="Image"/>
        </div>
    </div>
    </>
  )
}

export default About