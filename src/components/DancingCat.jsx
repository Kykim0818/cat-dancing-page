import { useState } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

const DancingCat = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationStyle, setAnimationStyle] = useState('bounce')

  const handleToggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  const handleAnimationChange = (style) => {
    setAnimationStyle(style)
  }

  return (
    <div className="dancing-cat-container">
      <div className="cat-stage">
        <img
          src={catSvg}
          alt="Dancing Cat"
          className={`dancing-cat ${isAnimating ? animationStyle : ''}`}
        />
      </div>

      <div className="controls">
        <button
          className={`control-btn primary ${isAnimating ? 'stop' : 'start'}`}
          onClick={handleToggleAnimation}
        >
          {isAnimating ? '🛑 Stop Dancing' : '💃 Start Dancing'}
        </button>

        <div className="animation-selector">
          <p>Choose Dance Style:</p>
          <div className="animation-buttons">
            <button
              className={`control-btn ${animationStyle === 'bounce' ? 'active' : ''}`}
              onClick={() => handleAnimationChange('bounce')}
              disabled={isAnimating}
            >
              🦘 Bounce
            </button>
            <button
              className={`control-btn ${animationStyle === 'spin' ? 'active' : ''}`}
              onClick={() => handleAnimationChange('spin')}
              disabled={isAnimating}
            >
              🌪️ Spin
            </button>
            <button
              className={`control-btn ${animationStyle === 'wiggle' ? 'active' : ''}`}
              onClick={() => handleAnimationChange('wiggle')}
              disabled={isAnimating}
            >
              🐍 Wiggle
            </button>
            <button
              className={`control-btn ${animationStyle === 'party' ? 'active' : ''}`}
              onClick={() => handleAnimationChange('party')}
              disabled={isAnimating}
            >
              🎉 Party
            </button>
          </div>
        </div>
      </div>

      <div className="fun-facts">
        <p>🎵 This cat has some serious moves!</p>
        <p>✨ Try different dance styles for maximum fun!</p>
      </div>
    </div>
  )
}

export default DancingCat