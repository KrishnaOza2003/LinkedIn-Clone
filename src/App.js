import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth, db } from "./config/firebase.config";
import { doc, setDoc } from "firebase/firestore";
import {SET_USER} from './context/actions/userActions'
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        console.log(userCred?.providerData[0]);
        setDoc(doc(db, 'users' , userCred?.uid), userCred?.providerData[0]).then(() => {
          dispatch(SET_USER(userCred?.providerData[0]));
          navigate('/home', {replace: true});
        });
      }
      else {
        navigate('/login', {replace: true});
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
