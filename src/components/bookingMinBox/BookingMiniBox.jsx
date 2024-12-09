import { AiOutlineCaretRight } from 'react-icons/ai'
import './bookingMiniBox.css'
function BookingMiniBox({ count, startTime, endTime, active, name, order, onClick }) {
  return (
    <div
      className={`w-[7rem] ${active == true ? 'bg-primeryFirst text-white' : 'bg-white text-black'}  p-1 rounded-[5px] boxShadow flex items-center justify-center flex-col leading-4 cursor-pointer hover:border-[0.125rem] duration-75 active:bg-primeryFirst active:text-white hover:border-primeryFirst`}
      onClick={(e) => {
        if (onClick) onClick(order);
      }}
    >
      <div className="w-full flex items-center justify-center text-[0.8rem]">
        <span>{startTime}</span>
        {endTime ? <span><AiOutlineCaretRight className='text-[0.98rem]' /></span> : <></>}
        {endTime ? <span>{endTime}</span> : <></>}
        {/* <span><AiOutlineCaretRight className='text-[0.98rem]' /></span>
        <span>{endTime}</span> */}
      </div>
      <div className="w-full flex items-center justify-center text-[0.8rem]">
        <span className='w-[48%] whitespace-nowrap text-ellipsis overflow-hidden'>{name}</span>
        <span>(👦🏻{count})</span>
      </div>
    </div>
  )
}
export default BookingMiniBox