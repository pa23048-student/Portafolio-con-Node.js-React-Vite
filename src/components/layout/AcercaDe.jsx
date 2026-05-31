import React from 'react'
import '../../css/AcercaDe.css'

export default function AcercaDe() {
  const habilidades = ["React", "JavaScript", "HTML5 & CSS3", "Git & GitHub", "Vite", "Responsive Design"];

  return (
    <section id="acerca" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>Acerca de mí</h2>
          <p>
            Soy un estudiante apasionado por la tecnología y el desarrollo web. Me encanta transformar ideas complejas en interfaces de usuario interactivas, limpias y funcionales. Actualmente estoy dominando el ecosistema de <strong>React y JavaScript moderno</strong>.
          </p>
        </div>
        <div className="about-skills">
          <h3>Mis Habilidades</h3>
          <div className="skills-grid">
            {habilidades.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}