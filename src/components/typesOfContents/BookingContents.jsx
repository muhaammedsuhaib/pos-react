import { useDispatch, useSelector } from 'react-redux';
import BookingCard from "../allTypesOfCards/BookingCard"
import { selectOrderAreaFilter, selectOrderBookingTables, selectOrderFilter, selectOrderListView, selectRunningOrders } from '../../reducer/orders/reducer';
import OrderListPage from '../../pages/OrderListPage';
import TableActionLoader from '../loader/TableActionLoader';
import BookingCardNew from "../allTypesOfCards/BookingCardNew"
import BookingTableModal from "../bookingTableModal/BookingTableModal"
import { useEffect } from 'react';
import { bookingTableRequest } from '../../reducer/orders/action';
function BookingContents() {
  const dispatch = useDispatch();
  const areaFilter = useSelector(selectOrderAreaFilter);
  const runningOrder = useSelector(selectRunningOrders);
  const orderView = useSelector(selectOrderListView);
  const orderFilter = useSelector(selectOrderFilter);
  const bookingTables = useSelector(selectOrderBookingTables);
  useEffect(() => {
    if (orderFilter && orderFilter.data && orderFilter.data.date) {
      dispatch(bookingTableRequest({
        date: orderFilter.data.date
      }));
    } else {
      dispatch(bookingTableRequest());
    }
  }, [orderFilter]);
  return (
    orderView && orderView.data && orderView.data == "list" ?
      <OrderListPage />
      :
      bookingTables && bookingTables.data && Array.isArray(bookingTables.data) && bookingTables.data.length && bookingTables.data.filter((row => {
        return (!areaFilter?.data || !row.area_id || row.area_id === areaFilter.data);
      })).length ?
        <div className="w-full grid grid-flow-row 2xl:grid-cols-7 xl:grid-cols-6 gap-x-[15px] lg:grid-cols-4 gap-y-[50px] allOrdersGridCards">
          {bookingTables && bookingTables.data && Array.isArray(bookingTables.data) && bookingTables.data.length ? bookingTables.data.filter((row => {
            return (!areaFilter?.data || !row.area_id || row.area_id === areaFilter.data);
          })).map((row, index) => (
            <BookingCardNew
              key={index}
              tableNo={row.name}
              count={row.Orders.length}
            />
          )) : <></>}
          {/* <BookingCard status={'recived'} orderId={'3546'} customer={'jithin'} />
        <BookingCard status={'accepted'} orderId={'3546'} customer={'jithin'} />
        <BookingCardNew tableNo={5} count={5}/>
    <BookingCardNew tableNo={6} count={2}/>
    <BookingCardNew tableNo={7} count={1}/>
    <BookingCardNew tableNo={7} count={0}/>
    <BookingCardNew tableNo={7} count={0}/>
    <BookingCardNew tableNo={7} count={0}/>
    <BookingCardNew tableNo={7} count={0}/>*/}
          <BookingTableModal />
        </div>
        :
        <div className="w-full grid grid-flow-row grid-cols-1 allOrdersGridCards">
          {(runningOrder && runningOrder.loading) ?
            <div className='flex items-center justify-center'>
              <TableActionLoader color='#fff' />
            </div>
            :
            <span className='text-white text-center'>No Orders !</span>
          }
        </div>
  )
}

export default BookingContents