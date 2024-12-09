import editIcon from "/Edit.svg";

function BookingTopContents() {
  return (
    <>
    <div className="flex flex-col items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-2 xl:gap-3 w-full text-[0.8rem] 3xl:text-[1rem]">
              <p className="text-white text-nowrap w-[55px]">Order</p>
              <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center  w-[100px] xl:w-[120px] 3xl:w-[150px] justify-between">
                10375
              </span>
            </div>
            <div className="flex items-center gap-2 xl:gap-3 w-full text-[0.8rem] 3xl:text-[1rem]">
              <p className="text-white w-[55px]">Type</p>
              <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center w-[100px] xl:w-[120px] 3xl:w-[150px] justify-between">
                Booking
                <span>
                  <img
                    src={editIcon}
                    alt="edit"
                    className="w-[20px] xl:w-[25px]"
                  />
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2 xl:gap-3 w-full xl:w-[100%] text-[0.8rem] 3xl:text-[1rem]">
              <p className="text-white w-[55px]">Date</p>
              <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center w-[100px] xl:w-[120px] 3xl:w-[150px] justify-between">
                10-10-2024
                {/* <span>
                  <img src={editIcon} alt="edit" width={25} />
                </span> */}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-2 w-full">
            <div className="flex gap-2 items-center w-full text-[0.8rem] 3xl:text-[1rem]">
              <p className="text-white text-nowrap w-[55px]">Type</p>
              <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center  w-[100px] xl:w-[120px] 3xl:w-[150px] justify-between">
                Party
              </span>
            </div>
            <div className="flex items-center gap-2 w-full xl:w-[100%] text-[0.8rem] 3xl:text-[1rem]">
              <p className="text-white text-[0.8rem] 3xl:text-[1rem]-base w-[55px]">Persons</p>
              <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center w-[100px] xl:w-[120px] 3xl:w-[150px] justify-between">
                15
                {/* <span>
                  <img src={editIcon} alt="edit" width={25} />
                </span> */}
              </span>
            </div>
            <div className="flex items-center gap-2 w-full xl:w-[100%] text-[0.8rem] 3xl:text-[1rem]">
              <p className="text-white w-[55px]">Time</p>
              <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center w-[100px] xl:w-[120px] 3xl:w-[150px] justify-between">
                10:30 PM
                {/* <span>
                  <img src={editIcon} alt="edit" width={25} />
                </span> */}
              </span>
            </div>
          </div>
    </>
  )
}

export default BookingTopContents