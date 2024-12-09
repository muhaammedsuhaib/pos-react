import React, { useEffect, useState } from 'react';
import { SearchOutlined } from "@ant-design/icons"
import { ConfigProvider, Input, Segmented } from "antd"
import './miniCategory.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoryList,selectspecialCategoryList } from '../../reducer/categories/reducer';
import { listCategories,listspecialCategories } from '../../reducer/categories/actions';

function MiniCategory({handleCategoryChange}) {
    const [selectedTab,setSelectedTab] = useState('NORMAL')
    const [activeGrid,setActiveGrid] = useState('1')
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();
    const categories = useSelector(selectCategoryList);
    const specialcategories = useSelector(selectspecialCategoryList);

    useEffect(() => {
        dispatch(listCategories());
        dispatch(listspecialCategories());
    }, [dispatch]);

    // Combined filtered categories based on search input
    const getFilteredCategories = () => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        
        if (selectedTab === 'NORMAL') {
            return categories && Array.isArray(categories.data)
                ? categories.data.filter(category =>
                    category.name.toLowerCase().includes(lowerCaseSearchTerm)
                )
                : [];
        } else {
            return specialcategories && Array.isArray(specialcategories.data)
                ? specialcategories.data.filter(specialcategory =>
                    specialcategory.title.toLowerCase().includes(lowerCaseSearchTerm)
                )
                : [];
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleChangeTab = (value) => {
        setSelectedTab(value);
    };

const filteredCategories = getFilteredCategories();
  return (
    <div className={`${ activeGrid === '1' || selectedTab === 'SPECIAL' ? 'w-[130px]' : 'w-[250px]' } h-full space-y-[5px] minCategoryParentDive `}>
        <div className="w-full px-[5px]">
            <h1 className="text-white text-[12px] text-center border-b ">CATEGORIES</h1>
            <div className="w-full flex justify-center">
                <i className="downArrow"></i>
            </div>
        </div>
        <div className="w-full px-[5px]">
  <ConfigProvider
    theme={{
      components: {
        Segmented: {
          colorBgBase: '#000',
        },
      },
    }}
  >
    <div className="w-full"> {/* Ensures the Segmented component takes full width */}
      <Segmented
        options={['NORMAL', 'SPECIAL']}
        size="small"
        onChange={handleChangeTab}
        style={{ width: '100%' }} 
      />
    </div>
  </ConfigProvider>
</div>
        {selectedTab === 'NORMAL' ? (

        <div className="w-full flex item-center justify-center space-x-[5px] py-[5px]">
            <div className={`${activeGrid === '1' ? 'bg-black ' : 'bg-[#767070]'} w-[30px] h-[30px]  flex items-center justify-center smallShadow rounded-md cursor-pointer oneGrid`} onClick={()=>setActiveGrid('1')}>
                <img src="/public/images/item_mini-category/Category Single.png" alt="" className=" h-[23px]" />
            </div>
            <div className={`${activeGrid === '2' ? 'bg-black ' : 'bg-[#767070]'} w-[30px] h-[30px]  flex items-center justify-center smallShadow rounded-md cursor-pointer twoGrid`} onClick={()=>setActiveGrid('2')}>
            <img src="/public/images/item_mini-category/Category Double.png" alt="" className=" h-[23px]" />
            </div>
        </div>
        ) : ''}
        <div className="w-full px-[5px]">
            <Input 
            className="h-[30px] rounded-[20px] text-[12px]" 
            placeholder="Search..." 
            suffix={<SearchOutlined className="text-gray-400"/>}
            value={searchTerm}
            onChange={handleSearchChange}/>
        </div>
        {selectedTab === 'NORMAL' ? (
        <div className="w-full minCategoryItems overflow-y-scroll">
            <div className={`w-full px-[15px] gap-y-[10px] grid grid-flow-row ${activeGrid === '1' ? 'grid-cols-1' : 'grid-cols-2 gap-x-[10px]'}`}>
            {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                <div key={category.id} className="h-[110px] bg-[#515151] rounded-[15px] pointer"
                onClick={() => handleCategoryChange(category.id, 'items')}>
                    <div className="w-full flex justify-center pt-[10px]">
                    <img src={category.thumb_url || '/public/images/default-image.png'} alt={category.name} className="w-[80px] h-[60px] rounded-[10px] border-2" />
                    </div>
                    <div className="w-full text-white text-[12px] flex flex-col items-center">
                    <p>{category.name}</p>
                    </div>
                </div>
                ))
                ) : (
                <p className="text-white text-center">No Categories Found</p>
                )}
            </div>
        </div>
        ) : (
        <div className="w-full pt-[3px] minCategoryItems overflow-y-scroll">
            <div className="w-full grid grid-flow-row grid-cols-1 px-[5px] gap-y-[10px] pt-[5px]">
            {filteredCategories.length > 0 ? (
                    filteredCategories.map((specialcategory) => (
                <div key={specialcategory.id} 
                onClick={() => handleCategoryChange(specialcategory.item_id, 'specialitems')}
                className="h-[40px] flex justify-center items-center rounded-[20px] bg-[#D5DCE4] text-gray-500 text-[12px] hover:text-white hover:bg-black">
                {specialcategory.title}
                </div>
                ))
                ) : (
                <p className="text-white text-center">No Special Categories Found</p>
                )}
                <div className="h-[40px] flex justify-center items-center rounded-[20px] bg-[#D5DCE4] text-gray-500 text-[12px] hover:text-white hover:bg-black">
                    PACKAGES
                </div>
            </div>
        </div>
        )}
      </div>
  )
}

export default MiniCategory