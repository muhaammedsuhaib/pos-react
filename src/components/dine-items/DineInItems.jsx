import { SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, Input, Switch } from "antd";
import MiniCategory from "../dine-in-mini-category/MiniCategory";
import "./dineInItems.css";
import settingImg from "../../../public/Settings.svg";
import Dine_item_card from "../dine_item_card/Dine_item_card";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItemList } from '../../reducer/items/reducer';
import { listItems } from '../../reducer/items/actions';

function DineInItems() {

  const dispatch = useDispatch();
  const items = useSelector(selectItemList);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState({ id: '', option: '' });

  // Filter categories based on search input
  const filtereditems = items && Array.isArray(items.data)
  ? items.data.filter(itemdata => 
      itemdata.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (
        category.option === 'items'
          ? (category.id ? itemdata.cat_id === category.id : true)
          : category.option === 'specialitems'
          ? (category.id 
              ? (typeof itemdata.special_cat === 'string' 
                  ? itemdata.special_cat.split(',').includes(String(category.id)) 
                  : itemdata.special_cat === category.id)
              : true)
          : true
      )
    )
  : [];

  const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
  };

  // Handle category selection
  const handleCategoryChange = (selectedCategoryId,option) => {
    setCategory({ id: selectedCategoryId, option: option });
  };

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  return (
    <div className="w-full flex-1  flex flex-row bg-[#FF5534]">
      <MiniCategory handleCategoryChange={handleCategoryChange}/>
      <div className="xl:flex-1 flex flex-col h-full bg-[#515151] rounded-br-[20px] rounded-bl-[20px] dineInProductItems">
        <div className="w-full flex items-center justify-between bg-[#7A7A7A] mb-2">
          <div className="w-full h-[50px] bg-[#7A7A7A] flex items-center md:px-[10px] xl:px-[15px] space-x-[10px]">
            <ConfigProvider
              theme={{
                components: {
                  Input: {
                    activeBg: "#000",
                  },
                },
                token: {
                  colorTextPlaceholder: "#bebcbc",
                },
              }}
            >
              <Input
                className="searchInput w-[250px] h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-none hover:bg-black "
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                suffix={<SearchOutlined />}
              />
            </ConfigProvider>
            <button className="text-white bg-[#FF5534] px-[15px] text-[12px] py-[5px] rounded-[20px] mediumShadow"
              onClick ={() => handleCategoryChange('','')}>
              ALL ITEMS
            </button>
          </div>
          <a href='https://pos.brixbull.ai/admin/restaurant/pos_settings' target="_blank" rel="noopener noreferrer">
              <button className="w-[30px] h-[30px] bg-[#FF5534] mr-[10px] rounded-full mediumShadow flex justify-center items-center">
                <img src={settingImg} alt="" className="w-[23px]" />
              </button>
            </a>
        </div>

        <div className="w-full flex-grow md:px-[10px] xl:px-[15px]  ">
          <div className="w-full dineInProductsItemsParent overflow-y-scroll">
            <div className="w-full grid grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xl:gap-[20px] md:gap-[10px] productItemsGrid px-[5px]">
            {filtereditems.length > 0 ? (
                    filtereditems.map((itemdata, index) => (
                  <Dine_item_card key={index} itemdata={itemdata}/>
                ))
              ) : (
              <p className="text-white text-center">No Items Found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DineInItems;
