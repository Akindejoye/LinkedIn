import React from "react";
import "./App.css";
import Feed from "./Components/feed";
import Header from "./Components/header/Header";
import Sidebar from "./Components/sidebar/index";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default App;
