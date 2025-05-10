// Dados fictícios
const prestadoras = [
  { nome: "Maria Oliveira", servico: "Limpeza e Conservação", cidade: "São Paulo - SP", imagem: "img/mulherperfil.jpg", perfil: "perfil.html" },
  { nome: "Ana Silva", servico: "Serviços administrativos", cidade: "Rio de Janeiro - RJ", imagem: "img/mulherperfil.jpg", perfil: "perfil.html" }
];

const propostas = [
  { id: 1, prestadora: "Maria Oliveira", status: "Pendente", servico: "Limpeza pós-obra", mensagem: "Olá! Gostaria de contar com seus serviços para uma limpeza pós-reforma no nosso escritório.", link: "proposta.html?id=1" },
  { prestadora: "Ana Silva", status: "Aceita", link: "#" }
];

// Renderizar cards e propostas
function renderizarPrestadoras(lista) {
  const container = document.getElementById("resultados-container");
  if (!container) return;
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

function renderizarPropostas(lista) {
  const container = document.getElementById("propostas-container");
  if (!container) return;
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

// Filtro de busca
document.addEventListener("DOMContentLoaded", () => {
  renderizarPrestadoras(prestadoras);
  renderizarPropostas(propostas);



  const buscaForm = document.querySelector(".painel-busca");
  if (buscaForm) {
    buscaForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const termo = document.getElementById("busca-input").value.toLowerCase();
      const local = document.getElementById("busca-local").value.toLowerCase();
      const filtrado = prestadoras.filter(p =>
        p.nome.toLowerCase().includes(termo) &&
        (local === "" || p.cidade.toLowerCase().includes(local))
      );
      renderizarPrestadoras(filtrado);
    });
  }



  // Cadastro

  function verificarCadastro() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("cadastro") === "ok") {
      alert("Cadastro realizado com sucesso! Faça login para continuar.");
      window.location.href = "login.html";
    }
  }
  const formulario = document.querySelector(".formulario-missao");
  if (!formulario) {
    console.error("Formulário não encontrado!");
    return;
  }

  formulario.addEventListener("submit", function (e) {
   // e.preventDefault();
    const tipo = document.getElementById("tipo").value;
    if (tipo === "empresa" || tipo === "profissional") {
      alert("Cadastro realizado com sucesso!");
      window.location.href = "login.html";
    } else {
      alert("Selecione um tipo de usuário.");
    }
  });
  

  verificarCadastro();

  
});
