// components/Footer.jsx
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="mt-10 text-[#8d8d8d]">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto  py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
     
      </div>

      {/* Middle Section */}
      <div className="border-t py-6">
        <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-gray-500">
            © Shop Commerce Private Limited, 2016-2026
          </p>

          {/* App Download */}
          <div className="flex items-center gap-4">
            <p className="font-medium text-black">Download App</p>

            {/* Better Buttons */}
            <div className=" w-23 h-7.5   rounded-lg">
             <img className="w-full h-full" src="../public/app.webp" alt="" />
            </div>
            <div className="w-23 h-7.5 rounded-lg">
             <img className="w-full h-full" src="../public/play.webp" alt="" />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <div className="bg-black text-white p-2 rounded-full"><FaFacebook size={16} /></div>
            <div className="bg-black text-white p-2 rounded-full"><FaSquareXTwitter size={16} /></div>
            <div className="bg-black text-white p-2 rounded-full"><FaInstagramSquare size={16} /></div>
            <div className="bg-black text-white p-2 rounded-full"><FaLinkedin size={16} /></div>
             <div className="bg-black text-white p-2 rounded-full"><BsFillThreadsFill size={16} /></div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-7xl mx-auto pb-6 text-xs text-gray-500">
        <p>
          “Shop” is owned & managed by "Shop Commerce Private Limited" and is not related,
          linked or interconnected in whatsoever manner or nature.
        </p>
      </div>
    </div>
  );
}

export default Footer;
