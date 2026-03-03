import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          Entre em <span className="highlight">Contato</span>
        </h2>
        <p className="contact-subtitle">
          Quer saber mais sobre DevOps? Envie sua mensagem e vamos conversar!
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Conte-nos sobre seu projeto ou dúvida..."
              rows="5"
            />
          </div>
          <button type="submit" className="btn-submit">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
