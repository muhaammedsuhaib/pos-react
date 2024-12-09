import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

function SettingsCheckbox({
  onChange,
  borderColor,
  checked: propChecked,
  disabled,
}) {
  const [checked, setChecked] = useState(propChecked);

  useEffect(() => {
    setChecked(propChecked);
  }, [propChecked]);

  const handleClick = () => {
    if (disabled) return; // Prevent action if checkbox is disabled
    const newChecked = !checked;
    setChecked(newChecked);
    // onChange(newChecked);
  };

  return (
    <button
      className={`inline-flex w-7 h-7 justify-center items-center rounded-lg border-4 hover:border-primeryFirst checkBoxCustome`}
      style={{
        borderColor: checked ? borderColor || "#00B050" : "#D1D7E0",
        backgroundColor: checked ? borderColor || "#00B050" : "transparent",
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
}
export default SettingsCheckbox;
