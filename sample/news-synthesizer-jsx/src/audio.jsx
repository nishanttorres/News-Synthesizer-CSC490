import { useEffect, useRef, useState } from 'react';
import AudioConfig from './component/audio-player/audio-player.component';
import logo from './songs-logo/leandra-rieger-31p65jYy7gE-unsplash.jpg';
import song from './songs-logo/prototype.wav';
import './css-styling/audio-home.css'
import AudioBackground from './component/audio-player/audio-background';
import { ReactComponent as Home } from './component/buttons-svg/home.svg'

const AudioMain = ({ changeToHome }) => {
    const [audioProgress, setAudioProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioElement = useRef(new Audio(song));
    const audioInterval = useRef();

    useEffect(() => {
        if (isPlaying) {
            syncScroll();
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }

    }, [isPlaying]);

    const onScroll = (event) => {
        const currValue = event.target.value;
        audioElement.current.currentTime = currValue;
        setAudioProgress(audioElement.current.currentTime);
    }

    const skip15Sec = () => {
        audioElement.current.currentTime += 15;
        setAudioProgress(audioElement.current.currentTime);
        if (audioElement.current.duration > audioElement.current.currentTime) {
            setIsPlaying(true);
        }
    }

    const rewind15Sec = () => {
        audioElement.current.currentTime -= 15;
        setAudioProgress(audioElement.current.currentTime);
        if (audioElement.current.duration > audioElement.current.currentTime) {
            setIsPlaying(true);
        }
    }

    const syncScroll = () => {
        clearInterval(audioInterval.current);

        audioInterval.current = setInterval(() => {
            if (!audioElement.current.ended) {
                setAudioProgress(audioElement.current.currentTime);
            }
            else if (audioElement.current.ended) {
                setIsPlaying(false);
            }
        }, [1000])
    }

    return (
        <div className="App">
            <div className='top'>
                <button className='home-but-audio' onClick={changeToHome}>
                    <Home />
                    Home</button>

                <div className='audio-cover'>
                    <div className='audio-player'>
                        <AudioConfig
                            isPlaying={isPlaying}
                            onPlayPauseClick={setIsPlaying}
                            onFastF15Sec={skip15Sec}
                            onRevers15Sec={rewind15Sec}
                            logo={logo}
                            audioProgress={audioProgress}
                            duration={audioElement.current.duration}
                            scrollChangeHandler={onScroll}
                        />
                    </div>
                </div>
            </div>
            <div className='back'>
                <AudioBackground />
            </div>
        </div>

    )
}

export default AudioMain;