import React, { useCallback, useEffect, useRef, useState } from "react";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import "./expense.css";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { deletebtn, edit, exportexcel, exportpdf, folder, printer } from "../../components/utils/icons";
import { getPettyCashPaibyList, getUnsettledVendors, getVendors } from "../../reducer/pettycash/actions";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import isToday from 'dayjs/plugin/isToday';
import { DatePicker, message } from "antd";
import { selectPettyCashPaibyList, selectVendors } from "../../reducer/pettycash/reducer";
import { deleteExpense, listExpense } from "../../reducer/expense/actions";
import { expensesActions, selectDeleteExpense, selectExpenses } from "../../reducer/expense/reducer";
import { base_url, convertDbDateToDate, dateRangePreset, getLoginToken } from "../../components/utils/utils";
import axios from "axios";
import AddVendor from "../../components/modal/AddVendor";
import AddExpense from "../../components/modal/AddExpense";
import TableActionLoader from "../../components/loader/TableActionLoader";
dayjs.extend(localeData);
dayjs.extend(weekday);
dayjs.extend(isToday);
export default function Expenses() {
  const dispatch = useDispatch();
  const listVendors = useSelector(selectVendors);
  const paidByList = useSelector(selectPettyCashPaibyList);
  const expenses = useSelector(selectExpenses);
  const expenseDelete = useSelector(selectDeleteExpense);

  const tableRef = useRef();
  const [total, setTotal] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);
  const [formDisabled, setFormDisabled] = useState(false);
  const [viewData, setViewData] = useState({});
  const [triggerFlag, setTriggerFlag] = useState(true);
  const [isSvavingPdf, setIsSavingPdf] = useState(false);
  const [selectedReason, setSelectedReason] = useState('');
  const [selectedvendor, setSelectedvendor] = useState('');
  const [selectedInvoice, setSelectedInvoice] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [selectedPaidBy, setSelectedPaidBy] = useState('');
  const [expenseOpen, setExpenseOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedDate2, setSelectedDate2] = useState(dayjs());
  const [selectedDate3, setSelectedDate3] = useState(dayjs());
  const [selectedDate4, setSelectedDate4] = useState(dayjs());
  const [vendorOpen, setVendorOpen] = useState(false);
  const fetchPettyCash = useCallback(() => {
    // if (listVendors && listVendors.loading == false) {
    dispatch(getVendors());
    dispatch(getUnsettledVendors());
    // }
    // if (paidByList && paidByList.loading == false) {
    dispatch(getPettyCashPaibyList());
    // }
  }, [dispatch]);
  useEffect(() => {
    const debounceDispatch = debounce(() => {
      fetchPettyCash();
    }, 750);
    debounceDispatch();
    return () => {
      debounceDispatch.cancel();
    };
  }, [fetchPettyCash]);
  const handleDateChange = (dates) => {
    if (dates.length) {
      setSelectedDate(dates[0]);
      setSelectedDate2(dates[1]);
    }
    // if (date && date.isValid()) {
    //   setSelectedDate(date);
    // } else {
    //   setSelectedDate(null);
    // }
  };
  const handleDateChange2 = (dates) => {
    if (dates.length) {
      setSelectedDate3(dates[0]);
      setSelectedDate4(dates[1]);
    }
    // console.log(dates, 'dates');
    // if (date && date.isValid()) {
    //   setSelectedDate2(date);
    // } else {
    //   setSelectedDate2(null);
    // }
  };
  useEffect(() => {
    const debounceDispatch = debounce(() => {
      dispatch(listExpense({
        date: selectedDate ? selectedDate.format('YYYY-MM-DD') : '',
        date2: selectedDate2 ? selectedDate2.format('YYYY-MM-DD') : '',
        invoice_date: selectedDate3 ? selectedDate3.format('YYYY-MM-DD') : '',
        invoice_date2: selectedDate4 ? selectedDate4.format('YYYY-MM-DD') : '',
        vendor: selectedvendor,
        reason: selectedReason,
        paymentMethod: selectedPaymentMethod,
        paidBy: selectedPaidBy,
        invoice_number: selectedInvoice
      }));
    }, 750);
    debounceDispatch();
    return () => {
      debounceDispatch.cancel();
    };
  }, [triggerFlag, selectedDate, selectedDate2, selectedDate3, selectedDate4, selectedInvoice, selectedReason, selectedPaymentMethod, selectedPaidBy, dispatch]);
  useEffect(() => {
    if (!expenses) {
      setFormDisabled(false);
      setViewData({});
    }
  }, [expenseOpen]);
  const handleExportPdf = async () => {
    setIsSavingPdf(true);
    try {
      const url = `${base_url}/expense/get-export-url`;
      const response = await axios.get(url, {
        params: {
          date: selectedDate ? selectedDate.format('YYYY-MM-DD') : '',
          invoice_date: selectedDate2 ? selectedDate2.format('YYYY-MM-DD') : '',
          vendor: selectedvendor,
          reason: selectedReason,
          paymentMethod: selectedPaymentMethod,
          paidBy: selectedPaidBy,
          invoice_number: selectedInvoice
        },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getLoginToken()}`,
        }
      });
      if (response.data && response.data.data) {
        window.open(response.data.data, '_blank');
      }
      setIsSavingPdf(false);
    } catch (error) {
      // console.log(error, 'error pdf');
      setIsSavingPdf(false);
    }
  };
  const handlePrint = () => {
    const printContents = tableRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };
  const handleExport = () => {
    const headers = ['Entry Date', 'Invoice Date', 'Vendor', 'Invoice No.', 'Reason', 'Payment Method', 'Paid By', 'Invoice Amount', 'Paid Amount'];
    const data = expenses.data;
    // Create an array that starts with the custom headers
    const dataWithHeaders = [headers, ...data.map(row => [
      row?.created_at ? dayjs(convertDbDateToDate(row?.created_at)).format("DD/MM/YYYY") : '',
      row?.invoice_date ? dayjs(convertDbDateToDate(row?.invoice_date)).format("DD/MM/YYYY") : '',
      row.vendor && row.vendor.supplier ? row.vendor.supplier : '',
      row.invoice_number,
      row.reason,
      row.payment_method == 1 ? 'Cash' : (row.payment_method == 2 ? 'Bank Transfer' : 'Card Payment'),
      row?.paid_user ? row?.paid_user?.name : '',
      row.amount,
      row.invoice_paid_amount,
    ])];

    // Create a new worksheet with the data and custom headers
    const worksheet = XLSX.utils.aoa_to_sheet(dataWithHeaders);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Convert workbook to a buffer and save the file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(file, `expense_${selectedDate ? dayjs(selectedDate).format('YYYY_MM_DD') : 'none'}.xlsx`);
  };
  useEffect(() => {
    var calcTotal = 0, calcTotalPaid = 0;
    if (expenses && expenses.data && Array.isArray(expenses.data)) {
      expenses.data.map((data) => {
        calcTotal = calcTotal + (data.parent_id ? 0 : parseFloat(data.amount));
        calcTotalPaid = calcTotalPaid + parseFloat(data.invoice_paid_amount);
        return data;
      });
      setTotal(calcTotal);
      setTotalPaid(calcTotalPaid);
    }
    // console.log(expenses, 'expenses');
  }, [expenses]);
  useEffect(() => {
    if (expenseDelete && expenseDelete.status) {
      message.success(expenseDelete.message ? expenseDelete.message : 'Deleted')
      dispatch(expensesActions.clearDeleteExpenses());
      setTriggerFlag(!triggerFlag);
    }
    if (Object.keys(expenseDelete.data).length > 0) dispatch(expensesActions.clearDeleteExpenses());
  }, [expenseDelete]);
  return (
    <DashboardLayout
      heading={'Suppliers'}
      headingAction={() => {
        setVendorOpen(true);
      }}
    >
      <div className="block md:hidden sub-header">
        <div className="sub-head-sub">
          <div className="head-btn">
            <a href="#addPettyCashVendor" data-toggle="modal" onClick={() => setVendorOpen(true)}>
              add new vendor
            </a>
            <div className="">+</div>
          </div>
          <div className="head-btn">
            <a href="#addExpense" data-toggle="modal" onClick={() => {
              setExpenseOpen(true);
              setFormDisabled(false);
              setViewData({});
            }}>
              add new expense
            </a>
            <div className="">+</div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 px-4 py-2'>
        <span className='text-2xl font-medium'>Expense</span>
      </div>

      <div>
        <div
          className="suppliers-table data-table table-responsive-on-lg"
          style={{ width: "100%", minHeight: "90vh", padding: "15px" }}
          ref={tableRef}
        >
          <table className="table w-full">
            <thead className="expense-head">
              <tr>
                {/* <!-- Date dropdown --> */}
                <th style={{ width: "12%" }}>
                  <div>
                    <span>Entry Date</span>
                    {/* <DatePicker
                      allowClear={true}
                      value={selectedDate}
                      defaultValue={selectedDate}
                      onChange={handleDateChange}
                      placeholder='Select Date'
                    /> */}
                    <DatePicker.RangePicker
                      className='flex !flex-row'
                      allowClear={false}
                      separator={`:`}
                      defaultValue={[selectedDate, selectedDate2]}
                      value={[selectedDate, selectedDate2]}
                      onChange={handleDateChange}
                      format={`DD MMM YY`}
                      presets={dateRangePreset}
                    />
                  </div>
                </th>

                {/* <!-- Cash IN/OUT dropdown --> */}
                <th style={{ width: "12%" }}>
                  <div>
                    <span>Invoice Date</span>
                    {/* <DatePicker
                      allowClear={true}
                      value={selectedDate2}
                      defaultValue={selectedDate2}
                      onChange={handleDateChange2}
                      placeholder='Select Date'
                    /> */}
                    <DatePicker.RangePicker
                      className='flex !flex-row'
                      allowClear={false}
                      separator={`:`}
                      defaultValue={[selectedDate3, selectedDate4]}
                      value={[selectedDate3, selectedDate4]}
                      onChange={handleDateChange2}
                      format={`DD MMM YY`}
                      presets={dateRangePreset}
                    />
                  </div>
                </th>

                {/* <!-- Vendor Name dropdown --> */}
                <th style={{ width: "12%" }}>
                  <div>
                    <span>Vendor</span>
                    <select className="form-control" onChange={(e) => setSelectedvendor(e.target.value)} value={selectedvendor}>
                      <option value="">All</option>
                      {listVendors && listVendors.data && Array.isArray(listVendors.data) && listVendors.data.map((item) => (
                        <option key={`${item.id}_${item.supplier}`} value={item.id}>{item.supplier}</option>
                      ))}
                    </select>
                  </div>
                </th>

                <th style={{ width: "10%" }} className="">
                  <div>
                    <span>Invoice No</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Invoice"
                      value={selectedInvoice}
                      onChange={(e) => setSelectedInvoice(e.target.value)}
                    />
                  </div>
                </th>

                {/* <!-- Reason text field --> */}
                <th style={{ width: "18%" }} className="Reason_text_field">
                  <div>
                    <span>Reason</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Reason"
                      value={selectedReason}
                      onChange={(e) => setSelectedReason(e.target.value)}
                    />
                  </div>
                </th>

                {/* <!-- Method dropdown --> */}
                <th style={{ width: "9%" }}>
                  <div>
                    <span>Method</span>
                    <select className="form-control" value={selectedPaymentMethod} onChange={(e) => setSelectedPaymentMethod(e.target.value)}>
                      <option value="">All</option>
                      <option value="1">Cash</option>
                      <option value="2">Bank Transfer</option>
                      <option value="3">Card Payment</option>
                    </select>
                  </div>
                </th>

                {/* <!-- Paid-By dropdown --> */}
                <th style={{ width: "9%" }}>
                  <div>
                    <span>Paid-By</span>
                    <select className="form-control" value={selectedPaidBy} onChange={(e) => setSelectedPaidBy(e.target.value)}>
                      <option value="">All</option>
                      {paidByList && paidByList.data && Array.isArray(paidByList.data) && paidByList.data.map((item) => (
                        <option key={`${item.id}_${item.name}`} value={item.id}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                </th>

                <th style={{ width: "6%", backgroundColor: "#A9D18E" }}>
                  <div>
                    <span>INVOICE </span>
                    <span>Amount</span>
                  </div>
                </th>
                <th style={{ width: "6%", backgroundColor: "#F4B183" }}>
                  <div>
                    <span>PAID</span>
                    <span>Amount</span>
                  </div>
                </th>

                {/* <!-- Empty column --> */}
                <th
                  style={{ width: "6%", backgroundColor: "transparent" }}
                >
                  {expenses && expenses.loading == true ?
                    <TableActionLoader />
                    : <></>}
                </th>

                {/* <!-- Action button --> */}
                <th>
                  <div
                    className="action-column cursor-pointer"
                    onClick={() => {
                      setExpenseOpen(true);
                      setFormDisabled(false);
                      setViewData({});
                    }}
                  >
                    <a href="#" data-toggle="modal">
                      +
                    </a>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {expenses && expenses.data && Array.isArray(expenses.data) && expenses.data.map((item) => (
                item.ExpensePaids && Array.isArray(item.ExpensePaids) && item.ExpensePaids.length ?
                  item.ExpensePaids.map((paid) => (
                    <tr key={`${paid.id}_${item.invoice_number}}`}>
                      <td>{dayjs(convertDbDateToDate(item?.created_at)).format("DD/MM/YYYY")}</td>
                      <td>{item?.invoice_date ? dayjs(convertDbDateToDate(item?.invoice_date)).format("DD/MM/YYYY") : ''}</td>
                      <td>{item?.vendor ? item?.vendor?.supplier : ''}</td>
                      <td>{item?.invoice_number}</td>
                      <td>{item?.title}</td>
                      <td>{paid?.payment_method == 1 ? 'Cash' : (paid?.payment_method == 2 ? 'Bank Transfer' : paid?.payment_method == 3 ? 'Card Payment' : (item?.payment_method == 1 ? 'Cash' : (item?.payment_method == 2 ? 'Bank Transfer' : 'Card Payment')))}</td>
                      <td>{paid?.StaffList ? paid?.StaffList?.name : (item?.paid_user ? item?.paid_user?.name : '')}</td>
                      <td>{item?.amount}</td>
                      <td>{paid?.amount}</td>
                      <td>Posted</td>
                      <td>
                        {expenseDelete && expenseDelete.loading ?
                          <TableActionLoader />
                          :
                          <div className="pettycash-actions">
                            <div>
                              <a href="#javascript" onClick={() => {
                                setFormDisabled(true);
                                setExpenseOpen(true);
                                var details = { ...item };
                                details.invoice_paid_amount = paid?.amount;
                                details.paid_id = paid?.id;
                                details.paying_amount = paid?.amount;
                                details.payment_method = paid?.payment_method || item?.payment_method;
                                details.notes = paid?.notes || item?.notes;
                                details.paid_user_id = paid?.paid_user_id || item?.paid_user_id;
                                setViewData(details);
                              }}>
                                <img src={folder} alt="" />
                              </a>
                            </div>
                            <div>
                              <a href="#javascript" onClick={() => {
                                setFormDisabled(false);
                                setExpenseOpen(true);
                                var details = { ...item };
                                details.invoice_paid_amount = paid?.amount;
                                details.paid_id = paid?.id;
                                details.payment_method = paid?.payment_method || item?.payment_method;
                                details.notes = paid?.notes || item?.notes;
                                details.paid_user_id = paid?.paid_user_id || item?.paid_user_id;
                                setViewData(details);
                              }}>
                                <img src={edit} alt="" />
                              </a>
                            </div>
                            <div>
                              <a href="#javascript" onClick={() => {
                                dispatch(deleteExpense({
                                  id: item.id,
                                  paid_id: paid?.id
                                }));
                              }}>
                                <img src={deletebtn} alt="" />
                              </a>
                            </div>
                          </div>
                        }
                      </td>
                    </tr>
                  ))
                  :
                  <tr key={`${item.id}_${item.invoice_number}}`}>
                    <td>{dayjs(convertDbDateToDate(item?.created_at)).format("DD/MM/YYYY")}</td>
                    <td>{item?.invoice_date ? dayjs(convertDbDateToDate(item?.invoice_date)).format("DD/MM/YYYY") : ''}</td>
                    <td>{item?.vendor ? item?.vendor?.supplier : ''}</td>
                    <td>{item?.invoice_number}</td>
                    <td>{item?.title}</td>
                    <td>{item?.payment_method == 1 ? 'Cash' : (item?.payment_method == 2 ? 'Bank Transfer' : 'Card Payment')}</td>
                    <td>{item?.paid_user ? item?.paid_user?.name : ''}</td>
                    <td>{item?.amount}</td>
                    <td>{item?.children && Array.isArray(item?.children) && item?.children.length ? item?.children.reduce((sum, expe) => sum + parseFloat(expe?.invoice_paid_amount), 0) : item?.invoice_paid_amount}</td>
                    <td>Posted</td>
                    <td>
                      {expenseDelete && expenseDelete.loading ?
                        <TableActionLoader />
                        :
                        <div className="pettycash-actions">
                          <div>
                            <a href="#javascript" onClick={() => {
                              setFormDisabled(true);
                              setExpenseOpen(true);
                              setViewData(item);
                            }}>
                              <img src={folder} alt="" />
                            </a>
                          </div>
                          <div>
                            <a href="#javascript" onClick={() => {
                              setFormDisabled(false);
                              setExpenseOpen(true);
                              setViewData(item);
                            }}>
                              <img src={edit} alt="" />
                            </a>
                          </div>
                          <div>
                            <a href="#javascript" onClick={() => {
                              dispatch(deleteExpense({
                                id: item.id
                              }));
                            }}>
                              <img src={deletebtn} alt="" />
                            </a>
                          </div>
                        </div>
                      }
                    </td>
                  </tr>
              ))}
            </tbody>
            {/* <tr className="cash_cancelled">
              <td>15/07/2024</td>
              <td>15/07/2024</td>
              <td>Transportation</td>
              <td>32410</td>
              <td>Purchase of goods</td>
              <td>Bank Transfer</td>
              <td>Shahin</td>
              <td>15,320</td>
              <td>9,785.00</td>
              <td>Cancelled</td>
              <td>
                <div className="pettycash-actions">
                  <div>
                    <a href="">
                      <img src={folder} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={edit} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={deletebtn} alt="" />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>15/07/2024</td>
              <td>15/07/2024</td>
              <td>Transportation</td>
              <td>32410</td>
              <td>Taxi to go to Meena</td>
              <td className="yellow_bg">Bank Transfer</td>
              <td>Shahin</td>
              <td>15</td>
              <td>9,785.00</td>
              <td className="yellow_bg">Edited</td>
              <td>
                <div className="pettycash-actions">
                  <div>
                    <a href="">
                      <img src={folder} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={edit} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={deletebtn} alt="" />
                    </a>
                  </div>
                </div>
              </td>
            </tr> */}
            <tfoot>
              <tr style={{ height: "10px" }}></tr>
              <tr className="end-row">
                <td>
                  <div className="prnter-box-container flex items-center cursor-pointer" onClick={() => handlePrint()}>
                    <div className="prnter-box">
                      <img src={printer} alt="" />
                    </div>
                    <span>Print</span>
                  </div>
                </td>
                <td colSpan={2} className="end-row-center">
                  <div className="prnter-box-container flex items-center cursor-pointer" onClick={() => handleExport()}>
                    <div className="prnter-box">
                      <img src={exportexcel} alt="" />
                    </div>
                    <span>Export to Excel</span>
                  </div>
                </td>
                <td colSpan="2">
                  <div className="prnter-box-container flex items-center cursor-pointer" onClick={() => handleExportPdf()}>
                    <div className="prnter-box">
                      <img src={exportpdf} alt="" />
                    </div>
                    <span>Export to PDF</span>
                  </div>
                </td>
                <td className="end-row-end" colSpan={2}>
                  <div>Total</div>
                </td>
                <td style={{ padding: "8px 0" }}>
                  <div className="pettycash-total-in-amount">{total.toLocaleString('en')}</div>
                </td>
                <td style={{ padding: "8px 0" }}>
                  <div className="pettycash-total-out-amount">{totalPaid.toLocaleString('en')}</div>
                </td>
                <td colSpan="3"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <AddExpense
        expenseOpen={expenseOpen}
        setExpenseOpen={setExpenseOpen}
        viewData={viewData}
        formDisabled={formDisabled}
        setFormDisabled={setFormDisabled}
        setViewData={setViewData}
        afterSubmit={() => {
          setTriggerFlag(!triggerFlag);
          setExpenseOpen(false);
        }}
      />
      <AddVendor
        setVendorOpen={setVendorOpen}
        vendorOpen={vendorOpen}
      />
      {isSvavingPdf &&
        <div className="absolute top-0 left-0 w-full flex items-center justify-center h-screen bg-[#0000002f]">
          <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#F95433]"></div>
        </div>
      }
    </DashboardLayout>
  );
}
