
import editIcon from "/Edit.svg";
import clockIcon from "/Clock_Icon.svg";


function AggregatorTopContents() {
  return (
    <>
     <div className="flex flex-col items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-2 xl:gap-3 w-full text-[0.8rem] 3xl:text-[1rem]">
              <p className="text-white text-nowrap w-[55px]">Order</p>
              <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center  w-[120px] 2xl:w-[150px] justify-between">
                10375 (KOT-1)
              </span>
            </div>
            <div className="flex items-center gap-2 xl:gap-3 w-full xl:w-[100%] text-[0.8rem] 3xl:text-[1rem]">
              <p className="text-white w-[55px]">Type</p>
              <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center w-[120px] 2xl:w-[150px] justify-between">
                Aggregator
                <span
                  id="icon-container"
                  // onClick={() => setOrderTypeModalOpen(true)}
                  className="cursor-pointer"
                >
                  <img
                    id="icon-image"
                    src={editIcon}
                    alt="edit"
                    className="w-[20px] 3xl:w-[25px]"
                  />
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2 xl:gap-3 w-full xl:w-[100%] text-[0.8rem] 3xl:text-[1rem]">
              <p className="text-white w-[55px]">Name</p>
              <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center w-[120px] 2xl:w-[150px] justify-between">
                Noon
                {/* <span>
                  <img src={editIcon} alt="edit" width={25} />
                </span> */}
              </span>
            </div>
          </div>

          <div className=" flex flex-col gap-2 justify-between text-[0.8rem] 3xl:text-[1rem]">
          <div className="bg-[#C7EBC5] flex p-2 items-center gap-2 rounded-lg ">
              <div className="hidden xl:block">
                <img src={clockIcon} alt="clock" className="w-[1rem] 3xl:text-[3rem]" />
              </div>
              <div className="grid grid-cols-1 w-[100%] xl:w-[80%]">
                <div className="flex justify-between text-[0.8rem] 3xl:text-[1rem]">
                  <p>Start:</p>
                  <p className="">10:30 Pm</p>
                </div>
                <div className="flex justify-between text-[0.8rem] 3xl:text-[1rem]">
                  <p>End :</p>
                  <p className="">--:-- Pm</p>
                </div>
              </div>
              <div className="bg-black rounded-lg text-center text-white p-[2px] xl:px-2 xl:py-1 block ">
                <p className="text-[0.8rem] 3xl:text-[1rem]">00:35</p>
                <p className="text-[0.8rem] 3xl:text-[1rem]">Minutes</p>
              </div>
            </div>
            <div className="bg-[#C7EBC5] p-2 flex justify-between items-center rounded-lg text-[0.8rem] 3xl:text-[1rem]">
              <p>Reference: 254557</p>
              {/* <span className="cursor-pointer">
                <img src={editIcon} alt="" width={25} />
              </span> */}
            </div>
          </div>
    </>
  )
}

export default AggregatorTopContents