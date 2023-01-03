import whatsApp from '../assets/whatsApp.png'
import callBlack from '../assets/callBlack.png'
import { BsCheckCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function BackEmail() {
    const navigate = useNavigate()

    function submitForgetPass() {
        navigate('/resetPass')
    }

  return <>
        <section className='container m-auto'>
            <div className="flex flex-col items-center">
                <div className='flex justify-end items-center w-full'>
                    <img src={whatsApp} className='w-12' alt="whatsapp icon" />
                    <img src={callBlack} className='w-12' alt="callBlack icon" />
                </div>

                <div className="w-11/12 sm:w-2/4 m-auto my-4 text-center">
                    <div className='w-full mt-16 mb-4'>
                    <BsCheckCircleFill className='w-[72px] h-[72px] text-[#32B768] mx-auto'/>
                    </div>
                    <h3 className='text-[#374151] text-xl leading-9 font-medium'>Success</h3>
                    <p className='text-[#6B7280] text-[16px] leading-[21px] my-4 w-3/4 sm:w-full mx-auto'>Please check your email to create a new password</p>
                    <p className='text-[#6B7280] font-medium text-[16px] leading-9 mt-4 mb-2'>Can't get email?  <Link to='/register' className="text-[#32B768] leading-9 font-medium">Resubmit</Link></p>
                    <div className="loginBtn">
                        <button
                        onClick={() => submitForgetPass()}
                        className='text-[#ffffff] font-bold text-[18px] leading-[7px] bg-[#BEBEBE] p-5 rounded-[10px] w-full my-4 hover:bg-[#E9D023] hover:text-[#474746] transition'>Check your email</button>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default BackEmail