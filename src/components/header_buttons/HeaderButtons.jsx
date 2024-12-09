/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
function HeaderButtons({ setOpenModal, allowedBtns }) {
  return (
    <>
      <div className="flex justify-end gap-3">
        {allowedBtns?.includes("showHide") && (
          <button className="bg-primeryFirst text-white border border-primeryFirst hover:border-white hover:bg-black active:bg-primeryFirst text-sm py-1 px-4 w-[180px] rounded-[30px]">
            Show/Hide Columns
          </button>
        )}
        {allowedBtns?.includes("import") && (
          <button className="bg-primeryFirst text-white border border-primeryFirst hover:border-white hover:bg-black active:bg-primeryFirst text-sm py-1 px-4 w-[180px] rounded-[30px]">
            Import
          </button>
        )}
        {allowedBtns?.includes("export") && (
          <button className="bg-primeryFirst text-white border border-primeryFirst hover:border-white hover:bg-black active:bg-primeryFirst text-sm py-1 px-4 w-[180px] rounded-[30px]">
            Export
          </button>
        )}
        {allowedBtns?.includes("addNew") && (
          <button
            onClick={() => setOpenModal(true)}
            className="bg-primeryFirst text-white border border-primeryFirst hover:border-white hover:bg-black active:bg-primeryFirst text-sm py-1 px-4 w-[180px] rounded-[30px]"
          >
            Add New Customer
          </button>
        )}
      </div>
    </>
  );
}

export default HeaderButtons;
