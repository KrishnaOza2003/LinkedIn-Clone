import { Avatar } from '@mui/material'
import React from 'react'


function HeaderOption({avatar, Icon , title, onClick}) {
  return (
    <div className=' flex flex-col items-center mr-[20px] text-gray-500 cursor-pointer hover:text-black text-xl'>
        {Icon && <Icon />}
        {avatar && <Avatar src={avatar} className=' object-contain !h-[30px] !w-[30px]' onClick={onClick}/>}
        <h3 className=' font-normal text-sm '>{title}</h3>
    </div>
  )
}

export default HeaderOption
