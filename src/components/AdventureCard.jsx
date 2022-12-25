import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbVaccine } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
function AdventureCard({ city, pic, heading }) {
  return (
    <div className="w-[200px] rounded-xl pb-3 shadow-[-10px_1px_20px_15px_rgba(0,0,0,0.1)]">
      <img
        src={`./images/${pic}.png`}
        alt=""
        className="w-full overflow-hidden h-[200px]"
      />
      <h3 className="text-[24px] text-[#13595A] font-semibold ">{heading}</h3>
      <div className="flex items-center justify-between w-[90%]  mx-auto ">
        <p className=" text-right">
          <CiLocationOn />
        </p>
        <p className=" w-[150px]">{city}</p>
      </div>
      <div className="flex items-center justify-between w-[90%] mx-auto  ">
        <p className="">
          <TbVaccine />
        </p>
        <p className=" w-[150px]">Vaccination required</p>
      </div>
      <div className="flex items-center justify-between w-[90%] mx-auto  ">
        <p className="">
          <AiOutlineHome />
        </p>
        <p className=" w-[150px]">Quarantine maybe required</p>
      </div>
      <div className="">
        <p className="text-[16px] text-[#13595A] font-semibold leading-6 border-b-[6px] border-[#FFD700] w-24 ml-[39px]">
          Know More
        </p>
      </div>
    </div>
  );
}

export default AdventureCard;
