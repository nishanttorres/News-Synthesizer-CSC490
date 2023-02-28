import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Play } from "../audio-player-buttons/play.svg";
import { ReactComponent as Pause } from "../audio-player-buttons/pause.svg";
import { ReactComponent as Rewind } from "../audio-player-buttons/rewind.svg";
import { ReactComponent as Skip } from "../audio-player-buttons/skip.svg";
import { Component } from "react";

import './audio-player.css';

const AudioConfig = ({
    isPlaying,
    onPlayPauseClick,
    onRevers15Sec,
    onFastF15Sec,
    logo,
    audioProgress,
    duration,
    scrollChangeHandler
}) => {

    return (
        <div className="audio-player">
            <img
                className="image-audio"
                src={logo}
            />

            <input
                type="range"
                value={audioProgress}
                step="1"
                min="0"
                max={duration}
                className="progress"
                onChange={scrollChangeHandler}
            />

            <button
                type="button"
                className="back15"
                onClick={onRevers15Sec}
            >
                <Rewind />
            </button>

            {isPlaying ? (
                <button
                    type="button"
                    className="pause"
                    onClick={() => {
                        onPlayPauseClick(false)
                    }}
                >
                    <Pause />
                </button>
            ) : (

                <button
                    type="button"
                    className="play"
                    onClick={() => {
                        onPlayPauseClick(true)
                    }}
                >
                    <Play />
                </button>
            )}

            <button
                type="button"
                className="skip15"
                onClick={onFastF15Sec}
            >
                <Skip />
            </button>
        </div>
    );

}

export default AudioConfig;

