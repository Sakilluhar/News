import React from 'react'
import BreakingNewsSection from './BreakingNewsSection'
import FirstSection from './FirstSection'
import HealthNewsSection from './HealthNewsSection'
import './Home.css'
import RecentNewsSection from './RecentNewsSection'
import TopNewsSection from './TopNewsSection'
import VideoPlayerSection from './VideoPlayerSection'




function HomePage() {
  return (
    <>
    
        {/* first section */}
        <div id='first-section' className="">
            <FirstSection/>
        </div>
        {/* top news section */}
        <div id='top-news-section' className="">
            <TopNewsSection/>
        </div>
        {/* Breacking News section */}
        <div id='' className=''>
          <BreakingNewsSection/>
        </div>
          {/* Recent News section */}
          <div id='' className=''>
          <RecentNewsSection/>
        </div>
        {/* Video player section */}
        <div id=''>
          <VideoPlayerSection/>
        </div>
        {/* health News Section */}
        <div id='' className=''>
          <HealthNewsSection/>
        </div>
    
    </>
  )
}

export default HomePage
