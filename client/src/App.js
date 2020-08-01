import React from "react";
import Navbar from "./components/Navbar";
// import FileUpload from "./components/FileUpload";
import ListContent from "./components/ListContent";

import "./App.css";

const App = () => (
  <div>
    <Navbar></Navbar>
    <div className="container mt-4">
      {/* <FileUpload /> */}
      <ListContent />
    </div>
  </div>
);

export default App;
