import React, { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { message, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { block, edit } from '../utils/icons';
import { changePettyCashCategoryStatus, listAllPettyCashCategory, listPettyCashCategory, savePettyCashCategory } from '../../reducer/pettycash/actions';
import { pettycashActions, selectAllPettyCashCategory, selectPettyCashCategoryStatus, selectSavePettyCashCategory } from '../../reducer/pettycash/reducer';
import Loader from '../loader/loader';
import TableActionLoader from '../loader/TableActionLoader';
import { BiSolidDownArrow } from 'react-icons/bi';
function AddPettyCategory({ categoryOpen, setCategoryOpen, setCategoryId, ...props }) {
  const [isSave, setIsSave] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [trigger, setTrigger] = useState(true);
  const dispatch = useDispatch();
  const allCategory = useSelector(selectAllPettyCashCategory);
  const changeCategoryStatus = useSelector(selectPettyCashCategoryStatus);
  const saveCategoryStatus = useSelector(selectSavePettyCashCategory);
  const [name, setName] = useState('');
  const [editId, setEditId] = useState(0);
  const [searchName, setSearchName] = useState('');
  const [status, setStatus] = useState(-1);
  const [tableOpen, setTableOpen] = useState(false);
  const resetForm = () => {
    setName('');
    setEditId(0);
  }
  useEffect(() => {
    const debounceDispatch = debounce(() => {
      // if (allCategory && allCategory.loading == false && categoryOpen == true) {
      dispatch(listAllPettyCashCategory());
      // }
    }, 750);
    debounceDispatch();
    setName('');
    setEditId(0);
    setSearchName('');
    setStatus(-1);
    setIsSaved(false);
    return () => {
      debounceDispatch.cancel();
    };
  }, [categoryOpen]);
  const changeStatus = (data) => {
    setIsSaved(true);
    var datas = allCategory;
    var pushDatas = datas.data;
    // console.log(vendorList, 'vendorsList');
    var updateData = pushDatas.map((item) => {
      if (item.id === data.id) {
        return {
          ...item,
          is_active: data.is_active,
        };
      } else {
        return item;
      }
    });

    dispatch(pettycashActions.changeCategoryStatus({ datas, data: updateData }));
    dispatch(changePettyCashCategoryStatus({ id: data.id, status: data.status })).then((res) => {
      setIsSaved(false);
    });
  }
  const saveCategory = (status) => {
    if (name == '') {
      message.error('Category Name is required');
      return;
    }
    setIsSaved(true);
    dispatch(savePettyCashCategory({ id: editId, name: name })).then((res) => {
      const data = res.payload;
      setIsSaved(false);
      if (data && data.status == true) {
        setCategoryOpen(status);
        const msg = data.message ? data.message : 'Success';
        message.success(msg);
        dispatch(pettycashActions.clearSavePettyCashCategory());
        dispatch(listPettyCashCategory());
        dispatch(listAllPettyCashCategory());
        setCategoryId(data.data.id);
        setTrigger(!trigger);
        setName('');
        setEditId(0);
      } else if (data && data.status == false) {
        const msg = data.message ? data.message : 'Failed';
        message.error(msg);
      }
    });
  }
  useEffect(() => {
    const debounceDispatch = debounce(() => {
      if (changeCategoryStatus && changeCategoryStatus.status) {
        // if (allCategory && allCategory.loading == false) {
        dispatch(listAllPettyCashCategory());
        dispatch(listPettyCashCategory());
        // }
        dispatch(pettycashActions.clearChangeCategoryStatus());
      }
    }, 750);
    debounceDispatch();
    return () => {
      debounceDispatch.cancel();
    };
  }, [changeCategoryStatus]);
  useEffect(() => {
    if (saveCategoryStatus && saveCategoryStatus.status == false) {
      if (!saveCategoryStatus.data || (saveCategoryStatus.data && Object.keys(saveCategoryStatus.data).length > 0))
        dispatch(pettycashActions.clearSavePettyCashCategory());
    }
  }, [saveCategoryStatus]);
  useEffect(() => {
    if (resetForm) resetForm();
  }, [isSave, categoryOpen, trigger]);
  return (
    <>
      <Modal
        title="Category"
        open={categoryOpen}
        onOk={() => setCategoryOpen(false)}
        onCancel={() => setCategoryOpen(false)}
        footer={false}
        width={650}
      >
        <div className="addPettyCashVendor" id="addPettyCashVendor">
          <form
            className="validForm pettyCashAdd"
            noValidate="novalidate"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="modal-content">
              <div className="modal-body">
                <div className='grid grid-cols-1 px-4 py-3'>
                  <span className='text-[1rem] font-medium'>Add New Category</span>
                </div>
                <div className="flex items-center pb-5 px-4 gap-3">
                  <div className="form-group h-full w-full sm:w-[60%] md:w-[50%] items-center supplier-field" style={{ marginBottom: '0 !important' }}>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Category"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onKeyUp={(e) => {
                        if (e.key == 'Enter') {
                          saveCategory(false);
                        }
                      }}
                    />
                  </div>
                </div>
                <div className='px-4 flex'>
                  <label
                    className="note-label !flex items-center gap-1"
                    onClick={() => setTableOpen(!tableOpen)}
                  >
                    <span className='pr-2'>Show Category List: </span>
                    <span><BiSolidDownArrow className={`text-[#ff5634] transition-transform duration-500 ${tableOpen ? 'rotate-180' : 'rotate-0'}`} /></span>
                  </label>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${tableOpen ? 'max-h-[40vh] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="table-container addPettyCashVendor-table">
                    <div className='overflow-y-auto max-h-[38vh] min-h-[38vh] scrollbar-hide rounded-tl-[16px] rounded-b-[16px] relative'>
                      <table className="table data-table mb-0 w-[600px] md:w-auto z-50 rounded-t-[16px] rounded-b-[16px]">
                        <thead className='sticky top-0 bg-gray-500 left-0 z-10'>
                          <tr>
                            <th style={{ width: "25%" }}>
                              <div>
                                <span>Category</span>
                                <input
                                  type='text'
                                  className='form-control'
                                  placeholder='Category name'
                                  onChange={(e) => setSearchName(e.target.value)}
                                  value={searchName}
                                />
                              </div>
                            </th>
                            <th style={{ width: "15%" }}>
                              <div>
                                <span>Status</span>
                                <select
                                  className="form-control"
                                  value={status}
                                  onChange={(e) => setStatus(e.target.value)}
                                >
                                  <option value="-1">All</option>
                                  <option value="1">Active</option>
                                  <option value="0">In-active</option>
                                </select>
                              </div>
                            </th>
                            <th style={{ width: "8%" }}>
                              {allCategory && allCategory.loading == true ?
                                <TableActionLoader />
                                : <></>}
                            </th>
                          </tr>
                        </thead>
                        <tbody className='rounded-b-[16px]'>
                          {allCategory && allCategory.data && Array.isArray(allCategory.data) ? (
                            allCategory.data.filter((item) => {
                              return searchName.length > 0 ? item.category_name.toLowerCase().includes(searchName.toLowerCase())
                                && (status == -1 || item.is_active == status) : (status == -1 || item.is_active == status);
                            }).map((item, index) => (
                              <tr key={item.id} className={(item.is_active ? '' : 'cash_cancelled')}>
                                <td>{item.category_name}</td>
                                <td>{item.is_active ? 'Active' : 'In-active'}</td>
                                <td>
                                  <div className="pettycash-actions">
                                    <div>
                                      <a href="#" onClick={() => {
                                        setEditId(item.id);
                                        setName(item.category_name);
                                      }}>
                                        <img src={edit} alt="edit" />
                                      </a>
                                    </div>
                                    <div>
                                      <a href="#" onClick={() => changeStatus({
                                        id: item.id, status: item.is_active ? 0 : 1
                                      })}>
                                        <img src={block} alt="block" />
                                      </a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : <></>}
                        </tbody>
                      </table>
                      {/* <div className="absolute inset-0 bg-gray-100 rounded-[16px] pointer-events-none" /> */}
                    </div>
                  </div>
                </div>
                <div className='modal-footer footer-sm py-4'>
                  <button
                    type="button"
                    data-dismiss="modal"
                    aria-hidden="true"
                    style={{ padding: "3px 40px" }}
                    onClick={() => {
                      saveCategory(true);
                    }}
                  >
                    {`${editId > 0 ? 'Update' : 'Save'} & Add New`}
                  </button>
                  <button
                    type="button"
                    style={{ padding: "3px 40px" }}
                    onClick={() => {
                      saveCategory(false);
                    }}
                  >
                    {`${editId > 0 ? 'Update' : 'Save'} & Close`}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      {isSaved && (
        <Loader />
      )}
    </>
  );
}

export default AddPettyCategory;