import { AiOutlineRight } from "react-icons/ai";
function ThirdBanner() {
  return (
    <div className="h-[80vh] mt-3  w-[95vw] flex flex-col justify-around">
      <div className="flex justify-between items-center w-[80%] mx-auto ">
        <div>
          <div className="head1 mx-auto font-semibold text-2xl text-[#2E7E7F]">
            Trending Activities
          </div>
          <div className="mx-auto text-[#2E7E7F]">
            Top 3 offers for you in this month! Grab these amazing offers using
            the coupon codes.
          </div>
        </div>

        <div className="flex items-center text-[#00CCCF] ">
          view all
          <i className="text-sm">
            <AiOutlineRight />
          </i>
        </div>
      </div>
      <div className="pics h-[25rem]  w-[75%] mx-auto flex justify-evenly items-center relative">
        <img src="./images/Banner-3.png" alt="" />
      </div>
    </div>
  );
}

export default ThirdBanner;
