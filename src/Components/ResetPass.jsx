import whatsApp from "../assets/whatsApp.png";
import callBlack from "../assets/callBlack.png";
import logo from "../assets/Logo.png";
import { MdOutlineVisibility } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPass() {
  const [visible, setVisible] = useState(false);
  let inputType = visible ? "text" : "password";
  const navigate = useNavigate();

  return (
    <>
      <section className="container m-auto">
        <div className="flex flex-col items-center">
          <div className="flex justify-end items-center w-full">
            <img src={whatsApp} className="w-12" alt="whatsapp icon" />
            <img src={callBlack} className="w-12" alt="callBlack icon" />
          </div>
          <div className="logo">
            <img src={logo} className="w-18" alt="logo" />
          </div>
          <div className="titlePage text-center mt-4">
            <h3 className="text-xl leading-6 font-bold text-[#474746] mb-4">
              Change Password
            </h3>
          </div>

          <form className="inputs w-11/12 sm:w-2/4 m-auto my-4">
            <div className="relative">
              <input
                type={inputType}
                placeholder="Current password"
                className="border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2"
              />
              <MdOutlineVisibility
                onClick={() => setVisible((visible) => !visible)}
                className="absolute right-4 top-[1.15rem] w-[24px] h-[24px] cursor-pointer text-gray-400 hover:text-gray-600 transition"
              />
            </div>
            <div className="relative">
              <input
                type={inputType}
                placeholder="New password"
                className="border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2"
              />
              <MdOutlineVisibility
                onClick={() => setVisible((visible) => !visible)}
                className="absolute right-4 top-[1.15rem] w-[24px] h-[24px] cursor-pointer text-gray-400 hover:text-gray-600 transition"
              />
            </div>
            <div className="relative">
              <input
                type={inputType}
                placeholder="Confirm password"
                className="border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2"
              />
              <MdOutlineVisibility
                onClick={() => setVisible((visible) => !visible)}
                className="absolute right-4 top-[1.15rem] w-[24px] h-[24px] cursor-pointer text-gray-400 hover:text-gray-600 transition"
              />
            </div>
            <div className="loginBtn">
              <button 
              onClick={() => navigate('/success')}
              className="text-[#ffffff] font-bold text-[18px] leading-[7px] bg-[#BEBEBE] p-5 rounded-[10px] w-full my-6 hover:bg-[#E9D023] hover:text-[#474746] transition">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ResetPass;
