import whatsApp from "../assets/whatsApp.png";
import callBlack from "../assets/callBlack.png";
import logo from "../assets/Logo.png";
import { MdOutlineVisibility } from "react-icons/md";
import { ImAppleinc, ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [messageFaild, setMessageFaild] = useState('');
  let inputType = visible ? "text" : "password";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.number().required('Required'),
    }),
    onSubmit: async (values) => {

      let data = await axios.post(`https://api-dev.rescounts.com/api/v1/users/login`, {...values}).catch(function (error) {
        if (error) {
          setMessageFaild(error.response.data.error);
        }
      })
      console.log(data)
      if (data.status == 200 || data.status == 201) {
        setMessageFaild(null);
        window.alert(`Your Token ${data?.data?.token}`)
      }

    },
  });

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
              Login
            </h3>
            <p className="text-[13px] leading-5 text-[#7C7D7E]">
              Add your details to login
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} className="inputs w-11/12 sm:w-2/4 m-auto my-4">
            <div className="relative">
              <input
                id="emailId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name="email"
                type="email"
                placeholder="Your Email"
                className="border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2"
              />
              <BsCheckCircleFill className="absolute right-5 top-5 w-[16px] h-[16px] text-[#6CC57C] transition" />
            </div>
            {formik.touched.email && formik.errors?.email? <span className="text-sm text-red-600 pl-2">{formik.errors.email}</span> : null}
            <div className="relative">
              <input
                id="passwordId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                name="password"
                type={inputType}
                placeholder="Password"
                className="border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2"
              />
              <MdOutlineVisibility
                onClick={() => setVisible((visible) => !visible)}
                className="absolute right-4 top-[1.15rem] w-[24px] h-[24px] cursor-pointer text-gray-400 hover:text-gray-600 transition"
              />
              {formik.touched.password && formik.errors?.password? <span className="text-sm text-red-600 pl-2">{formik.errors.password}</span> : null}
            </div>
            {messageFaild? <><p className='text-sm text-red-600 pl-2 mt-4'>{messageFaild}</p></> : null}
            <div className="loginBtn">
              <button type="submit" onSubmit={formik.handleSubmit} className="text-[#ffffff] font-bold text-[18px] leading-[7px] bg-[#BEBEBE] p-4 rounded-[10px] w-full my-6 hover:bg-[#E9D023] hover:text-[#474746] transition">
                Login
              </button>
            </div>
          </form>
          <Link
            to="/forgetpassword"
            className="text-[#474746] text-[13px] leading-[15px] mb-6"
          >
            Forgot your password?
          </Link>
          <p className="text-[#7C7D7E] text-[13px] leading-[15px]">
            or Login With
          </p>
          <div className="socialLogin w-11/12 sm:w-2/4 m-auto mb-4 mt-1">
            <div className="flex flex-row justify-center items-center border border-[#5D98CC] rounded-[10px] p-2 pl-4 my-3 w-full cursor-pointer">
              <ImFacebook2 className="text-[#3b5998]" />
              <p className="text-[#367FC0] ml-3 text-[13px]">
                Login with Facebook
              </p>
            </div>
            <div className="flex flex-row justify-center items-center border border-[#C12F2F] rounded-[10px] p-2 pl-4 my-3 w-full cursor-pointer">
              <FcGoogle />
              <p className="text-[#DD4B39] ml-3 text-[13px]">
                Login with Google
              </p>
            </div>
            <div className="flex flex-row justify-center items-center border border-[#474746] rounded-[10px] p-2 pl-4 my-3 w-full cursor-pointer">
              <ImAppleinc />
              <p className="text-[#010101] ml-3 text-[13px]">
                Login with Apple
              </p>
            </div>
          </div>
          <p className="text-[#7C7D7E] text-[13px] leading-[15px] mt-4">
            Don't have an Account?{" "}
            <Link className="text-[#474746] font-medium" to="/register">
              Sign Up
            </Link>
          </p>
          <p className="text-[#474746] text-[13px] leading-5 mt-6 w-11/12 sm:w-1/2 text-center mb-4">
            By proceeding, you agree to our{" "}
            <span className="underline">Terms of Use</span> and confirm you have
            read our{" "}
            <span className="underline">Privacy and Cookie Statement.</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Login;
