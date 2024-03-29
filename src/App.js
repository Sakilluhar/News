import './App.css';
import Header from './Componenets/Header';
import HomePage from './Componenets/HomePage';
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
import Newsbar from './Componenets/Newsbar';

// import Spinner from './Componenets/Spinner';
import { useEffect, useState } from 'react';

import BookmarkSection from './Componenets/BookmarkSection';
import TagNewsview from './Componenets/TagNewsview';
import LiveNews from './Componenets/LiveNews';
import BreakingNewsView from './Componenets/BreakingNewsView';
import RecentNewsView from './Componenets/RecentNewsView';
import VideoNewsview from './Componenets/VideoNewsview';
import SearchNewsView from './Componenets/SearchNewsView';
import Breaking_NewsView from './Componenets/Breaking_NewsView';


function App() {



  return (
    <>
      {/* {isloading ? <Spinner /> : (<> */}

      {/* <Header /> */}
      <Newsbar />
      <CatNav />
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/TagNewsview' element={<TagNewsview />}></Route>
        <Route exact path='/Breaking_NewsView' element={<Breaking_NewsView />}></Route>
        <Route exact path='/VideoNewsview' element={<VideoNewsview />}></Route>
        <Route exact path='/SearchNewsView' element={<SearchNewsView />}></Route>
        <Route exact path='/RecentNewsView' element={<RecentNewsView />}></Route>
        <Route exact path='/Bookmark' element={<BookmarkSection />}></Route>
        <Route exact path='/NewsView' element={<NewsView />}></Route>
        <Route exact path='/CategoryView' element={<CategoryView />}></Route>
        <Route exact path='/Categories' element={<Categories />}></Route>
        <Route exact path='/about_us' element={<AboutUs />}></Route>
        <Route exact path='/LiveNews' element={<LiveNews/>}></Route>
        <Route exact path='/BreakingNews' element={<BreakingNewsView/>}></Route>
        <Route exact path='/notification' element={<Notification />}></Route>
        <Route exact path='/Contact_us' element={<ContactUs />}></Route>
        <Route exact path='/News_Notification' element={<NewsNotification />}></Route>
        <Route exact path='/Persnol_Notification' element={<Notification />}></Route>

      </Routes>

      <Footer />
    </>
  );
}

export default App;
