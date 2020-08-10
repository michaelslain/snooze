import React, { useState, useRef, Fragment } from 'react'
import './toolBar.scss'
import PauseIcon from '../images/pause.svg'
import PlayIcon from '../images/play.svg'
import StopIcon from '../images/stop.svg'
import TimerIcon from '../images/timer.svg'

import TimerContextMenu from './timerContextMenu'

export default function ToolBar({ isPlaying, setIsPlaying, handleStop }) {
    const [showTimerContextMenu, setShowTimerContextMenu] = useState(false)
    const timerRef = useRef()

    const handlePause = () => setIsPlaying(false)
    const handlePlay = () => setIsPlaying(true)

    const handleToggleTimerContextMenu = () =>
        setShowTimerContextMenu(!showTimerContextMenu)

    const pauseButton = (
        <img
            src={PauseIcon}
            alt="Pause"
            className="button main-button pause"
            onClick={handlePause}
            title="Play"
        />
    )
    const playButton = (
        <img
            src={PlayIcon}
            alt="Play"
            className="button main-button play"
            onClick={handlePlay}
            title="Pause"
        />
    )

    return (
        <div className="tool-bar">
            <div className="buttons-container">
                <img
                    src={StopIcon}
                    alt="Stop"
                    className="button stop"
                    onClick={handleStop}
                    title="Stop"
                />
                {isPlaying ? pauseButton : playButton}
                <img
                    src={TimerIcon}
                    alt="Sleep Timer"
                    className="button timer"
                    ref={timerRef}
                    onClick={handleToggleTimerContextMenu}
                    title="Sleep Timer"
                />
                <TimerContextMenu
                    timerRef={timerRef}
                    handleStop={handleStop}
                    showTimerContextMenu={showTimerContextMenu}
                />
            </div>
        </div>
    )
}
