import { IoClose } from "react-icons/io5"
import noteIcon from "../../../public/ItemEditIcon.svg";
import { useState } from "react";
import PasswordApprovalModal from "../passwordApprovalModal/PasswordApprovalModal";


function SelectedItemNew({amount,name,normalAddOn,variant}) {
    const [passwordModal, setPasswordModal] = useState(false)
  return (
    <div className="w-full px-[5px] flex flex-col ">
        <div className="w-full h-[40px] bg-[#FFD4CD] rounded-[20px] relative flex items-center px-[18px] justify-between">
            <div className="w-[25px] h-[25px] rounded-full bg-primeryFirst border hover:border-black active:bg-black flex items-center justify-center absolute left-[-10px] top-[7px] cursor-pointer"
            style={{boxShadow:'0 0 7px -1px black'}}
            >
                <img src={noteIcon} alt="" className="h-[16px] " />
            </div>
            <div className="w-[25px] h-[25px] rounded-full bg-primeryFirst border hover:border-black active:bg-black flex items-center justify-center absolute right-[-10px] top-[7px] cursor-pointer "
            onClick={()=>setPasswordModal(true)}
             style={{boxShadow:'0 0 7px -1px black'}}
            >
            <IoClose size={20} color="#fff" />
            </div>

            <div className="3xl:text-[1rem] text-[.8rem] w-[200px] truncate">{name}</div>
            <div className="flex items-center gap-[5px]">
                <button className="w-[30px] bg-[#FFAC9B] h-[30px] rounded-md text-[20px] hover:border active:bg-primeryFirst active:text-white"
                style={{boxShadow:'0 0 8px -3px black'}}
                >-</button>
                <div className="w-[30px] flex items-center justify-center text-[13px]">2</div>
                <button className="w-[30px] bg-[#FFAC9B] h-[30px] rounded-md text-[20px] hover:border active:bg-primeryFirst active:text-white"
                style={{boxShadow:'0 0 8px -3px black'}}
                >+</button>
            </div>
            <div className="w-[50px] flex items-center justify-center text-[0.8rem] h-full ">{amount}</div>

        </div>
        {normalAddOn && (

        <div className="w-full px-[8px]">
            <div className="w-full bg-[#A0A0A0] h-[25px] rounded-[20px] flex items-center px-[10px]">
                <p className="w-full truncate text-[0.8rem] text-white">
                Rice or Spaghetti: 2-pc Chicken + Rice
                </p>
            </div>
        </div>
        )}
        {variant && (

        <div className="w-full px-[8px]">
            <div className="w-full bg-[#A0A0A0] flex rounded-[10px]  items-center px-[10px] py-[7px]">
                <div className="w-[80%] flex flex-col pl-[15px]">
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[80%] truncate">
                            <p className="text-[0.8rem] text-white" >1 x Fries (Large)..................................................................................................................</p>
                        </div>
                        <div className="">
                        <p className="text-[0.8rem] text-white" >25.00</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[80%] truncate">
                            <p className="text-[0.8rem] text-white" >2 x Ketchup)..................................................................................................................</p>
                        </div>
                        <div className="">
                        <p className="text-[0.8rem] text-white" >25.00</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[80%] truncate">
                            <p className="text-[0.8rem] text-white" >2 x Salt)..................................................................................................................</p>
                        </div>
                        <div className="">
                        <p className="text-[0.8rem] text-white" >25.00</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[80%] truncate">
                            <p className="text-[0.8rem] text-white" >2 x Java (Rice(1 Serve)..................................................................................................................</p>
                        </div>
                        <div className="">
                        <p className="text-[0.8rem] text-white" >25.00</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[80%] truncate">
                            <p className="text-[0.8rem] text-white" >3 x Spaghetti (1 Serve)..................................................................................................................</p>
                        </div>
                        <div className="">
                        <p className="text-[0.8rem] text-white" >25.00</p>
                        </div>
                    </div>
                </div>
                <div className="w-[20%] h-full flex items-center justify-end">
                    <p className="text-[0.8rem] text-white">15.50</p>
                </div>
              
            </div>
        </div>
        )}
    <PasswordApprovalModal modalOpen={passwordModal} setModalOpen={setPasswordModal} />
    </div>
  )
}

export default SelectedItemNew