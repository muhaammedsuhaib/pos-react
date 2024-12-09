import { Modal } from "antd";
import React from "react";

function DayCloseModal({ setOpenModal }) {
  return (
    <>
      <Modal
        className="posPopup "
        footer={null}
        title="{title}"
        width={650}
        open
        onCancel={() => setOpenModal("")}
      ></Modal>
    </>
  );
}

export default DayCloseModal;
