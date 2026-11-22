const inputBusca = document.getElementById("busca-atividade");
const filtros = document.querySelectorAll(".filtros .filtro");
const cards = document.querySelectorAll(".card-atividade");
const semResultados = document.querySelector(".sem-resultados");

// Ignora acentos e maiúsculas/minúsculas
function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function aplicarFiltros() {
  const filtro = document.querySelector(".filtros .filtro--ativo").dataset.filtro;
  const termo = normalizar(inputBusca.value);

  let visiveis = 0;

  cards.forEach((card) => {
    // Busca na modalidade, no nome da atividade/empresa e nas informações
    const texto = normalizar(
      [
        card.querySelector(".card-atividade-tipo").textContent,
        card.querySelector(".card-atividade-titulo").textContent,
        ...[...card.querySelectorAll(".card-atividade-info")].map((p) => p.textContent),
      ].join(" ")
    );

    const bateFiltro = filtro === "todas" || card.dataset.status === filtro;
    const bateBusca = !termo || texto.includes(termo);

    const visivel = bateFiltro && bateBusca;
    card.hidden = !visivel;

    if (visivel) visiveis++;
  });

  semResultados.hidden = visiveis > 0;
}

filtros.forEach((btn) => {
  btn.addEventListener("click", () => {
    filtros.forEach((b) => {
      b.classList.remove("filtro--ativo");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("filtro--ativo");
    btn.setAttribute("aria-pressed", "true");

    aplicarFiltros();
  });
});

inputBusca.addEventListener("input", aplicarFiltros);