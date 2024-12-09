
import './searchBar.css'
import AllOrdersSearchBar from "../allSearchBars/AllOrdersSearchBar"
import DineInSearchBar from '../allSearchBars/DineInSearchBar'
import DeliverySearchBar from '../allSearchBars/DeliverySearchBar'
import PickUpSerachBar from '../allSearchBars/PickUpSerachBar'
import BookingSearchBar from '../allSearchBars/BookingSearchBar'
import TakeAwaySearchBar from '../allSearchBars/TakeAwaySearchBar'
import AggregatorSearchBar from '../allSearchBars/AggregatorSearchBar'
function SearchBar({ page }) {
  return (
    <>
      {page === 'all_orders' && (<AllOrdersSearchBar />)}
      {page === 'dine_in' && (<DineInSearchBar />)}
      {page === 'delivery' && (<DeliverySearchBar />)}
      {page === 'pick_up' && (<PickUpSerachBar />)}
      {page === 'booking' && (<BookingSearchBar />)}
      {page === 'take_away' && (<TakeAwaySearchBar />)}
      {page === 'aggregator' && (<AggregatorSearchBar />)}
    </>
  )
}

export default SearchBar