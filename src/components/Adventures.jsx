import React from "react";
import { GrFormNext } from "react-icons/gr";
import AdventureCard from "./AdventureCard";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
function Adventures() {
  return (
    <div className="h-[80vh] mt-3  w-[95vw] flex flex-col justify-around">
      <div className="flex justify-between items-center w-[80%]   mx-auto ">
        <div>
          <div className="head1    mx-auto font-semibold text-2xl text-[#2E7E7F]">
            Adventures
          </div>
          <div className="   mx-auto text-[#2E7E7F]">
            The journey matters more than the destination!{" "}
          </div>
        </div>

        <div className="flex items-center text-[#00CCCF] ">
          view all
          <i className="text-sm">
            <AiOutlineRight />
          </i>
        </div>
      </div>

      <div className="main flex items-center justify-around   w-[90%] mx-auto">
        <div className="ico1 text-[#FFD700]">
          <AiOutlineLeft />
        </div>
        <div className="pics h-[25rem]  w-[80%] flex justify-evenly items-center relative">
          <AdventureCard pic="Card1" heading="Scuba Diving" city="Maldives" />
          <AdventureCard pic="Card2" heading="IFLY Dubai" city="Dubai" />
          <AdventureCard pic="Card3" heading="Bungee Jumping" city="Goa" />
        </div>
        <div className="ico1 text-[#FFD700]">
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
}

export default Adventures;
