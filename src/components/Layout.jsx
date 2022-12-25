import OfferBanner from "./OfferBanner";
import FlightBanner from "./FlightBanner";
import PakageBanner from "./PakageBanner";
import Adventures from "./Adventures";
import ThirdBanner from "./ThirdBanner";
import Testimonial from "./Testimonial";

const Layout = () => {
  return (
    <div className="relative">
      <div className="relative ">
        <div
          className="h-[110vh] "
          style={{
            background:
              'url("./images/strip.png"), url("./images/bag.png"), url("./images/ticket.png")',
            backgroundRepeat: "no-repeat,no-repeat,no-repeat",
            backgroundPosition: "center top,left 120%,right 70%",
            backgroundSize: "82rem,8rem,12rem",
          }}
        ></div>
        <div
          className="h-[150vh]  relative bottom-[7rem]"
          style={{
            background:
              'url("./images/stripe2.png"), url("./images/ticket2.png"), url("./images/bag2.png") ',
            backgroundRepeat: "no-repeat, no-repeat, no-repeat",
            backgroundPosition: "center top, left 120%, right 55%",
            backgroundSize: "78rem,25rem,16rem",
          }}
        ></div>
        <div
          className="h-[160vh]  relative bottom-[13rem]"
          style={{
            background:
              'url("./images/bag3.png"), url("./images/map.png"), url("./images/kid.png") ',
            backgroundRepeat: "no-repeat, no-repeat, no-repeat",
            backgroundPosition: "right top,left 50%,right bottom",
            backgroundSize: "16rem,35rem,16rem",
          }}
        ></div>
      </div>
      <div className="absolute w-full h-[380vh] z-50 top-0 flex flex-col items-center ">
        <OfferBanner />
        <FlightBanner />
        <PakageBanner />
        <Adventures />
        <ThirdBanner />
      </div>
      <Testimonial />
    </div>
  );
};

export default Layout;
