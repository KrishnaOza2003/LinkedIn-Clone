import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Widgets from './Widgets'
import Feed from './Feed'

function Home() {
  return (
    <div className=' bg-[#f3f2ef] flex flex-col '>
      <Header/>
      <div className=' flex justify-evenly mt-5'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  )
}

export default Home
