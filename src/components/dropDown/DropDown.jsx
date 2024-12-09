import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { BiEdit } from "react-icons/bi";
import editIcon from "../../../public/Edit.svg";

const DropDown = (props) => {

	const {dropShow} = props

  return (
    <div
      className={`absolute space-y-3 bg-[#5CAC88] w-full -bottom-[450px] xl:-bottom-[535px] -left-[10px] p-2 rounded-b-2xl ${
        dropShow ? "block border-t border-white z-40" : "hidden"
      }`}
    >
      <div className="w-full flex flex-col gap-3 xl:max-w-[90%] mx-auto">
        <div className="flex items-center w-full space-x-2 xl:space-x-4 ">
          <span className="inline-flex justify-center items-center p-1 xl:p-2 rounded-lg border-4 border-white bg-slate-300">
            <img src="/check-mark.png" alt="check" className="w-4 xl:w-5" />
          </span>
          <div className="grid grid-cols-4 flex-1 text-sm xl:text-lg">
            <p className="col-span-2">ORDER RECEIVED:</p>
            <p className="">10:33 PM</p>
            <p></p>
          </div>
        </div>
        <div className="flex items-center w-full space-x-2 xl:space-x-4 ">
          <span className="inline-flex justify-center items-center p-1 xl:p-2 rounded-lg border-4 border-white bg-slate-300">
            <img src="/check-mark.png" alt="check" className="w-4 xl:w-5" />
          </span>
          <div className="grid grid-cols-4 flex-1 text-sm xl:text-lg">
            <p className="col-span-2">STARTED COOCKING:</p>
            <p className="">10:33 PM</p>
            <p></p>
          </div>
        </div>
        <div className="flex items-center w-full space-x-2 xl:space-x-4 ">
          <span className="inline-flex justify-center items-center p-1 xl:p-2 rounded-lg border-4 border-white bg-slate-300">
            <img src="/check-mark.png" alt="check" className="w-4 xl:w-5" />
          </span>
          <div className="grid grid-cols-4 flex-1 text-sm xl:text-lg">
            <p className="col-span-2">COOCKING DONE:</p>
            <p className="">11:25 PM</p>
            <p>(23 M)</p>
          </div>
        </div>
        <div className="flex items-center w-full space-x-2 xl:space-x-4 text-white">
          <span className="inline-flex justify-center items-center p-1 xl:p-2 rounded-lg border-4 border-white bg-slate-300">
            <img src="/check-mark.png" alt="check" className="w-4 xl:w-5" />
          </span>
          <div className="grid grid-cols-4 flex-1 text-sm xl:text-lg">
            <p className="col-span-2">ASSIGNED DRIVER:</p>
            <p className="">00:00</p>
            <p></p>
          </div>
        </div>
        <div className="flex items-center w-full space-x-2 xl:space-x-4 text-white">
          <span className="inline-flex justify-center items-center p-1 xl:p-2 rounded-lg border-4 border-white bg-slate-300">
            <img src="/check-mark.png" alt="check" className="w-4 xl:w-5" />
          </span>
          <div className="grid grid-cols-4 flex-1 text-sm xl:text-lg">
            <p className="col-span-2">DELIVERED:</p>
            <p className="">00:00</p>
            <p></p>
          </div>
        </div>
        <div className="flex items-center w-full space-x-2 xl:space-x-4 text-white">
          <span className="inline-flex justify-center items-center p-1 xl:p-2 rounded-lg border-4 border-white bg-slate-300">
            <img src="/check-mark.png" alt="check" className="w-4 xl:w-5" />
          </span>
          <div className="grid grid-cols-4 flex-1 text-sm xl:text-lg">
            <p className="col-span-2">PAID:</p>
            <p className="">00:00</p>
            <p></p>
          </div>
        </div>
        <div className="flex items-center w-full space-x-2 xl:space-x-4 text-white">
          <span className="inline-flex justify-center items-center p-1 xl:p-2 rounded-lg border-4 border-white bg-slate-300">
            <img src="/check-mark.png" alt="check" className="w-4 xl:w-5" />
          </span>
          <div className="grid grid-cols-4 flex-1 text-sm xl:text-lg">
            <p className="col-span-2">SETTLED & CLOSED:</p>
            <p className="">00:00</p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#C7EBC5] p-4 space-y-2 rounded-2xl">
        <div className="grid grid-cols-3">
          <p htmlFor="">Delivery Area</p>
          <div className="flex col-span-2 w-full items-start gap-1">
            <Input type="text" className="w-full py-1 px-2 rounded-lg" />
            <BiEdit size={30} />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <p htmlFor="">Address</p>
          <div className="flex col-span-2 w-full items-start gap-1">
            <TextArea type="text" className="w-full py-1 px-2 rounded-lg" />
            <img src={editIcon} alt="edit" width={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
