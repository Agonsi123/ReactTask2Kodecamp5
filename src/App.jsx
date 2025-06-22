import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Gallery from './pages/gallery/Gallery.jsx';
import Projects from './pages/ourProjects/Projects.jsx';
import Header from './components/header/Header';
import Footer from './components/footer/Footer.jsx';
import Button from './components/button/Button';
import arrowright from "./assets/images/arrow-2-right-long.svg";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      {/* <Button text="VIEW PROJECTS" button="button1" icons="icon" img={<img src={arrowright} alt="" />} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery" element={<Gallery />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App
