import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { comedy, action, horror, originals } from "../src/urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Originals" url={originals} />
      <RowPost title="Action" url={action} />
      <RowPost title="Horror " url={horror} />
      <RowPost title="Comedy " url={comedy} />
    </div>
  );
}

export default App;
