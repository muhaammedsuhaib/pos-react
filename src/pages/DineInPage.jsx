import DineInContent from "../components/dine-in-content/DineInContent"
import PosCategories from "../components/pos_categoryies/PosCategories"
import Section30 from './../components/sectionRightMain/sectionRight/Section30';

function DineInPage() {
  return (
    <div className="w-full bg-[#FF5534] flex xl:space-x-[15px] space-x-[10px] rounded-tr-[20px] rounded-tl-[20px] xl:p-[15px] p-[10px] relative z-[1000]">
      <div className="xl:w-[70%] w-[65%] bg-[#515151] rounded-[20px] flex flex-col ">
        <PosCategories />
        <DineInContent />
      </div>
      <div className="xl:w-[30%] w-[35%] bg-[#515151] rounded-[20px] p-2 overflow-y-hidden">
        <Section30 />
      </div>
    </div>
  );
}

export default DineInPage