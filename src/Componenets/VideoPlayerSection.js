import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayerSection() {
  return (
    <div id='vps-main'>
        <ReactPlayer width='100%' height='100%' controls url='https://news.wrteam.in/public/images/liveStreaming/1668316630.0009.jpg' />
    </div>
  )
}

export default VideoPlayerSection
