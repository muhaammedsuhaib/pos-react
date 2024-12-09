import { useDispatch, useSelector } from 'react-redux';
import DineInCard from "../allTypesOfCards/DineInCard"
import { selectOrderAreaFilter, selectOrderFilter, selectOrderListView, selectOrderTables, selectRunningOrders } from '../../reducer/orders/reducer';
import OrderListPage from '../../pages/OrderListPage';
import TableActionLoader from '../loader/TableActionLoader';
import { useEffect } from 'react';
import { dineInTableRequest } from '../../reducer/orders/action';
function DineInContents({ setPage }) {
  const dispatch = useDispatch();
  const areaFilter = useSelector(selectOrderAreaFilter);
  const tableList = useSelector(selectOrderTables);
  const orderView = useSelector(selectOrderListView);
  const orderFilter = useSelector(selectOrderFilter);
  useEffect(() => {
    if (orderFilter && orderFilter.data && orderFilter.data.date) {
      dispatch(dineInTableRequest({
        date: orderFilter.data.date
      }));
    } else {
      dispatch(dineInTableRequest());
    }
  }, [orderFilter])
  return (
    orderView && orderView.data && orderView.data == "list" ?
      <OrderListPage />
      :
      tableList && tableList.data && Array.isArray(tableList.data) && tableList.data.length && tableList.data.filter((row => {
        return (!areaFilter?.data || !row.area_id || row.area_id === areaFilter.data);
      })).length
        ?
        <div className="w-full grid grid-flow-row 2xl:grid-cols-7 xl:grid-cols-6 gap-x-[15px] lg:grid-cols-4 gap-y-[50px] allOrdersGridCards">
          {/* {runningOrder && runningOrder.data && Array.isArray(runningOrder.data) && runningOrder.data.length ? runningOrder.data.filter((row => {
            return (!areaFilter?.data || !row.DineInTable?.area_id || row.DineInTable.area_id === areaFilter.data);
          })).map((row, index) => (
            row.order_type == 6 ?
              <DineInCard
                key={index}
                color={'green'}
                tableNo={row.DineInTable && row.DineInTable.name ? row.DineInTable.name : row.table_no}
                customer={row.name}
                orderId={row.uid}
                setPage={setPage}
                person_count={row.total_person}
              />
              : <></>
          )) : <></>} */}
          {tableList && tableList.data && Array.isArray(tableList.data) && tableList.data.length ? tableList.data.filter((row => {
            return (!areaFilter?.data || !row.area_id || row.area_id === areaFilter.data);
          })).map((row, index) => (
            <DineInCard
              key={index}
              color={row.Orders && row.Orders.length ? '' : 'green'}
              tableNo={row.name}
              customer={row.Orders && row.Orders.length ? row.Orders[row.Orders.length - 1].name : ""}
              orderId={row.Orders && row.Orders.length ? row.Orders[row.Orders.length - 1].uid : ""}
              // setPage={row.Orders && row.Orders.length ? null : setPage}
              is_edit={row.Orders && row.Orders.length}
              setPage={setPage}
              person_count={row.Orders && row.Orders.length ? row.Orders[row.Orders.length - 1].total_person : 0}
            />))
            : <></>}
          {/* <DineInCard color={'green'} tableNo={'5'} customer={'aslam'} orderId={'1222'} setPage={setPage} />
        <DineInCard color={'red'} tableNo={'5'} customer={'aslam'} orderId={'1222'} />
        <DineInCard color={'red'} tableNo={'5'} customer={'aslam'} orderId={'1222'} /> */}
        </div>
        :
        <div className="w-full grid grid-flow-row grid-cols-1 allOrdersGridCards">
          {(tableList && tableList.loading) ?
            <div className='flex items-center justify-center'>
              <TableActionLoader color='#fff' />
            </div>
            :
            <span className='text-white text-center'>No Orders !</span>
          }
        </div>
  )
}

export default DineInContents