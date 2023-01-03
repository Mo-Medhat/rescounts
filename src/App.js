import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from './Components/Register';
import ForgetPass from './Components/ForgetPass';
import BackEmail from './Components/BackEmail';
import Success from './Components/Success';
import ResetPass from "./Components/ResetPass";
import VerifyAcc from './Components/VerifyAcc';
import ActivatedAcc from './Components/ActivatedAcc';
import VerifyAccSecond from './Components/VerifyAccSecond';
import ActivatedAccSecond from './Components/ActivatedAccSecond';

function App() {
  return <>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/rescounts' element={<Login/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/forgetpassword' element={<ForgetPass/>} />
    <Route path='/backEmail' element={<BackEmail/>} />
    <Route path='/resetPass' element={<ResetPass/>} />
    <Route path='/success' element={<Success/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/verifyAccount' element={<VerifyAcc/>} />
    <Route path='/activatedAcc' element={<ActivatedAcc/>} />
    <Route path='/verifyAccountSecond' element={<VerifyAccSecond/>} />
    <Route path='/activatedAccSecond' element={<ActivatedAccSecond/>} />
    <Route path='*' element={<>
          <div className='text-center h-screen mt-5 pt-5'>
            <h1 className='pt-5 mt-5 text-9xl font-medium'> 4 0 4 <p className="text-6xl mt-6">Page Not Found</p></h1>
          </div>
        </>}/>
  </Routes>
  </>
}

export default App;
