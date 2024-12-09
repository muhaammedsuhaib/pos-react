import { ConfigProvider, DatePicker, Form } from "antd";
import React from "react";

function FilterBar() {
  return (
    <div className="p-4 pb-0">
      <Form.Item>
        <ConfigProvider
          theme={{
            token: {
              colorTextPlaceholder: '#bbbbbb'
            },
          }}
        >
          <DatePicker className="bg-black border-none w-[250px] h-[40px] hover:bg-[#303030] rounded-[30px] " />
        </ConfigProvider>
      </Form.Item>
    </div>
  );
}

export default FilterBar;
