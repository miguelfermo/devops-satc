import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Tech Lead - Empresa X',
      text: 'Com DevOps, reduzimos o tempo de deploy de dias para minutos. A automação transformou nossa entrega.',
      avatar: 'MS'
    },
    {
      name: 'João Santos',
      role: 'DevOps Engineer - Startup Y',
      text: 'A cultura DevOps trouxe colaboração entre times. Agora desenvolvemos e entregamos com muito mais confiança.',
      avatar: 'JS'
    },
    {
      name: 'Ana Costa',
      role: 'SRE - Tech Corp',
      text: 'Implementar SRE com métricas claras nos deu visibilidade total sobre confiabilidade e performance do sistema.',
      avatar: 'AC'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          O que dizem sobre <span className="highlight">DevOps</span>
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-avatar">{testimonial.avatar}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
