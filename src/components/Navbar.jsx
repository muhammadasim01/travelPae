import { Link } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import { TbHelp } from "react-icons/tb";
const Navbar = () => {
  return (
    <div className="bg-[#00CCCF] lg:w-full  lg:flex lg:justify-around lg:h-[70px] lg:items-center sticky top-0 left-0 right-0 z-[1000]">
      <div className="font-bold">TRAVEL PAE</div>
      <div className=" flex lg:justify-between lg:items-center  lg:w-[49rem] ">
        <Link
          to=""
          className="active:text-white text-white border-b-2 border-b-[#FFD700]"
        >
          Flights
        </Link>
        <Link to="">Hotels</Link>
        <Link to="">Buses</Link>
        <Link to="">Sightseeing</Link>
        <Link to="">Packages</Link>
        <Link to="">About us</Link>
        <i className="text-white cursor-pointer ">INR</i>
        <i className="text-white cursor-pointer text-lg">
          <CiGlobe />
        </i>
        <i className="text-white cursor-pointer text-lg">
          <TbHelp />
        </i>
        <button className="bg-[#FFD700] rounded-md px-4 py-1">
          traveler login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
