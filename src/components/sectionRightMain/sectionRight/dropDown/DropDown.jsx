/* eslint-disable react/prop-types */
import { Select } from "antd";
import CheckBox from "./../../../customeCheckbox/CheckBox";
import "./dropDown.css";
import { useDispatch, useSelector } from "react-redux";
import { setOpenHistory } from "../../../../redux/user/userSlice";
import DineInDropCheckBoxes from "../../../dropDownCheckboxes/DineInDropCheckBoxes";
import DeliveryDropCheckBoxes from "../../../dropDownCheckboxes/DeliveryDropCheckBoxes";
import PickUpDropCHeckBoxes from "../../../dropDownCheckboxes/PickUpDropCHeckBoxes";
import BookingDropCheckBoxes from "../../../dropDownCheckboxes/BookingDropCheckBoxes";
import TakeAwayDropCheckBoxes from "../../../dropDownCheckboxes/TakeAwayDropCheckBoxes";
import AggregatorDropCheckBoxes from "../../../dropDownCheckboxes/AggregatorDropCheckBoxes";
import { IoIosArrowUp } from "react-icons/io";
import TimeBar from "../../../TopGreenContents/TimeBar";
import DineInDropCheckBoxesNew from "../../../dropDownCheckboxes/DineInDropCheckBoxesNew";

const DropDown = (props) => {
  const { dropShow, page,setDropShow } = props;

  const handleChange = (value) => {
    console.log("changed:", value);
  };
  const dispatch = useDispatch();
  const history = useSelector((state) => state.orderHistory?.order_history);

  return (
    <>
      <div
        className={`absolute  bg-[#5CAC88] w-full  top-full right-0 pt-2 rounded-b-2xl sectionRightToDropDown ${
          dropShow ? " border-white z-40 " : "hidden"
        }`}
        style={{ boxShadow: "0 350px 10px 2px rgba(0,0,0,0.7)" }}
      >
        <TimeBar page={page} />
        {/* {page == "all_orders" && <DineInDropCheckBoxes />} */}
        {page == "all_orders" && <DineInDropCheckBoxesNew />}
        {page == "dine_in" && <DineInDropCheckBoxesNew />}
        {page == "delivery" && <DeliveryDropCheckBoxes />}
        {page == "pick_up" && <PickUpDropCHeckBoxes />}
        {page == "booking" && <BookingDropCheckBoxes />}
        {page == "take_away" && <TakeAwayDropCheckBoxes />}
        {page == "aggregator" && <AggregatorDropCheckBoxes />}

        <div className="flex items-center justify-between w-full text-[0.8rem] h-[60px] pt-[8px]  3xl:text-[1rem] bg-[#3E7C60] relative">
          {history == true ? (
            <button
              className="flex items-center space-x-[10px]  py-1 rounded-full text-white border-2 border-transparent hover:text-black active:text-primeryFirst"
              onClick={() => dispatch(setOpenHistory(false))}
            >
              <img
                src="/public/images/historyModal/arrowArtboard 1.svg"
                alt=""
                className="w-[35px] scale-[-1]"
              />{" "}
              <span>HIDE HISTORY</span>
            </button>
          ) : (
            <button
              className=" py-1 rounded-full flex items-center space-x-[10px] text-white border-2 border-transparent hover:text-black active:text-primeryFirst"
              onClick={() => dispatch(setOpenHistory(true))}
            >
              <img
                src="/public/images/historyModal/arrowArtboard 1.svg"
                alt=""
                className="w-[35px]"
              />{" "}
              <span>VIEW HISTORY</span>
            </button>
          )}

          <div className="flex gap-[5px] items-center ">
            <div className="flex flex-col  items-center ml-[20px]">
              <button
                className="w-[30px] h-[33px] rounded-md bg-primeryFirst flex items-center justify-center  "
                style={{ boxShadow: "0 0 7px -1px black" }}
              >
                 <img src="/public/pay-per-click_4297756.svg" accessKey="icon" width={25}/>
              </button>
              <p className="text-white text-[0.7rem]">PAY LINK</p>
            </div>
          </div>
          <div className="flex  flex-col justify-center  items-center gap-[5px] pr-[10px]">
            <div className="flex items-center gap-[7px]">
              <button
                className="w-[30px] h-[33px] rounded-md flex items-center justify-center   bg-primeryFirst"
                style={{ boxShadow: "0 0 7px -1px black" }}
              >
                  <img src="/public/menu-bar_5346611.svg" accessKey="icon" width={22}/>
              </button>
               <button
                className="w-[30px] h-[33px] rounded-md flex items-center justify-center bg-[#FFA18F]"
                style={{ boxShadow: "0 0 7px -1px black" }}
              >
                  <img src="/public/menu_8371147.svg" accessKey="icon" width={25}/>
              </button>
          
            </div>
              <p className="text-white text-[0.7rem]">CART STYLE</p>
        
          </div>
        </div>
        <div className="w-full  flex items-center justify-center bg-transparent">
            <div className="w-[30px] h-[30px] bg-[#3E7C60] rounded-full flex items-center justify-center  cursor-pointer" onClick={()=>setDropShow(false)}>
              <IoIosArrowUp className="font-bold shadow-2xl cursor-pointer"
               size={25}
            color="#fff"
              />
            </div>
          </div>  
      </div>
      
    </>
  );
};

export default DropDown;
