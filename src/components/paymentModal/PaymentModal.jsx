/* eslint-disable react/prop-types */
import { Input, Modal } from "antd"
import './paymentModal.css'
import cashImg from '../../../public/images/paymentModalIcons/cash_13978471.svg'
import cardImg from '../../../public/images/paymentModalIcons/atm-card_8983163.svg'
import transferImg from '../../../public/images/paymentModalIcons/bank-transfer_4140851.svg'
import aggrefatorImg from '../../../public/images/paymentModalIcons/delivery-man_3101484.svg'
import creditImg from '../../../public/images/paymentModalIcons/backer_12793923.svg'
import otherImg from '../../../public/images/paymentModalIcons/open-menu_4503988.svg'
import freeImg from '../../../public/images/paymentModalIcons/badge_5494492.svg'
import chefImg from '../../../public/images/paymentModalIcons/chef_325549.svg'
import markettingImg from '../../../public/images/paymentModalIcons/vlogger_1974080.svg'
import timeImg from '../../../public/cashHandIcon.svg'
import { useState } from "react"



function PaymentModal( {openModal, setOpenModal}) {
   const [selectedCard, setSelectedCard] = useState('')
  return (
    <Modal
      open={openModal}
      onOk={() => setOpenModal(false)}
      onCancel={() => setOpenModal(false)}
      footer={null}
      title="PAYMENT"
      width={680}
      className="paymentPoUp posPopup"
    >
      <div className="w-full bg-black h-[120px] flex items-center">
        <div className="w-full grid grid-flow-row grid-cols-7">
          <div className="space-x-[5px] flex flex-col items-center">
            <p className="text-white text-center">CASH</p>
            <div className={`w-[65px] h-[65px] rounded-[12px] p-[8px] duration-75 relative paymentTypeCard ${
    selectedCard === 'cash' ? 'bg-primeryFirst' : 'bg-[#FDCDC3] hover:bg-primeryFirst'
  }`} onClick={()=>{
              setSelectedCard('cash')
            }}>
              <div className="w-full flex justify-center absolute bottom-[-11px] left-0">
              <i className={`downArrowPaymentModal ${selectedCard === 'cash' ? 'showIcon' : 'hidden'}`}></i>
              </div>
              <div className="w-full h-full bg-[#F4F4F4] rounded-[10px] mediumShadow flex justify-center items-center p-[5px]">
                <img src={cashImg} alt="" />
              </div>
            </div>
          </div>
          <div className="space-x-[5px] flex flex-col items-center">
            <p className="text-white text-center">CARD</p>
            <div className={`w-[65px] h-[65px] rounded-[12px] p-[8px] duration-75 relative paymentTypeCard ${
    selectedCard === 'card' ? 'bg-primeryFirst' : 'bg-[#FDCDC3] hover:bg-primeryFirst'
  }`} onClick={()=>{
              setSelectedCard('card')
            }}>
              <div className="w-full flex justify-center absolute bottom-[-11px] left-0">
                <i className={`downArrowPaymentModal ${selectedCard === 'card' ? 'showIcon' : 'hidden'}`}></i>
              </div>
              <div className="w-full h-full bg-[#F4F4F4] rounded-[10px] mediumShadow flex justify-center items-center p-[2px]">
                <img src={cardImg} alt="" />
              </div>
              <div  className={`w-[200px] space-x-[5px] flex justify-center items-center absolute bottom-[-76px] left-[-67px] transition-all duration-700  ${
    selectedCard === 'card' ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`}>
                <div className="w-[50px] h-[50px] bg-[#FDCDC3] rounded-full flex justify-center items-center  hover:bg-primeryFirst">
                  <div className="w-[38px] h-[38px] bg-[#F4F4F4] rounded-full flex justify-center items-center mediumShadow">
                    <img src={otherImg} alt="" className="w-[27px]" />
                  </div>
                </div>
                <div className="w-[50px] h-[50px] bg-[#FDCDC3] rounded-full flex justify-center items-center  hover:bg-primeryFirst">
                  <div className="w-[38px] h-[38px] bg-[#F4F4F4] rounded-full flex justify-center items-center mediumShadow">
                    <img src={otherImg} alt="" className="w-[27px]" />
                  </div>
                </div>
                <div className="w-[50px] h-[50px] bg-[#FDCDC3] rounded-full flex justify-center items-center  hover:bg-primeryFirst">
                  <div className="w-[38px] h-[38px] bg-[#F4F4F4] rounded-full flex justify-center items-center mediumShadow">
                    <img src={otherImg} alt="" className="w-[27px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-x-[5px] flex flex-col items-center">
            <p className="text-white text-center">TRANSFER</p>
            <div className={`w-[65px] h-[65px] rounded-[12px] p-[8px] duration-75 relative paymentTypeCard ${
    selectedCard === 'transfer' ? 'bg-primeryFirst' : 'bg-[#FDCDC3] hover:bg-primeryFirst'
  }`} onClick={()=>{
              setSelectedCard('transfer')
            }}>
              <div className="w-full flex justify-center absolute bottom-[-11px] left-0">
              <i className={`downArrowPaymentModal ${selectedCard === 'transfer' ? 'showIcon' : 'hidden'}`}></i>
              </div>
              <div className="w-full h-full bg-[#F4F4F4] rounded-[10px] mediumShadow flex justify-center items-center p-[3px]">
                <img src={transferImg} alt="" />
              </div>
            </div>
          </div>
          <div className="space-x-[5px] flex flex-col items-center">
            <p className="text-white text-center">AGGREGGATOR</p>
            <div className={`w-[65px] h-[65px] rounded-[12px] p-[8px] duration-75 relative paymentTypeCard ${
    selectedCard === 'aggregator' ? 'bg-primeryFirst' : 'bg-[#FDCDC3] hover:bg-primeryFirst'
  }`} onClick={()=>{
              setSelectedCard('aggregator')
            }}>
              <div className="w-full flex justify-center absolute bottom-[-11px] left-0">
              <i className={`downArrowPaymentModal ${selectedCard === 'aggregator' ? 'showIcon' : 'hidden'}`}></i>
              </div>
              <div className="w-full h-full bg-[#F4F4F4] rounded-[10px] mediumShadow flex justify-center items-center p-[3px]">
                <img src={aggrefatorImg} alt="" className="scale-x-[-1]"  />
              </div>
            </div>
          </div>
          <div className="space-x-[5px] flex flex-col items-center">
            <p className="text-white text-center">CREDIT</p>
            <div className={`w-[65px] h-[65px] rounded-[12px] p-[8px] duration-75 relative paymentTypeCard ${
    selectedCard === 'credit' ? 'bg-primeryFirst' : 'bg-[#FDCDC3] hover:bg-primeryFirst'
  }`} onClick={()=>{
              setSelectedCard('credit')
            }}>
              <div className="w-full flex justify-center absolute bottom-[-11px] left-0">
              <i className={`downArrowPaymentModal ${selectedCard === 'credit' ? 'showIcon' : 'hidden'}`}></i>
              </div>
              <div className="w-full h-full bg-[#F4F4F4] rounded-[10px] mediumShadow flex justify-center items-center ">
                <img src={creditImg} alt="" className="h-[41px]" />
              </div>
            </div>
          </div>
          <div className="space-x-[5px] flex flex-col items-center">
            <p className="text-white text-center">FREE</p>
            <div className={`w-[65px] h-[65px] rounded-[12px] p-[8px] duration-75 relative paymentTypeCard ${
    selectedCard === 'free' ? 'bg-primeryFirst' : 'bg-[#FDCDC3] hover:bg-primeryFirst'
  }`} onClick={()=>{
              setSelectedCard('free')
            }}>
              <div className="w-full flex justify-center absolute bottom-[-11px] left-0">
              <i className={`downArrowPaymentModal ${selectedCard === 'free' ? 'showIcon' : 'hidden'}`}></i>
              </div>
              <div className="w-full h-full bg-[#F4F4F4] rounded-[10px] mediumShadow flex justify-center items-center ">
                <img src={freeImg} alt="" className="h-[41px]" />
              </div>
              <div className={`w-[200px] space-x-[5px] flex justify-center items-center absolute bottom-[-84px] left-[-67px] transition-all duration-700  ${
    selectedCard === 'free' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex justify-center flex-col items-center">

                  <div className="w-full text-center text-[11px]">STAFF</div>
                <div className="w-[50px] h-[50px] bg-[#FDCDC3] rounded-full flex justify-center flex-col items-center  hover:bg-primeryFirst">
                  <div className="w-[38px] h-[38px] bg-[#F4F4F4] rounded-full flex justify-center items-center mediumShadow">
                    <img src={chefImg} alt="" className="w-[27px]" />
                  </div>
                </div>
                </div>
                <div className="flex justify-center flex-col items-center">

                  <div className="w-full text-center text-[11px]">MARKETING</div>
                <div className="w-[50px] h-[50px] bg-[#FDCDC3] rounded-full flex justify-center flex-col items-center  hover:bg-primeryFirst">
                  <div className="w-[38px] h-[38px] bg-[#F4F4F4] rounded-full flex justify-center items-center mediumShadow">
                    <img src={markettingImg} alt="" className="w-[27px]" />
                  </div>
                </div>
                </div>
                <div className="flex justify-center flex-col items-center">

                  <div className="w-full text-center text-[11px]">OTHERS</div>
                <div className="w-[50px] h-[50px] bg-[#FDCDC3] rounded-full flex justify-center flex-col items-center  hover:bg-primeryFirst">
                  <div className="w-[38px] h-[38px] bg-[#F4F4F4] rounded-full flex justify-center items-center mediumShadow">
                    <img src={otherImg} alt="" className="w-[27px]" />
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-x-[5px] flex flex-col items-center">
            <p className="text-white text-center">OTHER</p>
            <div className={`w-[65px] h-[65px] rounded-[12px] p-[8px] duration-75 relative paymentTypeCard ${
    selectedCard === 'other' ? 'bg-primeryFirst' : 'bg-[#FDCDC3] hover:bg-primeryFirst'
  }`} onClick={()=>{
              setSelectedCard('other')
            }}>
              <div className="w-full flex justify-center absolute bottom-[-11px] left-0">
              <i className={`downArrowPaymentModal ${selectedCard === 'other' ? 'showIcon' : 'hidden'}`}></i>
              </div>
              <div className="w-full h-full bg-[#F4F4F4] rounded-[10px] mediumShadow flex justify-center items-center p-[3px]">
                <img src={otherImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full bg-[#D0CECF] h-[70px] transition-all duration-500  overflow-hidden ${
    selectedCard === 'free' || selectedCard === 'card' ? 'max-h-[70px] opacity-100' : 'max-h-0 opacity-0'
  }`}></div>
      <div className="bg-[#F4F4F4] w-full px-[20px] pt-[20px]">
        <div className="w-full grid grid-flow-row grid-cols-3 gap-[20px]">
          <div className="bg-[#FFCFC5] h-[195px] rounded-[20px]">
            <div className="flex  h-full relative">
              <div className="w-full flex justify-center py-[10px] absolute top-0 left-0 text-[20px] font-bold">
                INVOICE
              </div>
              <div className="w-full h-full flex items-center justify-center px-[10px]">
                <Input
                  className="text-center w-full border-none outline-none h-[50px] bg-[#FF9D88] rounded-[30px] text-white font-medium text-[30px]"
                  value={"399.00"}
                />
              </div>
            </div>
          </div>
          <div className="bg-[#FFCFC5] h-[280px] rounded-[20px]">
            <div className="flex  h-full relative">
              <div className="w-full flex justify-center py-[10px] absolute top-0 left-0 text-[20px] font-bold">
                RECEIVED
              </div>
              <div className="w-full h-full flex items-center flex-col pt-[75px] px-[10px]">
                <Input
                  className="text-center w-full border-none outline-none h-[50px] bg-[#F4F4F4] rounded-[30px] text-green-800 font-medium text-[30px] mediumShadow"
                  value={"399.00"}
                />
                <div className="flex justify-center mt-[10px]">
                  <div className="w-[65px] h-[45px] rounded-[7px] bg-primeryFirst flex justify-center items-center">
                    <img src={timeImg} alt="" className="w-[40px]" />
                  </div>
                </div>
                <div className="mt-[10px] w-full">
                  <table className="w-full">
                    <tr>
                      <td className="border-r-2 border-white text-center py-[3px] font-semibold">
                        Cash
                      </td>
                      <td className="border-l-2 border-white text-center py-[3px] font-semibold">
                        500.00
                      </td>
                    </tr>
                    <tr className="bg-[#FFE2DD]">
                      <td className="border-r-2 border-white text-center py-[3px] font-semibold">
                        Master
                      </td>
                      <td className="border-l-2 border-white text-center py-[3px] font-semibold">
                        300.00
                      </td>
                    </tr>
                    <tr>
                      <td className="border-r-2 border-white text-center py-[3px] font-semibold">
                        Visa
                      </td>
                      <td className="border-l-2 border-white text-center py-[3px] font-semibold">
                        200.00
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FFCFC5] h-[195px] rounded-[20px]">
            <div className="flex  h-full relative">
              <div className="w-full flex justify-center py-[10px] absolute top-0 left-0 text-[20px] font-bold">
                CASH RETURN
              </div>
              <div className="w-full h-full flex items-center justify-center px-[10px]">
                <Input
                  className="text-center w-full border-none outline-none h-[50px] bg-[#FF9D88] rounded-[30px] text-white font-medium text-[30px]"
                  value={"399.00"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#D0CECF] h-[60px] mt-[5px] rounded-b-[15px] flex">
        <div className="w-[50%] flex h-full items-center justify-center">
          <button className="bg-primeryFirst py-[5px] w-[160px] rounded-[20px] text-white text-[18px]">
            PAY & SAVE
          </button>
        </div>
        <div className="w-[50%] flex h-full items-center justify-center">
          <button className="bg-primeryFirst py-[5px] w-[160px] rounded-[20px] text-white text-[18px]">
            PAY & SETTLE
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default PaymentModal