import { useDispatch, useSelector } from 'react-redux';
import AggregatorCard from "../allTypesOfCards/AggregatorCard"
import BookingCard from "../allTypesOfCards/BookingCard"
import DeliveryCard from "../allTypesOfCards/DeliveryCard"
import DineInCard from "../allTypesOfCards/DineInCard"
import PickUpCard from "../allTypesOfCards/PickUpCard"
import TakeAwayCard from "../allTypesOfCards/TakeAwayCard"
import { selectOrderListView, selectRunningOrders } from '../../reducer/orders/reducer';
import OrderListPage from '../../pages/OrderListPage';
import TableActionLoader from '../loader/TableActionLoader';
function AllOrdersContents({ setPage }) {
  const orderView = useSelector(selectOrderListView);
  const runningOrder = useSelector(selectRunningOrders);
  return (
    orderView && orderView.data && orderView.data == "list" ?
      <OrderListPage />
      :
      (runningOrder && runningOrder.data && Array.isArray(runningOrder.data) && runningOrder.data.length)
        ?
        <div className="w-full grid grid-flow-row 2xl:grid-cols-7 xl:grid-cols-6 gap-x-[15px] lg:grid-cols-4 gap-y-[50px] allOrdersGridCards">
          {runningOrder && runningOrder.data && Array.isArray(runningOrder.data) && runningOrder.data.length ? runningOrder.data.map((row, index) => (
            row.order_type == 6 ?
              <DineInCard
                key={index}
                color={'green'}
                tableNo={row.DineInTable && row.DineInTable.name ? row.DineInTable.name : row.table_no}
                customer={row.name}
                orderId={row.uid}
                setPage={setPage}
                person_count={row.total_person}
              /> :
              row.order_type == 1 ?
                <DeliveryCard
                  key={index}
                  status={'chef'}
                  orderId={row.uid}
                  customer={row.name}
                /> :
                row.order_type == 4 ?
                  <PickUpCard
                    key={index}
                    status={'chef'}
                    orderId={row.uid}
                    customer={row.name}
                  /> :
                  row.order_type == 2 || row.order_type == 3 ?
                    <BookingCard
                      key={index}
                      status={'recived'}
                      orderId={row.uid}
                      customer={row.name}
                    /> :
                    row.order_type == 10 ?
                      <AggregatorCard
                        key={index}
                        status={'chef'}
                        orderId={row.uid}
                        customer={row.name}
                      />
                      :
                      <TakeAwayCard
                        key={index}
                        status={'chef'}
                        orderId={row.uid}
                        customer={row.name}
                      />
          )) : <></>}
          {/* <DineInCard color={'green'} tableNo={'5'} customer={'aslam'} orderId={'1222'} setPage={setPage} />
        <DineInCard color={'red'} tableNo={'5'} customer={'aslam'} orderId={'1222'} />
        <DeliveryCard status={'chef'} orderId={'3455'} customer={'amal'} />
        <DeliveryCard status={'driver'} orderId={'3455'} customer={'amal'} />
        <PickUpCard status={'chef'} orderId={'3456'} customer={'anver'} />
        <PickUpCard status={'pickup'} orderId={'3456'} customer={'anver'} />
        <BookingCard status={'recived'} orderId={'3546'} customer={'jithin'} />
        <BookingCard status={'accepted'} orderId={'3546'} customer={'jithin'} />
        <TakeAwayCard status={'chef'} orderId={'7466'} customer={'babu'} />
        <TakeAwayCard status={'pickup'} orderId={'7466'} customer={'babu'} />
        <AggregatorCard status={'chef'} orderId={'2345'} customer={'nihad'} />
        <AggregatorCard status={'pickup'} orderId={'2345'} customer={'nihad'} /> */}
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
  );
}

export default AllOrdersContents