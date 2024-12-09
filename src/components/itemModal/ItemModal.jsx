import { Checkbox, Input, Modal, Radio, Segmented } from "antd"
import './itemModal.css'
import TextArea from "antd/es/input/TextArea"
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart,updateItemFromCart } from '../../reducer/carts/cartSlice';
import { selectUserToken } from '../../reducer/login/reducer';

const ItemModal=({openModal,setOpenModal, itemDetail})=> {
    
    const dispatch = useDispatch();
    const userTokenData = useSelector(selectUserToken);
    const taxFee = userTokenData.data.config.tax_fee;
    console.log(userTokenData.data.config);
    const cartitems = useSelector((state) => state.cart.items);
    const itemid = itemDetail && itemDetail.id;
    const specificCartItem = cartitems.find((item) => item.id == itemid);
    const [quantity, setQuantity] = useState(1);
    const [missingExtras, setMissingExtras] = useState([]); // Track missing required extras
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [selectedExtras, setSelectedExtras] = useState([]);
    const [itemNotes, setItemNotes] = useState(specificCartItem ? specificCartItem.itemNote : '');

    // Parse the variant data from itemDetail
    const formattedPriceJson = itemDetail && JSON.parse(itemDetail.price);
    // Select the first variant on initial load
    useEffect(() => {
        if (formattedPriceJson?.variant_options?.length > 0) {
            setSelectedVariant(formattedPriceJson.variant_options[0]);
        }
        if (specificCartItem) {
            setItemNotes(specificCartItem.itemNote || '');
        } else {
            setItemNotes(''); // Reset notes if no item is found
        }
    }, [itemDetail,specificCartItem]);

    // Update the selected variant when a different variant is chosen
    const handleVariantChange = (slug) => {
        const selected = formattedPriceJson.variant_options.find(option => option.slug === slug);
        setSelectedVariant(selected);
    };

    //Handle Item Note
    const handleNoteChange = (event) => {
        const newNotes = event.target.value;
        setItemNotes(newNotes);
        
        // Update the specific cart item with new notes
        if (specificCartItem) {
            dispatch(updateItemFromCart({
                ...specificCartItem,
                itemNote: newNotes
            }));
        }
    };

    // Calculate total price based on selected variant price and quantity
    const calculateTotalPrice = () => {
        let total = 0;
    
        // Calculate the total from the selected variant or item detail price
        if (selectedVariant) {
            total += selectedVariant.price * quantity;
        } else if (itemDetail && itemDetail.price) {
            total += itemDetail.price * quantity;
        }
    
        // Add the total from selected extras
        selectedExtras.forEach(extra => {
            total += (quantity) * extra.ex_price * extra.quantity; // Add each extra's price multiplied by its quantity
        });
    
        return total; // Return the total amount
    };  

    // Increment Quantity
    const incrementQuantity = () => setQuantity(prev => prev + 1);

    // Decrement Quantity with a minimum value of 1
    const decrementQuantity = () => { if (quantity > 1) setQuantity(prev => prev - 1); };

    // Increment Extra Selection Quantity
    const increaseQuantity = (extra, maxLimit) => {
            setSelectedExtras((prevExtras) => {
                const existingExtra = prevExtras.find((item) => item.id === extra.id);
                // If the extra exists, increment quantity; if not, add it
                if (existingExtra) {
                    if (existingExtra.quantity < maxLimit) {
                        return prevExtras.map((item) =>
                            item.id === extra.id ? { ...item, quantity: item.quantity + 1 } : item
                        );
                    }
                } else {
                    return [...prevExtras, { ...extra, quantity: 1 }];
                }
                return prevExtras; // Return the same array if no changes made
            });
        };

    // Decrement Extra Selection Quantity
    const decreaseQuantity = (extra) => {
        setSelectedExtras((prevExtras) => {
            const existingExtra = prevExtras.find((item) => item.id === extra.id);
            if (existingExtra) {
                if (existingExtra.quantity > 1) {
                    // Decrement quantity
                    return prevExtras.map((item) =>
                        item.id === extra.id ? { ...item, quantity: item.quantity - 1 } : item
                    );
                } else {
                    // Remove extra if quantity is zero or below
                    return prevExtras.filter((item) => item.id !== extra.id);
                }
            }
            return prevExtras; // Return the same array if no changes made
        });
    };

    //Handle Extra Selection
    const handleExtraSelection = (extra, isChecked, price, extraGroupId, isSingleSelect, maxLimit) => {
        setSelectedExtras((prevExtras) => {
            // For single-select groups
            if (isSingleSelect) {
                if (isChecked) {
                    // Remove other selections within the same group and add the new selection
                    return prevExtras
                        .filter((item) => item.extraGroupId !== extraGroupId) // Clear other selections in the group
                        .concat({ ...extra, quantity: 1, ex_price: price, extraGroupId }); // Add new selection
                } else {
                    // Uncheck item: remove it from selection
                    return prevExtras.filter((item) => item.id !== extra.id);
                }
            } else {
                // For multi-select groups
                if (isChecked) {
                    const groupItems = prevExtras.filter((item) => item.extraGroupId === extraGroupId);
                    if (groupItems.length < maxLimit) {
                        const existingExtra = prevExtras.find((item) => item.id === extra.id);
                        if (existingExtra) {
                            // If already selected, just increase the quantity
                            return prevExtras.map((item) =>
                                item.id === extra.id ? { ...item, quantity: item.quantity + 1 } : item
                            );
                        } else {
                            // If not selected, add the new extra
                            return [...prevExtras, { ...extra, quantity: 1, ex_price: price, extraGroupId }];
                        }
                    }
                } else {
                    // Remove if unchecked
                    const existingExtra = prevExtras.find((item) => item.id === extra.id);
                    if (existingExtra) {
                        // If it exists, decrease the quantity
                        if (existingExtra.quantity > 1) {
                            return prevExtras.map((item) =>
                                item.id === extra.id ? { ...item, quantity: item.quantity - 1 } : item
                            );
                        } else {
                            // If quantity is 1, remove it
                            return prevExtras.filter((item) => item.id !== extra.id);
                        }
                    }
                }
            }
            return prevExtras; // Return unchanged if no condition is met
        });


        // Check missing required groups after updating selected extras
        const missingRequiredGroups = itemDetail.extrasList
        .filter(extraGroup => extraGroup.is_required && 
            !selectedExtras.some(extra => extra.group_id === extraGroup.id && extra.quantity > 0)
        )
        .map(extraGroup => extraGroup.id);

        console.log("Missing Required Groups after Selection:", missingRequiredGroups); // Debugging log

    };

    //Handle Add to Cart
    const handleAddToCart = () => {

        console.log("Selected Extras Before Add to Cart:", selectedExtras); // Debugging log
    
        // Find required extra groups that lack selection
        const missingRequiredGroups = itemDetail.extrasList
        .filter(extraGroup => extraGroup.is_required && 
            // Check if there's no selected extra for this group with a quantity greater than 0
            !selectedExtras.some(extra => extra.extraGroupId === extraGroup.id && extra.quantity > 0)
        )
        .map(extraGroup => extraGroup.id);

        console.log("Missing Required Groups:", missingRequiredGroups); // Debugging log
        if (missingRequiredGroups.length > 0) {
            // Update state to highlight missing required groups and show alert
            setMissingExtras(missingRequiredGroups);
            
            // Clear the missingExtras message after 5 seconds
            setTimeout(() => {
                setMissingExtras([]);
            }, 5000);

            return;
        }

        // Reset missingExtras if all required groups are selected
        setMissingExtras([]);

        // Calculate the total price from extras
        const totalExtrasPrice = selectedExtras.reduce((total, extra) => {
            return total + (extra.ex_price * extra.quantity) * quantity;
        }, 0);

        const totalItemPrice = (selectedVariant ? selectedVariant.price : itemDetail.price) * quantity;
        const ItemPrice = selectedVariant ? selectedVariant.price : itemDetail.price;
        const grandTotal = totalItemPrice + totalExtrasPrice;

        const itemToAdd = {
            id: itemDetail.id,
            name: itemDetail.title,
            price: ItemPrice, // Total price includes item and extras
            extra_price: totalExtrasPrice, // Total price includes item and extras
            quantity,
            variantType:formattedPriceJson.variant_name,
            variantId: selectedVariant ? selectedVariant.slug : null,
            variantName: selectedVariant ? selectedVariant.name : null,
            extras: selectedExtras, // Include selected extras
            itemNote: itemNotes, // Add or update the note in the cart item
            img: itemDetail.thumb_url,
            totalNonExtraPrice: totalItemPrice, // Set the total price in item
            totalPrice: grandTotal, // Set the total price in item
        };
    
        dispatch(addItemToCart(itemToAdd));
        setSelectedExtras([]);
        setMissingExtras([]);
        setOpenModal(false);
    };

  return (
    <Modal
    footer={null}
    open={openModal}
    onOk={()=>setOpenModal(false)}
    onCancel={()=>setOpenModal(false)}
    className="posPopup"
    title={itemDetail && itemDetail.title}
    width={650}
    >
        <div className="w-full h-[550px] relative bg-[#FFFFFF] ">
            <div className="w-full absolute bottom-0 left-0 z-[100]">
                <div className="w-full flex justify-between bg-white modalFooterDiv">
                    <div className="flex items-center pl-[10px]">
                        <div className="flex items-center">
                            <button className="bg-[#B3B3B3] text-white rounded-full h-[30px] w-[30px] text-[20px]" onClick={decrementQuantity}>-</button>
                            <Input className="w-[30px] border-none" readOnly value={quantity} />
                            <button className="bg-[#B3B3B3] text-white rounded-full h-[30px] w-[30px] text-[20px]" onClick={incrementQuantity}>+</button>
                        </div>
                    </div>
                    <div className="pr-[10px] py-[5px] flex items-center">
                        <button 
                            className="bg-primeryFirst text-white text-[12px] px-[15px] py-[5px] rounded-md"
                            onClick={handleAddToCart}>
                            Add to cart AED {calculateTotalPrice().toFixed(2)}
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-[550px] itemModalBoday  overflow-y-scroll pb-[50px]">

            <div className="w-full px-[20px] pt-[5px]">
                <div className="w-full h-[280px]">
                    <img src={itemDetail && itemDetail.thumb_url} alt="" className="w-full h-full" />
                </div>
                <div className="w-full flex items-center pt-[2px] space-x-[5px]">
                    <h1 className="font-medium text-[18px]">{itemDetail && itemDetail.title}</h1>
                    {itemDetail && itemDetail.veg_type>0 ? (
                        <>
                        <div
                            className={`h-[15px] w-[15px] border flex items-center justify-center rounded-full ${
                                itemDetail.veg_type == 1 ? 'border-green-600' : 'border-red-600'
                            }`}
                            data-placement="top"
                            data-toggle="tooltip"
                            title={itemDetail.veg_type}
                        >
                            <div
                                className={`w-[7px] h-[7px] rounded-full ${
                                    itemDetail.veg_type == 1 ? 'bg-green-600' : 'bg-red-600'
                                }`}
                            ></div>
                        </div>
                        </>
                    ):('')}
                </div>
                {itemDetail && itemDetail.tax_fee>0 ? (
                        <>
                <div className="w-full text-gray-500 mt-[-5px] text-[12px]">
                    <p>{itemDetail && itemDetail.tax_fee}% Tax Included</p>
                </div>
                </>
                ) : ('')}
                <div className="w-full flex items-center justify-between">
                    <h1 className="font-medium">{formattedPriceJson && formattedPriceJson.variant_name}</h1>
                    <h1 className="text-primeryFirst font-bold text-[20px]">
                    {selectedVariant ? (
                        <>
                            {/* Display variant price if selected */}
                            <span>AED {parseFloat(selectedVariant.price).toFixed(2)}</span>
                        </>
                        ) : (
                        <>
                            {/* Otherwise, display item price if it exists */}
                            {itemDetail && itemDetail.price > 0 ? (
                                <>
                                    <span>AED {parseFloat(itemDetail.price).toFixed(2)}</span>
                                    {itemDetail.previous_price > 0 && (
                                        <span className="text-[15px] ml-2 line-through text-gray-500">
                                            AED {parseFloat(itemDetail.previous_price).toFixed(2)}
                                        </span>
                                    )}
                                </>
                            ) : (
                                'AED 0.00'
                            )}
                        </>
                    )}
                </h1>

                </div>
                {formattedPriceJson && formattedPriceJson.variant_options && formattedPriceJson.variant_options.length > 0 && (
                <>
                <div className="w-full">
                <Segmented
                    options={formattedPriceJson?.variant_options?.map(option => option.name) || []}
                    className="itemTabSegment"
                    value={selectedVariant?.name}
                    onChange={(value) => {
                        const selectedSlug = formattedPriceJson.variant_options.find(option => option.name === value)?.slug;
                        if (selectedSlug) handleVariantChange(selectedSlug);
                    }}
                />
                </div>
                </>
                )}

                <div className="w-full mt-[10px]">
                    <h1 className="font-bold text-[18px] text-gray-700">Note for Chef</h1>
                    <TextArea rows={2} placeholder="Add Notes Here" value={itemNotes} onChange={handleNoteChange}></TextArea>
                </div>
                <div className="w-full mt-[10px]">
                    <p className="font-medium">{itemDetail && itemDetail.overview}</p>
                </div>

                {itemDetail && itemDetail.allergens && itemDetail.allergens.length > 0 ? (
                    <div className="w-full mt-[10px]">
                        <p className="font-medium">
                            <span className="font-bold">Allergens:</span> {itemDetail.allergens.map((allergen, index) => (
                                <span key={allergen.id}>
                                    {allergen.name}{index < itemDetail.allergens.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                        </p>
                    </div>
                ) : ('')}

                {itemDetail && itemDetail.extrasList.map((extraGroup) => (
                    <div key={extraGroup.id} className="w-full mt-4">
                        <div className="flex items-center space-x-2">
                            <h1 className="font-bold">{extraGroup.title}</h1>
                            <p className="text-xs">
                                {extraGroup.is_required ? (
                                    <>
                                        <span className="text-red-500">*</span> (Required)
                                    </>
                                ) : (
                                    '(Optional)'
                                )}
                            </p>
                        </div>
                        {/* Display message if required extraGroup is missing selection */}
                        {missingExtras.includes(extraGroup.id) && (
                            <p className="text-red-500 text-xs mt-1">Please select at least 1 option(s)</p>
                        )}
                        <div className="flex flex-wrap mt-2 ">
                            {extraGroup.extras.map((extra) => {
                                const isSelected = selectedExtras.some((item) => item.id === extra.id && item.quantity > 0);
                                const extraQuantity = selectedExtras.find((item) => item.id === extra.id)?.quantity || 0;

                                return (
                                    <div key={extra.id} className="w-1/2 flex items-center mt-2 pr-[15px]">
                                        {isSelected ? (
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    className="bg-primeryFirst text-white rounded-full h-[20px] w-[20px] text-[15px]"
                                                    onClick={() => decreaseQuantity(extra)}
                                                    disabled={extraQuantity === 0}
                                                >
                                                    -
                                                </button>
                                                <span>{extraQuantity}</span>
                                                <button
                                                    className="bg-primeryFirst text-white rounded-full h-[20px] w-[20px] text-[15px]"
                                                    onClick={() => increaseQuantity(extra, extraGroup.select_max_limit)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        ) : (
                                            extraGroup.is_single_select ? (
                                                <Radio
                                                    checked={isSelected}
                                                    className="custom-item-orage-radio"
                                                    onChange={(e) =>
                                                        handleExtraSelection(extra, e.target.checked, extra.ex_price, extraGroup.id, true, extraGroup.select_max_limit)
                                                    }
                                                />
                                            ) : (
                                                <Checkbox
                                                    checked={isSelected}
                                                    className="orage-checkbox-orage"
                                                    onChange={(e) =>
                                                        handleExtraSelection(extra, e.target.checked, extra.ex_price, extraGroup.id, false, extraGroup.select_max_limit)
                                                    }
                                                />
                                            )
                                        )}
                                        <div className="flex justify-between w-full ml-2">
                                            <h1 className="font-bold text-gray-700">{extra.ex_name}</h1>
                                            {extra.ex_price ? (
                                                <span className="font-bold text-gray-700">AED {extra.ex_price.toFixed(2)}</span>
                                            ) : null}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

            </div>
            </div>
        </div>
    </Modal>
  )
}

export default ItemModal