/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";

const BottomDropDown = ({ dropShow, setDropShow }) => {

  const OrderSummary = useSelector((state) => state?.cart?.orderInfo);
  const totalQuantity = useSelector((state) => state?.cart?.totalQuantity);

  return (
    <div
      className={` ${
        dropShow ? "block" : " hidden"
      } absolute left-0 bottom-full bg-primerySecond rounded-t-xl w-full z-50 `}
      // style={{ boxShadow: "0 -30px 10px 2px rgba(0,0,0,0.7)" }}
    >
      <div className="w-full relative">
        <div
          className="absolute top-[-10px] bg-primerySecond rounded-full h-[30px] w-[30px] left-[50%] -translate-x-[50%] flex items-center justify-center rounded-b-full  shadow-md border-white hover:border-black active:bg-black"
          onClick={() => setDropShow(false)}
        >
          <IoIosArrowDown
            size={25}
            color="#fff"
            className="font-bold shadow-2xl"
          />
        </div>
      </div>
      <div className="w-full pt-6 pb-2 px-3">
        <div className="w-full flex flex-col p-0 bg-primeryThird rounded-xl text-xs xl:text-sm 2xl:text-base">
          <div className="flex justify-between items-center py-[] border-b-4 pr-4 pl-6  border-primerySecond font-semibold text-black text-[0.8rem]">
            <p>Sub Total (5 Items)</p>
            <p>204.76 AED</p>
          </div>
          <div className="flex justify-between items-center py-[] border-b-2 border-dotted border-primerySecond pl-6 pr-4 text-black text-[0.8rem]">
            <p>Delivery Charge</p>
            <p>{OrderSummary?.delivery_charge} AED</p>
          </div>
          <div className="flex justify-between items-center py-[] border-b-2 border-dotted border-primerySecond pl-6 pr-4 text-black text-[0.8rem]">
            <p>VAT (5%)</p>
            <p>{OrderSummary?.tax_fee} AED</p>
          </div>
          <div className="flex justify-between items-center py-[] border-b-2 border-dotted border-primerySecond pl-6 pr-4 text-black text-[0.8rem]">
            <p>Service Charge</p>
            <p>{OrderSummary?.service_charge} AED</p>
          </div>
          <div className="flex justify-between items-center py-[] border-b-2 border-dotted border-primerySecond pl-6 pr-4 text-primeryFirst text-[0.8rem]">
            <p>Discount</p>
            <p>{OrderSummary?.discount} AED</p>
          </div>
      
        </div>
      </div>
    </div>
  );
};


export default BottomDropDown;
