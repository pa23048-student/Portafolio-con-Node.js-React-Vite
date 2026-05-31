import React from 'react'
import '../../css/Hero.css'

export default function Hero({ likes, handleLike, animateLike }) {
  return (
    <header id="inicio" className="hero">
      <div className="hero-content animate-fade-in">
        <h1>¡Hola! Soy DEV</h1>
        <p>Desarrollador Web Front-End especializado en crear experiencias digitales modernas con React.</p>
        <div className="interactive-box">
          <button
            onClick={handleLike}
            className={`btn-like ${animateLike ? 'pulse' : ''}`}
          >
            ¡Apoya mi proyecto de clase! ❤️ {likes}
          </button>
        </div>
      </div>
    </header>
  )
}