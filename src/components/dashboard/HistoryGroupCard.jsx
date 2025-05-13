import React, { useState } from "react";
import { Button } from "../shared/Reuse";
import { PiVaultBold } from "react-icons/pi";

const HistoryGroupCard = () => {
    const [value, setValue] = useState(50);

  return (
    <div className="w-[100%] flex justify-between items-center flex-col lg:flex-row md:flex-row mt-6">
      <div className="flex items-center lg:w-[73%] md:w-[73%] w-[100%] mb-3">
      <div className="bg-[#EAE3F8] flex justify-center items-center p-3 text-primary rounded-full w-[60px] h-[60px] text-2xl mr-2">
        <PiVaultBold />
      </div>
      <div className="w-[75%]">
        <h3 className="text-[14px] font-[600]">Alajo Market Savings  <span className="text-[10px] text-textGrey">(10 Members)</span></h3>
        <p className="text-[14px] text-grey">
          $1,893/ <span>$2,000</span>
        </p>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-2 custom-range"
        />
        <p className="text-grey text-[12px]">
          90% goal reached <span>Individual savings</span>
        </p>
        <p className="text-grey text-[10px]">Group Admin: Ola Ventures</p>
      </div>
      </div>
      <div className="lg:w-[25%] md:w-[25%] w-[100%]">
        <p className="font-[600] text-[10px] mb-4 text-right">$100 daily</p>
      <Button className="border rounded-full border-primary p-2 text-[12px] w-[100%] mb-3">
        View Details
      </Button>
      </div>
    </div>
  );
};

export default HistoryGroupCard;
