import './App.css';
import Header from './Componenets/Header';
import HomePage from './Componenets/HomePage';
import Navbar from './Componenets/Navbar';
import Footer from './Componenets/Footer';
import { Route, Routes } from 'react-router';
import AboutUs from './Componenets/AboutUs';
import Notification from './Componenets/Notification';
import LoginModal from './Componenets/LoginModal';
import Register from './Componenets/Register';
import ForgotPassword from './Componenets/ForgotPassword';
import PhoneLogin from './Componenets/PhoneLogin';
import OtpModal from './Componenets/OtpModal';
import { useState } from 'react';
import ContactUs from './Componenets/Contact_Us';
import NewsNotification from './Componenets/NewsNotification';







function App() {

  const [phonenum,setPhonenum] = useState(null)


  return (
    <>
      <Header />
      <Navbar />
      

      <Routes>

        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/about_us' element={<AboutUs />}></Route>
        <Route exact path='/notification' element={<Notification />}></Route>
        <Route exact path='/Login' element={<LoginModal/>}></Route>
        <Route exact path='/register'  element={<Register/>} ></Route>
        <Route exact path='/forgot_password'  element={<ForgotPassword/>} ></Route>
        <Route exact path='/phone_login'  element={<PhoneLogin setPhonenum={setPhonenum}/>} ></Route>
        <Route exact path='/Get_otp'  element={<OtpModal phonenum={phonenum}/>} ></Route>
        <Route exact path='/Contact_us'  element={<ContactUs/>}></Route>
        <Route exact path='/News_Notification' element={<NewsNotification/>}></Route>
        <Route exact path='/Persnol_Notification' element={<Notification/>}></Route>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
