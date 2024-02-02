import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Header/Search/Search";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
function App() {
  const [count, setCount] = useState(0);

  return (
  <>
    <Header />
   <Search/>
  </>
      
 
  );
}

export default App;
