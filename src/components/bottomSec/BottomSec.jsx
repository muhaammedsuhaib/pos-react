import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";
import CouponCodeModal from "../coupon_code/CouponCodeModal";
import PaymentModal from "../paymentModal/PaymentModal";
import BottomDropDown from "./bottomDropDown/BottomDropDown";
import "./bottomSec.css";
import printer from "/printer.svg";
import printerWhite from "/printerWhite.svg";
const BottomSec = ({page}) => {
  const [printOpShow, setPrintOpShow] = useState(false);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [changeBtnSection, setChengeBtnSection] = useState(false);
  const [dropShow, setDropShow] = useState(false);
  const [couponModalOpen, setCouponModalOpen] = useState(false);
  const [showKOT_Op, setShowKOT_Op] = useState(false);



  console.log(couponModalOpen);

  return (
    <div className="flex flex-col w-full  bg-primeryFirst  p-2 pb-[10px]">
  

      {/* Update order and prind KOT button section */}
      <div
        className={`w-full h-[50px] bg-primerySecond p-1 xl:p-2 flex justify-between items-center gap-2 relative  mb-3 ${dropShow ? "rounded-b-xl" : "rounded-xl"
          } `}
      >
        <button className="bg-black px-[5px] py-[5px] rounded-[10px]"
         style={{ boxShadow: "0 0 10px -2px black" }}
        >
        <VscDebugRestart className="text-white  text-[20px]" />
        </button>
        <div className="flex-grow h-full">
          {page !== 'booking' ? (

          <div  className={`h-full ${changeBtnSection ? 'hidden ' : 'flex'} flex items-center`}>
            <button
              onClick={() => setChengeBtnSection(!changeBtnSection)}
              className="w-full bg-black px-1 py-[5px] text-white rounded-[10px] text-[0.8rem] 3xl:text-[1rem] border-2 border-transparent  duration-50  active:bg-primeryFirst hover:border-[1px] hover:border-white "
              style={{ boxShadow: "0 0 10px -2px black" }}
            >
              SAVE ORDER & PRINT KOT
            </button>
          </div>
          ):(
            <div className="h-full flex items-center gap-[3px]">
              <button
                className="w-full bg-black shadow-lg p-1 text-white rounded-[10px]  border-transparent duration-50  active:text-white 3xl:text-[1rem] text-[0.8rem] uppercase leading-3 active:bg-primeryFirst hover:border-[1px] border-white "
                style={{ boxShadow: "0 0 10px -2px black" }}

              >
                update booking & save kot
              </button>
              <button
                className="w-full bg-black shadow-lg p-1 text-white rounded-[10px]  border-transparent duration-50  active:text-white 3xl:text-[1rem] text-[0.8rem] uppercase leading-3 active:bg-primeryFirst hover:border-[1px] border-white "
                style={{ boxShadow: "0 0 10px -2px black" }}

              >
                update booking & print kot
              </button>
            </div>
          )
          }
          <div
            className={`gap-1 items-center justify-center w-full h-full  text-xs xl:text-sm 2xl:text-base ${!changeBtnSection ? "hidden" : "flex"
              }`}
          >
            <button
              className="w-full h-[30px] bg-primeryThird shadow-lg px-1 text-black rounded-full border-2 border-transparent hover:border-black duration-50 active:bg-black active:text-white 3xl:text-[1rem] text-[0.6rem]"
              style={{ boxShadow: "0 0 10px -2px black" }}
              onClick={() => setCouponModalOpen((prev) => !prev)}
            >
              COUPON
            </button>
            <button
              className="w-full h-[30px] bg-primeryThird shadow-lg px-1 text-black rounded-full border-2 border-transparent hover:border-black duration-50 active:bg-black active:text-white 3xl:text-[1rem] text-[0.6rem]"
              style={{ boxShadow: "0 0 10px -2px black" }}
            >
              DISCOUNT
            </button>
            <button
              className="w-full h-[30px] bg-primeryThird shadow-lg px-1 text-black rounded-full border-2 border-transparent hover:border-black duration-50 active:bg-black active:text-white 3xl:text-[1rem] text-[0.6rem]"
              style={{ boxShadow: "0 0 10px -2px black" }}
            >
              DELIVERY
            </button>
          </div>
        </div>
        <div
          className=" 3xl:text-[1rem] text-[0.8rem]  h-full rounded-lg shadow-lg w-[130px] justify-center text-black flex items-center p-1 "
          // style={{ boxShadow: "0 0 10px -2px black" }}
        >
          TOTAL: &nbsp; <span className="font-semibold">
            {/* {cartTotal.toFixed(2)} */}
            </span>
        </div>
       
        <div
          className={`absolute bottom-full left-1/2 -translate-x-[50%] z-30 bg-[#5CAC88] active:bg-black px-2 rounded-t-full hover:border-t hover:border-black 
           
           `}
          onClick={() => setDropShow((prev) => !prev)}
        >
          {!dropShow && (
            <IoIosArrowUp
              size={25}
              color="#fff"
              className="font-bold shadow-2xl"
            />
          )}
        </div>
        <BottomDropDown dropShow={dropShow} setDropShow={setDropShow} />
      </div>

      {/* KOT, Payment, Print button section */}
      <div className="bg-[#5CAC88] p-1 xl:p-2 w-full rounded-xl flex justify-between items-center space-x-1 3xl:h-[50px] h-[50px] relative">
        <div className="h-full relative flex items-center">
          <button
            className="flex items-center px-1 py-[5px] xl:px-2 bg-black rounded-[8px] text-white text-[0.8rem] 3xl:text-[1rem]  z-20 active:bg-primeryFirst hover:border-[1px] border-white"
            style={{ boxShadow: "0 0 10px -2px black" }}
          >
            SHOW KOT{" "}
            <span onClick={() => setShowKOT_Op(true)}>
              <FaAngleUp color="#fff" className="rotate-0 text-[0.8rem] 3xl:text-[1.5rem]" />
            </span>
          </button>
          <span
            onClick={() => setShowKOT_Op(true)}
            className={` 
               
               w-[35px] pl-[5px] py-[5px] -ml-2 flex items-center justify-center bg-[#C3C8D1] rounded-e-md shadow-md hover:bg-primeryFirst `}
            style={{ boxShadow: "0 0 5px -2px black" }}
          >
            <img src={printer} alt="" width={20} />
          </span>
          <div
            className={`${showKOT_Op ? "block" : "hidden"
              } w-[100%]  bg-black absolute left-0 bottom-0 rounded-lg z-50 p-2 space-y-1`}
          >
            <div className="flex items-center">
              <button
                className="w-full text-center text-white text-[0.8rem] 3xl:text-[1rem] bg-primeryFirst rounded-lg shadow-lg py-[5px] active:bg-black hover:border-white hover:border-[1px]"
                style={{ boxShadow: "0 0 5px -2px black" }}
              >
                KOT 30
              </button>
              <span
                className=" w-[35px] pl-[5px] h-[100%] flex items-center justify-center"
                style={{ boxShadow: "0 0 5px -2px black" }}
              >
                <img src="/public/printerWhite.svg" alt="" width={20} />
              </span>
            </div>
            <div className="flex items-center">
              <button
                className="w-full text-center text-white text-[0.8rem] 3xl:text-[1rem] bg-primeryFirst rounded-lg shadow-lg py-[5px] active:bg-black hover:border-white hover:border-[1px]"
                style={{ boxShadow: "0 0 5px -2px black" }}
              >
                KOT 31
              </button>
              <span
                className=" w-[35px] pl-[5px] h-[100%] flex items-center justify-center"
                style={{ boxShadow: "0 0 5px -2px black" }}
              >
                <img src="/public/printerWhite.svg" alt="" width={20} />
              </span>
            </div>

            <button
              className="w-full flex items-center justify-center text-white text-[0.8rem] 3xl:text-[1rem] bg-black rounded-lg shadow-lg py-[5px] active:bg-primeryFirst hover:border-white hover:border-[1px] "
              style={{ boxShadow: "0 0 10px -2px black" }}
              onClick={() => setShowKOT_Op(false)}
            >
              SHOW KOT{" "}
              <span className=" " onClick={() => setShowKOT_Op(false)}>
                <FaAngleUp color="#fff" className="rotate-180 text-[0.8rem] 3xl:text-[1.5rem]" />
              </span>
            </button>
          </div>
        </div>
        <div className="relative">
          
        <button
          className="flex items-center py-[5px]  3xl:w-[150px] w-[100px] text-center justify-center bg-black rounded-[8px] text-white text-[0.8rem] 3xl:text-[1rem] h-full  active:bg-primeryFirst hover:border-[1px] border-white relative z-[2]"
          style={{ boxShadow: "0 0 5px -2px black" }}
          onClick={() => setOpenPaymentModal(true)}
        >
          PAYMENT
        </button>
          <div className="px-4 rounded-b-xl absolute bottom-[-15px] left-[50%] -translate-x-[50%] bg-[#FE0000] z-[1] border border-white ">
          <p className="text-xs text-white">UNPAID</p>
        </div>
        </div>
        <div className="flex items-center h-full relative">
          <button
            className="flex items-center py-[5px] px-2 xl:px-3 bg-black rounded-[8px] text-white text-[0.8rem] 3xl:text-[1rem]   z-20 active:bg-primeryFirst hover:border-[1px] border-white  "
            style={{ boxShadow: "0 0 5px -2px black" }}
          >
            SETTLE & CLOSE
          </button>

        
          <div
            className={`${
              printOpShow ? "block" : "hidden"
            } w-[100%] h-[110px] bg-black absolute right-0 bottom-0 rounded-lg z-50 p-2 space-y-1`}
          >
            <div className="flex items-center">
              <button
                className=" text-center text-white w-[150px] bg-primeryFirst rounded-lg shadow-lg py-[5px] active:bg-black hover:border-white hover:border-[1px]  text-[0.6rem]"
                style={{ boxShadow: "0 0 5px -2px black" }}
              >
                INVOICE (A4)
              </button>
              <span
                className=" h-[100%] flex items-center justify-center"
                style={{ boxShadow: "0 0 5px -2px black" }}
              >
                <img src="/public/printerWhite.svg" alt="" width={30} />
              </span>
              <span
                className=" h-[100%] flex items-center justify-center"
                style={{ boxShadow: "0 0 5px -2px black" }}
              >
                <img src="/public/print-download.svg" alt="" width={30} />
              </span>
            </div>
            <div className="flex items-center">
              <button
                className=" text-center text-white w-[150px] bg-primeryFirst rounded-lg shadow-lg py-[5px] active:bg-black hover:border-white hover:border-[1px]  text-[0.6rem]"
                style={{ boxShadow: "0 0 5px -2px black" }}
              >
                BILL (SMALL)
              </button>
              <span
                className=" h-[100%] flex items-center justify-center"
                style={{ boxShadow: "0 0 5px -2px black" }}
              >
                <img src="/public/printerWhite.svg" alt="" width={30} />
              </span>
              <span
                className=" h-[100%] flex items-center justify-center"
                style={{ boxShadow: "0 0 5px -2px black" }}
              >
                <img src="/public/print-download.svg" alt="" width={30} />
              </span>
            </div>
            <button
              // onClick={() => setPrintOpShow((prev) => !prev)}
              className=" text-center text-white w-full bg-primaryFirst rounded-lg py-[5px]  flex gap-1 justify-center items-center active:bg-primeryFirst hover:border-white hover:border-[1px]  text-[0.7rem]"
              style={{ boxShadow: "0 0 5px -2px black" }}
            >
              BILL / INVOICE
              <span className=" " onClick={() => setPrintOpShow(false)}>
                <FaAngleUp color="#fff" className="rotate-180" />
              </span>
            </button>
          </div>
          
        </div>
        <button
            onClick={() => setPrintOpShow((prev) => !prev)}
            className=" w-[30px]  py-[5px] flex items-center justify-center bg-[#000] rounded-md shadow-md hover:bg-primeryFirst hover:border-white hover:border-[1px] "
            style={{ boxShadow: "0 0 5px -2px black" }}
          >
            <img src={printerWhite} alt="" width={20} />
          </button>
      </div>

      {/* payment modal */}
      <PaymentModal
        openModal={openPaymentModal}
        setOpenModal={setOpenPaymentModal}
      />

      <CouponCodeModal
        openModal={couponModalOpen}
        setOpenModal={setCouponModalOpen}
      />
    </div>
  );
};

export default BottomSec;
