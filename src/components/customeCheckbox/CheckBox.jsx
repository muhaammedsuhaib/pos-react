/* eslint-disable react/prop-types */
import{ useState,useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import './CheckBox.css'

const CheckBox = ({ onChange, borderColor, checked: propChecked, disabled }) => {
  const [checked, setChecked] = useState(propChecked);

  useEffect(() => {
    setChecked(propChecked);
  }, [propChecked]);

  const handleClick = () => {
    if (disabled) return; // Prevent action if checkbox is disabled
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);  // Notify parent about the change
  };

  return (
    <button
      className={`inline-flex w-8 h-8 justify-center items-center rounded-lg border-4 hover:border-primeryFirst checkBoxCustome`}
      style={{
        borderColor: borderColor || "white",
        backgroundColor: checked ? borderColor||"#00B050" : "#D6DCE5",
      }}
      onClick={handleClick}
      disabled={disabled}
    >
      <FaCheck
        className={`${checked ? "block" : "hidden"}`}
        color="#fff"
        size={15}
      />
    </button>
  );
};


export default CheckBox;
