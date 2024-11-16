import React from 'react';
// import MapContainer from './pages/MapContainer';
import Restaurants from './pages/Restaurants';
import Attraction from './pages/Attractions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MapContainer />} /> */}
        <Route path="/" element={<Attraction />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
