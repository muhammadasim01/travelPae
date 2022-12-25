import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
const OfferBanner = () => {
  return (
    <div className="h-[80vh] mt-3  w-[95vw] flex flex-col justify-around">
      <div className="flex justify-between items-center w-[80%]   mx-auto ">
        <div className="heading">
          <img src="./images/offertext.png" alt="" className="w-[200px]" />
        </div>
        <div className="flex items-center text-[#00CCCF] ">
          view all
          <i className="text-sm">
            <AiOutlineRight />
          </i>
        </div>
      </div>
      <div className="main flex items-center justify-around   w-[90%] mx-auto">
        <div className="ico1 text-[#00CCCF]">
          <AiOutlineLeft />
        </div>
        <div className="pics h-[25rem]  w-[100%] flex justify-center items-center relative">
          <img
            src="./images/o1.png"
            alt=""
            className="h-[70%] relative w-[250px] left-6 z-[20]"
          />
          <img
            src="./images/o2.png"
            alt=""
            className="h-[80%] relative w-[250px]  z-[30]"
          />
          <img
            src="./images/o3.png"
            alt=""
            className="h-[70%] relative w-[250px]  z-[20]"
          />
          <img
            src="./images/o4.png"
            alt=""
            className="h-[60%] relative w-[250px] right-5 z-[10]"
          />
        </div>
        <div className="ico1 text-[#00CCCF]">
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
