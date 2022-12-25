import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowLeftRight } from "react-icons/bs";
import { BsCalendar4 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <div className="lg:flex lg:justify-center lg:w-full lg:items-center  bg-[#00CCCF] lg:h-[29rem]">
        <div className=" lg:flex lg:justify-around lg:w-[70%] lg:items-center">
          <img
            src="./images/banner1.png"
            alt=""
            className="lg:w-[400px] lg:h-[400px] "
          />
          <div className="lg:flex lg:flex-col  lg:w-[70%] lg:mx-auto  lg:h-[17rem] lg:justify-evenly">
            <div className="font-bold text-white">FLIGHTS</div>
            <div className="flex  lg:w-[300px] lg:justify-between lg:items-center text-white">
              <div className="tab1">one-way</div>
              <div className="border-b-2 border-b-[#FFD700]">rouond-trip</div>
              <div className="tab1">multi-city</div>
            </div>
            <div className="  lg:h-[8rem] flex flex-col justify-between items-start">
              <div className="first flex   lg:w-[370px] items-center ">
                <div className="flex border-2 bg-[#D9D9D9] opacity-[0.5] justify-between rounded-md items-center lg:w-[10rem]">
                  <div className="icon">
                    <CiLocationOn />
                  </div>
                  <div className="">from where?</div>
                  <div className="bg-[#00CCCF] w-[25px] text-2xl rounded-md">
                    <RiArrowDropDownLine />
                  </div>
                </div>
                <div className="mx-4 text-white">
                  <BsArrowLeftRight />
                </div>
                <div className="flex border-2 bg-[#D9D9D9] opacity-[0.5] justify-between rounded-md items-center lg:w-[10rem]">
                  <div className="icon">
                    <CiLocationOn />
                  </div>
                  <div className="">to where?</div>
                  <div className="bg-[#00CCCF] w-[25px] text-2xl rounded-md">
                    <RiArrowDropDownLine />
                  </div>
                </div>
              </div>
              <div className="second flex   lg:w-[370px] justify-between items-center">
                <div className="flex border-2 bg-[#D9D9D9] opacity-[0.5] justify-between rounded-md items-center lg:w-[10rem]">
                  <div className="icon">
                    <BsCalendar4 />
                  </div>
                  <div className="">departing</div>
                  <div className="bg-[#00CCCF] w-[25px] text-2xl rounded-md">
                    <RiArrowDropDownLine />
                  </div>
                </div>
                <div className="flex border-2 bg-[#D9D9D9] opacity-[0.5] justify-between rounded-md items-center lg:w-[10rem]">
                  <div className="icon">
                    <BsCalendar4 />
                  </div>
                  <div className="">returning</div>
                  <div className="bg-[#00CCCF] w-[25px] text-2xl rounded-md">
                    <RiArrowDropDownLine />
                  </div>
                </div>
              </div>
              <div className="third flex   lg:w-[370px] justify-between items-center">
                <div className="flex border-2 bg-[#D9D9D9] opacity-[0.5] justify-between rounded-md items-center lg:w-[10rem]">
                  <div className="icon">
                    <AiOutlineUser />
                  </div>
                  <div className="">1 traveler</div>
                  <div className="bg-[#00CCCF] w-[25px] text-2xl rounded-md">
                    <RiArrowDropDownLine />
                  </div>
                </div>
                <div className="flex border-2 bg-[#D9D9D9] opacity-[0.5] justify-between rounded-md items-center lg:w-[10rem]">
                  <div className="icon">
                    <MdOutlineAirlineSeatReclineExtra />
                  </div>
                  <div className="">cabin class</div>
                  <div className="bg-[#00CCCF] w-[25px] text-2xl rounded-md">
                    <RiArrowDropDownLine />
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-[#FFD700] rounded-md px-4 py-1 lg:w-[15rem] lg:ml-[5rem]">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
