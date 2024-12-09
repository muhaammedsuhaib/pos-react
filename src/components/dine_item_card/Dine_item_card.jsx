import { ConfigProvider, Switch } from "antd";
import { useState } from "react";
import EditIcon from "../../../public/Edit.svg"
import EditOrangeIcon from "../../../public/EditOrange.svg"
import noteIcon from "../../../public/ItemEditIcon.svg";
import ItemModal from "../itemModal/ItemModal";
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../reducer/carts/cartSlice';
import './dineItemCard.css';
import { changeItemStatus } from '../../reducer/items/actions';

const Dine_item_card = ({ index, itemdata }) => {
  const [openItemModal, setOpenItemModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // State to hold selected item data
  // Set default checked based on itemdata.status
  const [checked, setChecked] = useState(itemdata.status);
  const [itemNotes, setItemNotes] = useState('');
  const dispatch = useDispatch();

  //Handle Item Note
  const handleNoteChange = (e) => {
      setItemNotes(e.target.value);
  };

  const handleAddToCart = () => {

    const totalItemPrice = itemdata.variant * 1;

    const itemToAdd = {
        id: itemdata.id,
        name: itemdata.title,
        price: itemdata.variant,
        extra_price: 0, // Total price includes item and extras
        quantity:1,
        variantType:null,
        variantId:null,
        variantName:null,
        extras: null,
        itemNote: itemNotes, // Add or update the note in the cart item
        img: itemdata.thumb_url,
        totalNonExtraPrice: 0,
        totalPrice: totalItemPrice // Set the total price in item
    };

    dispatch(addItemToCart(itemToAdd));
};

  // Function to handle item click and open modal
  const handleItemClick = (itemdata) => {
    setSelectedItem(itemdata); // Set the clicked item data
    setOpenItemModal(true);    // Open the modal
  };
  

  const handleChange = (newChecked, event) => {
    event.nativeEvent.stopImmediatePropagation();
    setChecked(newChecked);

    // Dispatch the changeItemStatus action with the item ID and new status
    const statusData = {
      id: itemdata.id,
      status: newChecked ? '1' : '0', // Or any status you intend to set
    };
    dispatch(changeItemStatus(statusData))
      .then((response) => {
        console.log("Status change response:", response);
      })
      .catch((error) => {
        console.error("Error changing status:", error);
      });
  };

	return (
    <div key={index}
      className="bg-[#F6EFEB] h-[130px] flex flex-col  rounded-[10px] mediumShadow hover:border-4 border-[#FF5534] duration-75 active:bg-[#FF5534] itemFoodCard cursor-pointer">
      <div className="w-full px-[5px] pt-[5px] flex h-[90px]">
        <div className="w-[50%] flex  justify-start"
        onClick={itemdata.status === 1 ? () => {
          if (itemdata.variant === 'Variant') {
            handleItemClick(itemdata);
          } else {
            handleAddToCart();
          }
        } : ''}>
          <div className="relative pt-1 pl-1">
            {checked==0?(
            <div className="w-full h-full absolute top-0 left-0 text-red-600 z-[10] font-semibold flex items-center justify-center text-[0.9rem] "><span className="text-shadow-out-of-stock -rotate-45">Out Of Stock</span></div>
            ):('')}
            <img
              src={itemdata.thumb_url}
              alt=""
              className={`w-[100%] h-[80px] rounded-[10px] ${checked==0 ? 'grayscale' : ''}`}
            />
          </div>
        </div>
        <div className="w-[50%] flex flex-col space-y-[3px]">
          <div className="w-full flex justify-end space-x-[5px]">
            <ConfigProvider
              theme={{
                components: {
                  Switch: {
                    colorPrimary: "#00AF50",
                  },
                },
              }}
            >
              <Switch
                className={`border-2 border-white ${
                  checked ? "bg-[#00AF50]" : "bg-[#FF0000]"
                }`}
                checked={checked}
                onChange={handleChange}
                size="default"
              />
            </ConfigProvider>
            <a href={itemdata.edit_url} target="_blank" rel="noopener noreferrer" className="editLink">
              <img
                src={EditIcon}
                id="edit-icon-image"
                alt="Edit Icon"
                className="w-[20px] h-[20px] ItemEditIcon blackEdit"
              />
              <img
                src={EditOrangeIcon}
                id="edit-icon-image"
                alt="Edit Icon"
                className="w-[20px] h-[20px] ItemEditIcon orangeEdit hidden"
              />
            </a>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-[#515151] text-white xl:text-[15px] md:text-[12px] xl:px-[15px] md:px-[7px] py-[1px] rounded-[20px]">
              <p>{itemdata.variant}</p>
            </div>
          </div>
          <div className="w-full flex justify-center pt-[2px] ">
            <div
              className="bg-[#515151] hover:bg-[#FF5534]  px-[3px] py-[4px] text-[25px] border-[3px] text-white rounded-[10px] smallShadow itemNoteIcone"
              onClick={itemdata.status === 1 ? () => {
                if (itemdata.variant != 'Variant') {
                  handleItemClick(itemdata);
                }
              }: ''}>
              <img src={noteIcon} alt="" className="w-[22px] ml-[3px]" value={itemNotes} onChange={handleNoteChange}/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-grow flex items-end pb-[2px] px-[2px]">
        <div className="bg-[#515151] itembtnShadow w-full rounded-[7px] text-[12px] h-[25px] flex items-center pl-[5px] text-white truncate ">
          <p className="truncate ">{itemdata.title && itemdata.title.length > 30 ? itemdata.title.substring(0, 30) + '...' : itemdata.title}</p>
        </div>
      </div>
      <ItemModal openModal={openItemModal} setOpenModal={setOpenItemModal} itemDetail={selectedItem}/>
    
    </div>
  );
};

export default Dine_item_card;
