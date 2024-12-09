import { useState } from "react";
import RightSectionTopGreen from "../../rightSectionTop/RightSectionTopGreen";
import BottomSec from "./../../bottomSec/BottomSec";
import SelectedItem from "./../../selectedItem/SelectedItem";
import "./section30.css";
import SelectedVariantItem from "../../selectedVariantItem/SelectedVariantItem";
import SelctedItemWithDrop from "../../selectedItem/SelctedItemWithDrop";
import WalkingCustomerTop from "../../walkingCustomertop/WalkingCustomerTop";
import SelectedItemNew from "../../selectedItem/SelectedItemNew";

const Section30 = ({ page }) => {
  return (
    <div className="flex flex-col gap-[6px] overflow-hidden" style={{ height: "calc(100vh - 5rem)" }}>
      <WalkingCustomerTop />
      <div className=" w-full px-[10px] ">
        <RightSectionTopGreen page={page} />
      </div>
      {/* list area */}
      <div className="bg-primeryFirst flex-grow h-full w-full overflow-y-scroll hideScrollbar">
        <div className=" flex flex-col gap-1 pt-[25px]   py-1 px-[15px]  w-full h-full rounded-b-[10px] overflow-y-scroll overflow-x-hidden bg-[#515151] hideScrollbar">
          <SelectedItem showOverlay={true} />
           <SelectedItem />
           <SelectedItem />
          <SelectedItem showOverlay={true} />
          <SelectedItem />
          <SelectedItem showOverlay={true} />
          <SelctedItemWithDrop showOverlay={true} />
          <SelectedItem />
          <SelectedItemNew amount={'15.50'} name={'Mix Seafood Cajun for Two'}/>
          <SelectedItemNew amount={'15.50'} name={'Mix Seafood Cajun for Two'}/>
          <SelectedItemNew amount={'15.50'} name={'Mix Seafood Cajun for Two'} normalAddOn={true}/>
          <SelectedItemNew amount={'15.50'} name={'Mix Seafood Cajun for Two'} normalAddOn={true} variant={true}/>
          <SelectedItemNew amount={'15.50'} name={'Mix Seafood Cajun for Two'}/>
          <SelectedItemNew amount={'15.50'} name={'Mix Seafood Cajun for Two'}/>
          <SelectedItemNew amount={'15.50'} name={'Mix Seafood Cajun for Two'} normalAddOn={true}/>
          <SelectedItemNew amount={'15.50'} name={'Mix Seafood Cajun for Two'} normalAddOn={true} variant={true}/>
        </div>
      </div>

      <div className="h-[190px] flex flex-col justify-end">
        <BottomSec page={page} />
      </div>
    </div>
  );
};

export default Section30;
