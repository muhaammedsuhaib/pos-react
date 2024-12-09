import { useDispatch, useSelector } from 'react-redux';
import AggregatorContents from '../typesOfContents/AggregatorContents'
import AllOrdersContents from '../typesOfContents/AllOrdersContents'
import BookingContents from '../typesOfContents/BookingContents'
import DeliveryContents from '../typesOfContents/DeliveryContents'
import DineInContents from '../typesOfContents/DineInContents'
import PickUpContents from '../typesOfContents/PickUpContents'
import TableContents from '../typesOfContents/TableContents'
import TakeAwayContents from '../typesOfContents/TakeAwayContents'
import './commonContent.css'
import { selectOrderFilter, selectOrderListView } from '../../reducer/orders/reducer';
import { useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { runningOrders } from '../../reducer/orders/action';
function CommonContent({ page, setPage }) {
  const dispatch = useDispatch();
  const orderView = useSelector(selectOrderListView);
  const orderFilter = useSelector(selectOrderFilter);
  const filterData = useCallback(() => {
    var order_type = '';
    if (page === 'dine_in') {
      order_type = '6';
    } else if (page === 'delivery') {
      order_type = '1';
    } else if (page === 'pick_up') {
      order_type = '4';
    } else if (page === 'booking') {
      order_type = '2';
    } else if (page === 'take_away') {
      order_type = '9';
    } else if (page === 'aggregator') {
      order_type = '10';
    }
    dispatch(runningOrders({
      ...orderFilter.data,
      order_type
    }));
  }, [dispatch, orderFilter, page]);

  useEffect(() => {
    const debounceDispatch = debounce(() => {
      filterData();
    }, 150);
    debounceDispatch();
    return () => {
      debounceDispatch.cancel();
    };
  }, [filterData]);

  return (
    <div className={`w-full ${orderView && orderView.data && orderView.data == "list" ? '' : 'md:px-[10px] xl:px-[15px]'}`}>
      <div
        className={`w-full allOrderCards overflow-y-scroll ${orderView && orderView.data && orderView.data == "list" ? 'flex-grow' : 'pt-[50px]'}`}
        style={{ height: `${orderView && orderView.data && orderView.data == "list" ? page == 'booking' ? 'calc(100vh - 13.2rem)' : 'calc(100vh - 13.2rem)' : page == 'dine_in' ? 'calc(100vh - 19.7rem)' :  page == 'booking' ? 'calc(100vh - 32.3rem)' : 'calc(100vh - 16.25rem)'}` }}
      >
        {page === 'all_orders' && (<AllOrdersContents setPage={setPage} />)}
        {page === 'dine_in' && (<DineInContents setPage={setPage} />)}
        {page === 'delivery' && (<DeliveryContents setPage={setPage} />)}
        {page === 'pick_up' && (<PickUpContents setPage={setPage} />)}
        {page === 'booking' && (<BookingContents setPage={setPage} />)}
        {page === 'take_away' && (<TakeAwayContents setPage={setPage} />)}
        {page === 'aggregator' && (<AggregatorContents setPage={setPage} />)}
        {page === 'table_list' && (<TableContents setPage={setPage} />)}
      </div>
    </div>
  )
}

export default CommonContent