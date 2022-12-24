import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowLeftRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="lg:flex lg:justify-center lg:w-full lg:items-center lg:border-2 border-black bg-[#00CCCF] lg:h-[25rem]">
      <div className="border-2 border-black lg:w-[45%]">
        <img
          src="./images/banner1.png"
          alt=""
          className="lg:w-[400px] lg:h-[400px] mx-auto"
        />
      </div>
      <div className="lg:w-[55%]  lg:flex lg:flex-col">
        <div className="font-bold text-white">FLIGHTS</div>
        <div className="flex  lg:w-[300px] lg:justify-between lg:items-center text-white">
          <div className="tab1">one-way</div>
          <div className="border-b-2 border-b-[#FFD700]">rouond-trip</div>
          <div className="tab1">multi-city</div>
        </div>
        <div className="  lg:h-[10rem] mt-4">
          <div className="first flex border-2 border-black lg:w-[370px] items-center ">
            <div className="flex border-2 bg-[#D9D9D9] opacity-[0.5] justify-between rounded-md items-center lg:w-[10rem]">
              <div className="icon">
                <CiLocationOn />
              </div>
              <div className="">from where?</div>
              <div className="bg-[#00CCCF] w-[25px] text-2xl rounded-md">
                <RiArrowDropDownLine />
              </div>
            </div>
            <div className="mx-4">
              <BsArrowLeftRight />
            </div>
            <div className="flex border-2 bg-[#D9D9D9] opacity-[0.5] justify-between rounded-md items-center lg:w-[10rem]">
              <div className="icon">
                <CiLocationOn />
              </div>
              <div className="">from where?</div>
              <div className="bg-[#00CCCF] w-[25px] text-2xl rounded-md">
                <RiArrowDropDownLine />
              </div>
            </div>
          </div>
          <div className="second flex border-2 border-black lg:w-[370px] justify-between items-center">
            <div className="flex border-2 bg-[#D9D9D9] opacity-[0.5] justify-between rounded-md items-center lg:w-[10rem]">
              <div className="icon">
                <CiLocationOn />
              </div>
              <div className="">from where?</div>
              <div className="bg-[#00CCCF] w-[25px] text-2xl rounded-md">
                <RiArrowDropDownLine />
              </div>
            </div>
            <div className="flex border-2 bg-[#D9D9D9] opacity-[0.5] justify-between rounded-md items-center lg:w-[10rem]">
              <div className="icon">
                <CiLocationOn />
              </div>
              <div className="">from where?</div>
              <div className="bg-[#00CCCF] w-[25px] text-2xl rounded-md">
                <RiArrowDropDownLine />
              </div>
            </div>
          </div>
          <div className="third flex border-2 border-black lg:w-[370px] justify-between items-center">
            <div className="flex border-2 bg-[#D9D9D9] opacity-[0.5] justify-between rounded-md items-center lg:w-[10rem]">
              <div className="icon">
                <CiLocationOn />
              </div>
              <div className="">from where?</div>
              <div className="bg-[#00CCCF] w-[25px] text-2xl rounded-md">
                <RiArrowDropDownLine />
              </div>
            </div>
            <div className="flex border-2 bg-[#D9D9D9] opacity-[0.5] justify-between rounded-md items-center lg:w-[10rem]">
              <div className="icon">
                <CiLocationOn />
              </div>
              <div className="">from where?</div>
              <div className="bg-[#00CCCF] w-[25px] text-2xl rounded-md">
                <RiArrowDropDownLine />
              </div>
            </div>
          </div>
        </div>
        <button className="bg-[#FFD700] rounded-md px-4 py-1 lg:w-[15rem] mx-auto">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
