import whatsApp from '../assets/whatsApp.png'
import callBlack from '../assets/callBlack.png'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png'


function ActivatedAcc() {
    const navigate = useNavigate()

    return <>
        <section className='container m-auto'>
            <div className="flex flex-col items-center">
                <div className='flex justify-end items-center w-full'>
                    <img src={whatsApp} className='w-12' alt="whatsapp icon" />
                    <img src={callBlack} className='w-12' alt="callBlack icon" />
                </div>
                <div className="logo mt-20">
                    <img src={logo} className='w-[120px]' alt="logo" />
                </div>
                <div className="w-11/12 sm:w-2/4 m-auto my-4 text-center">
 
                    <h3 className='text-[#374151] text-xl leading-9 font-medium'>Verify Account</h3>
                    <p className='text-[#6B7280] text-[16px] leading-[21px] my-2 w-3/4 sm:w-full mx-auto mb-10'>Please enter the verification code we sent To your Email address eng.*****@gmail.com</p>
                        <div className='flex flex-row w-full justify-center'>
                            <input type="text" maxLength='1' className='border rounded-[10px] outline-none text-center mx-2 w-1/12 h-14' name="num1" id="num1" />
                            <input type="text" maxLength='1' className='border rounded-[10px] outline-none text-center mx-2 w-1/12 h-14' name="num2" id="num2" />
                            <input type="text" maxLength='1' className='border rounded-[10px] outline-none text-center mx-2 w-1/12 h-14' name="num3" id="num3" />
                            <input type="text" maxLength='1' className='border rounded-[10px] outline-none text-center mx-2 w-1/12 h-14' name="num3" id="num3" />
                            <input type="text" maxLength='1' className='border rounded-[10px] outline-none text-center mx-2 w-1/12 h-14' name="num5" id="num5" />
                            <input type="text" maxLength='1' className='border rounded-[10px] outline-none text-center mx-2 w-1/12 h-14' name="num6" id="num6" />
                        </div>
                    <div className="loginBtn">
                        <button
                        onClick={() => navigate('/verifyAccountSecond')}
                        className='text-[#ffffff] font-bold text-[18px] leading-[7px] bg-[#BEBEBE] p-5 rounded-[10px] w-full my-4 hover:bg-[#E9D023] hover:text-[#474746] transition'>Continue</button>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[13px] leading-[15px] text-[#474746] underline'>Resent code</p>
                        <p className='text-[13px] leading-[15px] text-[#474746] underline'>Change Email</p>
                    </div>
                </div>
            </div>
        </section>
  </>
}

export default ActivatedAcc