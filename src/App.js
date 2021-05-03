import './App.css';
import React from "react";
import Nav from "./Component/Nav.js"
import Forme from "./Component/Contact.js"
function App() {
  return (
    <div>
      <Nav/>
      <h1 className={"titre"}>Join Us</h1>
     <div className={"form"}>
       <Forme/>
     </div>
    </div>

  );
}
export default App;