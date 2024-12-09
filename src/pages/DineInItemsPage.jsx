
import DineInItems from "../components/dine-items/DineInItems"
import PosCategories from "../components/pos_categoryies/PosCategories"





function DineInItemsPage() {
  return (
    <div className="w-full bg-[#FF5534] flex xl:space-x-[15px] space-x-[10px] rounded-tr-[20px] rounded-tl-[20px] xl:p-[15px] p-[10px] relative z-[1000]">
      <div className="xl:w-[70%] w-[65%] bg-[#515151] rounded-[20px] flex flex-col ">
        <PosCategories />
        <DineInItems />
      </div>
      <div className="xl:w-[30%] w-[35%] bg-[#515151] rounded-[20px]  overflow-hidden" >
    
      </div>
    </div>
  );
}

export default DineInItemsPage