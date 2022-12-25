import { AiOutlineRight } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="h-[80vh] mt-[-13rem]  w-[95vw]  mx-auto flex flex-col justify-around">
      <div className="flex justify-between items-center w-[80%] mx-auto ">
        <div>
          <div className="head1 mx-auto font-semibold text-2xl text-[#2E7E7F]">
            What do people feel
          </div>
        </div>
      </div>
      <div
        className="pics h-[25rem]  w-[80%] mx-auto flex flex-col  items-center relative "
        style={{
          background: 'url("./images/bb1.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 135%",
          backgroundSize: "35rem",
        }}
      >
        <div className="flex justify-around items-center  w-[100%] mt-12">
          <div className="flex  w-[28rem] justify-between items-center">
            <img
              src="./images/t2.png"
              alt=""
              className="rounded-full w-[100px] h-[100px]"
            />
            <div>
              <div className="font-semibold text-2xl text-[#13595A]">
                Dexter Morgan
              </div>
              <div className="text  h-[7rem]">
                <span className="text-[#FFD700] w-[40px] text-2xl">“</span>
                An experience not to miss. was in Dubai for a few days and
                absolutely loved the fountain. you have to see this to really
                believe it.
                <span className="text-[#FFD700] w-[40px] text-2xl">”</span>
              </div>
            </div>
          </div>
          <div className="flex  w-[28rem] justify-between items-center">
            <img
              src="./images/t1.png"
              alt=""
              className="rounded-full w-[100px] h-[100px]"
            />
            <div>
              <div className="font-semibold text-2xl text-[#13595A]">
                Bianca Adams
              </div>
              <div className="text  h-[7rem]">
                <span className="text-[#FFD700] w-[40px] text-2xl">“</span>I
                visited it during night time, the city lights and the view
                itself was phenomenal, though I also wish that I could visit
                during day light! Thank you Travel Pae !!!!!!
                <span className="text-[#FFD700] w-[40px] text-2xl">”</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
