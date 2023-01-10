import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Services }  from './pages';

function App() {
  return (
    <div className='bg-orange-300 w-full h-screen'>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gallery" element={<Services/>}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App