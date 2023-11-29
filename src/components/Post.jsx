import { Avatar } from "@mui/material";
import React, {forwardRef} from "react";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InputOptions from "./InputOptions";
import { useSelector } from "react-redux";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  const user = useSelector((state) => state.user?.user);
    return (
      <div ref={ref} className=" bg-white p-4 mb-3 rounded-xl ">
        <div className=" flex mb-3 ">
          <Avatar src={photoUrl}>{user?.displayName[0]}</Avatar>
          <div className=" ml-3 ">
            <h2 className=" text-lg font-semibold ">{name}</h2>
            <p className=" text-xs text-gray-400 font-semibold">{description}</p>
          </div>
        </div>
        <div className=" break-normal ">
          <p>{message}</p>
        </div>
        <div className="flex justify-around mt-3">
          <InputOptions Icon={ThumbUpAltOutlinedIcon} title={'Like'} color={'gray'} />
          <InputOptions Icon={ChatOutlinedIcon} title={'Comment'} color={'gray'} />
          <InputOptions Icon={ShareOutlinedIcon} title={'Share'} color={'gray'} />
          <InputOptions Icon={SendOutlinedIcon} title={'Send'} color={'gray'} />
        </div>
      </div>
    );
  });
  
  export default Post;
  