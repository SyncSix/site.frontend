const inputBusca = document.getElementById("busca-cadastro");
const filtros = document.querySelectorAll(".filtros .filtro");
const cards = document.querySelectorAll(".cad-card");
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
  const tipo = document.querySelector(".filtros .filtro--ativo").dataset.filtro;
  const termo = normalizar(inputBusca.value);

  let visiveis = 0;

  cards.forEach((card) => {
    // Busca pelo título e pela situação do card
    const texto = normalizar(
      card.querySelector("h4").textContent +
        " " +
        card.querySelector(".cad-card-situacao").textContent
    );

    const bateTipo = tipo === "todos" || card.dataset.tipo === tipo;
    const bateBusca = !termo || texto.includes(termo);

    const visivel = bateTipo && bateBusca;
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