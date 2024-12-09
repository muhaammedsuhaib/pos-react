import { CloseCircleOutlined } from "@ant-design/icons";
import {
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Select,
  TimePicker,
} from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import CheckBox from "../../customeCheckbox/CheckBox.jsx";
import verifiedIcon from "../../../../public/verified.svg";

function DaycloseFooter() {
  const handleChange = (value) => {
    console.log("changed:", value);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const onDateChange = (date) => {
    setSelectedDate(date ? dayjs(date).format("DD-MM-YYYY") : null);
  };

  return (
    <div className="flex justify-between dayClose-footer">
      <div className="flex gap-5 w-[42%] 3xl:w-[35%] pt-[6px]">
        <CheckBox onChange={handleChange} />
        <div className="w-[90%] ">
          <h4 className="text-white pb-2">
            All above Informations are checked and verified
          </h4>
          <Form.Item label="Checked & Verified by" className="mb-3">
            <ConfigProvider
              theme={{
                token: {
                  colorTextPlaceholder: "#8e8e8e",
                  colorBgBase: "#3B3B3B",
                  colorText: "#FFFF",
                },
                components: {
                  Select: {
                    optionSelectedBg: "#6f6f6f",
                  },
                },
              }}
            >
              <Select
                showSearch
                placeholder="Select one"
                optionFilterProp="label"
                suffixIcon={
                  <BiSolidDownArrow className="text-[15px] text-[#dedede]" />
                }
                options={[
                  {
                    value: "Jessica",
                    label: "Jessica",
                  },
                  {
                    value: "sahad",
                    label: "sahad",
                  },
                ]}
              />
            </ConfigProvider>
          </Form.Item>

          <div className="flex justify-between">
            <Form.Item label="Date" className="w-[50%] m-0 mb-3">
              <ConfigProvider
                theme={{
                  token: {
                    colorTextPlaceholder: "#d8d8d8",
                    colorText: "#d8d8d8",
                  },
                }}
              >
                <DatePicker
                  onChange={onDateChange}
                  value={
                    selectedDate ? dayjs(selectedDate, "DD-MM-YYYY") : null
                  }
                  format="DD-MM-YYYY"
                  className="pr-1 bg-transparent hover:bg-transparent pl-5 border-[#8B8B8B] hover:border-[#ffffff]"
                  suffixIcon={
                    false
                    // <IoCalendarOutline className="text-xl text-[#595959] " />
                  }
                  placeholder="01-10-2032"
                />
              </ConfigProvider>
            </Form.Item>

            <div className="flex justify-end w-[50%] ">
              <Form.Item label=" Time" className="m-0 mb-3 ">
                <ConfigProvider
                  theme={{
                    token: {
                      colorTextPlaceholder: "#d8d8d8",
                    },
                  }}
                >
                  <TimePicker
                    className="bg-transparent hover:bg-transparent hover:border-[#ffffff] pl-5 border-[#8B8B8B]"
                    placeholder="10:30 PM"
                    prevIcon={<CloseCircleOutlined />}
                    suffixIcon={
                      false
                      //   <PiClockCountdown className="text-xl text-[#595959]" />
                    }
                  />
                </ConfigProvider>
              </Form.Item>
            </div>
          </div>

          <Form.Item>
            <ConfigProvider
              theme={{
                token: {
                  colorTextPlaceholder: "#e7e7e7",
                  colorText: "#e7e7e7",
                },
              }}
            >
              <Input
                placeholder="Note"
                className="bg-[#3B3B3B] border-[#3B3B3B] rounded-none  hover:border-white hover:bg-[#3B3B3B] focus:bg-transparent"
              />
            </ConfigProvider>
          </Form.Item>
        </div>
      </div>

      <div className="w-[56%] 3xl:w-[50%] flex justify-between items-center">
        <div className="w-[70%] 3xl:w-[60%] ">
          <div className="flex items-center gap-2 py-1">
            <div className="w-[10px] h-[35px] bg-[#01AC4F]"></div>
            <h3 className="text-xl font-medium text-white content-heading uppercase">
              final status
            </h3>
            <ConfigProvider
              theme={{
                token: {
                  colorTextPlaceholder: "#ffffff",
                  colorBgBase: "#01AC4F",
                  colorText: "#FFFF",
                },
                components: {
                  Select: {
                    optionSelectedBg: "#006f32",
                  },
                },
              }}
            >
              <Select
                showSearch
                placeholder="Select one"
                optionFilterProp="label"
                suffixIcon={
                  <BiSolidDownArrow className="text-[15px] text-[#545857]" />
                }
                options={[
                  {
                    value: "APPROVED",
                    label: "APPROVED",
                  },
                ]}
                className="w-[150px]"
              />
            </ConfigProvider>
            <div className="flex items-center gap-1">
              <img src={verifiedIcon} alt="" width={35} />
              <span className="text-[#01AC4F]">Verified</span>
            </div>
          </div>
          <Form.Item label="Approver Name" className="mb-2">
            <ConfigProvider
              theme={{
                token: {
                  colorTextPlaceholder: "#8e8e8e",
                },
                components: {
                  Select: {
                    optionSelectedBg: "#6f6f6f",
                  },
                },
              }}
            >
              <Input
                value="David"
                className="bg-transparent pl-5  hover:border-[#ffffff] border-[#8B8B8B] text-white hover:bg-transparent focus:bg-[#353535]"
              />
            </ConfigProvider>
          </Form.Item>

          <div className="flex justify-between">
            <Form.Item label="Date" className="w-[50%] m-0 mb-3">
              <ConfigProvider
                theme={{
                  token: {
                    colorTextPlaceholder: "#d8d8d8",
                  },
                }}
              >
                <DatePicker
                  onChange={onDateChange}
                  value={
                    selectedDate ? dayjs(selectedDate, "DD-MM-YYYY") : null
                  }
                  format="DD-MM-YYYY"
                  className="pr-1 bg-transparent hover:bg-transparent  hover:border-[#ffffff] border-[#8B8B8B] pl-5"
                  suffixIcon={
                    false
                    // <IoCalendarOutline className="text-xl text-[#595959] " />
                  }
                  placeholder="01-10-2032"
                />
              </ConfigProvider>
            </Form.Item>

            <div className="flex justify-end w-[50%] ">
              <Form.Item label=" Time" className="m-0 mb-3 ">
                <ConfigProvider
                  theme={{
                    token: {
                      colorTextPlaceholder: "#d8d8d8",
                    },
                  }}
                >
                  <TimePicker
                    className="bg-transparent hover:bg-transparent  hover:border-[#ffffff] border-[#8B8B8B] pl-5"
                    placeholder="10:30 PM"
                    prevIcon={<CloseCircleOutlined />}
                    suffixIcon={
                      false
                      //   <PiClockCountdown className="text-xl text-[#595959]" />
                    }
                  />
                </ConfigProvider>
              </Form.Item>
            </div>
          </div>

          <Form.Item>
            <ConfigProvider
              theme={{
                token: {
                  colorTextPlaceholder: "#e7e7e7",
                },
              }}
            >
              <Input
                placeholder="Note"
                className="bg-[#3B3B3B] border-[#3B3B3B] rounded-none  hover:border-white hover:bg-[#3B3B3B] focus:bg-transparent"
              />
            </ConfigProvider>
          </Form.Item>
        </div>
        <div className="w-[30%] 3xl:w-[40%] flex justify-center">
          <button type="submit" className="text-white bg-[#F75530] w-[70%] py-1 rounded-[30px] uppercase">
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default DaycloseFooter;
