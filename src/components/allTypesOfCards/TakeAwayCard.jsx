import takeAwayImg from "../../../public/images/pos-category-images/take-away_11529049.svg";
import cookingImg from "../../../public/images/posAllOrderContent/cooking_6414817.png";
import quickActionIcon from "../../../public/images/pos-category-images/Quick Action[1].svg";
import foodIcon from "../../../public/images/pos-category-images/food_16144752[1].svg";
function TakeAwayCard({ status, customer, orderId }) {
  return (
    <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
      <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
        <div
          className="w-[40px] h-[40px] cursor-pointer bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <img src={foodIcon} alt="" className="w-[30px]" />
        </div>
        <div
          className="w-[40px] h-[40px] cursor-pointer bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <img src={quickActionIcon} alt="" className="w-[25px]" />
        </div>
      </div>
      <div className="w-full h-[134px] rounded-[10px] bg-[#7E5F00] mediumShadow overflow-hidden">
        <div className="">
          <div className=" w-full px-[10px]">
            <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
              TAKE AWAY
            </div>
          </div>
          <div className="w-full flex items-center justify-center h-[50px]">
            <img src={takeAwayImg} alt="" className="w-[50px]" />
          </div>
          <div className={`w-full h-[50px] ${status == 'chef' ? 'bg-[#FFC000]' : 'bg-[#AACA74]'}  mt-[13px]  flex overflow-hidden `}>
            <div className="h-full flex items-center pl-[5px]">
              <img src={cookingImg} alt="" className="w-[40px]" />
            </div>
            {status == "chef" ? (
              <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                <p>WITH</p>
                <p>CHEF</p>
              </div>
            ) : (
              <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                <p>READY TO</p>
                <p>PICK UP</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full text-[12px] pl-[5px] leading-[13px]">
        <p className="whitespace-nowrap text-ellipsis">{customer}</p>
        <p className="font-medium">ID: {orderId}</p>
      </div>
    </div>
  );
}

export default TakeAwayCard;
