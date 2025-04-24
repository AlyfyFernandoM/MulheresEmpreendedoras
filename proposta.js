// Simulação de base de dados
const propostasMock = [
    {
      id: 1,
      prestadora: "Maria Oliveira",
      status: "Pendente",
      servico: "Limpeza pós-obra",
      mensagem: "Olá! Gostaria de contar com seus serviços para uma limpeza pós-reforma no nosso escritório.",
      contato: "maria@email.com"
    },
    // Adicione mais se quiser
  ];
  
  // Lê o parâmetro ?id=1
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"));
  const proposta = propostasMock.find(p => p.id === id);
  
  const container = document.getElementById("proposta-container");
  
  if (proposta) {
    container.innerHTML = `
      <h2>Proposta para: ${proposta.prestadora}</h2>
      <p><strong>Status:</strong> ${proposta.status}</p>
      <p><strong>Serviço solicitado:</strong> ${proposta.servico}</p>
      <p><strong>Mensagem:</strong></p>
      <blockquote>${proposta.mensagem}</blockquote>
      <p><strong>Contato:</strong> ${proposta.contato}</p>
      <div class="acoes">
        <button onclick="alterarStatus('Aceita')">Aceitar</button>
        <button onclick="alterarStatus('Recusada')">Recusar</button>
      </div>
    `;
  } else {
    container.innerHTML = "<p>Proposta não encontrada.</p>";
  }
  
  function alterarStatus(novoStatus) {
    alert(`Proposta ${novoStatus} com sucesso!`);
    // Aqui você pode futuramente atualizar no banco real
  }
  