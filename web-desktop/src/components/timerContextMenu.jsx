import React, { useState, Fragment } from 'react'
import './timerContextMenu.scss'

export default function TimerContextMenu({
    timerRef,
    handleStop,
    showTimerContextMenu,
}) {
    const [minutes, setMinutes] = useState(30)
    const [timerTimeout, setTimerTimeout] = useState(null)
    const [timeLeft, setTimeLeft] = useState(null)

    const handleIncreaseTimer = () => {
        if (minutes < 120) setMinutes(minutes + 10)
    }
    const handleDecreaseTimer = () => {
        if (minutes > 10) setMinutes(minutes - 10)
    }

    const handleTimer = () => {
        if (timerTimeout != null) clearTimeout(timerTimeout)
        const timeInMinutes = minutes * 1000 * 60
        const timeout = setTimeout(handleTimerDone, timeInMinutes)

        setTimeLeft(minutes)
        handleLowerMinutes(minutes)
        setTimerTimeout(timeout)
    }

    const handleTimerDone = () => {
        setTimerTimeout(null)
        setTimeLeft(null)
        handleStop()
    }

    const handleLowerMinutes = time => {
        if (timerTimeout == null) return
        setTimeLeft(time)
        setTimeout(() => handleLowerMinutes(time - 1), 1000 * 60)
    }

    if (!showTimerContextMenu) return <Fragment></Fragment>

    const timerRect = timerRef.current.getBoundingClientRect()
    const style = {
        top: String(timerRef.current.offsetHeight / 1.5 + timerRect.top) + 'px',
        left:
            String(timerRef.current.offsetWidth / 1.5 + timerRect.left) + 'px',
    }

    return (
        <div className="timer-content-menu" style={style}>
            <div className="timer-form">
                <div className="number-container">
                    <p className="minus" onClick={handleDecreaseTimer}>
                        -
                    </p>
                    <p className="num">
                        {minutes}
                        <font className="unit">min</font>
                    </p>
                    <p className="plus" onClick={handleIncreaseTimer}>
                        +
                    </p>
                </div>
                <input
                    type="button"
                    className="start-button"
                    value="Start Timer"
                    onClick={handleTimer}
                />
            </div>
            <div className="timer-info">
                <p className="timer-info-text">
                    {timeLeft == null
                        ? 'No timer is set'
                        : timeLeft + ' min left'}
                </p>
            </div>
        </div>
    )
}
