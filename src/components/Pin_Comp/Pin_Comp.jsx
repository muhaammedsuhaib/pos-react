
import { TiBackspaceOutline } from "react-icons/ti";
import "./pin_comp.css"
import { useState } from "react";

const Pin_Comp = () => {
  const [pin, setPin] = useState(""); 
  const maxLength = 4; 

  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const handleNumberClick = (num) => {
      if (pin.length < maxLength) {
        setPin(pin + num);
      }
  };
  
    const handleBackspace = () => {
      setPin(pin.slice(0, -1));
  };  

  return (
    <div className="flex flex-col items-center justify-center gap-5 ">
      {/* Indicator Circles */}
      <div className="flex ">
        <div
          className="px-10 py-5 bg-[#F7F0EC] rounded-full flex items-center justify-center gap-10"
          style={{ boxShadow: "0px 0px 7px 3px rgba(0, 0, 0, 0.5)" }}
        >
          {[...Array(maxLength)].map((_, idx) => (
            <div
              key={idx}
              className={`h-5 w-5 border border-[#6F6F6F] rounded-full ${
                pin.length > idx ? "bg-[#6F6F6F]" : "bg-transparent"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Number pad grid */}
      <div className="grid grid-cols-3 gap-7 max-w-xs mx-auto">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => handleNumberClick(btn)}
            className="bg-[#F7F0EC] text-black text-xl font-semibold w-16 h-16 rounded-full shadow-md hover:bg-gray-300 transition duration-300"
            style={{ boxShadow: "0px 0px 3px 2px rgba(0, 0, 0, 0.5)" }}
          >
            {btn}
          </button>
        ))}

        {/* Empty space for alignment */}
        <div className="w-16 h-16"></div>

        {/* Zero Button */}
        <button
          className="bg-[#F7F0EC] text-black text-xl font-semibold w-16 h-16 rounded-full shadow-md hover:bg-gray-300 transition duration-300"
          style={{ boxShadow: "0px 0px 3px 2px rgba(0, 0, 0, 0.5)" }}
          onClick={() => handleNumberClick("0")}
        >
          0
        </button>

        {/* Clear Button */}
        <button
          className="bg-[#F7F0EC] text-black text-xl font-semibold w-16 h-16 rounded-full shadow-md hover:bg-gray-300 transition duration-300 flex justify-center items-center"
          style={{ boxShadow: "0px 0px 3px 2px rgba(0, 0, 0, 0.5)" }}
          onClick={handleBackspace}
        >
          <TiBackspaceOutline size={30} />
        </button>
      </div>
    </div>
  );
};

export default Pin_Comp;
