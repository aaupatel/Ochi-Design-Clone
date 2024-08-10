import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full border-b-[1px] border-zinc-800'>
            <h1 className='text-6xl px-10 pb-10 font-["Neue_Montreal"]'>Featured Project</h1>
        </div>
        <div className='cords flex gap-6 w-full px-10 py-14'>
            <div className='cardcontainer relative rounded-lg w-1/2 h-[80]'>
            <h1 className='p-4 text-base uppercase'><span className='font-bold text-2xl'>•</span>FYDE</h1>
                {/* <h1 className='absolute z-[9] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl uppercase font-semibold text-[9vw] leading-none font-["Founders_Grotesk_X"] text-[#CDEA68]'>
                   {"FYDE".split('').map((item, index)=><span>{item}</span>)}
                </h1> */}
                <div className="card w-full h-full rounded-lg overflow-hidden">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </div>
            <div className='cardcontainer relative rounded-lg w-1/2 h-[80]'>
            <h1 className='p-4 text-base uppercase'><span className='font-bold text-2xl'>•</span>VISE</h1>
                <h1 className='absolute z-[9] right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl uppercase font-semibold text-[9vw] leading-none font-["Founders_Grotesk_X"] text-[#CDEA68]'>
                   {"VISE".split('').map((item, index)=><span>{item}</span>)}
                </h1>
                <div className="card w-full h-full rounded-lg overflow-hidden">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className='cords flex gap-6 w-full px-10 py-14'>
            <div className='cardcontainer relative rounded-lg w-1/2 h-[80]'>
            <h1 className='p-4 text-base uppercase'><span className='font-bold text-2xl'>•</span>AH2 & Matt Horn</h1>
                {/* <h1 className='absolute z-[9] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl uppercase font-semibold text-[9vw] leading-none font-["Founders_Grotesk_X"] text-[#CDEA68]'>
                   {"AH2 & MATT HORN".split('').map((item, index)=><span>{item}</span>)}
                </h1> */}
                <div className="card w-full h-full rounded-lg overflow-hidden">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                </div>
            </div>
            <div className='cardcontainer relative rounded-lg w-1/2 h-[80]'>
            <h1 className='p-4 text-base uppercase'><span className='font-bold text-2xl'>•</span>Trawa</h1>
                <h1 className='absolute z-[9] right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl uppercase font-semibold text-[9vw] leading-none font-["Founders_Grotesk_X"] text-[#CDEA68]'>
                   {"TRAWA".split('').map((item, index)=><span>{item}</span>)}
                </h1>
                <div className="card w-full h-full rounded-lg overflow-hidden">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className='cords flex gap-6 w-full px-10 py-14'>
            <div className='cardcontainer relative rounded-lg w-1/2 h-[80]'>
            <h1 className='p-4 text-base uppercase'><span className='font-bold text-2xl'>•</span>Premium Blend</h1>
                {/* <h1 className='absolute z-[9] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl uppercase font-semibold text-[9vw] leading-none font-["Founders_Grotesk_X"] text-[#CDEA68]'>
                   {"PREMIUM BLEND".split('').map((item, index)=><span>{item}</span>)}
                </h1> */}
                <div className="card w-full h-full rounded-lg overflow-hidden">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                </div>
            </div>
            <div className='cardcontainer relative rounded-lg w-1/2 h-[80]'>
            <h1 className='p-4 text-base uppercase'><span className='font-bold text-2xl'>•</span>Officevibe</h1>
                <h1 className='absolute z-[9] right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl uppercase font-semibold text-[9vw] leading-none font-["Founders_Grotesk_X"] text-[#CDEA68]'>
                   {"OFFICEVIBE".split('').map((item, index)=><span>{item}</span>)}
                </h1>
                <div className="card w-full h-full rounded-lg overflow-hidden">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-663x550.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured