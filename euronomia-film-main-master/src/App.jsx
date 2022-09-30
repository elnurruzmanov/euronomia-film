import React from "react";

//Routers
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./components/Home/Home";
import Founders from "./components/Founders/Founders";
import Nft from "./components/nft/Nft";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Polyglot from "./components/Polyglot/Polyglot";
import Lunik from "./components/Lunik/Lunik";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/founders" element={<Founders />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/nft" element={<Nft />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/projects" element={<Projects />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/polyglots" element={<Polyglot />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/lunik" element={<Lunik />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
