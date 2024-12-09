import { Dropdown, Input, Menu } from "antd";
import { BiSolidDownArrow } from "react-icons/bi";

import CustomerDrop from "../bottomSec/customerDrop/CustomerDrop";
import { useRef, useState } from "react";

function WalkingCustomerTop() {
    const [customerDrop, setCustomerDrop] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState("Walk-in customer");
    const [currentCustDrop, setCurrentCustDrop] = useState(false);
    const [searchValue, setSearchValue] = useState("");
  
    const searchInputRef = useRef(null)
  
    const customers = [
      "Walk-in customer",
      "Customer 1",
      "Customer 2",
      "Customer 3",
      "Customer 4",
      "Customer 5",
      "Customer 6",
      "Customer 7",
      "Customer 8",
      "Customer 9",
      "Customer 10",
    ];
  
    const filteredCustomers = customers.filter((customer) =>
      customer.toLowerCase().includes(searchValue.toLowerCase())
    );
  
    const handleMenuClick = (customer) => {
      setSelectedCustomer(customer);
      setCurrentCustDrop(false);
    };


  const toggleDropdown = () => {
   
    setCurrentCustDrop(!currentCustDrop);
  };

  const menu = (
    <div className="p-2  bg-white shadow-md rounded-lg ">
      <div className="flex gap-1 w-full mb-2 ">
        <Input
        ref={searchInputRef}
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-[80%]"
        />
        <button className="text-white px-[2px] py- bg-black w-[20%] rounded-[20px] hover:border-primeryFirst hover:border-[1px] active:bg-primeryFirst 3xl:text-[0.9rem] text-[11px]" 
        onClick={()=>{
          setCustomerDrop(true)
          setCurrentCustDrop(false)
        }}
        >
          Add new
        </button>
      </div>
      <Menu style={{ maxHeight: "150px", overflowY: "auto" }} className="">

        {filteredCustomers.map((customer) => (
          <Menu.Item key={customer} onClick={() => handleMenuClick(customer)}>
            {customer}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );

  return (
    <div
        className={` pt-1 mt-[5px] px-[10px] w-full h-[70px] relative ${
          customerDrop ? "rounded-b-xl pt-0 " : "rounded-xl"
        } `}
      >
        <div
          className={`h-full  flex gap-2 ${
            customerDrop ? "rounded-b-xl " : "rounded-xl"
          } `}
        >
          {/* <button className="h-full bg-black w-[50px] rounded-md text-white text-[0.8rem] px-[5px] hover:border-[2px] border-white active:bg-primeryFirst"   style={{ boxShadow: "0 0 5px -2px black" }}>Reset</button> */}
          <div
            className="w-full h-full bg-white flex justify-between items-center rounded-lg px-2 hover:border-[1px] border-black"
            style={{ boxShadow: "0 0 5px -2px black" }}
          >
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="topRight"
              visible={currentCustDrop}
              onVisibleChange={setCurrentCustDrop}
              // onClick={()=>{
              //   searchInputRef.current.focus();
              // }}
            >
              <div
                className="w-full h-full bg-white flex justify-between items-center rounded-lg px-2 cursor-pointer "
                onClick={toggleDropdown}
              >
                <span>{selectedCustomer}</span>
                <BiSolidDownArrow
                  size={15}
                  className={currentCustDrop ? "rotate-180" : " hover:text-primeryFirst"}
                />
              </div>
            </Dropdown>
          </div>
          <button
            className={` ${
              customerDrop ? "bg-white hover:border-[2px] hover:border-black" : "bg-black hover:border-[2px] hover:border-white"
            } w-[40px] rounded-lg flex items-center justify-center `}
            onClick={() => setCustomerDrop((prev) => !prev)}
            style={{ boxShadow: "0 0 5px -2px black" }}
          >
            <img
              src={
                !customerDrop
                  ? "/public/UserprofileWhite.svg"
                  : "/public/Userprofile.svg"
              }
              alt="icon"
              // className="w-[20px] xl:w-[25px]"
            />
          </button>
        </div>
        <CustomerDrop openDrop={customerDrop} setOpenDrop={setCustomerDrop} />
      </div>
  )
}

export default WalkingCustomerTop