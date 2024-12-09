/* eslint-disable react/prop-types */
import CheckBox from "../../customeCheckbox/CheckBox";
import { GoArrowRight } from "react-icons/go";

const DropDown = (props) => {
  const { dropShow } = props;

  const handleChange = (value) => {
    console.log("changed:", value);
  };

  return (
    <div
      className={`absolute space-y-3 bg-[#5CAC88] w-full top-full -left-[10px] p-2 rounded-b-2xl ${
        dropShow ? "block border-t border-white z-40" : "hidden"
      }`}
    >
      <div className="w-full flex flex-col gap-3 p-3 mx-auto relative pt-6 bg-primeryThird rounded-lg">
        {/* <div className="flex items-center justify-end gap-1 text-sm text-white absolute right-2 top-2">
          <p>ORDER HISTORY </p>
          <span>
            <GoArrowRight />
          </span>
          <button className="bg-primeryFirst p-1 rounded-md shadow-mg">
            <img src="/printer.svg" alt="icon" width={20} />
          </button>
        </div> */}

        <div className="flex items-center w-full space-x-2 xl:space-x-4 ">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 flex-1 text-sm 2xl:text-lg font-medium">
            <p className="col-span-2">ORDER RECEIVED:</p>
            <p className="">10:33 PM</p>
            <p></p>
          </div>
        </div>
        <div className="flex items-center w-full space-x-2 xl:space-x-4 ">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 flex-1 text-sm 2xl:text-lg font-medium">
            <p className="col-span-2">STARTED COOCKING:</p>
            <p className="">10:33 PM</p>
            <p></p>
          </div>
        </div>
        <div className="flex items-center w-full space-x-2 xl:space-x-4 ">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 flex-1 text-sm 2xl:text-lg font-medium">
            <p className="col-span-2">COOCKING DONE:</p>
            <p className="">11:25 PM</p>
            <p>(23 M)</p>
          </div>
        </div>
        <div className="flex items-center w-full space-x-2 xl:space-x-4 text-[#838B9B]">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 flex-1 text-sm 2xl:text-lg font-medium">
            <p className="col-span-2">ASSIGNED DRIVER:</p>
            <p className="">00:00</p>
            <p></p>
          </div>
        </div>
        <div className="flex items-center w-full space-x-2 xl:space-x-4 text-[#838B9B]">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 flex-1 text-sm 2xl:text-lg font-medium">
            <p className="col-span-2">DELIVERED:</p>
            <p className="">00:00</p>
            <p></p>
          </div>
        </div> 
      </div>
      <div className="w-full flex flex-col gap-3 p-3 mx-auto relative bg-primeryThird rounded-lg">
        <div className="flex items-center w-full space-x-2 xl:space-x-4 ">
          <CheckBox onChange={handleChange} borderColor={"red"} />
          <div className="grid grid-cols-4 flex-1 text-sm 2xl:text-lg font-medium text-red-500">
            <p className="col-span-2">ORDER RECEIVED:</p>
            <p className="">10:33 PM</p>
            <p></p>
          </div>
        </div>
        <div className="flex items-center w-full space-x-2 xl:space-x-4 ">
          <CheckBox onChange={handleChange} borderColor={"red"} />
          <div className="grid grid-cols-4 flex-1 text-sm 2xl:text-lg font-medium text-red-500">
            <p className="col-span-2">STARTED COOCKING:</p>
            <p className="">10:33 PM</p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <button className="bg-primeryFirst px-4 py-1 rounded-full text-white text-sm">
          ORDER HISTORY
        </button>
        <button className="bg-primeryFirst px-4 py-1 rounded-full text-white text-sm">
          COPY PAYMENT LINK
        </button>
      </div>
      {/* <div className="w-full bg-[#C7EBC5] p-4 space-y-2 rounded-2xl">
        <div className="grid grid-cols-3">
          <p htmlFor="">Delivery Area</p>
          <div className="flex col-span-2 w-full items-start gap-1">
            <Input type="text" className="w-full py-1 px-2 rounded-lg" />
            <img src={editIcon} alt="edit" width={25} />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <p htmlFor="">Address</p>
          <div className="flex col-span-2 w-full items-start gap-1">
            <TextArea type="text" className="w-full py-1 px-2 rounded-lg" />
            <img src={editIcon} alt="edit" width={25} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DropDown;
