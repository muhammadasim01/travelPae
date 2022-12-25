import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
function Footer() {
  return (
    <>
      <div className="bg-[#00CCCF] py-5">
        <div className="flex justify-between py-10 px-20">
          <div className=" w-[200px]">
            <div>
              <h3 className="text-[24px] text-[#13595A] font-bold leading-7">
                Our Products
              </h3>
              <div>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-2">
                  Flights
                </p>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-2">
                  Hotels
                </p>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-2">
                  Buses
                </p>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-2">
                  Sightseeing
                </p>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-2">
                  Packages
                </p>
              </div>
            </div>
          </div>
          <div className="w-[250px]">
            <div>
              <h3 className="text-[24px] text-[#13595A] font-bold leading-7">
                About Travel Pae
              </h3>
              <div>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-2">
                  Contact Us
                </p>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-2">
                  Travel Support
                </p>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-2">
                  Cancellation Policy
                </p>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-2">
                  Privacy Policy
                </p>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-3">
                  Terms and Conditions
                </p>
              </div>
            </div>
          </div>
          <div className="w-[350px]">
            <div>
              <h3 className="text-[24px] text-[#13595A] font-bold leading-7">
                Partner with Travel Pae
              </h3>
              <div>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-3">
                  Add Your Hotel
                </p>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-3">
                  Travel Pae Partner Solutions
                </p>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-3">
                  Advertise
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[300px]">
            <div>
              <h3 className="text-[24px] text-[#13595A] font-bold leading-7">
                Payments
              </h3>
              <div>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-3">
                  Visa
                </p>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-3">
                  MasterCard
                </p>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-3">
                  PayPal
                </p>
                <p className="text-[20px] font-semibold text-[#13595A] leading-6 text-left my-3">
                  Amazon Pay
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[400px]">
            <div>
              <h3 className="text-[24px] text-[#13595A] font-bold leading-7">
                Connect with Travel Pae
              </h3>
              <div>
                <p className="text-[36px] font-semibold text-[#13595A] flex justify-evenly leading-6 text-left my-3">
                  <AiFillFacebook />
                  <BsInstagram />
                  <AiFillTwitterSquare />
                  <FaWhatsappSquare />
                  <AiFillLinkedin />
                </p>
                <p className="text-[18px] font-normal text-[#13595A] leading-6 text-left my-3 mx-8">
                  Plot No. 1- Avishvesariya Nagar, Gopalpura Bypass Road,
                  Triveni Nagar, Jaipur, Rajasthan
                </p>
                <p className="text-[18px] font-normal text-[#13595A] flex items-center leading-6 text-left my-3 mx-8">
                  <HiLocationMarker />
                  <span className="ml-3">9878/25 sec 9 Rohini 35</span>
                </p>
                <p className="text-[18px] font-normal text-[#13595A] flex items-center leading-6 text-left my-3 mx-8">
                  <BsTelephoneFill />
                  <span className="ml-3">+91-9999878398</span>
                </p>
                <p className="text-[18px] font-normal text-[#13595A] flex items-center leading-6 text-left my-3 mx-8">
                  <HiMail />
                  <span className="ml-3">info@example.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-[48px] text-[#13595A] font-bold">TraveL PAE</h3>
            <p className="text-[20px] text-white font-normal">
              Copyright @2022 | Designed by Travel Pae
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
