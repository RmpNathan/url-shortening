import React from 'react';
import './App.scss';
import Navbar from "./components/Navigation/Navbar";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <main className="app">
      <Navbar/>
      <Banner/>
    </main>
  );
}

export default App;
