import React from 'react'
import '../../css/DarkModeSwitch.css'

// Le pasamos el estado y la función desde App.jsx a través de "props"
export default function DarkModeSwitch({ darkTheme, setDarkTheme }) {
  return (
    <button className="btn-theme" onClick={() => setDarkTheme(!darkTheme)}>
      {darkTheme ? '🌌 Modo Oscuro' : '⚡ Modo Cyber'}
    </button>
  )
}