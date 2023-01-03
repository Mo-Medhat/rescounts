import whatsApp from '../assets/whatsApp.png'
import callBlack from '../assets/callBlack.png'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
import PersonalAcc from './PersonalAcc';
import { BsPersonFill } from 'react-icons/bs';
import { MdFamilyRestroom } from 'react-icons/md';
import { useState } from 'react';
import FamilyAcc from './FamilyAcc';

function Register() {
  const [personalFamilyAcc, setPersonalFamilyAcc] = useState(true)

  return <>
        <section className='container m-auto'>
            <div className="flex flex-col items-center">
                <div className='flex justify-end items-center w-full'>
                    <img src={whatsApp} className='w-12' alt="whatsapp icon" />
                    <img src={callBlack} className='w-12' alt="callBlack icon" />
                </div>
                <div className="logo">
                    <img src={logo} className='w-18' alt="logo" />
                </div>
                <div className="titlePage text-center mt-4">
                    <h3 className='text-xl leading-6 font-bold text-[#474746] mb-4'>Sign Up</h3>
                    <p className='text-[13px] leading-5 text-[#7C7D7E] mb-6'>Add your details to sign up</p>
                </div>
                  <div className='flex flex-row justify-around w-full sm:w-2/4'>
                    <div onClick={() => (setPersonalFamilyAcc(true))} className={`${personalFamilyAcc? 'text-[#E9D023]': 'text-[##BEBEBE]'} relative text-[16px] leading-[20px] flex cursor-pointer`}><BsPersonFill className='mr-2 text-xl'/> Personal Account
                      {personalFamilyAcc? <><span className='absolute border border-[#E9D023] mt-1 top-full left-[calc(15%+20px)] right-[15%]'></span></>: <></>}
                    </div>
                    <div onClick={() => (setPersonalFamilyAcc(false))} className={`${personalFamilyAcc? 'text-[##BEBEBE]': 'text-[#E9D023]'} relative text-[16px] leading-[20px] flex cursor-pointer`}><MdFamilyRestroom className='mr-2 text-xl'/> Family Account
                    {personalFamilyAcc? <></> : <><span className='absolute border border-[#E9D023] mt-1 top-full left-[calc(15%+20px)] right-[15%]'></span></>}
                    </div>
                  </div>
                  {personalFamilyAcc? <PersonalAcc /> : <FamilyAcc/>}
                  
                <p className='text-[#7C7D7E] text-[13px] leading-[15px] my-4'>Already have an Account ? <Link className='text-[#474746] font-medium' to='/login' >Login</Link></p>
                <div className="flex flex-col w-11/12 sm:w-2/4 mx-auto">
                <div className='flex items-center justify-start mb-2'>
                  <input type="checkbox" name="signme" id="" className='border border-[#474746] rounded-[4px]'/>
                  <p className='text-[#474746] text-[13px] ml-2 leading-[20px] text-left font-medium'>Sign me up to receive exclusive offers and news on hot new restaurants on Rescounts.</p>
                </div>
                <div className='flex items-center justify-start mb-2'>
                  <input type="checkbox" name="receive" id="" className='border border-[#474746] rounded-[4px]'/>
                  <p className='text-[#474746] text-[13px] ml-2 leading-[20px] text-left font-medium'>Receive order updates by SMS</p>
                </div>
                </div>
                <p className='text-[#474746] text-[13px] leading-5 mt-6 w-11/12 sm:w-1/2 text-center mb-4'>By proceeding, you agree to our <span className="underline" >Terms of Use</span> and confirm you have read our <span className="underline" >Privacy and Cookie Statement.</span></p>

            </div>
        </section>
  
  </>
}

export default Register