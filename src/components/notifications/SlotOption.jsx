import React from 'react';
function SlotOption({ item, ...props }) {
  return (
    <div className="h-[60px] selectSlot px-1 font-medium flex gap-3">
      <div>
        <div className="flex gap-1 items-center">
          <p>Days</p>
          {item.label?.split(',').length == 7 || item.label?.split(',').length <= 1 ?
            <div>
              <span className="bg-[#A2A2A2] px-2 rounded-[6px]">
                Any Day
              </span>
            </div>
            : item.label?.split(',').map((item) => (
              <div>
                <span className="bg-[#A2A2A2] px-2 rounded-[6px] text-[0.775rem]">
                  {item}
                </span>
              </div>
            ))}
        </div>
        <div className="flex gap-1">
          <div className="flex">
            <p>From</p>
            <div>
              <span className="bg-[#A2A2A2] px-2 rounded-[6px]">
                {item.data.start_time + " "}
              </span>
            </div>
          </div>
          <div className="flex">
            <p>To</p>
            <div>
              <span className="bg-[#A2A2A2] px-2 rounded-[6px]">
                {item.data.end_time}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3C3C3C] text-white my-1 p-1 w-[50px] rounded-[8px]">
        <p className="text-wrap leading-5 text-center">
          {parseFloat(item.data.offer).toFixed(0)}{item.data.offer_type == 'PERCENTAGE' ? "%" : item.data.offer_type} OFF
        </p>
      </div>
    </div>
  );
}

export default SlotOption;