import { ConfigProvider, InputNumber, Select, Switch } from "antd";
import React from "react";
import SettingsCheckbox from "../settingsCheckbox/SettingsCheckbox";
import { FaCaretDown } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";

function KDSTab({setOpenModal}) {
  return (
    <>
      <div className="bg-[#F3EEE7] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] px-20 py-14 space-y-10 kds-tab ">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <SettingsCheckbox />
              <span>Combine all Kitchen Departments in same Screen</span>
            </div>
            <div>
              <button className="uppercase bg-primeryFirst border active:bg-[#F96546] active:text-white hover:bg-transparent hover:border-primeryFirst hover:text-primeryFirst hover:font-semibold text-white rounded-[8px] px-5 py-1">
                add screen
              </button>
            </div>
          </div>
          <div className="border-2 border-[#bebdbd] rounded-lg ml-[35px] py-2 flex bg-[#F3F3F3] mt-1">
            <table className="kot-printer-table w-full">
              <thead className="">
                <th>
                  <h6>active</h6>
                </th>
                <th className="w-[35%]">
                  <h6>department</h6>
                </th>
                <th className="w-[35%]">
                  <h6>kds user</h6>
                </th>
                <th className="w-[6%]"></th>
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
                          defaultValue={"Peter"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Peter",
                              label: "Peter",
                            },
                            {
                              value: "Alex",
                              label: "Alex",
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
                          defaultValue={"Peter"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Peter",
                              label: "Peter",
                            },
                            {
                              value: "Alex",
                              label: "Alex",
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
                      <BsTrash3 className="text-xl" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <SettingsCheckbox />
              <span>Print KOT by Kitchen Department wise</span>
            </div>
            <div>
              <button className="uppercase bg-primeryFirst border active:bg-[#F96546] active:text-white hover:bg-transparent hover:border-primeryFirst hover:text-primeryFirst hover:font-semibold text-white rounded-[8px] px-5 py-1">
                add screen
              </button>
            </div>
          </div>
          <div className="border-2 border-[#bebdbd] rounded-lg ml-[35px] py-2 flex bg-[#F3F3F3] mt-1">
            <table className="kot-printer-table w-full">
              <thead className="">
                <th>
                  <h6>active</h6>
                </th>
                <th  className="w-[35%]">
                  <h6>department</h6>
                </th>
                <th className="w-[35%]">
                  <h6>kds user</h6>
                </th>
                <th className="w-[6%]"></th>
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
                          defaultValue={"Peter"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Peter",
                              label: "Peter",
                            },
                            {
                              value: "Alex",
                              label: "Alex",
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
                          defaultValue={"Peter"}
                          optionFilterProp="label"
                          options={[
                            {
                              value: "Peter",
                              label: "Peter",
                            },
                            {
                              value: "Alex",
                              label: "Alex",
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

export default KDSTab;
