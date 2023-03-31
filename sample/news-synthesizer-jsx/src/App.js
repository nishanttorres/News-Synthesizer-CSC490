import { useState } from 'react'
import Home from './home'
import Loading from './loading';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AudioMain from './audio';
import InfoButton from './component/info-button/infoBut';


const App = () => {
  const navigate = useNavigate();
  const changePage = () => {
    navigate('/loading')
  }
  const changeToInfo = () => {
    navigate('/info')
  }
  const changeToHome = () => {
    navigate('/')
  }
  const changeToAudio = () => {
    navigate('/audio')
  }

  return (
    <Routes>
      <Route path="/" element={<Home
        changePage={changePage}
        changeToInfo={changeToInfo}
      />} />
      <Route path="/loading" element={<Loading changeToHome={changeToHome} changeToAudio={changeToAudio} />} />
      <Route path="/audio" element={<AudioMain changeToHome={changeToHome} />} />
      <Route path="/info" element={<InfoButton changeToHome={changeToHome} />} />
    </Routes>
  );
}

export default App;
