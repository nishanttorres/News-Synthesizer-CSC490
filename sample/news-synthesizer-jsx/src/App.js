import { useEffect, useState } from 'react'
import Home from './home'
import Loading from './loading';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AudioMain from './audio';
import InfoButton from './component/info-button/infoBut';
import audio from './songs-logo/news.wav';



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
        changeToAudio={changeToAudio}
        changeToHome={changeToHome}
      />} />
      <Route path="/loading" element={<Loading changeToHome={changeToHome} />} />
      <Route path="/audio" element={<AudioMain changeToHome={changeToHome} audio={audio} />} />
      <Route path="/info" element={<InfoButton changeToHome={changeToHome} />} />
    </Routes>
  );
}

export default App;
