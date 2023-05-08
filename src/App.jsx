import React from "react";
import "./App.scss";
import Header from "./components/header/header.jsx";
import Calculator from "./components/calculator/calculator.jsx";
import Advice from "./components/advice/advice.jsx";
import Result from "./components/result/result.jsx";
import Limitations from "./components/limitations/limitations.jsx";

function App() {
  return (
    <div>
      <Header />
      <Calculator />
      <Result />
      <Advice />
      <Limitations />
    </div>
  );
}

export default App;
