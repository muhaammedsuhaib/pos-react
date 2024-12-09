import { Modal, Tabs } from "antd";
import React from "react";
import GeneralTab from "../settingsTabs/GeneralTab";
import "./sidebarmodal.css";
import KotPrinter from "../settingsTabs/KotPrinter";
import KDSTab from "../settingsTabs/KDSTab";
import KOTDesign from "../settingsTabs/KOTDesign";

const { TabPane } = Tabs;

function SettingsModal({ openModal, setOpenModal }) {
  return (
    <>
      <Modal
        className="posPopupSettings"
        footer={null}
        width={850}
        open={openModal}
        onCancel={() => setOpenModal(false)}
        closeIcon={null}
      >
        <div className="settingsTab">
          <Tabs type="card">
            <TabPane tab="general" key="1">
              <GeneralTab setOpenModal={setOpenModal} />
            </TabPane>
            <TabPane tab="kot printer" key="2">
              <KotPrinter setOpenModal={setOpenModal} />
            </TabPane>
            <TabPane tab="kds (kitchen)" key="3">
              <KDSTab setOpenModal={setOpenModal} />
            </TabPane>
            <TabPane tab="kot design" key="4">
              <KOTDesign />
            </TabPane>
          </Tabs>
        </div>
      </Modal>
    </>
  );
}

export default SettingsModal;
