import React from "react";

function TaxInvoice() {
  return (
    <div className="border-2 border-[#D9D9D9] p-2 px-4">
      <div className=" text-[12px]">
        <img src="" alt="" />
        <div className="text-center">
          <p>Mamas La Mesa Restaurant</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nemo porro veritatis repellendus ad quaerat ipsum obcaecati non
            dicta numquam.
          </p>
        </div>
      </div>
      <div className="divide-y-2 divide-[#828282]">
        <div></div>
        <div className="text-center font-bold">
          <h3 className="font-bold pt-2 text-[16px]"> Tax Invoice</h3>
          <p className="text-[12px]">INV # 12134</p>
          <p className="text-[12px]">TRN No: 10414954600003</p>
        </div>
        <div className="text-center font-bold">
          <h4 className="font-bold pt-2 text-[15px]">Customer Info</h4>
          <p className="text-[12px]">Name : Nancy</p>
          <p className="text-[12px]">Phone : 971508567286</p>
        </div>
        <div className="font-bold">
          <div className="flex justify-between">
            <p className="text-[12px]">Order Type:</p>
            <p className="text-[12px]">Dine In</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[12px]">Table:</p>
            <p className="text-[12px]">Main Hall Basement / Table 16</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[12px]">Staff</p>
            <p className="text-[12px]">Cashier</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[12px]">November 14, 2024</p>
            <p className="text-[12px]">9:16 PM</p>
          </div>
        </div>
        <div className="invoice-table pt-[5px]">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Qty</th>
                <th>Item</th>
                <th>Amount AED</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div className="flex flex-col">
                    <span>Weekly Buffet Kids 50%</span>
                    <span>(AED 14.20)</span>
                  </div>
                </td>
                <td>AED 14.20</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div className="flex flex-col">
                    <span>Weekly Buffet Kids 50%</span>
                    <span>(AED 14.20)</span>
                  </div>
                </td>
                <td>AED 40.25</td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <div className="flex flex-col">
                    <span>Weekly Buffet Kids 50%</span>
                    <span>(AED 14.20)</span>
                  </div>
                </td>
                <td>AED 800.20</td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <div className="flex flex-col">
                    <span>Weekly Buffet Kids 50%</span>
                    <span>(AED 14.20)</span>
                  </div>
                </td>
                <td>AED 100.20</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-[12px] font-medium">
          <div className="flex justify-between">
            <p>Sub Total</p>
            <p>AED 945.85</p>
          </div>
          <div className="flex justify-between">
            <p>VAT (5%)</p>
            <p>47.28</p>
          </div>
        </div>
        <div className="text-[12px] font-bold py-1">
          <div className="flex justify-between">
            <p>Total:</p>
            <p>AED 945.85</p>
          </div>
        </div>
        <div className="p-[1.4px]"></div>
        <div className="text-[12px] font-medium">
          <div className="flex justify-between">
            <p>Card - Visa Card</p>
            <p>AED 992.85</p>
          </div>
        </div>
        <div className="text-[12px] font-medium">
          <div className="flex justify-between">
            <p>Sell Notes</p>
            <p>Visa</p>
          </div>
          <div className="text-center">
            <p className="uppercase text-[12px]">thank you for your order</p>
            <p className="text-[10px]">Order online at www.mamaslamesa.com</p>
            <span className="text-[10px] bg-black text-white">Paid</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxInvoice;
