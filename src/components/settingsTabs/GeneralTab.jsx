import { ConfigProvider, Radio, Select, Switch, TimePicker } from "antd";
import React from "react";
import SettingsCheckbox from "../settingsCheckbox/SettingsCheckbox";
import { IoIosTimer } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";

function GeneralTab({setOpenModal}) {
  const format = "HH:mm";
  return (
    <>
      <div className="bg-[#F3EEE7] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] p-5 space-y-1 general">
        <div className="border-2 border-[#bebdbd] rounded-md px-3 py-2 flex bg-[#F3F3F3]">
          <div className="w-[30%]">
            <p>Theme</p>
          </div>
          <div className="w-[70%] pl-1">
            <Radio.Group name="coupon" className="flex gap-10">
              <div>
                <Radio className="theme-radio" value={1}>
                  <span className="font-semibold">Dark</span>
                </Radio>
              </div>
              <Radio className="theme-radio" value={2}>
                <span className="font-semibold">Light</span>
              </Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="border-2 border-[#bebdbd] rounded-md px-3 py-2 flex bg-[#F3F3F3]">
          <div className="w-[30%]">
            <p>View</p>
          </div>
          <div className="w-[70%] space-y-1">
            <div className="flex items-center gap-1">
              <SettingsCheckbox />
              <span>Show Number of Guests on Table</span>
            </div>
            <div className="flex items-center gap-1">
              <SettingsCheckbox />
              <span>Show Preparation Time Pop-Up</span>
            </div>
            <div className="flex items-center gap-1">
              <SettingsCheckbox />
              <span>Show Virtual Keyboard</span>
            </div>
          </div>
        </div>
        <div className="border-2 border-[#bebdbd] rounded-md px-3 py-2 flex bg-[#F3F3F3]">
          <div className="w-[30%]">
            <p>Sort Items by:</p>
          </div>
          <div className="w-[70%] pl-1">
            <Radio.Group name="coupon" className="space-y-2">
              <div>
                <Radio className="theme-radio" value={1}>
                  <span className="font-semibold">By Short Code</span>
                </Radio>
              </div>
              <div>
                <Radio className="theme-radio" value={2}>
                  <span className="font-semibold">Top Sold by AMOUNT</span>
                </Radio>
              </div>
              <div>
                <Radio className="theme-radio" value={3}>
                  <span className="font-semibold">Top Sold by QUANTITY</span>
                </Radio>
              </div>
              <div>
                <Radio className="theme-radio" value={4}>
                  <span className="font-semibold">Alphabetically (A - Z)</span>
                </Radio>
              </div>
            </Radio.Group>
          </div>
        </div>
        <div className="border-2 border-[#bebdbd] rounded-md px-3 py-2 flex bg-[#F3F3F3]">
          <div className="w-[30%]">
            <p>Default Order Type</p>
          </div>
          <div className="w-[70%] pl-1">
            <Radio.Group name="coupon" className="flex items-center">
              <div className="w-[50%] space-y-2 ">
                <div>
                  <Radio className="theme-radio" value={1}>
                    <span className="font-semibold">Dine-In</span>
                  </Radio>
                </div>
                <div>
                  <Radio className="theme-radio" value={2}>
                    <span className="font-semibold">Pick-Up</span>
                  </Radio>
                </div>
                <div>
                  <Radio className="theme-radio" value={3}>
                    <span className="font-semibold">Take-Away</span>
                  </Radio>
                </div>
              </div>
              <div className="w-[50%] space-y-2 ">
                <div>
                  <Radio className="theme-radio" value={4}>
                    <span className="font-semibold">Delivery</span>
                  </Radio>
                </div>
                <div>
                  <Radio className="theme-radio" value={5}>
                    <span className="font-semibold">Booking</span>
                  </Radio>
                </div>
                <div>
                  <Radio className="theme-radio" value={6}>
                    <span className="font-semibold">Aggregator</span>
                  </Radio>
                </div>
              </div>
            </Radio.Group>
          </div>
        </div>
        <div className="border-2 border-[#bebdbd] rounded-md px-3 py-2 flex bg-[#F3F3F3]">
          <div className="w-[30%]">
            <p>Disable Order Type</p>
          </div>
          <div className="w-[70%] flex">
            <div className="w-[50%] space-y-2 ">
              <div className="flex items-center gap-1">
                <SettingsCheckbox />
                <span>Dine-In</span>
              </div>
              <div className="flex items-center gap-1">
                <SettingsCheckbox />
                <span>Pick-Up</span>
              </div>
              <div className="flex items-center gap-1">
                <SettingsCheckbox />
                <span>Take-Away</span>
              </div>
            </div>
            <div className="w-[50%] space-y-2 ">
              <div className="flex items-center gap-1">
                <SettingsCheckbox />
                <span>Delivery</span>
              </div>
              <div className="flex items-center gap-1">
                <SettingsCheckbox />
                <span> Booking</span>
              </div>
              <div className="flex items-center gap-1">
                <SettingsCheckbox />
                <span>Aggregator</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-[#bebdbd] rounded-md px-3 py-2 flex bg-[#F3F3F3]">
          <div className="w-[30%]">
            <p>Default Payment Type</p>
          </div>
          <div className="w-[70%] pl-1">
            <Radio.Group name="coupon" className="space-y-2">
              <div>
                <Radio className="theme-radio" value={1}>
                  <span className="font-semibold">Cash</span>
                </Radio>
              </div>
              <Radio className="theme-radio" value={2}>
                <span className="font-semibold">Card</span>
              </Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="border-2 border-[#bebdbd] rounded-md px-3 py-2 flex bg-[#F3F3F3]">
          <div className="w-[30%]">
            <p>Sound Alerts</p>
          </div>
          <div className="w-[70%]">
            <div className="flex ">
              <div className="w-[50%] space-y-1">
                <div>
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
                      className="switch-outline"
                    />
                  </ConfigProvider>
                  <span className="pl-1">New Online Orders (Website)</span>
                </div>
                <div>
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
                      className="switch-outline"
                    />
                  </ConfigProvider>
                  <span className="pl-1">New Booking</span>
                </div>

                <div>
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
                      className="switch-outline"
                    />
                  </ConfigProvider>
                  <span className="pl-1">New Pick-Up</span>
                </div>
              </div>
              <div className="w-[50%] space-y-1">
                <div>
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
                      className="switch-outline"
                    />
                  </ConfigProvider>
                  <span className="pl-1">Call Waiter</span>
                </div>
                <div>
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
                      className="switch-outline"
                    />
                  </ConfigProvider>
                  <span className="pl-1">Booking Reminders</span>
                </div>
                <div>
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
                      className="switch-outline"
                    />
                  </ConfigProvider>
                  <span className="pl-1">Pick-up Reminders</span>
                </div>
              </div>
            </div>
            <div>
              <p className="py-2">KDS (Kitchen Screen)</p>
              <div className="space-y-1 ">
                <div>
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
                      className="switch-outline"
                    />
                  </ConfigProvider>
                  <span className="pl-1">New Orders Received</span>
                </div>
                <div className="flex">
                  <div className="w-[50%] space-y-1">
                    <div>
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
                          className="switch-outline"
                        />
                      </ConfigProvider>
                      <span className="pl-1">Time Left at 50%</span>
                    </div>
                    <div>
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
                          className="switch-outline"
                        />
                      </ConfigProvider>
                      <span className="pl-1">Time Left at 5%</span>
                    </div>
                  </div>
                  <div className="w-[50%] space-y-1">
                    <div>
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
                          className="switch-outline"
                        />
                      </ConfigProvider>
                      <span className="pl-1">Time Left at 25%</span>
                    </div>
                    <div>
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
                          className="switch-outline"
                        />
                      </ConfigProvider>
                      <span className="pl-1">Ready to Serve</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-[#bebdbd] rounded-md px-3 py-2 flex bg-[#F3F3F3]">
          <div className="w-[30%]">
            <p>KOT Reset</p>
          </div>
          <div className="w-[70%] pl-1 flex">
            <div className="w-[40%]">
              <span>KOT Reset Time (Daily)</span>
            </div>
            <div className="w-[50%]">
              <ConfigProvider
                theme={{
                  token: {
                    colorTextPlaceholder: "black",
                  },
                }}
              >
                <TimePicker
                  className="border-none bg-[#D1D7E0] rounded-2xl w-[120px]"
                  suffixIcon={<IoIosTimer className="text-black text-xl " />}
                  // defaultValue={dayjs("08:30", format)}
                  // format={format}
                  placeholder="08:30 AM"
                   popupClassName="custom-select-dropdown"
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
        <div className="border-2 border-[#bebdbd] rounded-md px-3 py-2 flex bg-[#F3F3F3]">
          <div className="w-[30%]">
            <p>Language</p>
          </div>
          <div className="w-[70%] pl-1 flex">
            <div className="w-[40%]">
              <span>Select Language</span>
            </div>
            <div className="w-[50%]">
              <ConfigProvider
                theme={{
                  token: {
                    colorTextPlaceholder: "black",
                    colorBgBase: "#D1D7E0",
                    colorBorder: "none",
                    borderRadius: 16,
                    
                  },
                  components: {
                    Select: {
                      optionSelectedBg: "#fff"
                    }
                  }
                }}
              >
                <Select
                  className="w-[150px]"
                  showSearch
                  placeholder="English"
                  optionFilterProp="label"
                  options={[
                    {
                      value: "English",
                      label: "English",
                    },
                    {
                      value: "Arabic",
                      label: "Arabic",
                    },
                    
                  ]}
                  suffixIcon={<FaCaretDown className="text-2xl text-black" />}
                  popupClassName="custom-select-dropdown"
                />
              </ConfigProvider>
            </div>
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

export default GeneralTab;
