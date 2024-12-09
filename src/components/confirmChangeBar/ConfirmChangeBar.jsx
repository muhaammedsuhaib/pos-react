import { useDispatch, useSelector } from 'react-redux';
import mergeImg from "../../../public/images/pos-category-images/Marge Call.svg"
import changeImg from "../../../public/images/pos-category-images/share_14618682[1].svg"
import settingImg from "../../../public/Settings.svg";
import { ordersActions, selectOrderAreaFilter, selectOrderTableArea } from '../../reducer/orders/reducer';
import { useEffect, useState } from 'react';
function ConfirmChangeBar() {
  const dispatch = useDispatch();
  const tableAreas = useSelector(selectOrderTableArea);
  const [selectedArea, setSelectedArea] = useState('');
  useEffect(() => {
    dispatch(ordersActions.setOrderAreaFilter(selectedArea));
    if (tableAreas && tableAreas.data && Array.isArray(tableAreas.data) && tableAreas.data.length > 0 && selectedArea == '') {
      dispatch(ordersActions.setOrderAreaFilter(tableAreas.data[0].id));
    }
  }, [selectedArea, dispatch, tableAreas]);
  return (
    <div className="w-full flex pl-[5px] items-center justify-between h-[50px] mt-[5px] relative overflow-y-hidden">
      <div className="flex items-center space-x-[5px]">
        <div className="flex items-center space-x-[10px] bg-[#7A7A7A] px-[10px] py-[7px] rounded-[20px] mediumShadow">
          {tableAreas && tableAreas.data && Array.isArray(tableAreas.data) && tableAreas.data.length > 0 ? (
            tableAreas.data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`w-auto px-3 uppercase ${(index == 0 && selectedArea == '') || selectedArea == item.id ? 'bg-primeryFirst' : 'bg-[#77B99C]'} text-white text-[12px] py-[3px] rounded-[13px] mediumShadow hover:border-black hover:border-[1px] active:bg-black`}
                  onClick={() => {
                    // if (selectedArea == item.id) {
                    //   setSelectedArea('');
                    // } else {
                    // }
                    setSelectedArea(item.id);
                  }}
                >
                  {item.area_name}
                </button>
              );
            })
          ) : <></>}
        </div>
        <button className="w-[30px] h-[30px] bg-[#FF5534] mr-[10px] rounded-full mediumShadow flex justify-center items-center hover:border-black hover:border-[1px] active:bg-black">
          <img src={settingImg} alt="" className="w-[23px]" />
        </button>
      </div>
      <div className="flex justify-end items-center pr-[5px] space-x-[7px]">
        <button className="text-white bg-[#FF5838] text-[12px] ] xl:w-[150px] lg:w-[130px] py-[5px] mediumShadow rounded-[20px] active:bg-black  border-2 border-transparent hover:border-black">
          CONFIRM CHANGES
        </button>
        <div className="flex items-center space-x-[5px]">
          <h1 className="text-white text-[12px] ">CHANGE</h1>
          <div className="w-[35px] h-[35px] bg-primeryFirst rounded-full border-2 flex justify-center items-center active:bg-black hover:border-black ">
            <img src={changeImg} alt="" className="w-[28px]" />
          </div>
        </div>
        <div className="flex items-center space-x-[5px]">
          <h1 className="text-white text-[12px]">MERGE</h1>
          <div className="w-[35px] h-[35px] bg-primeryFirst rounded-full border-2 flex justify-center items-center active:bg-black hover:border-black ">
            <img src={mergeImg} alt="" className="w-[23px]" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default ConfirmChangeBar