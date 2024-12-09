import { DatePicker, message, Modal, Radio, Select } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { calendar, checked, deletebtn, editpen, file, zoom } from '../utils/icons';
import { useDispatch, useSelector } from 'react-redux';
import { pettycashActions, selectPettyCash, selectPettyCashLastInHand, selectPettyCashPaibyList, selectSavePettyCash, selectVendors } from '../../reducer/pettycash/reducer';
import { getPettyCashLastInHand, getPettyCashPaibyList, savePettyCash } from '../../reducer/pettycash/actions';
import debounce from 'lodash.debounce';
import Loader from '../loader/loader';
import useBreakpoint from '../layout/breakpoint';
import ManagerPassword from './ManagerPassword';
import AddVendor from './AddVendor';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import isToday from 'dayjs/plugin/isToday';
import { BiSolidDownArrow } from 'react-icons/bi';
import { selectUserToken } from '../../reducer/login/reducer';
dayjs.extend(localeData);
dayjs.extend(weekday);
dayjs.extend(isToday);
function AddPettyCash({ pettyOpen, setPettyOpen, afterSubmit, formDisabled, viewData, ...props }) {
  const user = useSelector(selectUserToken);
  const balanceEditInput = useRef(null);
  const balanceEditInput2 = useRef(null);
  const titleRef = useRef(null);
  const cashRef = useRef(null);
  const cashRef2 = useRef(null);
  const { isSm } = useBreakpoint();
  const [vendorOpen, setVendorOpen] = useState(false);
  const [openSupervisorModal, setOpenSupervisorModal] = useState(false);
  const dispatch = useDispatch();
  const lastInHand = useSelector(selectPettyCashLastInHand);
  const listCategory = useSelector(selectVendors);
  const paidByList = useSelector(selectPettyCashPaibyList);
  const listPetty = useSelector(selectPettyCash);
  const save = useSelector(selectSavePettyCash);
  const [categoryList, setCategoryList] = useState([]);
  const [isEditInHand, setIsEditInHand] = useState(false);
  const [isEditedInHand, setIsEditedInHand] = useState(false);
  const [changedCashInHand, setChangedCashInHand] = useState(0);
  const [isSave, setIsSave] = useState(true);
  const [calculatedBalance, setCalculatedBalance] = useState(0);
  const [calculatedTax, setCalculatedTax] = useState(0);
  const [textareaOpen, setTextareaOpen] = useState(false);
  const [isCashOut, setIsCashOut] = useState(1);
  const [isTaxable, setIsTaxable] = useState(0);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [supervisorPassword, setSupervisorPasswor] = useState('');
  const [invoiceDate, setInvoiceDate] = useState(dayjs());
  const [paymentDate, setPaymentDate] = useState(dayjs());
  const [category, setCategory] = useState('');
  const [reason, setReason] = useState('');
  const [note, setNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [paidBy, setPaidBy] = useState('');
  const [amount, setAmount] = useState('');
  const [invoiceFile, setFile] = useState(null);
  const [invoiceViewFile, setViewFile] = useState(null);
  const [isRepay, setIsRepay] = useState(0);
  const handleFileChange = (event) => {
    try {
      setFile(event.target.files[0]);
    } catch (error) {
      setFile(null);
    }
  }
  const handleInHandInput = (e) => {
    if (e.key === 'Enter') {
      setIsEditInHand(!isEditInHand);
    }
    setChangedCashInHand(calculatedBalance);
    setIsEditedInHand(true);
  }
  useEffect(() => {
    if (listCategory && listCategory.data && Array.isArray(listCategory.data)) {
      const datas = [{ label: 'Vendors', value: '', disabled: true }];
      listCategory.data.map((item) => {
        datas.push({
          value: item.id,
          label: item.supplier
        })
        return item;
      });
      setCategoryList(datas);
    }
  }, [listCategory]);
  useEffect(() => {
    const debounceDispatch = debounce(() => {
      if ((lastInHand && lastInHand.loading == false) || pettyOpen == true) {
        dispatch(getPettyCashLastInHand());
      }
      if ((paidByList && paidByList.loading == false) || pettyOpen == true) {
        dispatch(getPettyCashPaibyList());
      }
    }, 750);
    debounceDispatch();
    if (viewData && viewData.id) {
      setCategory(viewData.category_id);
      setReason(viewData.title)
      setNote(viewData.notes);
      setPaymentMethod(viewData.payment_method);
      setPaidBy(viewData.payment_user_id);
      setAmount(viewData.amount);
      setViewFile(viewData.actual_file_url)
      setFile(null);
      setInvoiceNumber(viewData.invoice_num);
      if (viewData.invoice_date) {
        const invoiceDateView = new Date();
        const splitDates = viewData.invoice_date.split('-');
        invoiceDateView.setFullYear(splitDates[0], parseInt(splitDates[1]) - 1, splitDates[2]);
        setInvoiceDate(dayjs(invoiceDateView));
      } else {
        setInvoiceDate('');
      }
      if (viewData.created_at) {
        const paymentDateView = new Date();
        const splitDates = viewData.created_at.split('-');
        paymentDateView.setFullYear(splitDates[0], parseInt(splitDates[1]) - 1, splitDates[2]);
        setPaymentDate(dayjs(paymentDateView));
      } else {
        setPaymentDate('');
      }
      setIsCashOut(viewData.payment_type == 2 ? 1 : 0);
      setIsTaxable(viewData.is_tax);
      setIsRepay(viewData.is_cash_replacement);
    } else {
      setCategory('');
      setReason('')
      setNote('');
      setPaymentMethod(1);
      setPaidBy('');
      setAmount('');
      setFile(null);
      setViewFile(null);
      setInvoiceNumber('');
      setInvoiceDate(dayjs());
      setPaymentDate(dayjs());
      setIsCashOut(1);
      setIsTaxable(0);
      setIsRepay(0);
    }
    setIsEditedInHand(false);
    setIsEditInHand(false);
    return () => {
      debounceDispatch.cancel();
    };
  }, [pettyOpen]);
  useEffect(() => {
    const cashInHand = isEditedInHand ? changedCashInHand : lastInHand && lastInHand.data && lastInHand.data.balance ? lastInHand.data.balance : 0;
    if (amount > 0) {
      if (isCashOut === 0) {
        setCalculatedBalance(parseFloat(cashInHand) + parseFloat(amount));
      } else {
        setCalculatedBalance(parseFloat(cashInHand) - parseFloat(amount));
      }
      if (isTaxable === 1) {
        setCalculatedTax(parseFloat(amount) * 5 / 105);
      } else {
        setCalculatedTax(0);
      }
    } else {
      setCalculatedBalance(cashInHand);
      setCalculatedTax(0);
    }
  }, [amount, lastInHand, isCashOut, isTaxable]);
  const handleSubmit = () => {
    if (save && save.loading == true) return;
    if (paymentDate == '' || paymentDate == null) {
      message.error('Please select payment date');
      return;
    }
    if (category == '' || category == null) {
      message.error('Please select vendor');
      return;
    }
    if (paidBy == '' || paidBy == null) {
      message.error('Please select paid by');
      return;
    }
    if (amount == '' || amount == null) {
      message.error('Please enter amount');
      return;
    }
    const formsData = {
      payment_type: isCashOut == 1 ? 2 : 1,
      tax_type: isTaxable == 1 ? 1 : 0,
      payment_date: paymentDate ? paymentDate.format('YYYY-MM-DD') : '',
      invoice_number: invoiceNumber,
      invoice_date: invoiceDate ? invoiceDate.format('YYYY-MM-DD') : '',
      vendor: category,
      reason: reason,
      notes: note,
      payment_method: paymentMethod,
      paid_by: paidBy,
      invoice: invoiceFile,
      amount: amount,
      is_cash_replacement: isRepay ? 1 : 0,
      balanceInHand: lastInHand && lastInHand.data ? JSON.stringify(lastInHand.data) : '',
      supervisorPassword: supervisorPassword,
      isCashInHandEdited: isEditedInHand ? 1 : 0,
      cashInHand: calculatedBalance,
    };
    if (!isSave) {
      setCategory('');
      setReason('')
      setNote('');
      setPaymentMethod(1);
      setPaidBy('');
      setAmount('');
      setFile(null);
      setViewFile(null);
      setInvoiceNumber('');
      setInvoiceDate(dayjs());
      setPaymentDate(dayjs());
      setIsCashOut(1);
      setIsTaxable(0);
      setIsRepay(0);
      setIsEditedInHand(false);
      setIsEditInHand(false);
    }
    const formData = new FormData();
    for (const key in formsData) {
      if (key == 'invoice') {
        if (invoiceFile) {
          formData.append(key, invoiceFile);
        }
      } else {
        formData.append(key, formsData[key]);
      }
    }
    dispatch(savePettyCash(formData));
  }
  useEffect(() => {
    if (save && save.status == true) {
      dispatch(pettycashActions.clearSavePettyCash());
      message.success(save.message ? save.message : 'Successfully Saved');
      var datas = listPetty;
      var pushDatas = datas.data;
      if (pushDatas && Array.isArray(pushDatas)) {
        pushDatas = [save.data, ...pushDatas];
      } else {
        pushDatas = [save.data];
      }
      dispatch(pettycashActions.addNewPettycash({ ...datas, data: pushDatas }));
      if (afterSubmit) afterSubmit();
      if (isSave) {
        setPettyOpen(false);
      } else {
        setCategory('');
        setReason('');
        setNote('');
        setPaymentMethod(1);
        setPaidBy('');
        setAmount('');
        setFile(null);
        setInvoiceNumber('');
        setInvoiceDate(dayjs());
        setPaymentDate(dayjs());
        setIsCashOut(1);
        setIsTaxable(0);
        setIsRepay(0);
        setIsEditedInHand(false);
      }
    }
    if (save && save.status == false) {
      if (save && save.data && typeof save.data === 'object') {
        try {
          for (const key in save.data) {
            if (save.data && save.data[key][0])
              message.error(save.data[key][0]);
          }
          if (Object.keys(save.data).length > 0)
            dispatch(pettycashActions.clearSavePettyCash());
        } catch (error) {
          if (save && save.message) message.error(save.message);
          dispatch(pettycashActions.clearSavePettyCash());
        }
      }
    }
  }, [save]);
  useEffect(() => {
    if (isEditInHand && balanceEditInput.current && isSm) {
      balanceEditInput.current.focus();
    }
    if (isEditInHand && balanceEditInput2.current && !isSm) {
      balanceEditInput2.current.focus();
    }
  }, [isEditInHand]);
  useEffect(() => {
    if (paidByList && paidByList.data && Array.isArray(paidByList.data)) {
      paidByList.data.map((item) => {
        if (item.selected_id == 1) {
          setPaidBy(item.id);
        }
        return item;
      });
    }
  }, [paidByList])
  return (
    <>
      <Modal
        title="Petty Cash Entry"
        style={{
          top: 20,
        }}
        open={pettyOpen}
        onOk={() => setPettyOpen(false)}
        onCancel={() => setPettyOpen(false)}
        width={650}
        footer={false}
      >
        <div className="addPettyCash" id="addPettyCash">
          <form
            className="validForm pettyCashAdd"
            noValidate="novalidate"
          >
            <div className="modal-content">
              <div className="modal-body">
                <div className="modal-body-form-grid">
                  <div className="modal-body-form-left">
                    <div className="form-group w-full mb-[25px]">
                      <Radio.Group
                        value={isCashOut}
                        className='flex'
                        onChange={(e) => setIsCashOut(e.target.value)}
                        disabled={formDisabled ? formDisabled : false}
                      >
                        <Radio value={1} className='w-1/2'>
                          Cash Out
                        </Radio>
                        <Radio value={0} className='w-1/2'>
                          Cash In
                        </Radio>
                      </Radio.Group>
                    </div>
                    <div className="form-group w-full mb-[25px]">
                      <Radio.Group
                        value={isTaxable}
                        onChange={(e) => setIsTaxable(e.target.value)}
                        className='flex'
                        disabled={formDisabled ? formDisabled : false}
                      >
                        <Radio value={1} className='w-1/2'>
                          Taxable
                        </Radio>
                        <Radio value={0} className='w-1/2'>
                          Non Taxable
                        </Radio>
                      </Radio.Group>
                    </div>
                    <div className="form-group flex gap-[3px] pt-3">
                      <input
                        type="text"
                        name="title"
                        className="form-control disabled:bg-[#0000000a] disabled:text-[#00000040]"
                        placeholder="Invoice/ Ref.Number"
                        onChange={(e) => setInvoiceNumber(e.target.value)}
                        value={invoiceNumber}
                        disabled={formDisabled ? formDisabled : false}
                      />
                      <div className="input-with-icon flex">
                        <DatePicker
                          suffixIcon={<img
                            src={calendar}
                            alt="calendar"
                            className="date-icon"
                            id="dateIcon"
                          />}
                          allowClear={false}
                          value={invoiceDate}
                          defaultValue={invoiceDate}
                          onChange={(date, dateString) => {
                            if (date && date.isValid()) {
                              setInvoiceDate(date);
                            }
                          }}
                          placeholder='Invoice Date'
                          format={'DD/MM/YYYY'}
                          className='w-full'
                          disabled={formDisabled ? formDisabled : false}
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="category-group">
                        <Select
                          showSearch
                          placeholder="Vendor"
                          optionFilterProp="label"
                          onChange={(e) => setCategory(e)}
                          value={category}
                          defaultValue={category}
                          style={{ width: '100%' }}
                          options={categoryList}
                          disabled={formDisabled ? formDisabled : false}
                          className={`${category ? '' : 'change-select'}`}
                          suffixIcon={<BiSolidDownArrow />}
                          onInputKeyDown={(e) => {
                            if (e.key === 'Tab') {
                              if (titleRef) {
                                e.preventDefault();
                                titleRef.current.focus();
                              }
                            }
                          }}
                        />
                        <div>
                          <a
                            href="#"
                            data-toggle="modal"
                            onClick={() => setVendorOpen(true)}
                          >
                            +
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        ref={titleRef}
                        type="text"
                        name="title"
                        className="form-control disabled:bg-[#0000000a] disabled:text-[#00000040]"
                        placeholder="Reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        disabled={formDisabled ? formDisabled : false}
                        onKeyDown={(e) => {
                          if (e.key === 'Tab') {
                            if (cashRef) {
                              e.preventDefault();
                              cashRef.current.focus();
                            }
                          }
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <div className='flex'>
                        <label
                          className="note-label !flex items-center"
                          onClick={() => setTextareaOpen(!textareaOpen)}
                        >
                          <span className='pr-2'>Note: </span>
                          <span><BiSolidDownArrow className={`text-[#ff5634] transition-transform duration-500 ${textareaOpen ? 'rotate-180' : 'rotate-0'}`} /></span>
                        </label>
                      </div>
                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${textareaOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}
                      >
                        <textarea
                          name=""
                          id=""
                          className="form-control-textarea disabled:bg-[#0000000a] disabled:text-[#00000040]"
                          rows="5"
                          placeholder="Note"
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          disabled={formDisabled ? formDisabled : false}
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group flex gap-[3px]">
                      <Select
                        ref={cashRef}
                        showSearch
                        placeholder="Payment Mehtod"
                        optionFilterProp="label"
                        onChange={(e) => setPaymentMethod(e)}
                        value={paymentMethod}
                        defaultValue={paymentMethod}
                        style={{ width: '100%' }}
                        disabled={formDisabled ? formDisabled : false}
                        className={`${paymentMethod ? '' : 'change-select'}`}
                        suffixIcon={<BiSolidDownArrow />}
                        options={[
                          { value: '', label: 'Payment Method', disabled: true },
                          { value: 1, label: 'Cash' },
                          { value: 2, label: 'Bank Transfer' },
                          { value: 3, label: 'Card Payment' },
                        ]}
                      />
                      {/* <input
                        type="text"
                        name="title"
                        className="form-control disabled:bg-[#0000000a] disabled:text-[#00000040]"
                        placeholder="User"
                        value={user && user.data && user.data.config && user.data.config.name ? user.data.config.name : ''}
                        disabled={true}
                      /> */}
                      <Select
                        showSearch
                        placeholder="Paid By"
                        optionFilterProp="children"
                        onChange={(e) => setPaidBy(e)}
                        value={paidBy}
                        defaultValue={paidBy}
                        style={{ width: '100%' }}
                        disabled={formDisabled ? formDisabled : false}
                        className={`${paidBy ? '' : 'change-select'} disabled:bg-[#0000000a] disabled:text-[#00000040]`}
                        suffixIcon={<BiSolidDownArrow />}
                      >
                        <Select.Option value="" disabled>Paid By</Select.Option>
                        {paidByList && paidByList.data && Array.isArray(paidByList.data) && (
                          paidByList.data.map((item) => (
                            <Select.Option key={item.id} value={item.id}>
                              {item.name}
                            </Select.Option>
                          ))
                        )}
                      </Select>
                    </div>
                  </div>
                  <div className="modal-body-form-right">
                    <div className="form-group flex gap-[3px]">
                      <div className="input-with-icon">
                        <DatePicker
                          suffixIcon={<img
                            src={calendar}
                            alt="calendar"
                            className="date-icon"
                            id="dateIcon"
                          />}
                          allowClear={false}
                          value={paymentDate}
                          defaultValue={paymentDate}
                          onChange={(date, dateString) => {
                            if (date && date.isValid()) {
                              setPaymentDate(date);
                            }
                          }}
                          placeholder='Payment Date'
                          format={'DD/MM/YYYY'}
                          className='w-full'
                          disabled={formDisabled ? formDisabled : false}
                        />
                      </div>
                    </div>
                    <div className="pettyCash-green-box">
                      <div className="Petty-Cash-Paid-box">
                        <span className="">Petty Cash Paid</span>
                        <div className='flex flex-col justify-center items-center'>
                          <input
                            type='text'
                            value={amount}
                            inputMode='decimal'
                            name='amount'
                            className='bg-white px-[25px] py-[3px] rounded-[20px] text-[25px] disabled:text-[#00000040] text-center w-[75%] focus:outline-none'
                            onChange={(e) => {
                              const updatedAmount = !e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,4})?$/) ? e.target.value : amount;
                              setAmount(updatedAmount);
                            }}
                            onKeyUp={(e) => {
                              if (e.key == 'Enter') {
                                setIsSave(true);
                                handleSubmit();
                              }
                            }}
                            autoComplete='off'
                            disabled={formDisabled ? formDisabled : false}
                          />
                        </div>
                      </div>
                      {isTaxable == 1 ?
                        <div className="Petty-Cash-Paid-data">
                          <span className="">VAT (5%) Included</span>
                          <div>
                            <span>{calculatedTax.toFixed(2)}</span>
                          </div>
                        </div>
                        : <></>}
                      <div className="Petty-Cash-Paid-data">
                        <span className="">Balance In-Hand</span>
                        <div className='flex justify-between items-center px-4 w-[60%]'>
                          <input
                            ref={balanceEditInput}
                            type='text'
                            value={calculatedBalance}
                            inputMode='decimal'
                            name='amount'
                            className={`!bg-[#abcf94] w-[90%] rounded-[20px] text-[15px] text-[#121212] text-center leading-[1] focus:outline-none ${isEditInHand ? '' : ''}`}
                            onChange={(e) => {
                              const updatedAmount = !e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,4})?$/) ? e.target.value : calculatedBalance;
                              setCalculatedBalance(updatedAmount);
                            }}
                            autoComplete='off'
                            disabled={!isEditInHand}
                            onKeyUp={handleInHandInput}
                          />
                          <a
                            href="#"
                            data-toggle="modal"
                            onClick={() => {
                              if (!formDisabled) {
                                if (!isEditInHand) {
                                  setOpenSupervisorModal(true);
                                } else {
                                  setIsEditInHand(!isEditInHand);
                                }
                              }
                            }}
                            className='w-10%'
                          >
                            <img
                              src={isEditInHand ? checked : editpen}
                              alt=""
                              className="w-[14px] h-[14px]"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="form-group upload-btn">
                        <div className="input-group flex">
                          <input type="file" id="file" onChange={handleFileChange} disabled={formDisabled ? formDisabled : false} />
                          <label htmlFor="file" className='!flex items-center justify-center group !p-[0.45em]'>
                            <span className='pr-4'>Invoice</span>
                            <div className="input-group-addon" id="basic-addon2">
                              <div
                                className="bg-[#afabab] group-hover:bg-[#ff6748] flex justify-center items-center"
                                style={{ borderRadius: "8px" }}
                              >
                                <img src={file} alt="file" />
                              </div>
                            </div>
                          </label>
                          {invoiceFile && (
                            <div className="state-btn border-[2px] border-[#ff6748] rounded-[8px] flex items-center justify-center relative">
                              <img src={checked} alt="checked" />
                              <span className='absolute top-[-0.65rem] right-[-0.65rem] bg-[#e83636] rounded-[50%]' onClick={() => setFile(null)}>
                                <img className='!w-[1.5rem] h-[1.5rem] object-cover' src={deletebtn} />
                              </span>
                            </div>
                          )}
                        </div>
                        {invoiceViewFile && (
                          <a className="zoom-out-box text-[#fafafa] px-2 py-1 hover:text-[#fafafa] !w-auto" href={invoiceViewFile} target='_blank' rel=''>
                            View
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- form on small screen --> */}
                <div className="modal-body-form-sm mt-[10px]">
                  <div className="form-group w-full">
                    <Radio.Group
                      value={isCashOut}
                      className='flex'
                      onChange={(e) => setIsCashOut(e.target.value)}
                      disabled={formDisabled ? formDisabled : false}
                    >
                      <Radio value={1} className='w-1/2'>
                        Cash Out
                      </Radio>
                      <Radio value={0} className='w-1/2'>
                        Cash In
                      </Radio>
                    </Radio.Group>
                  </div>
                  <div className="form-group w-full mb-[25px]">
                    <Radio.Group
                      value={isTaxable}
                      onChange={(e) => setIsTaxable(e.target.value)}
                      className='flex'
                      disabled={formDisabled ? formDisabled : false}
                    >
                      <Radio value={1} className='w-1/2'>
                        Taxable
                      </Radio>
                      <Radio value={0} className='w-1/2'>
                        Non Taxable
                      </Radio>
                    </Radio.Group>
                  </div>
                  <div className="form-group flex gap-[3px]">
                    <input
                      type="text"
                      name="title"
                      className="form-control disabled:bg-[#0000000a] disabled:text-[#00000040]"
                      placeholder="Invoice/ Ref.Number"
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                      disabled={formDisabled ? formDisabled : false}
                    />
                    <div className="input-with-icon flex">
                      <DatePicker
                        suffixIcon={<img
                          src={calendar}
                          alt="calendar"
                          className="date-icon"
                          id="dateIcon"
                        />}
                        allowClear={false}
                        value={invoiceDate}
                        defaultValue={invoiceDate}
                        onChange={(date, dateString) => {
                          if (date && date.isValid()) {
                            setInvoiceDate(date);
                          }
                        }}
                        placeholder='Invoice Date'
                        format={'DD/MM/YYYY'}
                        className='w-full'
                        disabled={formDisabled ? formDisabled : false}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <div className="category-group">
                      <Select
                        showSearch
                        placeholder="Vendor"
                        optionFilterProp="label"
                        onChange={(e) => setCategory(e)}
                        value={category}
                        defaultValue={category}
                        style={{ width: '100%' }}
                        options={categoryList}
                        disabled={formDisabled ? formDisabled : false}
                        className={`${category ? '' : 'change-select'}`}
                      />
                      <div>
                        <a
                          href="#"
                          data-toggle="modal"
                          onClick={() => setVendorOpen(true)}
                        >
                          +
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="title"
                      className="form-control disabled:bg-[#0000000a] disabled:text-[#00000040]"
                      placeholder="Reason"
                      disabled={formDisabled ? formDisabled : false}
                    />
                  </div>
                  <div
                    className="pettyCash-green-box"
                    style={{
                      marginTop: "0px",
                      width: "250px",
                      marginRight: "auto",
                      marginLeft: "auto",
                    }}
                  >
                    <div className="Petty-Cash-Paid-box">
                      <span className="">Petty Cash Paid</span>
                      <div className='flex flex-col justify-center items-center'>
                        <input
                          type='text'
                          value={amount}
                          inputMode='decimal'
                          name='amount'
                          className='bg-white px-[25px] py-[3px] disabled:text-[#00000040] rounded-[20px] text-[25px] text-center w-[75%] focus:outline-none'
                          onChange={(e) => setAmount(!e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,4})?$/) ? e.target.value : amount)}
                          autoComplete='off'
                          onKeyUp={(e) => {
                            if (e.key == 'Enter') {
                              setIsSave(true);
                              handleSubmit();
                            }
                          }}
                          disabled={formDisabled ? formDisabled : false}
                        />
                      </div>
                    </div>
                    {isTaxable == 1 ?
                      <div className="Petty-Cash-Paid-data">
                        <span className="">VAT (5%) Included</span>
                        <div>
                          <span>{calculatedTax.toFixed(2)}</span>
                        </div>
                      </div>
                      : <></>}
                    <div className="Petty-Cash-Paid-data">
                      <span className="">Balance In-Hand</span>
                      <div className='flex justify-between items-center px-4 w-[60%]'>
                        <input
                          ref={balanceEditInput2}
                          type='text'
                          value={calculatedBalance}
                          inputMode='decimal'
                          name='amount'
                          className={`!bg-[#abcf94] w-[90%] rounded-[20px] text-[15px] text-[#121212] text-center leading-[1] focus:outline-none ${isEditInHand ? '' : ''}`}
                          onChange={(e) => {
                            const updatedAmount = !e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,4})?$/) ? e.target.value : calculatedBalance;
                            setCalculatedBalance(updatedAmount);
                          }}
                          autoComplete='off'
                          disabled={!isEditInHand}
                          onKeyUp={handleInHandInput}
                        />
                        <a
                          href="#"
                          data-toggle="modal"
                          onClick={() => {
                            if (!formDisabled) setIsEditInHand(!isEditInHand);
                          }}
                          className='w-10%'
                        >
                          <img
                            src={isEditInHand ? checked : editpen}
                            alt=""
                            className="w-[14px] h-[14px]"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="form-group upload-btn">
                      <div className="input-group flex">
                        <input type="file" id="file" onChange={handleFileChange} disabled={formDisabled ? formDisabled : false} />
                        <label htmlFor="file" className='!flex items-center justify-center group !p-[0.45em]'>
                          <span className='pr-4'>Invoice</span>
                          <div className="input-group-addon" id="basic-addon2">
                            <div
                              className="bg-[#afabab] group-hover:bg-[#ff6748] flex justify-center items-center"
                              style={{ borderRadius: "8px" }}
                            >
                              <img src={file} alt="file" />
                            </div>
                          </div>
                        </label>
                        {invoiceFile && (
                          <div className="state-btn border-[2px] border-[#ff6748] rounded-[8px] flex items-center justify-center relative">
                            <img src={checked} alt="checked" />
                            <span className='absolute top-[-0.65rem] right-[-0.65rem] bg-[#e83636] rounded-[50%]' onClick={() => setFile(null)}>
                              <img className='!w-[1.5rem] h-[1.5rem] object-cover' src={deletebtn} />
                            </span>
                          </div>
                        )}
                      </div>
                      {invoiceViewFile && (
                        <div className="zoom-out-box">
                          <img src={zoom} alt="zoom" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="form-group mt-[10px]">
                    <div className='flex'>
                      <label
                        className="note-label !flex items-center"
                        onClick={() => setTextareaOpen(!textareaOpen)}
                      >
                        <span className='pr-2'>Note: </span>
                        <span><BiSolidDownArrow className={`text-[#ff5634] transition-transform duration-500 ${textareaOpen ? 'rotate-180' : 'rotate-0'}`} /></span>
                      </label>
                    </div>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${textareaOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}
                    >
                      <div className="textarea-wrapper">
                        <textarea
                          name=""
                          id="noteTextarea"
                          className="form-control-textarea disabled:bg-[#0000000a] disabled:text-[#00000040]"
                          rows="5"
                          placeholder="Note"
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          disabled={formDisabled ? formDisabled : false}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="form-group flex gap-[3px]">
                    <Select
                      ref={cashRef2}
                      showSearch
                      placeholder="Payment Mehtod"
                      optionFilterProp="label"
                      onChange={(e) => setPaymentMethod(e)}
                      value={paymentMethod}
                      defaultValue={paymentMethod}
                      style={{ width: '100%' }}
                      disabled={formDisabled ? formDisabled : false}
                      className={`${paymentMethod ? '' : 'change-select'}`}
                      suffixIcon={<BiSolidDownArrow />}
                      options={[
                        { value: '', label: 'Payment Method', disabled: true },
                        { value: 1, label: 'Cash' },
                        { value: 2, label: 'Bank Transfer' },
                        { value: 3, label: 'Card Payment' },
                      ]}
                    />
                    {/* <input
                      type="text"
                      name="title"
                      className="form-control disabled:bg-[#0000000a] disabled:text-[#00000040]"
                      placeholder="User"
                      value={user && user.data && user.data.config && user.data.config.name ? user.data.config.name : ''}
                      disabled={true}
                    /> */}
                    <Select
                      showSearch
                      placeholder="Paid By"
                      optionFilterProp="children"
                      onChange={(e) => setPaidBy(e)}
                      value={paidBy}
                      defaultValue={paidBy}
                      style={{ width: '100%' }}
                      disabled={formDisabled ? formDisabled : false}
                      className={`${paidBy ? '' : 'change-select'} disabled:bg-[#0000000a] disabled:text-[#00000040]`}
                      suffixIcon={<BiSolidDownArrow />}
                    >
                      <Option value="" disabled>Paid By</Option>
                      {paidByList && paidByList.data && Array.isArray(paidByList.data) && (
                        paidByList.data.map((item) => (
                          <Option key={item.id} value={item.id}>
                            {item.name}
                          </Option>
                        ))
                      )}
                    </Select>
                  </div>
                </div>
                <div className="modal-footer-data">
                  <div className="form-group h-full mb-0">
                    <div className="checkbox-btn-main">
                      <input
                        id="checkbox1"
                        type="checkbox"
                        name="title"
                        checked={isRepay == 1}
                        onChange={() => setIsRepay(isRepay == 0 ? 1 : 0)}
                        disabled={formDisabled ? formDisabled : false}
                        className='disabled:bg-[#0000000a] disabled:text-[#00000040]'
                      />
                      <label htmlFor="checkbox1" className="font-semibold">
                        Request for Petty Cash replenishment
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {!formDisabled && (
                <div className="modal-footer footer-sm py-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSave(false);
                      handleSubmit();
                    }}
                  >
                    save & add new
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSave(true);
                      handleSubmit();
                    }}
                  >
                    add & close
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </Modal>
      <AddVendor
        vendorOpen={vendorOpen}
        setVendorOpen={setVendorOpen}
        setVendorId={setCategory}
      />
      {save.loading && isSave && (
        <Loader />
      )}
      <ManagerPassword
        managerOpen={openSupervisorModal}
        setManagerOpen={setOpenSupervisorModal}
        setSupervisorPasswor={setSupervisorPasswor}
        result={(status) => {
          if (status) {
            setIsEditInHand(true);
          } else {
            setIsEditInHand(false);
          }
        }}
      />
    </>
  );
}

export default AddPettyCash;