import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOptions from "./InputOptions";
import Post from "./Post";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase.config";
import FlipMove from 'react-flip-move';
import { useSelector } from "react-redux";

function Feed() {
  const user = useSelector((state) => state.user?.user);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, []);
  const sendPost = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts"), {
      name: user?.displayName,
      description: "Software Engineer",
      message: input,
      photoUrl: user?.photoURL,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };
  return (
    // feed
    <div className=" flex-[0.6_0.6_0%]">
      {/* feed input container*/}
      <div className=" bg-white p-3 pb-5 rounded-xl mb-5 ">
        {/* feed input  */}
        <div className=" border-[1px] border-gray-300 flex p-3 text-gray-500 pl-4 rounded-full">
          <CreateIcon className=" mr-3" />
          <form className=" flex w-full items-center ">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className=" flex-1 text-xl border-none outline-none font-semibold "
              type="text"
              placeholder="Start a Post"
            />
            <button onClick={sendPost} className="hidden" type={"submit"}>
              Send
            </button>
          </form>
        </div>
        <div className=" flex justify-evenly mt-4">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#COCBCD" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      <hr className=" mb-4"/>

      {/* posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
