import React from 'react';
import { block, edit } from '../utils/icons';
import { Modal } from 'antd';
function AddVendorCategory({ categoryOpen, setCategoryOpen, ...props }) {
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
            action="https://pos.brixbull.ai/admin/pos/add_expense"
            method="post"
            className="validForm pettyCashAdd"
            encType="multipart/form-data"
            noValidate="novalidate"
          >
            <input type="hidden" name="ci_csrf_token" value="" />
            <div className="modal-content">
              <div className="modal-body">
                <div className="flex items-center py-5 px-4 gap-3">
                  <div className="form-group h-full w-full sm:w-[60%] md:w-[50%] items-center supplier-field" style={{ marginBottom: '0 !important' }}>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Supplier"
                    />
                  </div>

                  <div className="w-[20%] sm:w-[8%] flex justify-center items-center">
                    <div className="action-column flex justify-center items-center">
                      <a href="#" data-toggle="modal">
                        +
                      </a>
                    </div>
                  </div>
                </div>

                <div className="table-container addPettyCashVendor-table overflow-scroll">
                  <table className="table data-table mb-0 w-[600px] md:w-auto ">
                    <thead>
                      <tr>
                        {/* <!-- Date dropdown --> */}
                        <th style={{ width: "25%" }}>
                          <div>
                            <span>Category</span>
                            <select className="form-control">
                              <option value="" selected disabled>
                                Category
                              </option>
                              <option value="2024-07-15">15/07/2024</option>
                              <option value="2024-07-16">16/07/2024</option>
                              <option value="2024-07-17">17/07/2024</option>
                            </select>
                          </div>
                        </th>

                        {/* <!-- Cash IN/OUT dropdown --> */}
                        <th style={{ width: "15%" }}>
                          <div>
                            <span>Status</span>
                            <select className="form-control">
                              <option value="" selected disabled>
                                Status
                              </option>
                              <option value="IN">Cash IN</option>
                              <option value="OUT">Cash OUT</option>
                            </select>
                          </div>
                        </th>

                        <th style={{ width: "8%" }}></th>
                      </tr>
                    </thead>
                    <tr className="">
                      <td>Badheem Trading</td>
                      <td>Active</td>
                      <td>
                        <div className="pettycash-actions">
                          <div>
                            <a href="">
                              <img src={edit} alt="edit" />
                            </a>
                          </div>
                          <div>
                            <a href="">
                              <img src={block} alt="block" />
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td>KM Wholesale Group</td>
                      <td>Active</td>
                      <td>
                        <div className="pettycash-actions">
                          <div>
                            <a href="">
                              <img src={edit} alt="edit" />
                            </a>
                          </div>
                          <div>
                            <a href="">
                              <img src={block} alt="block" />
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="cash_cancelled">
                      <td>Al Wadi Foodstuffs</td>
                      <td>Cancelled</td>
                      <td>
                        <div className="pettycash-actions">
                          <div>
                            <a href="">
                              <img src={edit} alt="edit" />
                            </a>
                          </div>
                          <div>
                            <a href="">
                              <img src={block} alt="block" />
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td>Badheem Trading</td>
                      <td>Active</td>
                      <td>
                        <div className="pettycash-actions">
                          <div>
                            <a href="">
                              <img src={edit} alt="edit" />
                            </a>
                          </div>
                          <div>
                            <a href="">
                              <img src={block} alt="block" />
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>

                <div className="flex justify-center items-center mt-8 mb-4 gap-[10px]">
                  <button
                    type="button"
                    className="btn close bg-[#000000] rounded-[20px] text-white uppercase text-[14px]"
                    data-dismiss="modal"
                    aria-hidden="true"
                    style={{ padding: "3px 40px" }}
                    onClick={() => setCategoryOpen(false)}
                  >
                    close
                  </button>
                  <button
                    type="submit"
                    className="btn bg-[#FF6748] rounded-[20px] text-white uppercase text-[14px]"
                    style={{ padding: "3px 40px" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default AddVendorCategory;