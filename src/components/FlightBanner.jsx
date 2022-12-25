import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
const flightBanner = () => {
  return (
    <div className="h-[80vh] mt-3 w-[95vw] flex flex-col justify-around">
      <div className="head1 w-[80%]   mx-auto">
        <img src="./images/text2.png" alt="" className="w-[300px]" />
      </div>
      <div className="head1 w-[80%]   mx-auto text-[#2E7E7F]">
        Find dashing deals on domestic and international flights!
      </div>
      <div className="main flex items-center justify-around   w-[90%] mx-auto">
        <div className="ico1 text-[#FFD700]">
          <AiOutlineLeft />
        </div>
        <div className="pics h-[25rem]  w-[100%] flex justify-evenly items-center relative">
          <img
            src="./images/f1.png"
            alt=""
            className="h-[87%] relative  w-[200px]  "
          />
          <img
            src="./images/f2.png"
            alt=""
            className="h-[87%] relative top-[30px] w-[200px]  "
          />
          <img
            src="./images/f3.png"
            alt=""
            className="h-[87%] relative  w-[200px]  "
          />
          <img
            src="./images/f4.png"
            alt=""
            className="h-[87%] relative top-[30px] w-[200px]  "
          />
        </div>
        <div className="ico1 text-[#FFD700]">
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default flightBanner;
