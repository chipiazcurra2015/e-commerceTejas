import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className='Recy'>
      <h2> Recypack </h2>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
    </div>
  );
}

export default App;