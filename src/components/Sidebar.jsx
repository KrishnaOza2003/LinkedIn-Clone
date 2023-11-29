import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector((state) => state.user?.user);
  const recentItem = (topic) => {
    return (
      <div className=" gap-2 flex text-sm text-gray-500 font-extrabold cursor-pointer mb-[5px] p-[5px] hover:bg-gray-200 hover:cursor-pointer hover:rounded-xl hover:text-black ">
        <span>#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    // sidebar
    <div className=" sticky top-[80px] flex-[0.2_0.2_0%] rounded-lg text-center h-fit ">
      {/* sidebar top */}
      <div className=" flex flex-col items-center border-gray-300 border-[1px] border-b-0 rounded-tr-xl rounded-tl-xl pb-3 bg-white ">
        <img
          className=" object-cover rounded-tr-xl rounded-tl-xl -mb-5 w-full h-[60px] "
          src="https://media.istockphoto.com/id/1248542684/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=6aJX8oyUBsSBZFQUCJDP7KZ1y4vrf-wEH_SJsuq7B5I="
          alt=""
        />
        <Avatar src={user?.photoURL} className=" mb-2">{user?.displayName[0]}</Avatar>
        <h2 className=" font-bold text-2xl">{user?.displayName}</h2>
        <h4 className=" font-semibold text-gray-400 text-sm">
          {user?.email}
        </h4>
      </div>

      {/* sidebar stats */}
      <div className=" p-3 mb-3 border-[1px] border-gray-300 rounded-br-xl rounded-bl-xl bg-white ">
        {/* stat */}
        <div className=" mt-3 flex justify-between ">
          <p className=" text-gray-400 text-sm font-semibold">Who Viewed Your Profile</p>
          <p className=" text-sm font-bold text-[#0a66c2]">382</p>
        </div>

        {/* stat */}
        <div className=" mt-3 flex justify-between ">
          <p className=" text-gray-400 text-sm font-semibold">Connections</p>
          <p className=" text-sm font-bold text-[#0a66c2]">234</p>
        </div>
      </div>

      {/* sidebar bottom */}
      <div className=" text-left p-3 bg-white border-[1px] border-gray-300 rounded-xl mt-3 ">
        <p>Recent</p>
        {recentItem(("reactjs"))}
        {recentItem(("softwareengineer"))}
        {recentItem(("webdevloper"))}
        {recentItem(("graphicsdesigner"))}
        {recentItem(("videoediter"))}
        {recentItem(("freelancer"))}
      </div>
    </div>
  );
}

export default Sidebar;
