import React from 'react'

function TimeBar({page}) {
  return (
    <div className="w-full h-[70px] bg-[#3E7C60] gap-[10px] justify-between flex items-center px-[5px]">
        <div className="w-[120px] flex items-center bg-[#C6EBC5] py-[5px] px-[3px] rounded-md">
            <div className="w-[40px] h-[40px] rounded-full bg-[#515151] flex items-center justify-center">
            <img src="/public/images/kitchenSidebar/cooking_2728879 (1).svg" accessKey="icon" width={25}/>
            </div>
            <div className="flex-grow h-full flex flex-col items-center justify-center leading-5 pt-[5px]">
                <h1 className='text-[2rem] font-semibold text-[#3E7C60]'>23</h1>
                <span className='text-[0.8rem]'>minutes</span>
            </div>
        </div>
        {page == 'aggregator' || page ==  'take_away' || page ==  'pick_up' ? '': (

<div className="w-[120px] flex items-center bg-[#C6EBC5] py-[5px] px-[3px] rounded-md">
    <div className="w-[40px] h-[40px] rounded-full bg-[#515151] flex items-center justify-center">
        {page == 'delivery' ? (

    <img src="/public/motorbike_3128841 (1).svg" accessKey="icon" width={25}/>
        ) : (
            <img src="/public/fork_16995023.svg" accessKey="icon" width={25}/>
        )}
    </div>
    <div className="flex-grow h-full flex flex-col items-center justify-center leading-5 pt-[5px]">
        <h1 className='text-[2rem] font-semibold text-[#3E7C60]'>23</h1>
        <span className='text-[0.8rem]'>minutes</span>
    </div>
</div>
) }
        <div className="w-[120px] flex items-center  py-[5px] px-[3px] rounded-md">
            <div className="w-[40px] h-[40px] rounded-full bg-[#77B99C] flex items-center justify-center">
            <img src="/public/Clock_icon.svg" accessKey="icon" width={33}/>
            </div>
            <div className="flex-grow h-full flex flex-col items-center justify-center leading-5 pt-[5px]">
                <h1 className='text-[2rem] font-semibold text-white'>23</h1>
                <span className='text-white text-[0.8rem]'>minutes</span>
            </div>
        </div>
        </div>
  )
}

export default TimeBar