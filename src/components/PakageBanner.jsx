import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
const PakageBanner = () => {
  return (
    <div className="h-[80vh] mt-3  w-[95vw] flex flex-col justify-around">
      <div className="head1 w-[80%]   mx-auto font-semibold text-2xl text-[#2E7E7F]">
        Best International Packages
      </div>
      <div className="head1 w-[80%]   mx-auto text-[#2E7E7F]">
        Start Packing! These Countries are Open for Travel!
      </div>
      <div className="main flex items-center justify-around   w-[90%] mx-auto">
        <div className="ico1 text-[#00CCCF]">
          <AiOutlineLeft />
        </div>
        <div className="pics h-[25rem]  w-[70%] flex justify-evenly items-center relative">
          <div className="w-[100%] flex  justify-evenly items-center h-[100%]">
            <div className="h-[90%] w-[300px]">
              <img
                src="./images/p1.png"
                alt=""
                className="h-[100%] relative  w-[100%]  "
              />
            </div>
            <div className="h-[90%] flex justify-between flex-col">
              <img
                src="./images/p2.png"
                alt=""
                className="h-[49%] relative  w-[200px]  "
              />
              <img
                src="./images/p3.png"
                alt=""
                className="h-[49%] relative  w-[200px]  "
              />
            </div>
            <div className="h-[90%] flex justify-between flex-col">
              <img
                src="./images/p4.png"
                alt=""
                className="h-[49%] relative  w-[200px]  "
              />
              <img
                src="./images/p5.png"
                alt=""
                className="h-[49%] relative  w-[200px]  "
              />
            </div>
          </div>
        </div>
        <div className="ico1 text-[#00CCCF]">
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default PakageBanner;
