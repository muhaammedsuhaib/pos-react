import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Input, message, Modal, Radio } from 'antd';
import IntlTelInput from 'intl-tel-input/reactWithUtils';
import "intl-tel-input/styles";
import { useDispatch, useSelector } from 'react-redux';
import { customerActions, selectActiveCustomers, selectCustomerExists, selectSaveCustomer } from '../../reducer/customer/reducer';
import { activeCustomerRequest, checkCustomerExistsRequest, saveCustomerRequest } from '../../reducer/customer/action';
import debounce from 'lodash.debounce';
import TableActionLoader from '../loader/TableActionLoader';
function Customer({ savedCustomer, show, hide, ...props }) {
  const dispatch = useDispatch();
  const customerExists = useSelector(selectCustomerExists);
  const saveCustomer = useSelector(selectSaveCustomer);
  const customerList = useSelector(selectActiveCustomers);
  const inputRef = useRef(null);

  const [customerId, setCustomerId] = useState(0);
  const [contactNumber, setContactNumber] = useState('');
  const [validContactNumber, setValidContactNumber] = useState(false);
  const [customerType, setCustomerType] = useState(1);
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    if (show) {
      setCustomerId(0);
      setCustomerName('');
      setCustomerType(1);
      setContactNumber('');
      if (inputRef && inputRef.current && inputRef.current.getInstance) {
        inputRef.current.getInstance()?.setNumber("");
        inputRef.current.getInstance()?.setCountry("ae");
      }
      dispatch(customerActions.clearCheckCustomer());
      dispatch(customerActions.clearSaveCustomer());
    }
  }, [show]);
  const checkPhoneNumberExists = useCallback(() => {
    if (contactNumber && contactNumber.length > 0 && validContactNumber) {
      dispatch(checkCustomerExistsRequest({ phone: contactNumber }));
    }
  }, [validContactNumber, contactNumber]);
  useEffect(() => {
    const debounceDispatch = debounce(() => {
      checkPhoneNumberExists();
    }, 150);
    debounceDispatch();
    return () => {
      debounceDispatch.cancel();
    };
  }, [checkPhoneNumberExists]);
  useEffect(() => {
    if (customerExists && customerExists.data && customerExists.data.id) {
      setCustomerName(customerExists.data.customer_name);
      setCustomerId(customerExists.data.id);
      setCustomerType(customerExists.data.customer_type);
    }
  }, [customerExists]);
  const saveCustomerData = () => {
    if (!validContactNumber) {
      message.error('Not a valid phone number');
      return;
    }
    if (customerName == '') {
      message.error('Customer name is required');
      return;
    }
    if (saveCustomer && saveCustomer.loading) return;
    if (contactNumber && contactNumber.length > 0 && validContactNumber && !saveCustomer.loading) {
      dispatch(saveCustomerRequest({ id: customerId, phone: contactNumber, customer_name: customerName, customer_type: customerType }));
    }
  }
  useEffect(() => {
    if (saveCustomer && saveCustomer.data && saveCustomer.status && saveCustomer.data.id) {
      if (savedCustomer) {
        savedCustomer(saveCustomer.data.id);
      }
      dispatch(customerActions.clearSaveCustomer());
      if (customerList && customerList.data && customerList.data.length > 0) {
        const findData = customerList.data.find((item) => item.id == saveCustomer.data.id);
        var datas = customerList.data;
        var updatedData = [];
        if (findData) {
          updatedData = datas.map((item) => {
            if (item.id == saveCustomer.data.id) {
              return {
                ...item,
                customer_name: saveCustomer.data.customer_name,
                customer_type: saveCustomer.data.customer_type,
                phone: saveCustomer.data.phone
              };
            }
            return item;
          });
        } else {
          updatedData = [...customerList.data, saveCustomer.data];
        }
        dispatch(customerActions.updateCustomerList({ ...customerList, data: updatedData }));
      }
      dispatch(activeCustomerRequest());
    }
  }, [saveCustomer]);
  return (
    <Modal
      title="Customer"
      open={show}
      footer={null}
      centered
      width={655}
      onCancel={() => hide(false)}
      className="posPopup deliveryPopup"
    >
      <div className="modal-body p-3">
        <div className='flex w-full py-1'>
          <div className='flex-grow pr-1 form-group'>
            <IntlTelInput
              ref={inputRef}
              onChangeNumber={(number) => {
                setContactNumber(number);
              }}
              onChangeValidity={setValidContactNumber}
              inputProps={{
                className: "w-full text-[10px] xl:text-[13px] h-[30px] rounded-lg outline-none text-primeryFirs hover:border-primeryFirst hover:border-[1px] focus:border-black relative",
                inputMode: "tel|number",
              }}
              initOptions={{
                initialCountry: "ae",
                countryOrder: ["ae", "in", "sa"],
                countrySearch: false,
                customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) => {
                  return "" + selectedCountryPlaceholder;
                },
                containerClass: "!block",
                separateDialCode: true,
              }}
            />
            {contactNumber && contactNumber.length > 0 && !validContactNumber && <div className="text-red-600">Invalid Phone Number</div>}
          </div>
          <div className='flex-grow pl-1'>
            <Input
              placeholder="Name"
              className="w-full text-[10px] xl:text-[13px] rounded-lg   h-[30px]  outline-none  text-primeryFirs hover:border-primeryFirst hover:border-[1px] focus:border-black"
              onChange={(e) => setCustomerName(e.target.value)}
              value={customerName}
            />
          </div>
        </div>
        <div>
          <Radio.Group
            defaultValue={customerType}
            value={customerType}
            className="flex flex-wrap items-center justify-evenly w-full gap-1 px-1 xl:px-2 my-2"
            onChange={(e) => setCustomerType(e.target.value)}
          >
            <div
              className="flex items-center gap-[2px] w-[30%] justify-between rounded-full bg-[#F9DAD2] text-[0.75rem] cursor-pointer active:border-primeryFirst active:border-[0.025rem]"
              onClick={() => setCustomerType(1)}
            >
              <span className="rounded-full h-[30px] w-[30px] bg-primeryFirst flex items-center justify-center border-[2px] border-white">
                <img
                  src="/public/app_icon.svg"
                  alt="icon"
                  className="w-[15px] text-white"
                />
              </span>
              <p className="py-[5px] px-2 text-black font-medium">
                REGULAR
              </p>
              <Radio value={1} className="custom-black-radio 2xl:ml-0 ml-[3px]" />
            </div>
            <div
              className="flex items-center gap-[2px] w-[30%] justify-between rounded-full bg-[#F9DAD2] text-[0.75rem] cursor-pointer active:border-primeryFirst active:border-[0.025rem]"
              onClick={() => setCustomerType(2)}
            >
              <span className="rounded-full h-[30px] w-[30px] bg-primeryFirst flex items-center justify-center border-[2px] border-white">
                <img
                  src="/public/crown.svg"
                  alt="icon"
                  className="w-[15px] 2xl:w-[20px] text-white"
                />
              </span>
              <p className="py-[5px] px-2 text-black font-medium">
                VIP
              </p>
              <Radio value={2} className="custom-black-radio 2xl:ml-0 ml-[3px]" />
            </div>
            <div
              className="flex items-center gap-[2px] w-[30%] justify-between rounded-full bg-[#F9DAD2] text-[0.75rem] cursor-pointer active:border-primeryFirst active:border-[0.025rem]"
              onClick={() => setCustomerType(3)}
            >
              <span className="rounded-full h-[30px] w-[30px] bg-primeryFirst flex items-center justify-center border-[2px] border-white">
                <img
                  src="/public/goodwill.svg"
                  alt="icon"
                  className="w-[15px] 2xl:w-[20px] text-white"
                />
              </span>
              <p className="py-[5px] px-2 text-black font-medium">
                AFFLIATE
              </p>
              <Radio value={3} className="custom-black-radio 2xl:ml-0 ml-[3px]" />
            </div>
          </Radio.Group>
        </div>
        <div className='flex justify-between items-end mt-4'>
          <button
            className="text-white px-1 xl:px-2 xl:py-1 bg-primeryFirst rounded-[20px] hover:border-white hover:border-[1px] active:bg-black"
            onClick={() => {
              if (hide) hide(false);
            }}
          >
            Close & Clear
          </button>
          <button
            className="text-white px-1 xl:px-2 xl:py-1 bg-primeryFirst rounded-[20px] hover:border-white hover:border-[1px] active:bg-black"
            onClick={() => {
              saveCustomerData();
            }}
          >
            {saveCustomer.loading ? <TableActionLoader color='#fff' /> : "SELECT & SAVE"}

          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Customer;