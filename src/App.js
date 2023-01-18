import './App.css';
import Header from './Componenets/Header';
import HomePage from './Componenets/HomePage';
import Navbar from './Componenets/Navbar';
import Footer from './Componenets/Footer';
import { Route,Routes } from 'react-router';
import AboutUs from './Componenets/AboutUs';
import Notification from './Componenets/Notification';





function App() {
  return (
    <>
     <Header/>
     <Navbar/>
     
     <Routes>
      
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route exact path='/about_us' element={<AboutUs/>}></Route>
      <Route exact path='/notification' element={<Notification/>}></Route>
     </Routes>
     
     <Footer/>
    </>
  );
}

export default App;
