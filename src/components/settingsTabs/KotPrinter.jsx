import { ConfigProvider, InputNumber, Select, Switch } from "antd";
import React from "react";
import { BsTrash3 } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import SettingsCheckbox from "../settingsCheckbox/SettingsCheckbox";

function KotPrinter({setOpenModal}) {
  return (
    <>
      <div className="bg-[#F3EEE7] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] p-5 pl-3 space-y-10 kot-printer ">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <SettingsCheckbox />
              <span>Combine all Kitchen Departments in same KOT</span>
            </div>
            <div>
              <button className="uppercase bg-primeryFirst border active:bg-[#F96546] active:text-white hover:bg-transparent hover:border-primeryFirst hover:text-primeryFirst hover:font-semibold text-white rounded-[8px] px-5 py-1">
                add printer
              </button>
            </div>
          </div>
          <div className="border-2 border-[#bebdbd] rounded-lg ml-[35px] py-2 flex bg-[#F3F3F3] mt-1">
            <table className="kot-printer-table w-full">
              <thead className="">
                <th>
                  <h6>active</h6>
                </th>
                <th>
                  <h6>type</h6>
                </th>
                <th className="w-[30%]">
                  <h6>select printer / ip</h6>
                </th>
                <th>
                  <h6>print size</h6>
                </th>
                <th className="w-[10%]">
                  <h6>copies</h6>
                </th>
                <th></th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div
                      className="flex items-center"
                      style={{ justifyContent: "space-between" }}
                    >
                      <ConfigProvider
                        theme={{
                          components: {
                            Switch: {
                              trackHeight: 25,

                              trackPadding: 3,
                            },
                          },
                        }}
                      >
                        <Switch
                          checkedChildren="Yes"
                          unCheckedChildren="No"
                          className="switch-outline mx-auto"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <Select
                          className="w-full"
                          showSearch
                          defaultValue={"Local"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Local",
                              label: "Local",
                            },
                            {
                              value: "Network",
                              label: "Network",
                            },
                          ]}
                          suffixIcon={
                            <FaCaretDown className="text-2xl text-black" />
                          }
                          popupClassName="custom-select-dropdown"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <Select
                          className="w-full"
                          showSearch
                          defaultValue={"Local"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Local",
                              label: "Local",
                            },
                            {
                              value: "Network",
                              label: "Network",
                            },
                          ]}
                          suffixIcon={
                            <FaCaretDown className="text-2xl text-black" />
                          }
                          popupClassName="custom-select-dropdown"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <Select
                          className="w-full"
                          showSearch
                          defaultValue={"Local"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Local",
                              label: "Local",
                            },
                            {
                              value: "Network",
                              label: "Network",
                            },
                          ]}
                          suffixIcon={
                            <FaCaretDown className="text-2xl text-black" />
                          }
                          popupClassName="custom-select-dropdown"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <InputNumber placeholder="1" />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <BsTrash3 className="text-xl" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div
                      className="flex items-center"
                      style={{ justifyContent: "space-between" }}
                    >
                      <ConfigProvider
                        theme={{
                          components: {
                            Switch: {
                              trackHeight: 25,

                              trackPadding: 3,
                            },
                          },
                        }}
                      >
                        <Switch
                          checkedChildren="Yes"
                          unCheckedChildren="No"
                          className="switch-outline mx-auto"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <Select
                          className="w-full"
                          showSearch
                          defaultValue={"Local"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Local",
                              label: "Local",
                            },
                            {
                              value: "Network",
                              label: "Network",
                            },
                          ]}
                          suffixIcon={
                            <FaCaretDown className="text-2xl text-black" />
                          }
                          popupClassName="custom-select-dropdown"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div
                      className="flex items-center"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div
                        className="bg-[#D1D7E0] rounded-[15px] "
                        style={{ padding: "5px 15px" }}
                      >
                        <span>93.10.221.10.3</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>Port</span>
                        <div
                          className="bg-[#D1D7E0] rounded-[15px] "
                          style={{ padding: "5px 15px" }}
                        >
                          2523
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <Select
                          className="w-full"
                          showSearch
                          defaultValue={"Local"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Local",
                              label: "Local",
                            },
                            {
                              value: "Network",
                              label: "Network",
                            },
                          ]}
                          suffixIcon={
                            <FaCaretDown className="text-2xl text-black" />
                          }
                          popupClassName="custom-select-dropdown"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <InputNumber placeholder="1" />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <BsTrash3 className="text-xl" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="dept-wise">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <SettingsCheckbox />
              <span>Print KOT by Kitchen Department wise</span>
            </div>
            <div>
              <button className="uppercase bg-primeryFirst border active:bg-[#F96546] active:text-white hover:bg-transparent hover:border-primeryFirst hover:text-primeryFirst hover:font-semibold text-white rounded-[8px] px-5 py-1">
                add printer
              </button>
            </div>
          </div>
          <div className="border-2 border-[#bebdbd] rounded-lg ml-[35px] py-2 flex bg-[#F3F3F3] mt-1">
            <table className="kot-printer-table w-full">
              <thead className="">
                <th className="w-[12%]">
                  <h6>active</h6>
                </th>
                <th className="w-[18%]">
                  <h6>department</h6>
                </th>
                <th className="w-[15%]">
                  <h6>type</h6>
                </th>
                <th className="w-[20%]">
                  <h6>select printer</h6>
                </th>
                <th className="w-[13%]">
                  <h6>print size</h6>
                </th>
                <th className="w-[10%]">
                  <h6>copies</h6>
                </th>
                <th className="w-[4%]"></th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div
                      className="flex items-center"
                      style={{ justifyContent: "space-between" }}
                    >
                      <ConfigProvider
                        theme={{
                          components: {
                            Switch: {
                              trackHeight: 25,

                              trackPadding: 3,
                            },
                          },
                        }}
                      >
                        <Switch
                          checkedChildren="Yes"
                          unCheckedChildren="No"
                          className="switch-outline mx-auto"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <Select
                          className="w-full "
                          showSearch
                          defaultValue={"Main Kitchen"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Main Kitchen",
                              label: "Main Kitchen",
                            },
                            {
                              value: "Bar Area",
                              label: "Bar Area",
                            },
                          ]}
                          suffixIcon={
                            <FaCaretDown className="text-2xl text-black" />
                          }
                          popupClassName="custom-select-dropdown"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <Select
                          className="w-full"
                          showSearch
                          defaultValue={"Local"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Local",
                              label: "Local",
                            },
                            {
                              value: "Network",
                              label: "Network",
                            },
                          ]}
                          suffixIcon={
                            <FaCaretDown className="text-2xl text-black" />
                          }
                          popupClassName="custom-select-dropdown"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <Select
                          className="w-full"
                          showSearch
                          defaultValue={"Local"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Local",
                              label: "Local",
                            },
                            {
                              value: "Network",
                              label: "Network",
                            },
                          ]}
                          suffixIcon={
                            <FaCaretDown className="text-2xl text-black" />
                          }
                          popupClassName="custom-select-dropdown"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <Select
                          className="w-full"
                          showSearch
                          defaultValue={"80mm"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "80mm",
                              label: "80mm",
                            },
                            {
                              value: "30mm",
                              label: "30mm",
                            },
                          ]}
                          suffixIcon={
                            <FaCaretDown className="text-2xl text-black" />
                          }
                          popupClassName="custom-select-dropdown"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <InputNumber placeholder="1" />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <BsTrash3 className="text-xl" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div
                      className="flex items-center"
                      style={{ justifyContent: "space-between" }}
                    >
                      <ConfigProvider
                        theme={{
                          components: {
                            Switch: {
                              trackHeight: 25,

                              trackPadding: 3,
                            },
                          },
                        }}
                      >
                        <Switch
                          checkedChildren="Yes"
                          unCheckedChildren="No"
                          className="switch-outline mx-auto"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <Select
                          className="w-full"
                          showSearch
                          defaultValue={"Local"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Local",
                              label: "Local",
                            },
                            {
                              value: "Network",
                              label: "Network",
                            },
                          ]}
                          suffixIcon={
                            <FaCaretDown className="text-2xl text-black" />
                          }
                          popupClassName="custom-select-dropdown"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <Select
                          className="w-full"
                          showSearch
                          defaultValue={"Local"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Local",
                              label: "Local",
                            },
                            {
                              value: "Network",
                              label: "Network",
                            },
                          ]}
                          suffixIcon={
                            <FaCaretDown className="text-2xl text-black" />
                          }
                          popupClassName="custom-select-dropdown"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div
                      className="flex items-center"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div
                        className="bg-[#D1D7E0] rounded-[15px] "
                        style={{ padding: "5px 15px" }}
                      >
                        <span>93.10.221.10.3</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>Port</span>
                        <div
                          className="bg-[#D1D7E0] rounded-[15px] "
                          style={{ padding: "5px 15px" }}
                        >
                          2523
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <Select
                          className="w-full"
                          showSearch
                          defaultValue={"80mm"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "80mm",
                              label: "80mm",
                            },
                            {
                              value: "50mm",
                              label: "50mm",
                            },
                          ]}
                          suffixIcon={
                            <FaCaretDown className="text-2xl text-black" />
                          }
                          popupClassName="custom-select-dropdown"
                        />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "black",
                            colorBgBase: "#D1D7E0",
                            colorBorder: "none",
                            borderRadius: 16,
                          },
                        }}
                      >
                        <InputNumber placeholder="1" />
                      </ConfigProvider>
                    </div>
                  </td>
                  <td>
                    <div>
                      <BsTrash3 className="text-xl" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 pt-3">
          <button
            className=" bg-primeryFirst  active:bg-[#F96546] active:text-white hover:bg-transparent hover:font-semibold hover:text-primeryFirst text-white rounded-[30px] px-6 py-1"
            style={{ boxShadow: "0px 0px 5px rgba(0,0,0,0.7)" }}
            onClick={()=>setOpenModal(false)}
          >
            Cancel Changes
          </button>
          <button
            className=" bg-primeryFirst active:bg-[#F96546] active:text-white hover:bg-transparent hover:font-semibold hover:text-primeryFirst text-white rounded-[30px] px-6 py-1"
            style={{ boxShadow: "0px 0px 5px rgba(0,0,0,0.7)" }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

export default KotPrinter;
