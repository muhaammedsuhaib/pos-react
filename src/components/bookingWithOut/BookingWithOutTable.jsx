import { PlusOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import BookingMiniBox from '../bookingMinBox/BookingMiniBox'
import './bookingWithoOutTable.css'
import { useSelector } from 'react-redux';
import { selectRunningOrders } from '../../reducer/orders/reducer';
import NewBookinEdiit from '../notifications/NewBookinEdiit';
import NewBooking from '../notifications/NewBooking';
function BookingWithOutTable({ page }) {
  const runningOrder = useSelector(selectRunningOrders);
  const [order, setOrder] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  return (
    <div className='w-full bg-[#F5A595] p-[10px]'>
      <div className="w-full flex items-center space-x-[10px]">
        <h1 className='uppercase text-[1rem]'>booking without table</h1>
        <div
          className="w-[35px] h-[35px] rounded-full bg-primeryFirst border-[3px] flex items-center justify-center hover:border-black active:bg-black cursor-pointer"
          onClick={() => setIsAddOpen(true)}
        ><PlusOutlined className='text-white text-[20px]' /></div>
      </div>
      <div className="w-full px-[30px] pt-[10px]">
        <div className="w-full grid grid-rows-3 gap-y-[10px] h-[135px] overflow-x-scroll scrollBarHidden py-[5px]" style={{ gridAutoFlow: 'column', gridAutoColumns: '130px' }}>
          {runningOrder && runningOrder.data && Array.isArray(runningOrder.data) && runningOrder.data.length ? runningOrder.data.filter((row => { return (row.order_type == 3 || row.order_type == 4) && (row.table_no == '' || row.table_no == null || row.table_no.length == 0) })).map((row, index) => {
            return (
              <BookingMiniBox
                key={index}
                count={row.total_person}
                startTime={row.startTime ? row.startTime : row.reservation_time}
                endTime={row.endTime ? row.endTime : null}
                name={row.name}
                order={row}
                onClick={(order) => {
                  setOrder(order);
                  setIsEditOpen(true);
                }}
              />
            )
          }) : <></>}
        </div>
      </div>
      <NewBookinEdiit
        open={isEditOpen}
        closeAction={setIsEditOpen}
      />
      <NewBooking
        open={isAddOpen}
        closeAction={setIsAddOpen}
      />
    </div>
  )
}

export default BookingWithOutTable