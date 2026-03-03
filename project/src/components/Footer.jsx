import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DevOps SATC</h3>
            <p>Transformando a maneira de entregar software com qualidade e velocidade.</p>
          </div>
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#principles">Princípios</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#docs">Documentação</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#guides">Guias</a></li>
              <li><a href="#support">Suporte</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Miguel Fermo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
