import React, { useState } from "react";
import "./App.css"; // 🔑 Limpio y directo

import FondoInteractivo from "./components/layout/FondoInteractivo";
import DarkModeSwitch from "./components/layout/DarkModeSwitch";
import Hero from "./components/layout/Hero";
import AcercaDe from "./components/layout/AcercaDe";
import Trabajos from "./components/layout/Trabajos";
import Contacto from "./components/layout/Contacto";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [likes, setLikes] = useState(0);
  const [animateLike, setAnimateLike] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
    setAnimateLike(true);
    setTimeout(() => setAnimateLike(false), 300);
  };

  return (
    <div className={`portfolio-container ${darkTheme ? 'theme-dark' : 'theme-cyber'}`}>
      
      <FondoInteractivo />

      {/* 1. NAVBAR */}
      <nav className="navbar">
        <div className="logo">Dev.Portafolio</div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#acerca">Acerca de</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        
        <DarkModeSwitch darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </nav>

      {/* 2. COMPONENTES DEL PORTAFOLIO */}
      <Hero likes={likes} handleLike={handleLike} animateLike={animateLike} />
      <AcercaDe />
      <Trabajos />
      <Contacto />

      {/* 3. FOOTER */}
      <footer className="footer">
        <p>© 2026 DEV — Estructura 100% Modular</p>
      </footer>
    </div>
  );
}