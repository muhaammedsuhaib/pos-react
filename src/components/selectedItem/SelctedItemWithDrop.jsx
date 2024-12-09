import { FaMinus, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import orderIcon from "/Order.svg";
import Note_Edit_Modal from "../note_edit_modal/Note_Edit_Modal";
import { useState } from "react";
import noteIcon from "../../../public/ItemEditIcon.svg";

const SelctedItemWithDrop = ({showOverlay}) => {
  const [noteEditModal, setNoteEditModal] = useState(false);

  return (
    <div className="bg-[#F6F6F6] rounded-xl w-full py-1 px-2 relative">
          {/* overlay */}
      {showOverlay && (
          <span className="w-full h-full bg-[#0c8ef1] opacity-70 z-[10] absolute top-0 left-0 rounded-xl"></span>
        )}
      {/* overlay */}
      <div className="bg-[#F6F6F6] rounded-xl w-full flex items-center justify-between relative">
        <div className="flex gap-1">
          <div className="rounded-full p-1 flex flex-col gap-[2px] bg-[#D9DDE1]">
            <span className="rounded-full p-[3px] bg-[#D8CDCB] text-black text-center border-2 border-transparent border-white active:bg-black">
              <FaPlus />
            </span>
            <span className="text-primeryFirst text-center font-semibold text-xs xl:text-sm 2xl:text-base">
              1
            </span>
            <span className="rounded-full p-[3px] bg-[#D8CDCB] text-black text-center border-2 border-transparent border-white active:bg-black">
              <FaMinus />
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <div className="relative flex items-center justify-center">
              <img
                src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg"
                alt="menu"
                className="w-[70px] h-[55px] xl:h-[60px] rounded-lg"
              />
              <span
                className="bg-black bg-opacity-70 h-[30px] w-[30px] pl-[3px] flex items-center justify-center rounded-lg border-2 border-white absolute -bottom-[10px] xl:left-1/2 xl:-translate-x-1/2 hover:border-primeryFirst active:bg-primeryFirst"
                onClick={() => setNoteEditModal(true)}
              >
                <img
                  src={noteIcon}
                  alt="printer"
                  className="w-[20px] xl:w-[25px]"
                />
              </span>
            </div>
            <div className="font-normal flex-grow overflow-hidden flex flex-col justify-center text-xs xl:text-sm">
              <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                Mix Seafood Cajun for two
              </p>
              <p className="">35 x 1 = 35</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pr-2">
          {" "}
          <p className="rounded-lg px-1 xl:px-2 bg-[#FDBCAF] font-semibold text-xs xl:text-sm 2xl:text-base text-nowrap ">
            AED 35.00{" "}
          </p>{" "}
        </div>
        <span className="absolute -top-3 border-[5px] border-[#515151] -right-[15px] p-1 bg-red-500 rounded-full z-30 hover:border-black active:bg-black">
          <IoClose size={20} color="#fff" />
        </span>
      </div>
      <div className="w-full pt-1 text-[10px] xl:text-[13px]">
        <div className="w-full p-1 px-2 bg-[#D7D7D7] rounded-lg mb-2">
          <p>Qty: &nbsp;3 Pcs</p>{" "}
        </div>
        <div className="w-full flex gap-2 p-1 px-2 bg-[#D7D7D7] rounded-lg mb-2">
          <div className="w-full">
            <div className="w-full flex items-center justify-between gap-1">
              <p>1 x Fries (Small)</p>{" "}
              <div className="flex-grow h-full border-b border-dotted border-black self-end mb-2" />
              <p>AED 10.00</p>{" "}
            </div>{" "}
            <div className="flex items-center justify-between gap-1">
              <p>1 x Fries (Small)</p>{" "}
              <div className="flex-grow h-full border-b border-dotted border-black self-end mb-2" />
              <p>AED 10.00</p>{" "}
            </div>{" "}
            <div className="flex items-center justify-between gap-1">
              <p>1 x Fries (Small)</p>{" "}
              <div className="flex-grow h-full border-b border-dotted border-black self-end mb-2" />
              <p>AED 10.00</p>{" "}
            </div>
          </div>

          <div className="flex justify-center items-center">
            {" "}
            <p className="rounded-lg px-1 xl:px-2 bg-[#FDBCAF] font-semibold text-xs xl:text-sm 2xl:text-base text-nowrap ">
              AED 35.00{" "}
            </p>{" "}
          </div>
        </div>
      </div>

      <Note_Edit_Modal
        openModal={noteEditModal}
        setOpenModal={setNoteEditModal}
      />
    </div>
  );

  // return (
  //   <div>
  //     <div className="flex relative">
  //       <div
  //         className="bg-[#FDBCAF] w-5 flex items-center justify-center rounded-full -mr-3 z-20 relative"
  //         style={{ boxShadow: "0 0 7px -2px black" }}
  //       >
  //         <span className="rounded-full p-[3px] bg-[#FC5534] text-white text-center scale-105 absolute -top-[2px] border-2 border-transparent hover:border-black active:bg-black">
  //           <FaPlus />
  //         </span>
  //         <span className="font-semibold text-xs xl:text-sm 2xl:text-base">
  //           1
  //         </span>
  //         <span className="rounded-full p-[3px] bg-[#FC5534] text-white text-center scale-105 absolute -bottom-[2px] border-2 border-transparent hover:border-black active:bg-black">
  //           <FaMinus />
  //         </span>

  //         {/* overlay */}
  //         {/* <span className="w-[calc(100%+2px)] h-[calc(100%+10px)] opacity-50 bg-[#4bb1ff] absolute -top-1 rounded-xl left-0"></span> */}
  //       </div>
  //       <div className="w-full pl-3 xl:pl-4 py-1 pr-1 flex items-center justify-between bg-[#F7F1ED] rounded-full relative">
  //         <div className="flex items-center gap-2">
  //           <div className="relative flex items-center justify-center">
  //             <img
  //               src="/bibimbap.png"
  //               alt="menu"
  //               className="w-[55px] xl:w-[70px]"
  //             />
  //             <span className="bg-black p-1 rounded-full border-2 border-white absolute -bottom-1 xl:left-1/2 xl:-translate-x-1/2 hover:border-primeryFirst active:bg-primeryFirst" onClick={()=>setNoteEditModal(true)}>
  //               <img
  //                 src={orderIcon}
  //                 alt="printer"
  //                 className="w-[20px] xl:w-[25px]"
  //               />
  //             </span>
  //           </div>
  //           <div className="font-normal flex-grow overflow-hidden flex flex-col justify-center text-xs xl:text-sm 2xl:text-base">
  //             <p className="whitespace-nowrap overflow-hidden text-ellipsis">
  //               Mix Seafood Cajun for two
  //             </p>
  //             <p>35 x 1 = 35</p>
  //           </div>
  //         </div>
  //         <div className="flex justify-center items-center">
  //           <p className="rounded-full px-1 xl:px-2 bg-[#FDBCAF] font-semibold text-xs xl:text-sm 2xl:text-base text-nowrap ">
  //             AED 35.00
  //           </p>
  //         </div>
  //         <span className="absolute -top-3 xl:-top-2 border-2 border-white right-0 p-1 bg-red-500 rounded-full z-20 hover:border-black active:bg-black">
  //           <IoClose size={20} color="#fff" />
  //         </span>

  //         {/* overlay */}
  //         {/* <span className="w-full h-full bg-[#0c8ef1] opacity-50 absolute top-0 left-0 rounded-full"></span> */}
  //       </div>
  //     </div>
  //     <div className="w-full flex justify-end">
  //       <div className="w-[95%] rounded-[30px] bg-[#F7F1ED] py-2 px-1 flex gap-2 text-[10px] lg:text-xs xl:text-xs">
  //         <div className="w-3/4 ml-3">
  //           <div className="w-full p-1 bg-slate-300 rounded-md mb-2">
  //             <p>Qty: &nbsp;3 Pcs</p>
  //           </div>
  //           <div className="w-full p-1 bg-slate-300 rounded-md leading-6">
  //             <div className="flex items-center justify-between gap-1 h-full">
  //               <p>1 x Fries (Small)</p>
  //               <div className="flex-grow h-full border-b border-dotted border-black self-end mb-2" />
  //               <p>AED 10.00</p>
  //             </div>
  //             <div className="flex items-center justify-between gap-1">
  //               <p>1 x Fries (Small)</p>
  //               <div className="flex-grow h-full border-b border-dotted border-black self-end mb-2" />
  //               <p>AED 10.00</p>
  //             </div>
  //             <div className="flex items-center justify-between gap-1">
  //               <p>1 x Fries (Small)</p>
  //               <div className="flex-grow h-full border-b border-dotted border-black self-end mb-2" />
  //               <p>AED 10.00</p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="w-1/4 flex items-center justify-end">
  //           <span className="rounded-full px-1 xl:px-2 bg-[#FDBCAF] font-semibold text-nowrap">
  //             AED 35.00
  //           </span>
  //         </div>
  //       </div>
  //     </div>
  //     <Note_Edit_Modal
  //       openModal={noteEditModal}
  //       setOpenModal={setNoteEditModal}
  //     />
  //   </div>
  // );
};

export default SelctedItemWithDrop;
