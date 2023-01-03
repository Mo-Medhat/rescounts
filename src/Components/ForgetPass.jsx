import whatsApp from "../assets/whatsApp.png";
import callBlack from "../assets/callBlack.png";
import logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";

function ForgetPass() {
    const navigate = useNavigate()
    function submitForgetPass() {
        navigate('/backEmail')
    }

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
              Forget Password
            </h3>
            <p className="text-[13px] leading-5 text-[#7C7D7E]">
              Enter your registered email below
            </p>
          </div>
          <form className="inputs w-11/12 sm:w-2/4 m-auto my-4">
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2"
              />
            </div>
            <p className="text-[#7C7D7E] text-[13px] leading-[15px] my-4">
              Remember the password? 
               <Link to="/register" className="text-[#474746]">
                 Sign in
              </Link>
            </p>
            <div className="loginBtn">
              <button 
              type="submit"
              onClick={() => submitForgetPass()}
              className="text-[#ffffff] font-bold text-[18px] leading-[7px] bg-[#BEBEBE] p-4 rounded-[10px] w-full my-6 hover:bg-[#E9D023] hover:text-[#474746] transition">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ForgetPass;
