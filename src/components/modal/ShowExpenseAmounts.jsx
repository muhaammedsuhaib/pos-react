import React, { useCallback, useEffect, useRef, useState } from 'react';
import { block, edit } from '../utils/icons';
import { message, Modal, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeVendorStatus as changeVendorStatusAction, getVendors, listPettyCashCategory, listVendors, savePaymentVendor } from '../../reducer/pettycash/actions';
import { pettycashActions, selectChangeVendorStatus, selectPettyCashCategory, selectSavePaymentVendor, selectVendorList, selectVendors } from '../../reducer/pettycash/reducer';
import AddPettyCategory from './AddPettyCategory';
import debounce from 'lodash.debounce';
import Loader from '../loader/loader';
import TableActionLoader from '../loader/TableActionLoader';
import IntlTelInput from 'intl-tel-input/reactWithUtils';
import "intl-tel-input/styles";
function ShowExpenseAmounts({ expenseAmountOpen, setExpenseAmountOpen, setVendorId, ...props }) {
  const dispatch = useDispatch();
  const vendorList = useSelector(selectVendorList);
  const vendorsList = useSelector(selectVendors);
  const listCategory = useSelector(selectPettyCashCategory);
  const paymentVendor = useSelector(selectSavePaymentVendor);
  const changeVendorStatus = useSelector(selectChangeVendorStatus);
  const [isSave, setIsSave] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  useEffect(() => {
    if (listCategory && listCategory.data && Array.isArray(listCategory.data)) {
      const datas = [{ label: 'Supplier category', value: '', disabled: true }];
      listCategory.data.map((item) => {
        datas.push({
          value: item.id,
          label: item.category_name
        })
        return item;
      });
      setCategoryList(datas);
    }
  }, [listCategory]);
  const [searchCategory, setSearchCategory] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchContact, setSearchContact] = useState('');
  const [searchContactNumber, setSearchContactNumber] = useState('');
  const [searchStatus, setSearchStatus] = useState('');

  const [phoneNumberLength, setPhoneNumberLength] = useState(0);

  const [editId, setEditId] = useState(0);
  const [supplier, setSupplier] = useState('');
  const [category, setCategory] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [validContactNumber, setValidContactNumber] = useState(false);
  const [note, setNote] = useState('');

  const fetchData = useCallback(() => {
    // if (vendorList && vendorList.loading == false) {
    dispatch(listVendors());
    // }
    // if (listCategory && listCategory.loading == false) {
    dispatch(listPettyCashCategory());
    // }
  }, [dispatch]);

  const handleSubmit = (status) => {
    if (contactNumber && contactNumber.length > 0 && !validContactNumber) {
      message.error("Phone number is not valid");
      return;
    }
    const formsData = {
      supplier: supplier,
      category: category,
      contact_person: contactPerson,
      contact_number: contactNumber,
      note: note,
      id: editId
    }
    setSaveLoading(true);
    dispatch(savePaymentVendor(formsData))
      .then((res) => {
        const data = res.payload;
        setSaveLoading(false);
        if (data && data.status == true) {
          message.success(data.message ? data.message : 'Success');
          dispatch(pettycashActions.clearSavePaymentVendors());
          if (vendorsList && vendorsList.loading == false) {
            dispatch(getVendors());
          }
          if (vendorList && vendorList.loading == false) {
            dispatch(listVendors());
          }
          setVendorOpen(status);
          setEditId(0);
          setSupplier('');
          setCategory('');
          setContactPerson('');
          setContactNumber('');
          setNote('');
        }
        if (data && data.status == false) {
          if (data && data.data && typeof data.data === 'object') {
            for (const key in data.data) {
              message.error(data.data[key][0]);
              break;
            }
          }
          if (data && data.status == false) {
            if (Object.keys(data.data).length > 0)
              dispatch(pettycashActions.clearSavePaymentVendors());
          }
        }
      });
  }
  useEffect(() => {
    if (paymentVendor && paymentVendor.status == false) {
      if (paymentVendor && paymentVendor.data && typeof paymentVendor.data === 'object') {
        for (const key in paymentVendor.data) {
          message.error(paymentVendor.data[key][0]);
          break;
        }
      }
      if (paymentVendor && paymentVendor.status == false) {
        if (Object.keys(paymentVendor.data).length > 0)
          dispatch(pettycashActions.clearSavePaymentVendors());
      }
    }
  }, [paymentVendor]);
  useEffect(() => {
    setEditId(0);
    setSupplier('');
    setCategory('');
    setContactPerson('');
    setContactNumber('');
    setNote('');
    const debounceDispatch = debounce(() => {
      if (vendorOpen) {
        fetchData();
      }
    }, 750);
    debounceDispatch();
    return () => {
      debounceDispatch.cancel();
    };
  }, [vendorOpen]);
  const handleStatusOfTheVendor = (data) => {
    if (!changeVendorStatus || !changeVendorStatus.loading) {
      var datas = vendorList;
      var pushDatas = datas.data;
      var updateData = pushDatas.map((item) => {
        if (item.id === data.id) {
          return {
            ...item,
            is_active: data.is_active === 1 ? 0 : 1,
          };
        } else {
          return item;
        }
      });
      dispatch(pettycashActions.changeVendorStatus({ datas, data: updateData }));
      setSaveLoading(true);
      dispatch(changeVendorStatusAction({ id: data.id, status: data.is_active == 1 ? 0 : 1 })).then((res) => {
        setSaveLoading(false);
        const data = res.payload;
        message.success(data.message ? data.message : 'Vendor status changed successfully');
        fetchData();
      });
    }
  }
  useEffect(() => {
    if (changeVendorStatus && changeVendorStatus.status) {
      dispatch(pettycashActions.clearChangeVendorStatus());
    }
  }, [changeVendorStatus])
  return (
    <>
      <Modal
        title="Expense Invoice List"
        open={expenseAmountOpen}
        onOk={() => setExpenseAmountOpen(false)}
        onCancel={() => setExpenseAmountOpen(false)}
        footer={false}
        width={1000}
      >
        <div className="addPettyCashVendor" id="addPettyCashVendor">
          <form
            className="validForm pettyCashAdd"
            noValidate="novalidate"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="hidden" name="ci_csrf_token" value="" />
            <div className="modal-content">
              <div className="modal-body">
                <div>
                  <div className="flex px-2 py-4">
                    <div className="w-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        <div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="title"
                              className="form-control"
                              placeholder="Supplier"
                              value={supplier}
                              onChange={(e) => setSupplier(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="title"
                              className="form-control"
                              placeholder="Contact person's Name"
                              value={contactPerson}
                              onChange={(e) => setContactPerson(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="form-group ">
                            <div className="category-group">
                              <Select
                                showSearch
                                placeholder="Supplier category"
                                optionFilterProp="label"
                                onChange={(e) => setCategory(e)}
                                value={category}
                                defaultValue={category}
                                style={{ width: '100%' }}
                                options={categoryList}
                              />
                              <a
                                href="#"
                                data-toggle="modal"
                                onClick={() => setCategoryOpen(!categoryOpen)}
                              >
                                +
                              </a>
                            </div>
                          </div>
                          <div className="form-group">
                            <IntlTelInput
                              onChangeNumber={(number) => {
                                setContactNumber(number);
                              }}
                              onChangeValidity={setValidContactNumber}
                              inputProps={{
                                className: "form-control",
                                inputMode: "tel|number",
                              }}
                              initOptions={{
                                initialCountry: "ae",
                                countryOrder: ["ae", "in", "sa"],
                                countrySearch: false,
                                customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) => {
                                  setPhoneNumberLength(selectedCountryPlaceholder.replaceAll(" ", "").length);
                                  return "eg:- " + selectedCountryPlaceholder;
                                },
                                containerClass: "!block",
                                separateDialCode: true,
                              }}
                            />
                            {contactNumber && contactNumber.length > 0 && !validContactNumber && <div className="text-red-600">Invalid Phone Number</div>}
                          </div>
                        </div>
                        <div className="">
                          <div className="form-group">
                            <textarea
                              name=""
                              id=""
                              className="form-control note-field"
                              placeholder="Note / Bank Details"
                              value={note}
                              onChange={(e) => setNote(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-container addPettyCashVendor-table">
                  <div className='overflow-y-auto max-h-[45vh] scrollbar-hide'>
                    <table className="table data-table mb-0 w-[1200px] md:w-auto ">
                      <thead className='sticky top-0 z-10'>
                        <tr>
                          {/* <!-- Date dropdown --> */}
                          <th style={{ width: "15%" }}>
                            <div>
                              <span>Supplier</span>
                              <input
                                type="text"
                                className="form-control bg-[#D6DCE5]"
                                placeholder="Supplier"
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                              />
                            </div>
                          </th>

                          {/* <!-- Cash IN/OUT dropdown --> */}
                          <th style={{ width: "15%" }}>
                            <div>
                              <span>Category</span>
                              <select className="form-control" value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)}>
                                <option value="">
                                  All
                                </option>
                                {categoryList?.map((item) => (
                                  <option key={item.value} value={item.value}>{item.label}</option>
                                ))}
                              </select>
                            </div>
                          </th>

                          {/* <!-- Vendor Name dropdown --> */}
                          <th style={{ width: "10%" }}>
                            <div>
                              <span>Contact Person</span>
                              <input
                                type="text"
                                className="form-control bg-[#D6DCE5]"
                                placeholder="Contact Person"
                                value={searchContact}
                                onChange={(e) => setSearchContact(e.target.value)}
                              />
                            </div>
                          </th>

                          {/* <!-- Reason text field --> */}
                          <th
                            style={{ width: "10%" }}
                            className="Reason_text_field"
                          >
                            <div>
                              <span>Phone</span>
                              <input
                                type="text"
                                className="form-control bg-[#D6DCE5]"
                                placeholder="Phone"
                                value={searchContactNumber}
                                onChange={(e) => setSearchContactNumber(e.target.value)}
                              />
                            </div>
                          </th>

                          {/* <!-- Method dropdown --> */}
                          <th style={{ width: "9%" }}>
                            <div>
                              <span>Status</span>
                              <select className="form-control" value={searchStatus} onChange={(e) => setSearchStatus(e.target.value)}>
                                <option value="">
                                  All
                                </option>
                                <option value="1">Active</option>
                                <option value="0">In-active</option>
                              </select>
                            </div>
                          </th>
                          <th style={{ width: "4%" }}>
                            {vendorList && vendorList.loading == true ?
                              <TableActionLoader />
                              : <></>}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {vendorList && vendorList.data && Array.isArray(vendorList.data) && vendorList.data.filter((item) => {
                          return (
                            (searchName.length === 0 || item.supplier.toLowerCase().includes(searchName.toLowerCase())) &&
                            (searchCategory.length === 0 || item.category_id == searchCategory) &&
                            (searchContact.length === 0 || item.contact_person.toLowerCase().includes(searchContact.toLowerCase())) &&
                            (searchContactNumber.length === 0 || item.contact_number.includes(searchContactNumber)) &&
                            (searchStatus === '' || item.is_active == searchStatus)
                          );
                        }).map((item) => (
                          <tr key={item.id} className={item.is_active == 0 ? `cash_cancelled` : ''}>
                            <td>{item.supplier}</td>
                            <td>{item.category && item.category.category_name ? item.category.category_name : ''}</td>
                            <td>{item.contact_person}</td>
                            <td>{item.contact_number}</td>
                            <td>{item.is_active == 1 ? 'Active' : 'In-active'}</td>
                            <td>
                              <div className="pettycash-actions">
                                <div>
                                  <a href="#" onClick={() => {
                                    setEditId(item.id);
                                    setCategory(item.category_id);
                                    setContactNumber(item.contact_number);
                                    setContactPerson(item.contact_person);
                                    setSupplier(item.supplier);
                                    setNote(item.note);
                                  }}>
                                    <img src={edit} alt="edit" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" onClick={() => {
                                    handleStatusOfTheVendor(item);
                                  }}>
                                    <img src={block} alt="block" />
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex justify-center items-center mt-8 mb-4 gap-[10px]">
                  <button
                    type="button"
                    className="btn close bg-[#000000] rounded-[20px] text-white uppercase text-[14px]"
                    data-dismiss="modal"
                    aria-hidden="true"
                    style={{ padding: "3px 40px" }}
                    onClick={() => {
                      // setIsSave(false);
                      handleSubmit(true);
                    }}
                  >
                    {`${editId > 0 ? 'Update' : 'Save'} & Add New`}
                  </button>
                  <button
                    type="button"
                    className="btn bg-[#FF6748] rounded-[20px] text-white uppercase text-[14px]"
                    style={{ padding: "3px 40px" }}
                    onClick={() => {
                      // setIsSave(true);
                      handleSubmit(false);
                    }}
                  >
                    {`${editId > 0 ? 'Update' : 'Save'} & Close`}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div >
      </Modal >
      <AddPettyCategory
        categoryOpen={categoryOpen}
        setCategoryOpen={setCategoryOpen}
        setCategoryId={setCategory}
      />
      {saveLoading && (
        <Loader />
      )}
    </>
  );
}

export default ShowExpenseAmounts;