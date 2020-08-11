import React, { useState, useEffect } from 'react'
import './App.scss'

// Images
import BirdStaticImage from './images/bird-static.svg'
import BirdDynamicImage from './images/bird-dynamic.svg'
import BirdSound from './sounds/birds.mp3'

import RainStaticImage from './images/rain-static.svg'
import RainDynamicImage from './images/rain-dynamic.svg'
import RainSound from './sounds/rain.mp3'

import TreeStaticImage from './images/tree-static.svg'
import TreeDynamicImage from './images/tree-dynamic.svg'

import VinylStaticImage from './images/vinyl-static.svg'
import VinylDynamicImage from './images/vinyl-dynamic.svg'
import VinylSound from './sounds/vinyl.mp3'

// Components
import Background from './components/background'
import SoundsContainer from './components/soundsContainer'
import ToolBar from './components/toolBar'

export default function Sounds() {
    const [isPlaying, setIsPlaying] = useState(true)
    const [stopReloadCounter, setStopReloadCounter] = useState(0)

    useEffect(() => {
        if (stopReloadCounter > 0) setIsPlaying(false)
    }, [stopReloadCounter])

    const handleStop = () => setStopReloadCounter(stopReloadCounter + 1)

    const sounds = [
        {
            name: 'Rain',
            staticImage: RainStaticImage,
            dynamicImage: RainDynamicImage,
            sound: RainSound,
        },
        {
            name: 'Birds',
            staticImage: BirdStaticImage,
            dynamicImage: BirdDynamicImage,
            sound: BirdSound,
        },
        {
            name: 'Vinyl',
            staticImage: VinylStaticImage,
            dynamicImage: VinylDynamicImage,
            sound: VinylSound,
        },
    ]

    return (
        <div className="sounds-page">
            <Background />
            <ToolBar
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                handleStop={handleStop}
            />
            <SoundsContainer
                sounds={sounds}
                isPlaying={isPlaying}
                stopReloadCounter={stopReloadCounter}
            />
        </div>
    )
}
