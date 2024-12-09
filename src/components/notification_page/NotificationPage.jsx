import React, { useState } from "react";
import NotificationBox from "../notification_box/NotificationBox";
import CallWaiter from "../notifications/CallWaiter";

function NotificationPage() {
  const [waiterPopup, setWaiterPopup] = useState(false);
  return (
    <>
      <div className="px-5 pb-5">
        {/* className="border-4 rounded-[20px] h-full" */}
        <div className="flex justify-end">
          <img src="/public/bell.png" alt="" width={100} />
        </div>
        <div className="grid grid-cols-3 gap-6 3xl:gap-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img
                src="/public/images/pos-category-images/dining-table_yellow.svg"
                alt=""
                width={40}
              />
              <h3 className="uppercase font-semibold text-[#DAB048]">
                dine-in
              </h3>
            </div>
            <div className="space-y-3">
              <NotificationBox
                setOpen={setWaiterPopup}
                type={"call-waiter"}
                time={"01:18:30 pm"}
                table={"table-5"}
                customerName={"Sahad"}
              />
              <NotificationBox
                setOpen={setWaiterPopup}
                type={"call-waiter"}
                time={"01:18:30 pm"}
                table={"table-5"}
                customerName={"Sahad"}
              />
              <NotificationBox
                setOpen={setWaiterPopup}
                type={"call-waiter"}
                time={"01:18:30 pm"}
                table={"table-5"}
                customerName={"Sahad"}
              />
              <NotificationBox
                setOpen={setWaiterPopup}
                type={"call-waiter"}
                time={"01:18:30 pm"}
                table={"table-5"}
                customerName={"Sahad"}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img
                src="/public/images/pos-category-images/food-delivery_yellow.svg"
                alt=""
                width={40}
              />
              <h3 className="uppercase font-semibold text-[#DAB048]">
                delivery orders
              </h3>
            </div>
            <div className="space-y-3">
              <NotificationBox
                setOpen={setWaiterPopup}
                New={true}
                type={"delivery"}
                time={"01:18:30 pm"}
                customerName={"Sahad"}
              />
              <NotificationBox
                setOpen={setWaiterPopup}
                New={true}
                type={"delivery"}
                time={"01:18:30 pm"}
                customerName={"Sahad"}
              />
              <NotificationBox
                setOpen={setWaiterPopup}
                New={true}
                type={"delivery"}
                time={"01:18:30 pm"}
                customerName={"Sahad"}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img
                src="/public/images/pos-category-images/dashboard.svg"
                alt=""
                width={35}
              />
              <h3 className="uppercase font-semibold text-[#DAB048]">
                other notifications
              </h3>
            </div>
            <div className="space-y-3">
              <NotificationBox
                setOpen={setWaiterPopup}
                New={true}
                type={"booking"}
                time={"01:18:30 pm"}
                customerName={"Sahad"}
              />
              <NotificationBox
                setOpen={setWaiterPopup}
                reminder={true}
                type={"booking"}
                time={"01:18:30 pm"}
                customerName={"Sahad"}
              />
              <NotificationBox
                setOpen={setWaiterPopup}
                New={true}
                type={"pickup"}
                time={"01:18:30 pm"}
                customerName={"Sahad"}
              />
              <NotificationBox
                setOpen={setWaiterPopup}
                reminder={true}
                type={"pickup"}
                time={"01:18:30 pm"}
                customerName={"Sahad"}
              />
            </div>
          </div>
        </div>
      </div>

      {waiterPopup && (
        <CallWaiter open={waiterPopup} setOpen={setWaiterPopup} />
      )}
    </>
  );
}

export default NotificationPage;
