import { MdOutlineVisibility } from 'react-icons/md';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";

function FamilyAcc() {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    const [isCollapseA, setIsCollapseA] = useState(true)
    const [isCollapseB, setIsCollapseB] = useState(true)
    let inputType = visible? 'text': "password"
    function createAccount() {
        navigate('/verifyAccount')
    }

    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          password: "",
          rePassword: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Must be 15 charachters or less').required('Required'),
            lastName: Yup.string().max(15, 'Must be 15 charachters or less').required('Required'),
            phoneNumber: Yup.number().optional(),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.number().required('Required'),
            rePassword: Yup.number().required('Required'),
        }),
        onSubmit: (values) => {
            console.log(values);
            if (values) {
              createAccount()
            }
        }
      });
  return <>
         <section className='container m-auto'>
            <div className="flex flex-col items-center mt-3">
                <div className='shadow-style rounded-[20px] w-11/12 sm:w-2/4 m-auto my-4 p-8'>
                    <form onSubmit={formik.handleSubmit} className="inputs ">
                        <input
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        placeholder='First Name' className='border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2' />

                        <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        type="text" placeholder='Last Name' className='border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2' />

                        <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                        type="number" placeholder='Number' className='border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2' />
                        <div className='relative'>
                        <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        type="email" placeholder='Your Email' className='border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2' />
                        </div>
                        <div className='relative'>
                            <input 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            type={inputType} placeholder='Password' className='border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2' />
                            <MdOutlineVisibility onClick={() => setVisible(visible=> !visible)} className='absolute right-4 top-[1.15rem] w-[24px] h-[24px] cursor-pointer text-gray-400 hover:text-gray-600 transition'/>
                        </div>
                        <div className='relative'>
                            <input type={inputType} placeholder='Re-enter password' className='border border-[#BEBEBE] rounded-[10px] p-2 pl-4 w-full outline-none placeholder:text-[#474746] placeholder:text-[14px] my-2' />
                            <MdOutlineVisibility onClick={() => setVisible(visible=> !visible)} className='absolute right-4 top-[1.15rem] w-[24px] h-[24px] cursor-pointer text-gray-400 hover:text-gray-600 transition'/>
                        </div>
                        <div className='flex flex-row items-center mt-2'>
                            <input type="checkbox" name="savePass" id="savePass"/>
                            <p className='text-[#474746] font-medium text-[13px] leading-[20px] ml-1 hover:text-[#E9D023] transition-all'>Save Password</p>
                        </div>
                    </form>
                        <div className='mt-2'><IoIosArrowDown className='text-3xl mx-auto'/></div>
                </div>
                <div className="shadow-style rounded-[20px] w-11/12 sm:w-2/4 m-auto my-4 p-8">
                    <h3 className='text-[16px] leading-[21px] font-bold text-[#474746] mb-4 flex justify-between items-center'>Would you like to add your students to your account?*
                    <span onClick={() => setIsCollapseA(!isCollapseA)} className='mr-2'>{!isCollapseA?  <></> : <><IoIosArrowForward className='text-3xl mx-auto cursor-pointer'/></>} </span>
                    </h3>
                    {isCollapseA? '' : <>
                    <div>
                    <form>
                    <select className='w-full border border-[#BEBEBE] rounded-[10px] p-2 outline-none my-2' name="school" id="school">
                        <option value="Choose">Choose school</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                    <input type="text" className='w-full border border-[#BEBEBE] rounded-[10px] p-2 outline-none my-2' name="schoolCode" id="schoolCode" placeholder='School Code' />
                    <input type="text" className='w-full border border-[#BEBEBE] rounded-[10px] p-2 outline-none my-2' name="className" id="className" placeholder='Class Name' />
                    <input type="text" className='w-full border border-[#BEBEBE] rounded-[10px] p-2 outline-none my-2' name="firstNameClass" id="firstNameClass" placeholder='First Name' />
                    <input type="text" className='w-full border border-[#BEBEBE] rounded-[10px] p-2 outline-none my-2' name="lastNameClass" id="lastNameClass" placeholder='Last Name' />
                    <input type="text" className='w-full border border-[#BEBEBE] rounded-[10px] p-2 outline-none my-2' name="studentNumber" id="studentNumber" placeholder='Student Number' />
                    <input type="text" className='w-full border border-[#BEBEBE] rounded-[10px] p-2 outline-none my-2' name="studentId" id="studentId" placeholder='Student ID' />
                    </form>
                    <h3 className='text-[13px] leading-[15px] text-[#D80073] mb-4 underline text-right mt-2'>Add another student</h3>
                    </div>
                    </>}
                    <div onClick={() => setIsCollapseA(!isCollapseA)} className='mt-2'>{!isCollapseA? <IoIosArrowDown className='text-3xl mx-auto cursor-pointer'/> : <></>} </div>

                </div>

                <div className="shadow-style rounded-[20px] w-11/12 sm:w-2/4 m-auto my-4 p-8">
                    <h3 className='text-[16px] leading-[21px] font-bold text-[#474746] mb-2 flex justify-between items-center'>Would you like to add your spouse to your account?*
                    <span onClick={() => setIsCollapseB(!isCollapseB)} className='mr-2'>{!isCollapseB?  <></> : <><IoIosArrowForward className='text-3xl mx-auto cursor-pointer'/></>} </span>
                    </h3>
                    {isCollapseB? '' : <>
                    <p className='text-[13px] leading-[15px]text-[#474746] mb-2'>Add First student</p>
                    <div>
                    <form>
                    <input type="text" className='w-full border border-[#BEBEBE] rounded-[10px] p-2 outline-none my-2' name="SpouseFirstName" id="SpouseFirstName" placeholder='Spouse First Name' />
                    <input type="text" className='w-full border border-[#BEBEBE] rounded-[10px] p-2 outline-none my-2' name="SpouselastName" id="SpouselastName" placeholder='Spouse Last Name' />
                    <input type="text" className='w-full border border-[#BEBEBE] rounded-[10px] p-2 outline-none my-2' name="spouseEmailAddress" id="spouseEmailAddress" placeholder='Spouse Email Address' />
                    <input type="text" className='w-full border border-[#BEBEBE] rounded-[10px] p-2 outline-none my-2' name="spousePhoneNumber" id="spousePhoneNumber" placeholder='Spouse Phone Number' />
                    </form>
                    </div>
                    </>}
                    <div onClick={() => setIsCollapseB(!isCollapseB)} className='mt-2'>{!isCollapseB? <IoIosArrowDown className='text-3xl mx-auto cursor-pointer'/> : <></>} </div>
                    </div>
                    <div className="loginBtn w-11/12 sm:w-2/4">
                        <button
                        type="submit"
                        onClick={() => createAccount()}
                        className='text-[#ffffff] font-bold text-[18px] leading-[7px] bg-[#BEBEBE] p-5 rounded-[10px] w-full my-6 hover:bg-[#E9D023] hover:text-[#474746] transition'>Create account</button>
                    </div>
            </div>
        </section>
  </>
}

export default FamilyAcc