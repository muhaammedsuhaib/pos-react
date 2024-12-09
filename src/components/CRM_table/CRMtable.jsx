import React from "react";
import "./crm_table.css";
import { Input } from "antd";
import SettingsCheckbox from "../settingsCheckbox/SettingsCheckbox";
import editicon from "../../../public/Edit.svg";

function CRMtable({ setOpenModal }) {
  return (
    <>
      <div className="crm_table overflow-x-scroll">
        <table className="table w-[3000px] ">
          <thead>
            <tr>
              <th></th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
              <th>
                <SettingsCheckbox />
              </th>
            </tr>
            <tr>
              <th className="w-[7%]">
                <span>Name</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[7%]">
                <span>Mobile</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[8%]">
                <span>Email</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Type</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[8%]">
                <span>Address</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[8%]">
                <span>Google Location</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Cust. DOB</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Anniversary</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[7%]">
                <span>Spouse Name</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Spouse DOB</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>First Visit</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Last Visit</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[4%]">
                <span>#Dine-in</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>#Delivery</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Amount Spent</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Average Bill</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[6%]">
                <span>Fav. Item</span>
                <Input type="text" className="" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex justify-between px-1 py-[3px]">
                  <p>Jessy</p>
                  <div onClick={() => setOpenModal(true)}>
                    <img src={editicon} alt="" width={20} />
                  </div>
                </div>
              </td>
              <td>+97150668845</td>
              <td>test@gmail.com</td>
              <td>Normal</td>
              <td>
                <p className="truncate w-[200px]">
                  Abu Dhabi, abu dhabi, abu dhabi
                </p>
              </td>
              <td>
                <p className="truncate w-[200px]">
                  https://www.google.com/maps
                </p>
              </td>
              <td>25-04-1992</td>
              <td>25-04-1992</td>
              <td>David</td>
              <td>25-04-1992</td>
              <td>25-04-1992</td>
              <td>25-04-1992</td>
              <td>15</td>
              <td>7</td>
              <td>AED 3250</td>
              <td>AED 125</td>
              <td>Chicken Grilled</td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-between px-1 py-[3px]">
                  <p>Jessy</p>
                  <img src={editicon} alt="" width={20} />
                </div>
              </td>
              <td>+97150668845</td>
              <td>test@gmail.com</td>
              <td>Normal</td>
              <td>
                <p className="truncate w-[200px]">
                  Abu Dhabi, abu dhabi, abu dhabi
                </p>
              </td>
              <td>
                <p className="truncate w-[200px]">
                  https://www.google.com/maps
                </p>
              </td>
              <td>25-04-1992</td>
              <td>25-04-1992</td>
              <td>David</td>
              <td>25-04-1992</td>
              <td>25-04-1992</td>
              <td>25-04-1992</td>
              <td>15</td>
              <td>7</td>
              <td>AED 3250</td>
              <td>AED 125</td>
              <td>Chicken Grilled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CRMtable;
