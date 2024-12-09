import React, { useEffect, useRef, useState } from 'react';
import { calendar, checked, deletebtn, editpen, file } from '../utils/icons';
import { DatePicker, message, Modal, Radio, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectPettyCashPaibyList, selectUnsettledVendorList, selectVendors } from '../../reducer/pettycash/reducer';
import { getUnsettledVendors, getVendors } from '../../reducer/pettycash/actions';
import { listUnpaidExpenses, saveExpense as saveExpenseAction, savePendingInvoice } from '../../reducer/expense/actions';
import { convertDbDateToDate } from '../utils/utils';
import { expensesActions, selectExpenses, selectPendingInvoices, selectSaveExpenses, selectUnpaidInvoices } from '../../reducer/expense/reducer';
import Loader from '../loader/loader';
import AddVendor from './AddVendor';
import useBreakpoint from '../layout/breakpoint';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import isToday from 'dayjs/plugin/isToday';
import { BiSolidDownArrow } from 'react-icons/bi';
import { selectUserToken } from '../../reducer/login/reducer';
dayjs.extend(localeData);
dayjs.extend(weekday);
dayjs.extend(isToday);
const { Option } = Select;
function AddExpense({ expenseOpen, setExpenseOpen, formDisabled, viewData, afterSubmit, setViewData, setFormDisabled, ...props }) {
  const user = useSelector(selectUserToken);
  const { isSm } = useBreakpoint();
  const dispatch = useDispatch();
  const vatAmountInput1 = useRef(null);
  const vatAmountInput2 = useRef(null);
  const titleRef = useRef(null);
  const cashRef = useRef(null);
  const amountInput = useRef(null);
  const amountInput1 = useRef(null);
  const expenses = useSelector(selectExpenses);
  const vendorList = useSelector(selectVendors);
  const unsettledVendorList = useSelector(selectUnsettledVendorList);
  const paidByList = useSelector(selectPettyCashPaibyList);
  const saveExpense = useSelector(selectSaveExpenses);
  const unpaidInvoices = useSelector(selectUnpaidInvoices);
  const pendingInvoices = useSelector(selectPendingInvoices);

  const [isDataLoading, setIsDataLoading] = useState(false);

  const [isUnPaidInvoice, setIsUnPaidInvoice] = useState(false);
  const [vendorOpen, setVendorOpen] = useState(false);
  const [vatEdit, setVatEdit] = useState(false);
  const [isEditedVat, setIsEditedVat] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [vendorListData, setVendorListData] = useState([]);
  const [invoiceDate, setInvoiceDate] = useState(dayjs());
  const [paymentDate, setPaymentDate] = useState(dayjs());
  const [editId, setEditId] = useState(0);
  const [paidId, setPaidId] = useState(0);
  const [isTaxable, setIsTaxable] = useState(0);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [reason, setReason] = useState('');
  const [note, setNote] = useState('');
  const [vendor, setVendor] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [paidBy, setPaidBy] = useState('');
  const [amount, setAmount] = useState('');
  const [vatAmount, setVatAmount] = useState(0);
  const [payingAmount, setPayingAmount] = useState('');
  const [invoiceFile, setFile] = useState(null);
  const [invoiceFile2, setFile2] = useState(null);
  const [invoiceViewFile, setViewFile] = useState(null);
  const [invoiceViewFile2, setViewFile2] = useState(null);

  const [paymentMethodList, setPaymentMethodList] = useState([
    { value: '', label: 'Payment Method', disabled: true },
    { value: 1, label: 'Cash' },
    { value: 2, label: 'Bank Transfer' },
    { value: 3, label: 'Card Payment' },
  ]);

  const [supplier, setSupplier] = useState('');
  const [unpaidInvoice, setUnpaidInvoice] = useState('');
  const [unpaidExpenses, setUnpaidExpenses] = useState([]);

  useEffect(() => {
    if (supplier) {
      dispatch(listUnpaidExpenses({
        vendor_id: supplier
      }));
      // vendorList.data.map((item) => {
      //   if (item.id === supplier) {
      //     // setUnpaidExpenses(item.invoice_list);
      //     const datas = [{ label: 'Invoice List', value: '', disabled: true }];
      //     item.invoice_list.map((item) => {
      //       datas.push({
      //         value: item.id,
      //         label: item.invoice_number,
      //       })
      //       return item;
      //     });
      //     setUnpaidExpenses(datas);
      //   }
      // })
    }
  }, [supplier]);

  const [paidEarlier, setPaidEarlier] = useState(0);
  const [balanceToPay, setBalanceToPay] = useState(0);
  const [currentBalanceToPay, setCurrentBalanceToPay] = useState(0);

  const handleFileChange = (event) => {
    try {
      setFile(event.target.files[0]);
    } catch (error) {
      setFile(null);
    }
  }
  const handleFileChange2 = (event) => {
    try {
      setFile2(event.target.files[0]);
    } catch (error) {
      setFile2(null);
    }
  }
  const handleVatAmountInput = (e) => {
    if (e.key === 'Enter') {
      setVatEdit(!vatEdit);
      if (vatAmount && vatAmount >= 0)
        setIsEditedVat(true);
    }
  }

  useEffect(() => {
    const currentAmount = amount && amount > 0 ? balanceToPay > 0 && isUnPaidInvoice ? balanceToPay : amount : 0;
    if (!isEditedVat && isTaxable == 1) {
      setVatAmount((currentAmount * 5 / 105).toFixed(2));
    }
    if (isTaxable == 0) setVatAmount(0);
    const currentPayingAmount = payingAmount && payingAmount > 0 ? payingAmount : 0;
    const currentBalanceToPay = currentAmount - currentPayingAmount;
    setCurrentBalanceToPay(currentBalanceToPay);
  }, [amount, payingAmount, isTaxable]);

  useEffect(() => {
    if (vendorList && vendorList.data && Array.isArray(vendorList.data)) {
      const datas = [{ label: 'Vendor', value: '', disabled: true }];
      vendorList.data.map((item) => {
        datas.push({
          value: item.id,
          label: item.supplier
        })
        return item;
      });
      setVendorListData(datas);
    }
  }, [vendorList]);

  const [unsettledVendorListData, setUnsettledVendorListData] = useState([]);

  useEffect(() => {
    const datas = [{ label: 'Vendor', value: '', disabled: true }];
    if (unsettledVendorList && unsettledVendorList.data && Array.isArray(unsettledVendorList.data)) {
      unsettledVendorList.data.map((item) => {
        datas.push({
          value: item.id,
          label: item.supplier
        })
        return item;
      });
      setUnsettledVendorListData(datas);
    } else {
      setUnsettledVendorListData(datas);
    }
  }, [unsettledVendorList]);

  useEffect(() => {
    if (unpaidInvoices && unpaidInvoices.data && Array.isArray(unpaidInvoices.data)) {
      const datas = [{ label: 'Invoice List', value: '', disabled: true }];
      unpaidInvoices.data.map((item) => {
        datas.push({
          value: item.id,
          label: item.invoice_number,
        })
        return item;
      });
      setUnpaidExpenses(datas);
    }
  }, [unpaidInvoices]);

  useEffect(() => {
    if (unpaidInvoice) {
      const findInvoice = unpaidInvoices.data.find((item) => item.id == unpaidInvoice);
      console.log(findInvoice, 'findInvoice');
      setIsEdit(false);
      setViewData(findInvoice);
      // if (findInvoice && findInvoice.invoice_list && Array.isArray(findInvoice.invoice_list)) {
      //   const findInvoiceData = findInvoice.invoice_list.find((item) => item.id == unpaidInvoice);
      // } else {
      //   setViewData({});
      // }
    } else {
      setViewData({});
    }
    // if (vendorList && vendorList.data && Array.isArray(vendorList.data)) {
    // }
  }, [unpaidInvoice]);

  useEffect(() => {
    if (paidByList && paidByList.data && Array.isArray(paidByList.data)) {
      paidByList.data.map((item) => {
        if (item.selected_id == 1) {
          setPaidBy(item.id);
        }
        return item;
      });
    }
  }, [paidByList]);

  const handleSubmit = (modalStatus) => {
    // if (saveExpense && saveExpense.loading == true) return;
    if (paymentDate == '' || paymentDate == null) {
      message.error('Please select payment date');
      return;
    }
    if (invoiceNumber == '' || invoiceNumber == null) {
      message.error('Please enter invoice number');
      return;
    }
    if (invoiceDate == '' || invoiceDate == null) {
      message.error('Please enter invoice date');
      return;
    }
    if (vendor == '' || vendor == null) {
      message.error('Please select vendor');
      return;
    }
    if (paymentMethod == '' || paymentMethod == null) {
      message.error('Please select payment method');
      return;
    }
    if (paidBy == '' || paidBy == null) {
      message.error('Please select paid by');
      return;
    }
    if (amount == '' || amount == null) {
      message.error('Please enter invoice amount');
      return;
    }
    if (payingAmount == '' || payingAmount == null) {
      message.error('Please enter paying amount');
      return;
    }
    setIsDataLoading(true);
    const formsData = {
      tax_type: isTaxable == 1 ? 1 : 0,
      payment_date: paymentDate ? paymentDate.format('YYYY-MM-DD') : '',
      invoice_number: invoiceNumber ? invoiceNumber : '',
      invoice_date: invoiceDate ? invoiceDate.format('YYYY-MM-DD') : '',
      vendor: vendor,
      reason: reason ? reason : '',
      notes: note ? note : '',
      payment_method: paymentMethod,
      paid_by: paidBy,
      amount: amount,
      tax: vatAmount,
      invoice: invoiceFile,
      paying_amount: payingAmount,
      invoice2: invoiceFile2,
      id: editId,
      paid_id: paidId,
    };
    const formData = new FormData();
    for (const key in formsData) {
      if (key == 'invoice') {
        if (invoiceFile)
          formData.append(key, invoiceFile);
      } else if (key == 'invoice2') {
        if (invoiceFile2)
          formData.append(key, invoiceFile2);
      } else {
        formData.append(key, formsData[key]);
      }
    }
    if (isUnPaidInvoice) {
      dispatch(savePendingInvoice(formData)).then((res) => {
        setIsDataLoading(false);
        const savedData = res.payload;
        if (savedData && savedData.status == true) {
          setExpenseOpen(modalStatus);
          var datas = expenses;
          var pushDatas = datas.data;
          if (pushDatas && Array.isArray(pushDatas)) {
            pushDatas = [savedData.data, ...pushDatas];
          } else {
            pushDatas = [savedData.data];
          }
        }
      });
    } else {
      dispatch(saveExpenseAction(formData)).then((res) => {
        setIsDataLoading(false);
        var datas = expenses;
        const savedData = res.payload;
        if (savedData && savedData.status == true) {
          var pushDatas = datas.data;
          if (isEdit == 1) {
            pushDatas = pushDatas.map((item) => {
              if (item.id == savedData.data.id) {
                return savedData.data;
              } else {
                return item;
              }
            });
          } else {
            if (pushDatas && Array.isArray(pushDatas)) {
              pushDatas = [savedData.data, ...pushDatas];
            } else {
              pushDatas = [savedData.data];
            }
          }
          // console.log('pushDatas', pushDatas);
          dispatch(expensesActions.addNewExpense({ ...datas, data: pushDatas }));
          setExpenseOpen(false);
        }
      });
    }
  }

  const [textareaOpen, setTextareaOpen] = useState(false);

  useEffect(() => {
    if (viewData && viewData.id) {
      setTextareaOpen(formDisabled);
      setVendor(viewData.vendor_id);
      setReason(viewData.title)
      setNote(viewData.notes);
      setPaymentMethod(viewData.payment_method);
      setPaidBy(viewData.paid_user_id);
      setAmount(viewData.amount);
      setFile(null);
      setFile2(null);
      setViewFile(viewData.actual_file_url1 ? viewData.actual_file_url1 : null);
      setViewFile2(viewData.actual_file_url2 ? viewData.actual_file_url2 : null);
      setInvoiceNumber(viewData.invoice_number);
      if (viewData.invoice_date) {
        const invoiceDates = convertDbDateToDate(viewData.invoice_date);
        setInvoiceDate(dayjs(invoiceDates));
      }
      if (viewData.payment_date) {
        const paymentDates = convertDbDateToDate(viewData.payment_date);
        setPaymentDate(dayjs(paymentDates));
      }
      setIsTaxable(viewData.is_tax);
      setAmount(viewData.amount);
      setVatAmount(viewData.tax_amount);
      if (viewData.paying_amount) {
        setPayingAmount(viewData.paying_amount);
      } else {
        setPayingAmount(viewData.invoice_paid_amount);
      }
      setBalanceToPay(parseFloat(viewData.amount) - parseFloat(viewData.invoice_paid_amount));
      setCurrentBalanceToPay(parseFloat(viewData.amount) - parseFloat(viewData.invoice_paid_amount));
      setPaidEarlier(viewData.invoice_paid_amount);
      if (viewData.paid_id) {
        setPaidId(viewData.paid_id);
      } else {
        setPaidId(0);
      }
      if (isEdit) {
        setIsUnPaidInvoice(false);
        setEditId(viewData.id);
      } else {
        setEditId(0);
        setFormDisabled(false);
        setIsUnPaidInvoice(true);
        setPayingAmount('');
      }
      console.log('viewData', viewData);
    } else {
      setEditId(0);
      setVendor('');
      setReason('')
      setNote('');
      setPaymentMethod(1);
      setAmount('');
      setFile(null);
      setFile2(null);
      setViewFile(null);
      setInvoiceNumber('');
      setInvoiceDate(dayjs());
      setPaymentDate(dayjs());
      setIsTaxable(0);
      setAmount('');
      setVatAmount('');
      setPayingAmount('');
      setBalanceToPay('');
      setCurrentBalanceToPay('');
      setPaidEarlier('');
      setTextareaOpen(false);
      setSupplier('');
      setUnpaidInvoice('');
      setUnpaidExpenses([]);
      setIsUnPaidInvoice(false);
      if (paidByList && paidByList.data && Array.isArray(paidByList.data)) {
        paidByList.data.map((item) => {
          if (item.selected_id == 1) {
            setPaidBy(item.id);
          }
          return item;
        });
      }
      setIsEdit(true);
      setFormDisabled(false);
    }
    if ((vendorList && vendorList.loading == false) || expenseOpen == true) {
      dispatch(getVendors());
      dispatch(getUnsettledVendors());
      // console.log('WORKED HERE VENDORS GET');
    }
  }, [expenseOpen, viewData]);
  useEffect(() => {
    if (saveExpense && saveExpense.status == true) {
      dispatch(expensesActions.clearSaveExpenses());
      message.success(saveExpense.message ? saveExpense.message : 'Successfully Saved');
      if (afterSubmit) afterSubmit();
      setIsEdit(true);
      // setIsDataLoading(false);
    }
    if (saveExpense && saveExpense.status == false) {
      if (saveExpense && saveExpense.data && typeof saveExpense.data === 'object') {
        for (const key in saveExpense.data) {
          message.error(saveExpense.data[key][0] || saveExpense.data[key].msg || 'Error');
          break;
        }
        if (Object.keys(saveExpense.data).length > 0)
          dispatch(expensesActions.clearSaveExpenses());
      }
      // setIsDataLoading(false);
    }
    if (pendingInvoices && pendingInvoices.status == true) {
      dispatch(expensesActions.clearPendingInvoices());
      message.success(pendingInvoices.message ? pendingInvoices.message : 'Successfully Saved');
      if (afterSubmit) afterSubmit();
      setIsEdit(true);
    }
    if (pendingInvoices && pendingInvoices.status == false) {
      if (pendingInvoices && pendingInvoices.data && typeof pendingInvoices.data === 'object') {
        for (const key in pendingInvoices.data) {
          message.error(pendingInvoices.data[key][0]);
          break;
        }
        if (Object.keys(pendingInvoices.data).length > 0)
          dispatch(expensesActions.clearPendingInvoices());
      }
    }
  }, [saveExpense, pendingInvoices])
  useEffect(() => {
    if (!vatEdit && vatAmountInput1.current && isSm) {
      vatAmountInput1.current.focus();
    }
    if (!vatEdit && vatAmountInput2.current && !isSm) {
      vatAmountInput2.current.focus();
    }
  }, [vatEdit]);
  const handlePopupContainer = (node) => {
    // const selectedItem = node.querySelector(`.ant-select-item-option[data-value="Vendor"]`);
    const selectedItem = node.querySelector(`.ant-select-selector`);
    // console.log(node, 'node', selectedItem);
    // node.classList
    // selectedItem.classList.add("bg-[#565656]");
  }
  return (
    <>
      <Modal
        title="Expense Entry"
        style={{
          top: 20,
        }}
        open={expenseOpen}
        onOk={() => {
          setExpenseOpen(false);
          setIsEdit(true);
          setSupplier('');
          setUnpaidInvoice('');
          setUnpaidExpenses([]);
        }}
        onCancel={() => {
          setExpenseOpen(false);
          setIsEdit(true);
          setSupplier('');
          setUnpaidInvoice('');
          setUnpaidExpenses([]);
        }}
        width={800}
        footer={false}
      >
        <div className="addSuppliers" id="addSuppliers">
          <form
            className="validForm pettyCashAdd"
            noValidate="novalidate"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(false);
            }}
          >
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="bg-[#565656] p-2">
                  <div className='grid grid-cols-1 text-[#fff] py-1'>
                    <span className='text-md font-medium'>Unsettled Invoices</span>
                  </div>
                  <div className="form-group flex gap-[5px] items-center h-full addSuppliers-header" style={{ marginBottom: '0px' }}>
                    <Select
                      showSearch
                      getPopupContainer={handlePopupContainer}
                      placeholder="Select Supplier"
                      optionFilterProp="label"
                      onChange={(e) => {
                        setSupplier(e);
                        setUnpaidInvoice('');
                        setUnpaidExpenses([]);
                      }}
                      value={supplier}
                      defaultValue={supplier}
                      style={{ width: '100%' }}
                      options={unsettledVendorListData}
                      // disabled={formDisabled ? formDisabled : false}
                      className={`${supplier ? '' : 'change-select'}`}
                      suffixIcon={<BiSolidDownArrow />}
                    />
                    <Select
                      showSearch
                      placeholder="Unpaid Invoice"
                      optionFilterProp="label"
                      onChange={(e) => setUnpaidInvoice(e)}
                      value={unpaidInvoice}
                      defaultValue={unpaidInvoice}
                      style={{ width: '100%' }}
                      options={unpaidExpenses}
                      // disabled={formDisabled ? formDisabled : false}
                      className={`${unpaidInvoice ? '' : 'change-select'}`}
                      suffixIcon={<BiSolidDownArrow />}
                    />
                  </div>
                </div>
                <div className="p-2 pt-5 md:pt-0 sm:p-[15px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 pt-4">
                    <div className="form-group flex gap-[50px] w-full">
                      <Radio.Group
                        value={isTaxable}
                        onChange={(e) => setIsTaxable(e.target.value)}
                        className='flex w-full'
                        disabled={formDisabled ? formDisabled : isUnPaidInvoice}
                      >
                        <Radio value={1} className='w-1/2 flex items-center'>
                          Taxable
                        </Radio>
                        <Radio value={0} className='w-1/2 flex items-center'>
                          Non Taxable
                        </Radio>
                      </Radio.Group>
                    </div>
                    <div className='flex justify-end'>
                      <div className="form-group w-full sm:w-1/3">
                        <div className='input-with-icon flex'>
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
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-body-form-grid expense">
                    <div className="modal-body-form-left" style={{ marginTop: '0' }}>
                      <div className="form-group flex gap-[3px]">
                        <input
                          type="text"
                          name="title"
                          className="form-control disabled:bg-[#0000000a] disabled:text-[#00000040]"
                          placeholder="Invoice/ Ref.Number"
                          value={invoiceNumber}
                          onChange={(e) => setInvoiceNumber(e.target.value)}
                          disabled={formDisabled ? formDisabled : isUnPaidInvoice}
                        />
                        <div className='input-with-icon flex'>
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
                            disabled={formDisabled ? formDisabled : isUnPaidInvoice}
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="category-group">
                          <Select
                            showSearch
                            placeholder="Vendor"
                            optionFilterProp="label"
                            onChange={(e) => setVendor(e)}
                            value={vendor}
                            defaultValue={vendor}
                            style={{ width: '100%' }}
                            options={vendorListData}
                            disabled={formDisabled ? formDisabled : isUnPaidInvoice}
                            className={`${vendor ? '' : 'change-select'} disabled:bg-[#0000000a] disabled:text-[#00000040]`}
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
                          <div onClick={() => {
                            if (!isUnPaidInvoice) {
                              setVendorOpen(true);
                            }
                          }}>
                            <a href="#" data-toggle="modal" disabled={formDisabled ? formDisabled : isUnPaidInvoice} className='cursor-pointer disabled:cursor-default disabled:bg-[#0000000a] disabled:text-[#00000040]'>
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
                          disabled={formDisabled ? formDisabled : isUnPaidInvoice}
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
                      <div className="form-group Note-field">
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
                      <div className="form-group flex gap-[3px] payment-field">
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
                          className={`${paymentMethod ? '' : 'change-select'} disabled:bg-[#0000000a] disabled:text-[#00000040]`}
                          suffixIcon={<BiSolidDownArrow />}
                          options={paymentMethodList}
                        />
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
                        {/* <input
                          type="text"
                          name="title"
                          className="form-control disabled:bg-[#0000000a] disabled:text-[#00000040]"
                          placeholder="User"
                          value={user && user.data && user.data.config && user.data.config.name ? user.data.config.name : ''}
                          disabled={true}
                        /> */}
                      </div>
                    </div>

                    <div className="modal-body-form-right" style={{ marginTop: '0' }}>
                      <div className="pettyCash-green-box " style={{ marginTop: '0', backgroundColor: '#D1D5DE' }}>
                        <div className="Petty-Cash-Paid-box " style={{ backgroundColor: '#534E4B' }}>
                          <span style={{ color: "#ebebeb" }}>
                            Invoice Amount
                          </span>
                          <div className='flex flex-col justify-center items-center'>
                            <input
                              ref={amountInput}
                              type='text'
                              value={amount}
                              inputMode='decimal'
                              name='amount'
                              className='bg-white px-[25px] py-[3px] rounded-[20px] text-[1.25rem] text-center w-[75%] focus:outline-none disabled:text-[#000000aa] disabled:bg-white disabled:bg-opacity-50'
                              onChange={(e) => {
                                const updatedAmount = !e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,2})?$/) ? e.target.value : amount;
                                setAmount(updatedAmount);
                              }}
                              autoComplete='off'
                              disabled={(formDisabled ? formDisabled : isUnPaidInvoice)}
                              onKeyDown={(e) => {
                                if (e.key === 'Tab') {
                                  if (amountInput1) {
                                    e.preventDefault();
                                    amountInput1.current.focus();
                                  }
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="h-[260px]">
                          {isTaxable == 1 ?
                            <div className="Petty-Cash-Paid-data-grey ">
                              <span className="">VAT (5%) Included</span>
                              <div className="Petty-Cash-Paid-data-grey-edit">
                                <input
                                  ref={vatAmountInput1}
                                  type='text'
                                  value={vatAmount}
                                  inputMode='decimal'
                                  name='amount'
                                  className={`!bg-[#fefefe] rounded-[20px] disabled:bg-[#0000000a] disabled:text-[#00000040] text-[15px] text-[#121212] text-center w-[100%] leading-[0] focus:outline-none ${vatEdit ? '' : 'hidden'}`}
                                  onChange={(e) => {
                                    const updatedAmount = !e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,4})?$/) ? e.target.value : amount;
                                    setVatAmount(updatedAmount);
                                  }}
                                  autoComplete='off'
                                  disabled={formDisabled ? formDisabled : false}
                                  onKeyUp={handleVatAmountInput}
                                />
                                <span className={vatEdit ? 'hidden' : ''}>{vatAmount ? vatAmount : 0}</span>
                                <div className="VAT_edit" onClick={() => {
                                  if (isEdit) {
                                    if (vatEdit && vatAmount && vatAmount >= 0) {
                                      setIsEditedVat(true);
                                    } else {
                                      setIsEditedVat(false);
                                    }
                                    setVatEdit(!vatEdit);
                                  }
                                }}>
                                  <a href="#" data-toggle="modal">
                                    <img
                                      src={vatEdit ? checked : editpen}
                                      alt=""
                                      className="w-[14px] h-[14px]"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            : <></>}
                          <div className="Petty-Cash-Paid-data-grey">
                            <span className="">Paid Earlier</span>
                            <div>
                              <span>{paidEarlier ? paidEarlier : 0}</span>
                            </div>
                          </div>
                          <div className="Petty-Cash-Paid-data-grey">
                            <span className="">Balance to pay</span>
                            <div>
                              <span>{balanceToPay ? balanceToPay : 0}</span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group upload-btn">
                          <div className="input-group flex">
                            <input
                              type="file"
                              id='fileInvoice1'
                              onChange={handleFileChange}
                              disabled={formDisabled ? formDisabled : isUnPaidInvoice}
                            />
                            <label htmlFor="fileInvoice1" className='!flex items-center justify-center group !p-[0.45em]'>
                              <span className='pr-4'>Invoice</span>
                              <div className="input-group-addon" id="basic-addon2">
                                <div
                                  className="bg-[#afabab] group-hover:bg-[#ff6748] group-disabled:bg-[#0000000a] group-disabled:text-[#00000040] flex justify-center items-center"
                                  style={{ borderRadius: "8px" }}
                                >
                                  <img src={file} alt="file" />
                                </div>
                              </div>
                            </label>
                            {invoiceFile && (
                              <div className="state-btn border-[2px] border-[#ff6748] rounded-[8px] flex items-center justify-center relative">
                                <img src={checked} alt="checked" />
                                <span className='absolute top-[-0.65rem] right-[-0.65rem] bg-[#e83636] rounded-[50%] cursor-pointer' onClick={() => setFile(null)}>
                                  <img className='!w-[1.5rem] h-[1.5rem] object-cover' src={deletebtn} />
                                </span>
                              </div>
                            )}
                          </div>
                          {invoiceViewFile && (
                            <a className="bg-primeryFirst rounded-[5px] text-[#fafafa] px-2 py-1 hover:text-[#fafafa] text-center" href={invoiceViewFile} target='_blank' rel=''>
                              View
                            </a>
                          )}
                        </div>
                      </div>
                      <div
                        className="pettyCash-green-box mt-0" style={{ marginTop: '0' }}
                      >
                        <div className="Petty-Cash-Paid-box">
                          <span className="">Paying Amount</span>
                          <div className='flex flex-col justify-center items-center'>
                            <input
                              ref={amountInput1}
                              type='text'
                              value={payingAmount}
                              inputMode='decimal'
                              name='amount'
                              className='bg-white px-[25px] py-[3px] disabled:text-[#00000040] rounded-[20px] text-[1.25rem] text-center w-[75%] focus:outline-none'
                              onChange={(e) => {
                                const updatedAmount = !e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,2})?$/) ? e.target.value : amount;
                                setPayingAmount(updatedAmount);
                              }}
                              autoComplete='off'
                              disabled={formDisabled ? formDisabled : false}
                              onKeyUp={(e) => {
                                if (e.key == 'Enter') {
                                  handleSubmit(false);
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="h-[260px]" >
                          <div className="Petty-Cash-Paid-data">
                            <span className="">Balance to pay</span>
                            <div className='px-2 w-[75%]'>
                              <span>{currentBalanceToPay ? currentBalanceToPay : 0}</span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group upload-btn ">
                          <div className="input-group flex">
                            <input
                              type="file"
                              id='fileInvoice2'
                              onChange={handleFileChange2}
                              disabled={formDisabled ? formDisabled : false}
                            />
                            <label htmlFor="fileInvoice2" className='!flex items-center justify-center group !p-[0.45em]'>
                              <span className='pr-4'>Invoice</span>
                              <div className="input-group-addon" id="basic-addon2">
                                <div
                                  className="bg-[#afabab] group-hover:bg-[#ff6748] group-disabled:bg-[#0000000a] group-disabled:text-[#00000040] flex justify-center items-center"
                                  style={{ borderRadius: "8px" }}
                                >
                                  <img src={file} alt="file" />
                                </div>
                              </div>
                            </label>
                            {invoiceFile2 && (
                              <div className="state-btn border-[2px] border-[#ff6748] rounded-[8px] flex items-center justify-center relative">
                                <img src={checked} alt="checked" />
                                <span className='absolute top-[-0.65rem] right-[-0.65rem] bg-[#e83636] rounded-[50%] cursor-pointer' onClick={() => setFile2(null)}>
                                  <img className='!w-[1.5rem] h-[1.5rem] object-cover' src={deletebtn} />
                                </span>
                              </div>
                            )}
                          </div>
                          {invoiceViewFile2 && (
                            <a className="bg-primeryFirst rounded-[5px] text-[#fafafa] px-2 py-1 hover:text-[#fafafa] text-center" href={invoiceViewFile2} target='_blank' rel=''>
                              View
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* modal form on sm */}
                  <div
                    className="modal-body-form-sm mt-[10px]"
                  >
                    <div className="form-group flex gap-[3px]" >
                      <input
                        type="text"
                        name="title"
                        className="form-control disabled:bg-[#0000000a] disabled:text-[#00000040]"
                        placeholder="Invoice/ Ref.Number"
                        value={invoiceNumber}
                        onChange={(e) => setInvoiceNumber(e.target.value)}
                        disabled={formDisabled ? formDisabled : isUnPaidInvoice}
                      />

                      <div className='input-with-icon flex'>
                        <DatePicker
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
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="category-group">
                        <Select
                          showSearch
                          placeholder="Vendor"
                          optionFilterProp="label"
                          onChange={(e) => setVendor(e)}
                          value={vendor}
                          defaultValue={vendor}
                          style={{ width: '100%' }}
                          options={vendorListData}
                          disabled={formDisabled ? formDisabled : isUnPaidInvoice}
                          className={`${vendor ? '' : 'change-select'} disabled:bg-[#0000000a] disabled:text-[#00000040]`}
                          suffixIcon={<BiSolidDownArrow />}
                        />
                        <div onClick={() => setVendorOpen(true)}>
                          <a href="#" data-toggle="modal">
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
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        disabled={formDisabled ? formDisabled : isUnPaidInvoice}
                      />
                    </div>

                    <div
                      className="flex gap-1 sm:gap-[15px] mb-[15px]"
                    >
                      <div
                        className="pettyCash-green-box mt-0" style={{ backgroundColor: '#D1D5DE' }}
                      >
                        <div
                          className="Petty-Cash-Paid-box " style={{ backgroundColor: '#534E4B' }}
                        >
                          <span style={{ color: "#ebebeb" }}>
                            Invoice Amount
                          </span>
                          <div className='flex flex-col justify-center items-center'>
                            <input
                              type='text'
                              value={amount}
                              inputMode='decimal'
                              name='amount'
                              className='bg-white px-[25px] py-[3px] rounded-[20px] text-[1.25rem] text-center w-[75%] focus:outline-none disabled:text-[#00000040] disabled:bg-white disabled:bg-opacity-10'
                              onChange={(e) => {
                                const updatedAmount = !e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,4})?$/) ? e.target.value : amount;
                                setAmount(updatedAmount);
                              }}
                              autoComplete='off'
                              disabled={(formDisabled ? formDisabled : isUnPaidInvoice)}
                            />
                          </div>
                        </div>
                        <div className="h-[260px]" >
                          {isTaxable == 1 ?
                            <div className="Petty-Cash-Paid-data-grey ">
                              <span className="">VAT (5%) Included</span>
                              <div className="Petty-Cash-Paid-data-grey-edit">
                                {vatEdit ?
                                  <input
                                    ref={vatAmountInput2}
                                    type='text'
                                    value={vatAmount}
                                    inputMode='decimal'
                                    name='amount'
                                    className='!bg-[#aeb7c7] rounded-[20px] text-[15px] text-[#fafafa] text-center w-[100%] leading-[0] focus:outline-none'
                                    onChange={(e) => {
                                      const updatedAmount = !e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,4})?$/) ? e.target.value : amount;
                                      setVatAmount(updatedAmount);
                                    }}
                                    autoComplete='off'
                                    disabled={formDisabled ? formDisabled : isUnPaidInvoice}
                                  />
                                  :
                                  <span>{vatAmount ? vatAmount : 0}</span>
                                }
                                <div className="VAT_edit" onClick={() => {
                                  // if (vatEdit == false && vatAmountInput2) {
                                  //   vatAmountInput2.current.focus();
                                  // }
                                  setVatEdit(!vatEdit);
                                }}>
                                  <a href="#" data-toggle="modal">
                                    <img
                                      src={editpen}
                                      alt=""
                                      className="w-[14px] h-[14px]"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            : <></>}
                          <div className="Petty-Cash-Paid-data-grey">
                            <span className="">Paid Earlier</span>
                            <div>
                              <span>{paidEarlier ? paidEarlier : 0}</span>
                            </div>
                          </div>
                          <div className="Petty-Cash-Paid-data-grey">
                            <span className="">Balance to pay</span>
                            <div>
                              <span>{balanceToPay ? balanceToPay : 0}</span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group upload-btn">
                          <div className="input-group flex">
                            <input
                              type="file"
                              id='fileInvoice12'
                              onChange={handleFileChange}
                              disabled={formDisabled ? formDisabled : isUnPaidInvoice}
                            />
                            <label htmlFor="fileInvoice12" className='!flex items-center justify-center group !p-[0.45em]'>
                              <span className='pr-4'>Invoice</span>
                              <div className="input-group-addon" id="basic-addon2">
                                <div
                                  className="bg-[#afabab] group-hover:bg-[#ff6748] group-disabled:bg-[#0000000a] group-disabled:text-[#00000040] flex justify-center items-center"
                                  style={{ borderRadius: "8px" }}
                                >
                                  <img src={file} alt="file" />
                                </div>
                              </div>
                            </label>
                            {invoiceFile && (
                              <div className="state-btn border-[2px] border-[#ff6748] rounded-[8px] flex items-center justify-center relative">
                                <img src={checked} alt="checked" />
                                <span className='absolute top-[-0.65rem] right-[-0.65rem] bg-[#e83636] rounded-[50%] cursor-pointer' onClick={() => setFile(null)}>
                                  <img className='!w-[1.5rem] h-[1.5rem] object-cover' src={deletebtn} />
                                </span>
                              </div>
                            )}
                          </div>
                          {invoiceViewFile && (
                            <a className="bg-primeryFirst rounded-[5px] text-[#fafafa] px-2 py-1 hover:text-[#fafafa] text-center" href={invoiceViewFile} target='_blank' rel=''>
                              View
                            </a>
                          )}
                        </div>
                      </div>
                      <div
                        className="pettyCash-green-box mt-0"
                      >
                        <div className="Petty-Cash-Paid-box">
                          <span className="">Paying Amount</span>
                          <div className='flex flex-col justify-center items-center'>
                            <input
                              type='text'
                              value={payingAmount}
                              inputMode='decimal'
                              name='amount'
                              className='bg-white px-[25px] py-[3px] rounded-[20px] text-[1.25rem] disabled:text-[#00000040] text-center w-[75%] focus:outline-none'
                              onChange={(e) => {
                                const updatedAmount = !e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,4})?$/) ? e.target.value : amount;
                                setPayingAmount(updatedAmount);
                              }}
                              autoComplete='off'
                              disabled={formDisabled ? formDisabled : false}
                              onKeyUp={(e) => {
                                if (e.key == 'Enter') {
                                  handleSubmit(false);
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="h-[260px]">
                          <div className="Petty-Cash-Paid-data">
                            <span className="">Balance to pay</span>
                            <div className='px-2 w-[75%]'>
                              <span>{currentBalanceToPay ? currentBalanceToPay : 0}</span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group upload-btn ">
                          <div className="input-group flex">
                            <input type="file" id='fileInvoice22' onChange={handleFileChange2} disabled={formDisabled ? formDisabled : false} />
                            <label htmlFor="fileInvoice22">Invoice</label>
                            <div
                              className="input-group-addon"
                              id="basic-addon2"
                            >
                              <div className="bg-[#ff6748] rounded-[8px] group-disabled:bg-[#0000000a] group-disabled:text-[#00000040] flex justify-center items-center" >
                                <img
                                  src={file}
                                  alt=""
                                />
                              </div>
                            </div>
                            {invoiceFile2 && (
                              <div className="state-btn border-[2px] border-[#ff6748] rounded-[8px] flex items-center justify-center relative">
                                <img src={checked} alt="checked" />
                                <span className='absolute top-[-0.65rem] right-[-0.65rem] bg-[#e83636] rounded-[50%] cursor-pointer' onClick={() => setFile2(null)}>
                                  <img className='!w-[1.5rem] h-[1.5rem] object-cover' src={deletebtn} />
                                </span>
                              </div>
                            )}
                          </div>
                          {invoiceViewFile2 && (
                            <a className="bg-primeryFirst rounded-[5px] text-[#fafafa] px-2 py-1 hover:text-[#fafafa] text-center" href={invoiceViewFile2} target='_blank' rel=''>
                              View
                            </a>
                          )}
                        </div>
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
                      {textareaOpen && (
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
                      )}
                    </div>
                    <div
                      className="form-group flex payment-field gap-[3px]"
                    >
                      <Select
                        showSearch
                        placeholder="Payment Mehtod"
                        optionFilterProp="label"
                        onChange={(e) => setPaymentMethod(e)}
                        value={paymentMethod}
                        defaultValue={paymentMethod}
                        style={{ width: '100%' }}
                        disabled={formDisabled ? formDisabled : false}
                        className={`${paymentMethod ? '' : 'change-select'} disabled:bg-[#0000000a] disabled:text-[#00000040]`}
                        suffixIcon={<BiSolidDownArrow />}
                        options={paymentMethodList}
                      />
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
                      {/* <input
                        type="text"
                        name="title"
                        className="form-control disabled:bg-[#0000000a] disabled:text-[#00000040]"
                        placeholder="User"
                        value={user && user.data && user.data.config && user.data.config.name ? user.data.config.name : ''}
                        disabled={true}
                      /> */}
                    </div>
                  </div>
                </div>
                {!formDisabled && (
                  <div className="modal-footer footer-sm py-4">
                    <button
                      type="button"
                      onClick={() => {
                        handleSubmit(true);
                      }}
                    >
                      {`${editId > 0 ? 'Update' : 'Save'} & Add New`}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        handleSubmit(false);
                      }}
                    >
                      {`${editId > 0 ? 'Update' : 'Save'} & Close`}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <AddVendor
        vendorOpen={vendorOpen}
        setVendorOpen={setVendorOpen}
        setVendorId={setVendor}
      />
      {isDataLoading && (
        <Loader />
      )}
    </>
  );
}

export default AddExpense;