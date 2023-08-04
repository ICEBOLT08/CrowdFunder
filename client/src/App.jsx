import React from 'react'
import {Route, Routes} from 'react-router-dom'

import CampaignDetails from './pages/CampaignDetails'
import CreateCampaign from './pages/CreateCampaign'
import Home from './pages/Home'
import Profile from './pages/Profile'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
      <div className='mr-10 relative hidden sm:flex'>
        <Sidebar/>
      </div>

      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:px-5'>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/create-campaign' element={<CreateCampaign/>}/>
          <Route path='/campaign-details/:id' element={<CampaignDetails/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App