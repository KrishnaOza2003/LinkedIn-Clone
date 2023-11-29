import React, { useState } from "react";
import { login_logo } from "../assets";
import { FcGoogle } from "react-icons/fc";
import { singInWithGoogle } from "../utils/helpers";
import { auth } from "../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
function Login() {
  const [name, setName] = useState("");
  const [profilePicURL, setProfilePicURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = async () => {
    if (!name) {
      return alert("Please Enter Your Full Name !");
    }
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCred) {
        await updateProfile(userCred.user, {
          displayName: name,
          photoURL: profilePicURL,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const loginWithEmailAndPassword = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        console.log(userCred);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login grid place-items-center mx-auto py-[100px] bg-gray-100 w-screen">
      <img
        src={login_logo}
        alt=""
        className=" h-20 mb-28 object-contain mt-6"
      />
      <form className=" flex flex-col">
        <input
          className="w-[350px] h-[50px] pl-3 mb-[10px] rounded-md"
          type="text"
          placeholder="Full Name (Required if Registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-[350px] h-[50px] pl-3 mb-[10px] rounded-md"
          type="text"
          placeholder="Profile Pic URL (Optional)"
          value={profilePicURL}
          onChange={(e) => setProfilePicURL(e.target.value)}
        />

        <input
          className="w-[350px] h-[50px] pl-3 mb-[10px] rounded-md"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-[350px] h-[50px] pl-3 mb-[10px] rounded-md"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-[350px] h-[50px] text-xl bg-[#0074b1] text-white rounded-md"
          onClick={loginWithEmailAndPassword}
        >
          Sign In
        </button>

        <div className=" flex items-center justify-center gap-7 ">
          <div className=" mt-3 h-[1px] w-32 rounded-md bg-black "></div>
          <p className=" mt-3 text-sm text-black">OR</p>
          <div className="mt-3 h-[1px] w-32 rounded-md bg-black "></div>
        </div>

        <div
          onClick={singInWithGoogle}
          className="mt-3 mb-3 flex items-center justify-center gap-3 bg-white backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
          whileTap={{ scale: 0.9 }}
        >
          <FcGoogle className=" text-3xl text-white" />
          <p className=" text-xl text-gray-600 ">Sign in with Google</p>
        </div>
      </form>

      <p>
        Not a Member ?{" "}
        <span
          className=" text-[#0074b1] underline cursor-pointer mt-1"
          onClick={register}
        >
          Register Now
        </span>
      </p>
    </div>
  );
}
export default Login;
