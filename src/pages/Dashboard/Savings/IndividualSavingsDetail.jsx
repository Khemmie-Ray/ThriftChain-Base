import React from "react";
import { DashNav } from "../../../components/shared/Reuse";
import { MobileDashNav } from "../../../components/shared/Reuse";
import { IoIosArrowBack } from "react-icons/io";
import { BiLayout } from "react-icons/bi";

const IndividualSavingsDetail = () => {
  return (
    <main className="">
      <DashNav>Details</DashNav>
      <MobileDashNav>Details</MobileDashNav>
      <div className="flex justify-between mt-4 lg:px-8 md:px-8 px-4 items-center flex-col lg:flex-row md:flex-row">
          <p className="flex items-center">
            <IoIosArrowBack className="mr-3"/> Back
          </p>
          <p>Export savings history as a csv file</p>
        </div>
      <section className="flex justify-between lg:px-8 md:px-8 px-4 items-center flex-col lg:flex-row md:flex-row">
        
        <div className="mb-3">
          <h2 className="lg:text-[28px] md:text-[28px] text-[20px] font-[600]">
            Savings to go to Medical School
          </h2>
          <p>
            Description <br />
            This is my savings towards my medical school in July
          </p>
        </div>
        <div className="flex items-center">
          <button className="bg-linear-to-r from-primary to-lilac font-[500] text-white py-3 px-6 mb-3 text-[12px] flex justify-center rounded-full hover:scale-105 items-center">
            Save
          </button>
          <button className="border rounded-full border-primary py-3 px-6 ml-3 text-[12px] mb-3">
            Withdraw
          </button>
        </div>
      </section>
      <section className="lg:px-8 md:px-8 px-4">
      <div className="w-[100%] flex justify-between items-center flex-col lg:flex-row md:flex-row mt-6 flex-wrap">
      <div className="flex items-center lg:w-[32%] md:w-[32%] w-[100%] mb-3 bg-white rounded-2xl p-3">
      <div className="bg-[#EAE3F8] flex justify-center items-center p-1 text-primary rounded-full w-[40px] h-[40px] text-2xl mr-2">
        <BiLayout />
      </div>
      <div className="w-[75%]">
        <h3 className="text-[14px] font-[600]">Overview</h3>
        <p className="text-[14px] text-grey">
          $1,893/ <span>$2,000</span>
        </p>
        <input
          type="range"
          min="0"
          max="100"
          value={90}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-2 custom-range"
        />
        <p className="text-grey text-[12px]">
          90% goal reached <span>Individual savings</span>
        </p>
      </div>
      </div>
      <div className="flex items-center lg:w-[32%] md:w-[32%] w-[100%] mb-3 bg-white rounded-2xl p-3">
      <div className="bg-[#EAE3F8] flex justify-center items-center p-1 text-primary rounded-full w-[40px] h-[40px] text-2xl mr-2">
        <BiLayout />
      </div>
      <div className="w-[75%]">
        <h3 className="text-[14px] font-[600]">Total amount contributed</h3>
        <p className="text-[14px] text-grey">
          $1,400
        </p>
        <input
          type="range"
          min="0"
          max="100"
          value={0}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-2 custom-range"
        />
        <p className="text-grey text-[12px]">
          90% goal reached <span>Individual savings</span>
        </p>
      </div>
      </div>
      <div className="flex items-center lg:w-[32%] md:w-[32%] w-[100%] mb-3 bg-white rounded-2xl p-3">
      <div className="bg-[#EAE3F8] flex justify-center items-center p-1 text-primary rounded-full w-[40px] h-[40px] text-2xl mr-2">
        <BiLayout />
      </div>
      <div className="w-[75%]">
        <h3 className="text-[14px] font-[600]">Overview</h3>
        <p className="text-[14px] text-grey">
          $1,893/ <span>$2,000</span>
        </p>
        <input
          type="range"
          min="0"
          max="100"
          value={90}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-2 custom-range"
        />
        <p className="text-grey text-[12px]">
          90% goal reached <span>Individual savings</span>
        </p>
      </div>
      </div>
      <div className="flex items-center lg:w-[32%] md:w-[32%] w-[100%] mb-3 bg-white rounded-2xl p-3">
      <div className="bg-[#EAE3F8] flex justify-center items-center p-1 text-primary rounded-full w-[40px] h-[40px] text-2xl mr-2">
        <BiLayout />
      </div>
      <div className="w-[75%]">
        <h3 className="text-[14px] font-[600]">Overview</h3>
        <p className="text-[14px] text-grey">
          $1,893/ <span>$2,000</span>
        </p>
        <input
          type="range"
          min="0"
          max="100"
          value={90}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-2 custom-range"
        />
        <p className="text-grey text-[12px]">
          90% goal reached <span>Individual savings</span>
        </p>
      </div>
      </div>
      <div className="flex items-center lg:w-[32%] md:w-[32%] w-[100%] mb-3 bg-white rounded-2xl p-3">
      <div className="bg-[#EAE3F8] flex justify-center items-center p-1 text-primary rounded-full w-[40px] h-[40px] text-2xl mr-2">
        <BiLayout />
      </div>
      <div className="w-[75%]">
        <h3 className="text-[14px] font-[600]">Overview</h3>
        <p className="text-[14px] text-grey">
          $1,893/ <span>$2,000</span>
        </p>
        <input
          type="range"
          min="0"
          max="100"
          value={90}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-2 custom-range"
        />
        <p className="text-grey text-[12px]">
          90% goal reached <span>Individual savings</span>
        </p>
      </div>
      </div>
      <div className="flex items-center lg:w-[32%] md:w-[32%] w-[100%] mb-3 bg-white rounded-2xl p-3">
      <div className="bg-[#EAE3F8] flex justify-center items-center p-1 text-primary rounded-full w-[40px] h-[40px] text-2xl mr-2">
        <BiLayout />
      </div>
      <div className="w-[75%]">
        <h3 className="text-[14px] font-[600]">Overview</h3>
        <p className="text-[14px] text-grey">
          $1,893/ <span>$2,000</span>
        </p>
        <input
          type="range"
          min="0"
          max="100"
          value={90}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-2 custom-range"
        />
        <p className="text-grey text-[12px]">
          90% goal reached <span>Individual savings</span>
        </p>
      </div>
      </div>
    </div>
      </section>
    </main>
  );
};

export default IndividualSavingsDetail;
