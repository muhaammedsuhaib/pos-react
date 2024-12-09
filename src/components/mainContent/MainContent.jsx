import { useDispatch, useSelector } from 'react-redux';
import BookingWithOutTable from "../bookingWithOut/BookingWithOutTable"
import CommonContent from "../commonContent/CommonContent"
import ConfirmChangeBar from "../confirmChangeBar/ConfirmChangeBar"
import DineInItems from "../dine-items/DineInItems"
import SearchBar from "../searchBar/SearchBar"
import { selectOrderListView } from '../../reducer/orders/reducer';
function MainContent({ page, setPage }) {
  const orderView = useSelector(selectOrderListView);
  return (
    <>
      <div className="w-full flex flex-col">
        {page !== 'table_list' && !(orderView && orderView.data && orderView.data == "list") && (<SearchBar page={page} />)}
        {page == 'booking' && !(orderView && orderView.data && orderView.data == "list") && (<BookingWithOutTable page={page} />)} 
        {(page == 'dine_in' || page == 'booking') && !(orderView && orderView.data && orderView.data == "list") ? (<ConfirmChangeBar />) : ''}
        {page == 'dine_in_items' ? (<DineInItems />) : (<CommonContent page={page} setPage={setPage} />)}
      </div>
    </>
  )
}

export default MainContent