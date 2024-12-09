import "./pos_category.css";
import { useDispatch, useSelector } from 'react-redux';
import allOrderImg from "../../../public/images/pos-category-images/online-order_3979808.svg";
import dineInImg from "../../../public/images/pos-category-images/dining-table_15725489.svg";
import deliveryImg from "../../../public/images/pos-category-images/food-delivery_8004323.svg";
import takeAwayImg from "../../../public/images/pos-category-images/take-away_11529049.svg";
import pickUpImg from "../../../public/images/pos-category-images/takeaway_7217445.svg";
import bookingImag from "../../../public/images/pos-category-images/withdrawal_6926414.svg";
import menuSmallIcon from "../../../public/images/pos-category-images/menu_11034542[1].svg";
import menuBigIcon from "../../../public/images/pos-category-images/menu_346613[1].svg";
import aggregatorIcon from "../../../public/aggregatorIcon.svg";
import { useEffect, useState } from "react";
import Delivery_Modal from "../delivery_Modal/Delivery_Modal";
import ReservationModal from "../reservationModal/ReservationModal";
import AggregatorModal from "../aggregatorModal/AggregatorModal";
import PickUpModal from "../pickUpModal/PickUpModal";
import { ordersActions, selectOrderListView, selectOrderTypes } from "../../reducer/orders/reducer";
import OrderType from "./orderType";
import { orderTypeDetailsRequest } from "../../reducer/orders/action";
import NewBooking from "../notifications/NewBooking";
function PosCategories({ page, setPage }) {
  const dispatch = useDispatch();
  const orderView = useSelector(selectOrderListView);
  const orderTypes = useSelector(selectOrderTypes);

  const [openDeliveryModal, setOpenDeliveryModal] = useState(false);
  const [reservationModal, setReservationModal] = useState(false);
  const [pickModal, setPickModal] = useState(false);
  const [allOrderCount, setAllOrderCount] = useState(0);
  const [bookingOrderCount, setBookingOrderCount] = useState(0);
  const [aggregatorModal, setAggregatorModal] = useState(false);
  const [activeTab, setActiveTab] = useState('orders');
  const [modalOrderType, setModalOrderType] = useState('');

  useEffect(() => {
    if (modalOrderType) dispatch(orderTypeDetailsRequest({ id: modalOrderType }));
  }, [modalOrderType]);

  useEffect(() => {
    if (orderTypes && Array.isArray(orderTypes.data) && orderTypes.data.length) {
      setAllOrderCount(orderTypes.data.reduce((sum, item) => (sum + item.order_count), 0));
      const bookCount = orderTypes.data.reduce((sum, item2) => (item2.slug == 'booking' || item2.slug == 'reservation' ? sum + parseFloat(item2.order_count) : sum + 0), 0);
      setBookingOrderCount(bookCount);
    } else {
      setAllOrderCount(0);
      setBookingOrderCount(0);
    }
  }, [orderTypes]);

  return (
    <div className={`w-full ${page !== "dine_in_items" ? "" : "bg-[#FF5534]"} relative`}>
      {/* <div className="absolute top-[-23px] xl:right-[25%] md:right-[30%] sm:right-[50%] twoTabs space-x-[-45px] ">
        <button
          onClick={() => {
            setActiveTab('orders');
            setPage('all_orders');
          }}
          className={`z-[-50] relative ${activeTab === 'orders' ? 'bg-[#515151] text-white active z-[2]' : 'bg-[#D6DCE5] text-black z-[1]'}`}
        >
          ORDERS
        </button>
        <button
          onClick={() => {
            setActiveTab('items');
            setPage('dine_in_items');
          }}
          className={`z-[-50] relative ${activeTab === 'items' ? 'bg-[#515151] text-white active z-[2]' : 'bg-[#D6DCE5] text-black z-[1]'}`}
        >
          ITEMS
        </button>
        <button
          onClick={() => {
            setActiveTab('expense');
            setPage('pos_expense');
          }}
          className={`z-[-50] relative ${activeTab === 'expense' ? 'bg-[#515151] text-white active z-[2]' : 'bg-[#D6DCE5] text-black z-[1]'}`}
        >
          EXPENSE
        </button>
      </div> */}
      <div className="w-full xl:h-[130px] lg:h-[130px] md:h-[130px] md:px-[10px] xl:px-[13px] xl:pt-[13px] md:pt-[10px] pb-[10px] flex flex-row 2xl:space-x-[25px] lg:space-x-[20px] space-x-[10px] bg-[#515151] rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] relative z-[10] overflow-x-scroll overflow-y-hidden posCategoryWarapperDiv">
        <div
          className={`min-w-[100px] ${page == 'all_orders' ? "bg-primeryFirst" : 'bg-[#77B99C]'} rounded-[20px] flex flex-col relative allOrderBtnDiv cursor-pointer`}
          onClick={() => setPage("all_orders")}
        >
          {allOrderCount && allOrderCount > 0 ?
            <div className="w-[35px] border-white border rounded-[10px] h-[18px] absolute text-[12px] font-medium bg-red-600 text-white top-[5px] left-[7px] flex justify-center items-center">
              {allOrderCount}
            </div>
            : <></>}
          <div className="w-full xl:h-[120px] lg:h-[115px] md:h-[105px] flex justify-center items-center pt-[10px]">
            <img
              src={allOrderImg}
              alt=""
              className="xl:w-[50px] lg:w-[50px] md:w-[40px]"
            />
          </div>
          <div className="h-[35px] w-full flex justify-center ">
            <button className="rounded-[30px] text-white w-[93%] h-full text-[12px] category-btn-shadow">
              ALL ORDERS
            </button>
          </div>
        </div>
        <div className="flex gap-x-[15px] lg:pt-[10px] md:pt-[10px] xl:pr-[20px] lg:pr-[5px] category-btns">
          {orderTypes && orderTypes.data && Array.isArray(orderTypes.data) && orderTypes.data.length ?
            orderTypes.data.map((type) => {
              if (type.slug == 'dine-in')
                return <OrderType
                  text={type.name}
                  img={dineInImg}
                  count={type.order_count}
                  modalOpen={(status) => { }}
                  setPage={setPage}
                  pageName={'dine_in'}
                  active={page == 'dine_in'}
                  type={type.slug}
                />
              else if (type.slug == 'cash-on-delivery')
                return <OrderType
                  text={type.name}
                  img={deliveryImg}
                  count={type.order_count}
                  modalOpen={(status) => {
                    setOpenDeliveryModal(status);
                    setModalOrderType(type.slug);
                  }}
                  setPage={setPage}
                  pageName={'delivery'}
                  active={page == 'delivery'}
                  type={type.slug}
                />
              else if (type.slug == 'pickup')
                return <OrderType
                  text={type.name}
                  img={pickUpImg}
                  count={type.order_count}
                  modalOpen={(status) => {
                    setPickModal(status);
                    setModalOrderType(type.slug);
                  }}
                  setPage={setPage}
                  pageName={'pick_up'}
                  active={page == 'pick_up'}
                  type={type.slug}
                />
              else if (type.slug == 'booking')
                return <OrderType
                  text={type.name}
                  img={bookingImag}
                  count={bookingOrderCount}
                  modalOpen={(status) => {
                    setReservationModal(status);
                    setModalOrderType(type.slug);
                  }}
                  setPage={setPage}
                  pageName={'booking'}
                  active={page == 'booking'}
                  type={type.slug}
                />
              else if (type.slug == 'pay-cash')
                return <OrderType
                  text={type.name}
                  img={takeAwayImg}
                  count={type.order_count}
                  modalOpen={(status) => { }}
                  setPage={setPage}
                  pageName={'take_away'}
                  active={page == 'take_away'}
                  type={type.slug}
                />
              else if (type.slug == 'delivery-aggregator')
                return <OrderType
                  text={'AGGREGATOR'}
                  img={aggregatorIcon}
                  count={type.order_count}
                  modalOpen={(status) => {
                    setAggregatorModal(status);
                    setModalOrderType(type.slug);
                  }}
                  setPage={setPage}
                  pageName={'aggregator'}
                  active={page == 'aggregator'}
                  type={type.slug}
                />
            })
            : <></>}
        </div>
        <div className=" flex-1 flex justify-end gap-x-[5px] bg-[#515151] sticky right-0 xl:h-[130px] lg:h-[130px] md:h-[130px] ">
          <div className="flex space-x-[5px] p-[5px]">
            <div
              className={`w-[50px] h-[50px] cursor-pointer rounded-[10px] p-2 border-2 border-transparent hover:border-black active:bg-black ${orderView && orderView.data && orderView.data == "list" ? "bg-[#FFA18F]" : "bg-primeryFirst"
                }`}
              onClick={() => {
                dispatch(ordersActions.setOrderView(null));
              }}
            >
              <img src={menuBigIcon} alt="icon" width={"100%"} />
            </div>
            <div
              className={`w-[50px] h-[50px] cursor-pointer rounded-[10px] p-1 border-2 border-transparent hover:border-black active:bg-black ${orderView && orderView.data && orderView.data == "list" ? "bg-primeryFirst" : "bg-[#FFA18F]"
                }`}
              onClick={() => {
                dispatch(ordersActions.setOrderView('list'));
              }}
            >
              <img src={menuSmallIcon} alt="icon" width={"100%"} />
            </div>
          </div>
        </div>
      </div>
      <Delivery_Modal
        openModal={openDeliveryModal}
        setOpenModal={setOpenDeliveryModal}
      />
      <NewBooking
        open={reservationModal}
        closeAction={setReservationModal}
      />
      <AggregatorModal
        openModal={aggregatorModal}
        setOpenModal={setAggregatorModal}
      />
      <PickUpModal
        openModal={pickModal}
        setOpenModal={setPickModal}
      />
    </div>
  );
}

export default PosCategories;
