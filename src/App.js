import React from "react";
import "./App.css";
import PageHeader from "./components/Header";
import Wizard from "./components/Main/index";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Wizard />
      <Footer />
    </div>
  );
}

export default App;
