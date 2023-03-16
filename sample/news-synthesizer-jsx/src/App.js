import { useState } from 'react'
import Home from './home'
import Loading from './loading';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AudioMain from './audio';


const App = () => {
  const navigate = useNavigate();

  const changePage = () => {
    navigate('/loading');
  }

  return (
    <Routes>
      <Route path="/" element={<Home changePage={changePage} />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/audio" element={<AudioMain />} />
    </Routes>
  );
}

export default App;