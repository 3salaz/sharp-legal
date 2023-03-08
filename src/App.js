import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, About }  from './pages';

function App() {
  return (
    <div className='bg-blue-200 w-full h-screen'>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gallery" element={<About/>}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App