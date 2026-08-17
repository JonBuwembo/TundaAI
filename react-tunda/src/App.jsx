import { useState, Router } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router";

import Home from "./pages/Home"

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={Home} />
        </Routes>
        
      </div>
    </>
  )
}

export default App;
