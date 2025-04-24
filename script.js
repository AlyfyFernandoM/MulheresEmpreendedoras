// Dados fictícios (podem ser substituídos por fetch futuramente)
const prestadoras = [
    {
      nome: "Maria Oliveira",
      servico: "Limpeza e Conservação",
      cidade: "São Paulo - SP",
      imagem: "img/mulherperfil.jpg",
      perfil: "perfil.html"
    },
    {
      nome: "Ana Silva",
      servico: "Serviços administrativos",
      cidade: "Rio de Janeiro - RJ",
      imagem: "img/mulherperfil.jpg",
      perfil: "perfil.html"
    }
  ];
  
  const propostas = [
    {
    id: 1,
    prestadora: "Maria Oliveira",
    status: "Pendente",
    servico: "Limpeza pós-obra",
    mensagem: "Olá! Gostaria de contar com seus serviços para uma limpeza pós-reforma no nosso escritório.",
    link: "proposta.html?id=1"
    },
    {
      prestadora: "Ana Silva",
      status: "Aceita",
      link: "#"
    }
  ];
  
  // Renderizar cards de prestadoras
  function renderizarPrestadoras(lista) {
    const container = document.getElementById("resultados-container");
    container.innerHTML = "";
  
    lista.forEach(p => {
      const card = document.createElement("div");
      card.className = "card-prestadora";
      card.innerHTML = `
        <img src="${p.imagem}" alt="Foto de ${p.nome}">
        <h3>${p.nome}</h3>
        <p>${p.servico} • ${p.cidade}</p>
        <a href="${p.perfil}" class="btn-primaria">Ver Perfil</a>
      `;
      container.appendChild(card);
    });
  }
  
  // Renderizar propostas
  function renderizarPropostas(lista) {
    const container = document.getElementById("propostas-container");
    container.innerHTML = "";
  
    lista.forEach(p => {
      const proposta = document.createElement("div");
      proposta.className = "proposta";
      const statusClass = p.status === "Pendente" ? "pendente" : "aceita";
      proposta.innerHTML = `
        <strong>${p.prestadora}</strong> — Status: <span class="${statusClass}">${p.status}</span>
        <a href="${p.link}">Ver detalhes</a>
      `;
      container.appendChild(proposta);
    });
  }
  
  // Filtro de busca (ainda simples)
  document.querySelector(".painel-busca").addEventListener("submit", (e) => {
    e.preventDefault();
    const termo = document.getElementById("busca-input").value.toLowerCase();
    const local = document.getElementById("busca-local").value.toLowerCase();
  
    const filtrado = prestadoras.filter(p =>
      p.nome.toLowerCase().includes(termo) &&
      (local === "" || p.cidade.toLowerCase().includes(local))
    );
  
    renderizarPrestadoras(filtrado);
  });
  
  // Execução inicial
  renderizarPrestadoras(prestadoras);
  renderizarPropostas(propostas);
  