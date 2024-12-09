import CheckBox from "../customeCheckbox/CheckBox"


function PickUpDropCHeckBoxes() {
  return (
    <>
 
        <div className="w-full flex flex-col gap-1 xl:gap-3 p-3 mx-auto relative  bg-primeryThird rounded-lg">
          {/* <div className="flex items-center justify-end gap-1 text-sm text-white absolute right-2 top-2">
          <p>ORDER HISTORY </p>
          <span>
            <GoArrowRight />
          </span>
          <button className="bg-primeryFirst p-1 rounded-md shadow-mg">
            <img src="/printer.svg" alt="icon" width={20} />
          </button>
        </div> */}

          <div className="flex items-center w-full gap-1">
            <CheckBox />
            <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium">
              <p className="col-span-2">ORDER RECEIVED:</p>
              <p className="h-full flex items-center">10:33 PM</p>
              <p className="h-full flex items-center"></p>
            </div>
          </div>
          <div className="flex items-center w-full gap-1">
            <CheckBox />
            <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium">
              <p className="col-span-2">STARTED COOCKING:</p>
              <p className="h-full flex items-center">10:33 PM</p>
              <p className="h-full flex items-center"></p>
            </div>
          </div>
          <div className="flex items-center w-full gap-1">
            <CheckBox />
            <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium">
              <p className="col-span-2">COOCKING DONE:</p>
              <p className="h-full flex items-center">11:25 PM</p>
              <p className="h-full flex items-center">(23 M)</p>
            </div>
          </div>
          <div className="flex items-center w-full gap-1 text-[#838B9B]">
            <CheckBox />
            <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium">
              <p className="col-span-2">PAYMENT:</p>
              <p className="h-full flex items-center">00:00</p>
              <p className="h-full flex items-center"></p>
            </div>
          </div>
          <div className="flex items-center w-full gap-1 text-[#838B9B]">
            <CheckBox />
            <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium">
              <p className="col-span-2">SETTLE & CLOSE:</p>
              <p className="h-full flex items-center">00:00</p>
              <p className="h-full flex items-center"></p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 p-3 mx-auto relative bg-primeryThird rounded-lg ">
          <div className="flex items-center w-full gap-1">
            <CheckBox borderColor={"red"} />
            <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium text-red-500">
              <p className="col-span-2">ORDER RECEIVED:</p>
              <p className="h-full flex items-center">10:33 PM</p>
              <p className="h-full flex items-center"></p>
            </div>
          </div>
          <div className="flex items-center w-full gap-1">
            <CheckBox borderColor={"red"} />
            <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium text-red-500">
              <p className="col-span-2">STARTED COOCKING:</p>
              <p className="h-full flex items-center">10:33 PM</p>
              <p className="h-full flex items-center"></p>
            </div>
          </div>
        </div>
    </>
  )
}

export default PickUpDropCHeckBoxes