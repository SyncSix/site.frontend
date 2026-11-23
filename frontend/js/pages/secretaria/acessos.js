const fila = document.getElementById("ace-fila");
const historico = document.getElementById("ace-historico");
const contador = document.getElementById("ace-pendentes");
const vazio = document.getElementById("ace-vazio");
const busca = document.getElementById("ace-busca");

const dialog = document.getElementById("ace-dialog");
const form = document.getElementById("ace-form");
const titulo = document.getElementById("ace-dialog-titulo");
const nomeDialog = document.getElementById("ace-dialog-nome");
const rotulo = document.getElementById("ace-dialog-rotulo");
const justificativa = document.getElementById("ace-justificativa");
const erro = document.getElementById("ace-erro");

// Configuração de cada decisão
const decisoes = {
  liberar: {
    titulo: "Liberar acesso",
    rotulo: "Observação (opcional)",
    obrigatoria: false,
    balao: "Liberado",
    classe: "ace-balao--liberar",
  },
  correcao: {
    titulo: "Solicitar correção",
    rotulo: "O que precisa ser corrigido?",
    obrigatoria: true,
    balao: "Correção solicitada",
    classe: "ace-balao--correcao",
  },
  bloquear: {
    titulo: "Bloquear acesso",
    rotulo: "Motivo do bloqueio",
    obrigatoria: true,
    balao: "Bloqueado",
    classe: "ace-balao--bloquear",
  },
};

let cardAtual = null;
let decisaoAtual = null;

function atualizarFila() {
  const cards = fila.querySelectorAll(".ace-card");
  const termo = normalizar(busca.value);
  let visiveis = 0;

  cards.forEach((card) => {
    const texto = normalizar(
      card.querySelector("h4").textContent + " " + card.querySelector(".ace-ra").textContent
    );
    const visivel = !termo || texto.includes(termo);
    card.hidden = !visivel;
    if (visivel) visiveis++;
  });

  contador.textContent = cards.length;
  vazio.textContent = cards.length
    ? "Nenhuma solicitação encontrada."
    : "Nenhuma solicitação pendente.";
  vazio.hidden = visiveis > 0;
}

// Abre a janela ao clicar em uma decisão
fila.addEventListener("click", (e) => {
  const botao = e.target.closest("[data-decisao]");
  if (!botao) return;

  cardAtual = botao.closest(".ace-card");
  decisaoAtual = botao.dataset.decisao;
  const config = decisoes[decisaoAtual];

  titulo.textContent = config.titulo;
  nomeDialog.textContent = cardAtual.querySelector("h4").textContent;
  rotulo.textContent = config.rotulo;
  justificativa.value = "";
  justificativa.classList.remove("ace-campo-erro");
  erro.hidden = true;

  dialog.showModal();
});

document.getElementById("ace-cancelar").addEventListener("click", () => dialog.close());

// Registra a decisão
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const config = decisoes[decisaoAtual];

  if (config.obrigatoria && !justificativa.value.trim()) {
    erro.textContent = "Descreva o motivo para registrar a decisão.";
    erro.hidden = false;
    justificativa.classList.add("ace-campo-erro");
    return;
  }

  const nome = cardAtual.querySelector("h4").textContent;
  const quando = new Date().toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });

  // Novo registro no topo do histórico
  const item = document.createElement("li");
  item.className = "ace-hist-item";

  const topo = document.createElement("div");
  topo.className = "ace-hist-topo";

  const strong = document.createElement("strong");
  strong.textContent = nome;

  const balao = document.createElement("span");
  balao.className = `ace-balao ${config.classe}`;
  balao.textContent = config.balao;

  const meta = document.createElement("p");
  meta.textContent = `Secretaria · ${quando}`;

  topo.append(strong, balao);
  item.append(topo, meta);
  historico.prepend(item);

  // Aqui entra o envio da decisão (nome, decisaoAtual, justificativa.value)
  cardAtual.remove();
  dialog.close();
  atualizarFila();
});

busca.addEventListener("input", atualizarFila);
atualizarFila();