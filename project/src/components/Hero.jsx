import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Transforme seu <span className="highlight">DevOps</span>
        </h1>
        <p className="hero-subtitle">
          Entregue software rápido, com qualidade e eficiência. 
          Una desenvolvimento e infraestrutura em uma filosofia poderosa.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Começar Agora</button>
          <button className="btn-secondary">Saiba Mais</button>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="decoration-circle"></div>
        <div className="decoration-line"></div>
      </div>
    </section>
  );
}

export default Hero;
