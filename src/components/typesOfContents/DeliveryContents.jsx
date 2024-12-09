import { useDispatch, useSelector } from 'react-redux';
import DeliveryCard from "../allTypesOfCards/DeliveryCard"
import { selectOrderListView, selectRunningOrders } from '../../reducer/orders/reducer';
import OrderListPage from '../../pages/OrderListPage';
import TableActionLoader from '../loader/TableActionLoader';
function DeliveryContents() {
  const runningOrder = useSelector(selectRunningOrders);
  const orderView = useSelector(selectOrderListView);
  return (
    orderView && orderView.data && orderView.data == "list" ?
      <OrderListPage />
      :
      runningOrder && runningOrder.data && Array.isArray(runningOrder.data) && runningOrder.data.length
        ?
        <div className="w-full grid grid-flow-row 2xl:grid-cols-7 xl:grid-cols-6 gap-x-[15px] lg:grid-cols-4 gap-y-[50px] allOrdersGridCards">
          {runningOrder && runningOrder.data && Array.isArray(runningOrder.data) && runningOrder.data.length ? runningOrder.data.map((row, index) => (
            row.order_type == 1 ?
              <DeliveryCard
                key={index}
                status={'chef'}
                orderId={row.uid}
                customer={row.name}
              />
              : <></>
          )) : <></>}
          {/* <DeliveryCard status={'chef'} orderId={'3455'} customer={'amal'} />
        <DeliveryCard status={'driver'} orderId={'3455'} customer={'amal'} /> */}
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

export default DeliveryContents