import React, { useState } from "react";
import HeaderButtons from "../../components/header_buttons/HeaderButtons";
import CRMtable from "../../components/CRM_table/CRMtable";
import { Modal } from "antd";
import CRMpopup from "../../components/CRM_table/CRMpopup";
import "./crm.css";

function CRMcustomer() {
  const [customerPopup, setCustomerPopup] = useState(false);
  return (
    <>
      <div
        className="flex flex-col space-y-3 w-full h-full bg-[#545454] rounded-xl overflow-hidden p-2"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        <HeaderButtons
          setOpenModal={setCustomerPopup}
          allowedBtns={["showHide", "import", "export", "addNew"]}
        />
        <div style={{ height: "calc(100vh - 10rem)" }}>
          <CRMtable setOpenModal={setCustomerPopup} />
        </div>
      </div>

      <Modal
        open={customerPopup}
        footer={false}
        className="crm-pop"
        closeIcon={null}
        onCancel={() => setCustomerPopup(false)}
      >
        <CRMpopup />
      </Modal>
    </>
  );
}

export default CRMcustomer;
