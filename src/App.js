import './App.css';
import Header from './Componenets/Header';
import HomePage from './Componenets/HomePage';
import Navbar from './Componenets/Navbar';
import Footer from './Componenets/Footer';
import { Route, Routes } from 'react-router';
import AboutUs from './Componenets/AboutUs';
import Notification from './Componenets/Notification';
import ContactUs from './Componenets/Contact_Us';
import NewsNotification from './Componenets/NewsNotification';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsView from './Componenets/NewsView';
import Categories from './Componenets/Categories';
import CategoryView from './Componenets/CategoryView';
import CatNav from './Componenets/CatNav';

// import Spinner from './Componenets/Spinner';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import Hello from './Componenets/Hello';
import BookmarkSection from './Componenets/BookmarkSection';
=======
// import { useEffect, useState } from 'react';

>>>>>>> b0a2bc448c58c4102812c942f023ab6f2d3b4ad4


function App() {

  return (
    <>
      {/* {isloading ? <Spinner /> : (<> */}
<<<<<<< HEAD
        <Header />
        <Navbar />
        <CatNav />
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/Bookmark' element={<BookmarkSection/>}></Route>
          <Route exact path='/NewsView' element={<NewsView />}></Route>
          <Route exact path='/CategoryView' element={<CategoryView />}></Route>
          <Route exact path='/Categories' element={<Categories />}></Route>
          <Route exact path='/about_us' element={<AboutUs />}></Route>
          <Route exact path='/notification' element={<Notification />}></Route>
          <Route exact path='/Contact_us' element={<ContactUs />}></Route>
          <Route exact path='/News_Notification' element={<NewsNotification />}></Route>
          <Route exact path='/Persnol_Notification' element={<Notification />}></Route>
=======
      {/* <Header /> */}
      <Navbar />
      {/* <CatNav /> */}
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/NewsView' element={<NewsView />}></Route>
        <Route exact path='/CategoryView' element={<CategoryView />}></Route>
        <Route exact path='/Categories' element={<Categories />}></Route>
        <Route exact path='/about_us' element={<AboutUs />}></Route>
        <Route exact path='/notification' element={<Notification />}></Route>
        <Route exact path='/Contact_us' element={<ContactUs />}></Route>
        <Route exact path='/News_Notification' element={<NewsNotification />}></Route>
        <Route exact path='/Persnol_Notification' element={<Notification />}></Route>
>>>>>>> b0a2bc448c58c4102812c942f023ab6f2d3b4ad4

      </Routes>

      <Footer />
    </>
  );
}

export default App;
