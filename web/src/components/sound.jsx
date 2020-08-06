import React, { useState, useEffect } from 'react'
import './sound.scss'

export default function Sound({
    sound,
    staticImage,
    dynamicImage,
    name,
    isPlaying,
    stopReloadCounter,
}) {
    const [isDynamic, setIsDynamic] = useState(false)
    const [volume, setVolume] = useState(0)
    const [audio, setAudio] = useState(new Audio(sound))

    useEffect(() => {
        handleAudioInit()
    }, [])

    useEffect(() => {
        handlePlayAudio()
    }, [isDynamic])

    useEffect(() => {
        handleDynamicState()
        handleAudioVolume()
    }, [volume, isPlaying])

    useEffect(() => {
        if (stopReloadCounter > 0) setVolume(0)
    }, [stopReloadCounter])

    const handleAudioInit = () => (audio.loop = true)
    const handleDynamicState = () => {
        if (volume === 0) {
            setIsDynamic(false)
            return
        }
        if (!isPlaying) {
            setIsDynamic(false)
        }
        if (isPlaying) setIsDynamic(true)
    }
    const handlePlayAudio = () => {
        if (isDynamic) audio.play()
        else audio.pause()
    }
    const handleAudioVolume = () => (audio.volume = volume / 100)
    const handleChangeVolume = e => setVolume(e.target.value)

    const image = isDynamic ? dynamicImage : staticImage

    return (
        <div className="sound">
            <img src={image} alt={name} className="sound-image" />
            <h1 className="sound-title">{name}</h1>
            <input
                type="range"
                min="0"
                max="100"
                value={volume}
                className="sound-slider"
                onChange={handleChangeVolume}
            />
        </div>
    )
}
