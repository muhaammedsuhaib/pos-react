import { useEffect, useState } from 'react';
import { Modal } from 'antd'
import { FaCheck } from 'react-icons/fa';
import noon from "../../../public/images/aggregatorModalIcon/Noon.png";
import talabat from "../../../public/images/aggregatorModalIcon/Talabat.png";
import deliveroo from "../../../public/images/aggregatorModalIcon/Deliveroo.png";
import smiles from "../../../public/images/aggregatorModalIcon/Smiles.png";
import { useSelector } from 'react-redux';
import { selectOrderTypeDetails } from '../../reducer/orders/reducer';
import { imageBaseUrl } from '../utils/utils';
const AggregatorModal = ({ openModal, setOpenModal }) => {
  const orderTypeDetails = useSelector(selectOrderTypeDetails);
  const [aggregators, setAggregators] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    if (orderTypeDetails && orderTypeDetails.data) {
      if (orderTypeDetails.data.forms) {
        const datas = [];
        orderTypeDetails.data.forms.map((form) => {
          if (form.name == 'aggregator') {
            form.data.map((item) => {
              datas.push({
                value: item.id,
                label: item.name,
                data: item,
              });
            });
          }
        });
        setAggregators(datas);
      } else {
        setAggregators([]);
      }
    } else {
      setAggregators([]);
    }
  }, [orderTypeDetails]);
  return (
    <Modal
      title="AGGREGATOR"
      open={openModal}
      onOk={() => setOpenModal(false)}
      onCancel={() => setOpenModal(false)}
      footer={false}
      width={650}
      className="posPopup aggregatorPopup"
    >
      <div className=" modal-body py-5 px-10">
        <div className="grid grid-cols-3 gap-x-8 gap-y-5">
          {aggregators.map((option) => (
            <label
              key={option.value}
              className={`relative flex flex-col items-center cursor-pointer p-3 ${selectedOption === option.value ? "bg-[#F95433] rounded-lg" : ""
                }`}
              onClick={() => setSelectedOption(option.value)}
            >
              <input
                type="radio"
                name="deliveryOption"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={() => setSelectedOption(option.value)}
                className="hidden"
              />
              <img src={imageBaseUrl + option.data.images} alt={option.label} className="w-[130px] h-[130px]" />
              <span
                className={`text-[16px] ${selectedOption === option.value ? "text-white" : "text-white"
                  }`}
              >
                {option.label}
              </span>
              {selectedOption === option.value && (
                <div className="absolute -top-2 -right-2 bg-white rounded-full border-2 border-[#F95433] w-[20px] h-[20px] flex items-center justify-center">
                  <FaCheck className="text-[#F95433] text-[12px]" />
                </div>
              )}
            </label>
          ))}
        </div>
        <div className="flex justify-center mt-5 confirm_details">
          <button
            className="bg-primeryFirst px-4 py-1 rounded-full text-white border-2 border-transparent hover:border-black active:bg-black"
            onClick={() => setOpenModal(false)}
          >
            CONFIRM DETAILS
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default AggregatorModal