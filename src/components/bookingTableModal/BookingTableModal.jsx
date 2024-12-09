import { Modal } from "antd"
import ConfirmChangeBar from "../confirmChangeBar/ConfirmChangeBar"
import BookingCardNew from "../allTypesOfCards/BookingCardNew"
import { useSelector } from "react-redux";
import { selectOrderAreaFilter, selectOrderBookingTables } from "../../reducer/orders/reducer";
function BookingTableModal({ open, closeModal, ...props }) {
  const bookingTables = useSelector(selectOrderBookingTables);
  const areaFilter = useSelector(selectOrderAreaFilter);
  return (
    <Modal
      className="posPopupGreen"
      footer={null}
      title="BOOKING"
      width={850}
      centered
      open={open}
      onCancel={() => closeModal(false)}
    >
      <div className="bg-black rounded-b-[10px] p-[2px]">
        <ConfirmChangeBar />
        {bookingTables && bookingTables.data && Array.isArray(bookingTables.data) && bookingTables.data.length && bookingTables.data.filter((row => {
          return (!areaFilter?.data || !row.area_id || row.area_id === areaFilter.data);
        })).length ?
          <div className="w-full h-[450px] overflow-y-scroll scrollBarHidden grid grid-flow-row grid-cols-6 pt-[40px] gap-x-[10px] gap-y-[45px] px-[10px]">
            {bookingTables && bookingTables.data && Array.isArray(bookingTables.data) && bookingTables.data.length ? bookingTables.data.filter((row => {
              return (!areaFilter?.data || !row.area_id || row.area_id === areaFilter.data);
            })).map((row, index) => (
              <BookingCardNew
                key={index}
                tableNo={row.name}
                count={row.Orders.length}
              />
            )) : <></>}
            {/* <BookingCardNew count={4} />
            <BookingCardNew count={2} />
            <BookingCardNew count={4} />
            <BookingCardNew count={1} />
            <BookingCardNew count={4} />
            <BookingCardNew count={3} />
            <BookingCardNew count={2} />
            <BookingCardNew count={4} />
            <BookingCardNew count={1} />
            <BookingCardNew count={2} />
            <BookingCardNew count={4} />
            <BookingCardNew count={2} /> */}
          </div>
          : <></>}
        <div className="w-full h-[60px] bg-[#757070] rounded-b-[10px] flex items-center justify-end">
          <button className="bg-primeryFirst text-white uppercase w-[150px] rounded-md mr-[5px] leading-[15px] py-[5px] shadow-xl hover:border-[2px] active:bg-black border-black" style={{ boxShadow: '1px 1px 5px -1px black' }}>confirm table & close</button>
        </div>
      </div>

    </Modal>
  )
}

export default BookingTableModal