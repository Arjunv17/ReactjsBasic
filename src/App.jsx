import { useState } from "react";
import reactLogo from "./Assets/Images/react.svg";
import viteLogo from "./Assets/Images/react.svg";
import "./App.css";
import Home from "./Pages/Home/home";
import Todo from "./Pages/Todo/todo";
import Login from "./Pages/Login/login";
import UploadImage from "./Pages/UploadImage/imageupload";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
     <UploadImage />
    </>
  );
}

export default App;
