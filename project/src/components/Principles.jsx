import './Principles.css';

function Principles() {
  const principles = [
    {
      icon: '🔄',
      title: 'Automatização',
      description: 'Automatize build e deploy para ganhar velocidade e reduzir erros humanos.'
    },
    {
      icon: '✅',
      title: 'Testes Contínuos',
      description: 'Teste antes de colocar em produção para garantir qualidade e estabilidade.'
    },
    {
      icon: '📊',
      title: 'Monitoramento',
      description: 'Monitore a aplicação após o lançamento para detectar e resolver problemas.'
    },
    {
      icon: '⚡',
      title: 'Resolução Rápida',
      description: 'Resolva problemas rapidamente com feedback contínuo e comunicação efetiva.'
    },
    {
      icon: '📈',
      title: 'Melhoria Contínua',
      description: 'Melhore continuamente o processo com base em dados e aprendizados.'
    },
    {
      icon: '🤝',
      title: 'Colaboração',
      description: 'Una times de desenvolvimento e infraestrutura para trabalhar em harmonia.'
    }
  ];

  return (
    <section className="principles">
      <div className="principles-container">
        <h2 className="principles-title">
          Princípios <span className="highlight">DevOps</span>
        </h2>
        <p className="principles-subtitle">
          DevOps une desenvolvimento e infraestrutura para entregar software com qualidade e eficiência
        </p>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <div key={index} className="principle-card">
              <div className="principle-icon">{principle.icon}</div>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-description">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Principles;
