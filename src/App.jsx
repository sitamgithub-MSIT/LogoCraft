import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideNavbar from "./components/SideNavbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="md:w-64 w-16 fixed ">
        <SideNavbar/>
      </div>
    </>
  );
}

export default App;
