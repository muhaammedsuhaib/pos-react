import { ConfigProvider, Modal, Select } from "antd";
import Password from "antd/es/input/Password";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

function PasswordApprovalModal({setModalOpen,modalOpen}) {
  return (
   <Modal 
   open={modalOpen} 
   onCancel={()=>setModalOpen(false)}
   onOk={()=>setModalOpen(false)}
   title="PASSWORD APPROVAL"
   className="posPopup"
   footer={null}
   width={550}
   >
    <div className="w-full py-[5px] px-[10px] bg-[#FFECEB]">
      <div className="w-full flex flex-col py-[10px] px-[10px] gap-y-[20px]">
        <div className="w-full flex items-center gap-x-[5px]">
          <div className="w-[40%] flex items-center justify-end">
              <h1 className="font-medium">Reason of Cancellation</h1>
          </div>
          <div className="w-[60%]">
            <ConfigProvider>
              <Select
              placeholder="Reason"
              className="w-full"
              suffixIcon={<BiSolidDownArrow className="text-gray-700"/>}
              />
            </ConfigProvider>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-[5px]">
          <div className="w-[40%] flex items-center justify-end">
              <h1 className="font-medium">Inventory Behavior</h1>
          </div>
          <div className="w-[60%]">
            <ConfigProvider>
              <Select
              placeholder="Inventory behavior"
              className="w-full"
              suffixIcon={<BiSolidDownArrow className="text-gray-700"/>}
              />
            </ConfigProvider>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-[5px]">
          <div className="w-[40%] flex items-center justify-end">
              <h1 className="font-medium">Password of Supervisor</h1>
          </div>
          <div className="w-[60%]">
            <ConfigProvider>
              <Password
              className="w-[200px]"
              
              
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
      <div className="w-full flex items-end justify-end h-[40px]">
        <button className="px-[20px] bg-primeryFirst text-white py-[2px] rounded-[20px] hover:border-2 border-black active:bg-black">APPROVED</button>
      </div>
    </div>

   </Modal>
  )
}

export default PasswordApprovalModal