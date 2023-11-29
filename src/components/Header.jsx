import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { signOutAction } from '../utils/helpers';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

function Header() {
  const user = useSelector((state) => state.user?.user);
  return (
    // Header
    <div className=' bg-white flex justify-evenly border-b-[0.5px] border-gray-300 py-3 w-screen sticky top-0 z-20'> 
      
      {/* Header Left */}
      <div className=' flex justify-center items-center '>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" width={50} height={50} className=' object-contain mr-3' alt="" />

        {/* header search */}
        <div className=' flex items-center justify-center p-3 rounded-md h-[30] text-gray-500 bg-[#eef3f8]'>
            <SearchIcon className=' text-xl'/>
            <input type="text" placeholder='Search' className=' ml-2 outline-none border-none bg-transparent text-xl'/>
        </div>
      </div>

      {/* Header Right */}
      <div className=' flex '>
        <HeaderOption title={'Home'} Icon={HomeIcon}/>
        <HeaderOption title={'My Network'} Icon={SupervisorAccountIcon}/>
        <HeaderOption title={'Jobs'} Icon={BusinessCenterIcon}/>
        <HeaderOption title={'Messaging'} Icon={ChatIcon}/>
        <HeaderOption title={'Notifications'} Icon={NotificationsIcon} />
        {user?.photoURL ? <HeaderOption onClick={signOutAction} title={'Me'} avatar={user?.photoURL}/> : <Avatar className=' object-contain !h-[30px] !w-[30px] cursor-pointer' onClick={signOutAction}>{user?.displayName[0]}</Avatar>}
        
      </div>

 
    </div>
  )
}

export default Header
