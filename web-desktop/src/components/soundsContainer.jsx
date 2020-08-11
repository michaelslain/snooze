import React from 'react'
import './soundsContainer.scss'

import Sound from './sound'

export default function SoundsCountainer({
    sounds,
    isPlaying,
    stopReloadCounter,
}) {
    return (
        <div className="sounds-container">
            {sounds.map(({ sound, staticImage, dynamicImage, name }, i) => (
                <Sound
                    key={i}
                    sound={sound}
                    staticImage={staticImage}
                    dynamicImage={dynamicImage}
                    name={name}
                    isPlaying={isPlaying}
                    stopReloadCounter={stopReloadCounter}
                />
            ))}
        </div>
    )
}
