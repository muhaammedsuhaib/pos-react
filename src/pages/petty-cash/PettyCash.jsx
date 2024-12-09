import React, { useCallback, useEffect, useRef, useState } from 'react';
import { DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { deletebtn, edit, exportexcel, exportpdf, folder, printer } from '../../components/utils/icons';
import './pettycash-list.css';
import DashboardLayout from '../../components/layout/DashboardLayout';
import AddPettyCash from '../../components/modal/AddPettyCash';
import { getPettyCashPaibyList, getVendors, listPettyCash } from '../../reducer/pettycash/actions';
import { selectChangeVendorStatus, selectPettyCash, selectPettyCashPaibyList, selectVendors } from '../../reducer/pettycash/reducer';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import isToday from 'dayjs/plugin/isToday';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import axios from 'axios';
import { base_url, convertDbDateToDate, dateRangePreset, getLoginToken } from '../../components/utils/utils';
import Loader from '../../components/loader/loader';
import AddVendor from '../../components/modal/AddVendor';
import TableActionLoader from '../../components/loader/TableActionLoader';
dayjs.extend(localeData);
dayjs.extend(weekday);
dayjs.extend(isToday);
function PettyCash(props) {
  const tableRef = useRef();
  const dispatch = useDispatch();
  const changeVendorStatus = useSelector(selectChangeVendorStatus);
  const [triggerFlag, setTriggerFlag] = useState(true);
  const [isSvavingPdf, setIsSavingPdf] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);
  const [viewData, setViewData] = useState({});
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedDate2, setSelectedDate2] = useState(dayjs());
  const [selectedCashType, setSelectedCashType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedReason, setSelectedReason] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [selectedPaidBy, setSelectedPaidBy] = useState('');
  useEffect(() => {
    const debounceDispatch = debounce(() => {
      dispatch(listPettyCash({
        date: selectedDate.format('YYYY-MM-DD'),
        date2: selectedDate2.format('YYYY-MM-DD'),
        cashType: selectedCashType,
        vendor: selectedCategory,
        reason: selectedReason,
        paymentMethod: selectedPaymentMethod,
        paidBy: selectedPaidBy
      }));
    }, 750);
    debounceDispatch();
    return () => {
      debounceDispatch.cancel();
    };
  }, [triggerFlag, selectedDate, selectedCashType, selectedCategory, selectedReason, selectedPaymentMethod, selectedPaidBy, dispatch]);
  const handleDateChange = (dates) => {
    if (dates.length) {
      setSelectedDate(dates[0]);
      setSelectedDate2(dates[1]);
    }
    // if (date && date.isValid()) {
    //   setSelectedDate(date);
    // }
  };
  const listVendors = useSelector(selectVendors);
  const paidByList = useSelector(selectPettyCashPaibyList);
  const pettyList = useSelector(selectPettyCash);
  const [pettyOpen, setPettyOpen] = useState(false);
  const [totalIn, setTotalIn] = useState(0);
  const [totalOut, setTotalOut] = useState(0);
  const [vendorOpen, setVendorOpen] = useState(false);
  const fetchPettyCash = useCallback(() => {
    // if (listVendors && listVendors.loading == false) {
    dispatch(getVendors());
    // }
    // if (paidByList && paidByList.loading == false) {
    dispatch(getPettyCashPaibyList());
    // }
  }, [dispatch, pettyOpen]);
  useEffect(() => {
    const debounceDispatch = debounce(() => {
      fetchPettyCash();
    }, 750);
    debounceDispatch();
    return () => {
      debounceDispatch.cancel();
    };
  }, [fetchPettyCash, changeVendorStatus]);
  useEffect(() => {
    var calcTotalIn = 0, calcTotalOut = 0;
    if (pettyList && pettyList.data && Array.isArray(pettyList.data)) {
      pettyList.data.map((data) => {
        calcTotalIn = data.payment_type == 1 ? calcTotalIn + parseFloat(data.amount) : calcTotalIn + 0;
        calcTotalOut = data.payment_type == 2 ? calcTotalOut + parseFloat(data.amount) : calcTotalOut + 0;
        return data;
      });
      setTotalIn(calcTotalIn);
      setTotalOut(calcTotalOut);
    }
  }, [pettyList]);
  useEffect(() => {
    if (!pettyOpen) {
      setFormDisabled(false);
      setViewData({});
    }
  }, [pettyOpen]);
  const handlePrint = () => {
    const printContents = tableRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };
  const handleExport = () => {
    const headers = ['Date', 'Cash IN/OUT', 'Vendor', 'Reason', 'Payment Method', 'Paid By', 'In Amount', 'Out Amount', 'Balance'];
    const data = pettyList.data;
    // Create an array that starts with the custom headers
    const dataWithHeaders = [headers, ...data.map(row => [
      row.created_at,
      row.payment_type == 1 ? 'IN' : 'OUT',
      row.vendor && row.vendor.supplier ? row.vendor.supplier : '',
      row.reason,
      row.payment_method == 1 ? 'Cash' : (row.payment_method == 2 ? 'Bank Transfer' : 'Card Payment'),
      row.paid_by,
      row.payment_type == 1 ? row.amount : '',
      row.payment_type == 1 ? '' : row.amount,
      row.balance
    ])];

    // Create a new worksheet with the data and custom headers
    const worksheet = XLSX.utils.aoa_to_sheet(dataWithHeaders);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Convert workbook to a buffer and save the file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(file, `petty-cash${dayjs(selectedDate).format('YYYY-MM-DD')}.xlsx`);
  };
  const handleExportPdf = async () => {
    setIsSavingPdf(true);
    try {
      const url = `${base_url}/petty-cash/get-export-url`;
      const response = await axios.get(url, {
        params: {
          date: selectedDate.format('YYYY-MM-DD'),
          date2: selectedDate2.format('YYYY-MM-DD'),
          cashType: selectedCashType,
          vendor: selectedCategory,
          reason: selectedReason,
          paymentMethod: selectedPaymentMethod,
          paidBy: selectedPaidBy
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
  return (
    <DashboardLayout
      heading={'Suppliers'}
      headingAction={() => {
        setVendorOpen(true);
      }}
    >
      <div className="block md:hidden sub-header">
        <div className="sub-head-sub">
          <div className="head-btn" onClick={() => setVendorOpen(true)}>
            <a href="#" data-toggle="modal">
              Add New Vendor
            </a>
            <div className="">+</div>
          </div>
          <div className="head-btn" onClick={() => setPettyOpen(true)}>
            <Link to={'#'}>Add New Petty Cash</Link>
            <div className="">+</div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 px-4 py-2'>
        <span className='text-2xl font-medium'>Pettycash</span>
      </div>

      <div
        className="pettycash-table data-table table-responsive-on-lg"
        style={{ width: "100%", minHeight: "90vh", padding: "15px" }}
        ref={tableRef}
      >
        <table className="table w-full">
          <thead className='petty-cash-head'>
            <tr>
              {/* <!-- Date dropdown --> */}
              <th style={{ width: "12%" }}>
                <div>
                  <span>Date</span>
                  {/* <DatePicker
                    allowClear={false}
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
              <th style={{ width: "8%" }}>
                <div>
                  <span>Cash IN/OUT</span>
                  <select className="form-control" value={selectedCashType} onChange={(e) => setSelectedCashType(e.target.value)}>
                    <option value="">All</option>
                    <option value="1">Cash IN</option>
                    <option value="2">Cash OUT</option>
                  </select>
                </div>
              </th>

              {/* <!-- Vendor Name dropdown --> */}
              <th style={{ width: "12%" }}>
                <div>
                  <span>Vendor</span>
                  <select className="form-control" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">All</option>
                    {listVendors && listVendors.data && Array.isArray(listVendors.data) && listVendors.data.map((item) => (
                      <option key={`${item.id}_${item.supplier}`} value={item.id}>{item.supplier}</option>
                    ))}
                  </select>
                </div>
              </th>

              {/* <!-- Reason text field --> */}
              <th style={{ width: "20%" }} className="Reason_text_field">
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
                  <span>IN </span>
                  <span>Amount</span>
                </div>
              </th>
              <th style={{ width: "6%", backgroundColor: "#F4B183" }}>
                <div>
                  <span>OUT</span>
                  <span>Amount</span>
                </div>
              </th>
              <th style={{ width: "6%", backgroundColor: "#548235" }}>
                <div>
                  <span>BALANCE </span>
                  <span>In-Hand</span>
                </div>
              </th>

              {/* <!-- Empty column --> */}
              <th
                style={{ width: "6%", backgroundColor: "transparent" }}
              >
                {pettyList && pettyList.loading == true ?
                  <TableActionLoader />
                  : <></>}
              </th>

              {/* <!-- Action button --> */}
              <th>
                <div className="action-column">
                  <a
                    href="#"
                    data-toggle="modal"
                    onClick={() => setPettyOpen(true)}
                  >
                    +
                  </a>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {pettyList && pettyList.data && Array.isArray(pettyList.data) && pettyList.data.map((data) => (
              <tr key={`${data.id}_list_petty`}>
                <td>{data.created_at ? dayjs(convertDbDateToDate(data.created_at)).format('DD/MM/YYYY') : ''}</td>
                <td>{data.payment_type == 1 ? 'IN' : 'OUT'}</td>
                <td>{data.vendor && data.vendor.supplier ? data.vendor.supplier : ''}</td>
                <td>{data.title}</td>
                <td>{data.payment_method == 1 ? 'Cash' : (data.payment_method == 2 ? 'Bank Transfer' : 'Card Payment')}</td>
                <td>{data?.paid_user?.name}</td>
                <td>{data.payment_type == 1 ? data.amount : ''}</td>
                <td>{data.payment_type == 2 ? data.amount : ''}</td>
                <td>
                  <div className='flex flex-row'>
                    {data.edited_cash_in_hand ?
                      <span className='line-through pr-2'>{data.edited_cash_in_hand}</span>
                      : <></>}
                    <span>{data.balance}</span>
                  </div>
                </td>
                <td>Posted</td>
                <td>
                  <div className="pettycash-actions">
                    <div>
                      <a href="#" data-toggle="modal" onClick={() => {
                        setFormDisabled(true);
                        setViewData(data);
                        setPettyOpen(true);
                      }}>
                        <img src={folder} alt="" />
                      </a>
                    </div>
                    {/* <div>
                      <a href="">
                        <img src={edit} alt="" />
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <img src={deletebtn} alt="" />
                      </a>
                    </div> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className='hide-in-pdf'>
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
              <td className="end-row-end">
                <div>Total</div>
              </td>
              <td style={{ padding: "8px 0" }}>
                <div className="pettycash-total-in-amount">{totalIn.toLocaleString('en')}</div>
              </td>
              <td style={{ padding: "8px 0" }}>
                <div className="pettycash-total-out-amount">{totalOut.toLocaleString('en')}</div>
              </td>
              <td colSpan="3"></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <AddPettyCash
        pettyOpen={pettyOpen}
        setPettyOpen={setPettyOpen}
        afterSubmit={() => {
          setTriggerFlag(!triggerFlag);
        }}
        formDisabled={formDisabled}
        viewData={viewData}
      />
      <AddVendor
        vendorOpen={vendorOpen}
        setVendorOpen={setVendorOpen}
      />
      {isSvavingPdf &&
        <Loader />
      }
    </DashboardLayout>
  );
}

export default PettyCash;