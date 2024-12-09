/* eslint-disable react/prop-types */
import { Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItemFromCart } from '../../reducer/carts/cartSlice';

const Note_Edit_Modal = ({ openModal, setOpenModal,itemId }) => {

  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart.items);
  const specificCartItem = cartitems.find((item) => item.id == itemId);
  const [itemNotes, setItemNotes] = useState(specificCartItem ? specificCartItem.itemNote : '');

  // Update itemNotes when specificCartItem changes
  useEffect(() => {
      if (specificCartItem) {
          setItemNotes(specificCartItem.itemNote || '');
      } else {
          setItemNotes(''); // Reset notes if no item is found
      }
  }, [specificCartItem]);


  //Handle Item Note
  const handleNoteChange = (event) => {
      const newNotes = event.target.value;
      setItemNotes(newNotes);
  };


  const confirmNote = () => {

          const updatedItem = {
            ...specificCartItem,
            itemNote: itemNotes,
        };
        dispatch(updateItemFromCart(updatedItem)); // Assumes an `updateItemInCart` action exists

      
      
      console.log(specificCartItem);
      setOpenModal(false);
  };

  return (
    <Modal
      title="Chef note"
      open={openModal}
      onOk={() => setOpenModal(false)}
      onCancel={() => setOpenModal(false)}
      footer={false}
      width={650}
      className="posPopup chefNotPopup"
    >
      <div className=" modal-body p-3">
        
        <div className="pt-6 space-y-3 chef-note-details">
          <TextArea rows={5} placeholder="Chef Note....." value={itemNotes} onChange={handleNoteChange}/>
          <div className="flex justify-center">
            <button className="uppercase rounded-full text-[12px] text-white bg-[#F65333] px-14 border-2 border-transparent hover:border-black active:bg-black"
            onClick={confirmNote}>
              Confirm Details
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Note_Edit_Modal;
