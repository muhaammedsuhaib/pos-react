import { Input, Modal } from "antd";
import React, { useState } from "react";
import SettingsCheckbox from "../settingsCheckbox/SettingsCheckbox";

import "./tran_table.css";
import TaxInvoice from "../tax_invoice/TaxInvoice";

function TransactionTable() {
  const [invoicePop, setInvoicePop] = useState(false);
  return (
    <>
      <div className="tran_table overflow-x-scroll">
        <table className="table w-[3500px] ">
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
            </tr>
            <tr>
              <th className="w-[4%]">
                <span>Date</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[3%]">
                <span>Time</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[3%]">
                <span>Order #</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Type</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[4%]">
                <span>Bill Amount</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Pay Status</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Pay Type</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[6%]">
                <span>Customer Name</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Customer Type</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Mobile</span>
                <Input type="text" className="" />
              </th>
              <th></th>
              <th className="w-[4%]">
                <span>VAT (5%)</span>
                <div className="h-[35px]"></div>
              </th>
              <th className="w-[5%]">
                <span>Coupon Name</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Coupon Amount</span>
                <div className="h-[35px]"></div>
              </th>
              <th className="w-[5%]">
                <span>Discount Name</span>
                <Input type="text" className="" />
              </th>
              <th className="w-[5%]">
                <span>Discount Amnt.</span>
                <div className="h-[35px]"></div>
              </th>
              <th className="w-[4%]">
                <span>Party Discount</span>
                <div className="h-[35px]"></div>
              </th>
              <th className="w-[5%]">
                <span>Service Charge</span>
                <div className="h-[35px]"></div>
              </th>
              <th className="w-[4%]">
                <span>Tip</span>
                <div className="h-[35px]"></div>
              </th>
              <th></th>
              <th className="w-[4%]">
                <span>Cash</span>
                <div className="h-[35px]"></div>
              </th>
              <th className="w-[5%]">
                <span>Master Card</span>
                <div className="h-[35px]"></div>
              </th>
              <th className="w-[5%]">
                <span>Visa</span>
                <div className="h-[35px]"></div>
              </th>
              <th className="w-[5%]">
                <span>Talabat Pay</span>
                <div className="h-[35px]"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-black-row" onClick={() => setInvoicePop(true)}>
              <td>15/11/2024</td>
              <td>10:30 AM</td>
              <td>355565</td>
              <td>Dine-in</td>
              <td>57.50</td>
              <td>Paid</td>
              <td>Cash</td>
              <td>Jessy</td>
              <td>VIP</td>
              <td>+971506688445</td>
              <td style={{ backgroundColor: "#545454", border: "none" }}></td>
              <td>12.45</td>
              <td>NEWCUST15</td>
              <td>27.00(15%)</td>
              <td>100</td>
              <td>31</td>
              <td>35.00(10%)</td>
              <td>100.00</td>
              <td>13.00(5%)</td>
              <td style={{ backgroundColor: "#545454", border: "none" }}></td>
              <td>30</td>
              <td>57.50</td>
              <td>011</td>
              <td>125.00</td>
            </tr>
            <tr className="bg-black-row"  onClick={() => setInvoicePop(true)}>
              <td>15/11/2024</td>
              <td>10:30 AM</td>
              <td>355565</td>
              <td>Dine-in</td>
              <td>57.50</td>
              <td>Paid</td>
              <td>Cash</td>
              <td>Jessy</td>
              <td>VIP</td>
              <td>+971506688445</td>
              <td style={{ backgroundColor: "#545454", border: "none" }}></td>
              <td>12.45</td>
              <td>NEWCUST15</td>
              <td>27.00(15%)</td>
              <td>32</td>
              <td>20</td>
              <td>35.00(10%)</td>
              <td>100.00</td>
              <td>13.00(5%)</td>
              <td style={{ backgroundColor: "#545454", border: "none" }}></td>
              <td>12</td>
              <td>57.50</td>
              <td>10</td>
              <td>125.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="tfoot-data">57.50</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="tfoot-data">70.30</td>
              <td></td>
              <td className="tfoot-data">27.00</td>
              <td></td>
              <td className="tfoot-data">27.00</td>
              <td className="tfoot-data">27.00</td>
              <td className="tfoot-data">27.00</td>
              <td className="tfoot-data">27.00</td>
              <td></td>
              <td className="tfoot-data">27.00</td>
              <td className="tfoot-data">27.00</td>
              <td className="tfoot-data">27.00</td>
              <td className="tfoot-data">27.00</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <Modal
        open={invoicePop}
        className="tax-invoice"
        width={300}
        footer={false}
        // closeIcon={null}
        onCancel={() => setInvoicePop(false)}
      >
        <div className="p-[1px]">
          <TaxInvoice />
        </div>
      </Modal>
    </>
  );
}

export default TransactionTable;
