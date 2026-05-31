import React from 'react'
import '../../css/Trabajos.css'

export default function Trabajos() {
  const proyectos = [
    { id: 1, titulo: "E-Commerce", desc: "Tienda en línea creada con React y estados dinámicos." },
    { id: 2, titulo: "App de Clima", desc: "Consulta el clima de tu ciudad consumiendo una API en tiempo real." },
    { id: 3, titulo: "Dashboard", desc: "Panel de administración con gráficas y estadísticas integradas." }
  ];

  return (
    <section id="proyectos" className="projects-section">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {proyectos.map((proy) => (
          <div key={proy.id} className="project-card">
            <h3>{proy.titulo}</h3>
            <p>{proy.desc}</p>
            <span className="tech-badge">React + Vite</span>
          </div>
        ))}
      </div>
    </section>
  )
}