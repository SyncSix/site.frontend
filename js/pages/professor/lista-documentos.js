const inputBusca = document.getElementById("busca-documento");
const selectCurso = document.getElementById("curso");
const selectTurma = document.getElementById("turma");
const filtrosSituacao = document.querySelectorAll(".situacao .filtro");
const cardsDocumentos = document.querySelectorAll(".item-aluno");
const semResultados = document.querySelector(".sem-resultados");

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function aplicarFiltros() {
  const situacao = document.querySelector(".situacao .filtro--ativo").dataset.filtro;
  const curso = selectCurso.value;
  const turma = selectTurma.value;
  const termo = normalizar(inputBusca.value);

  let visiveis = 0;

  cardsDocumentos.forEach((card) => {
    // Nome do documento (h3) + linha do aluno (primeiro .item-aluno-info)
    const textoBusca = normalizar(
      card.querySelector("h3").textContent +
        " " +
        card.querySelector(".item-aluno-info").textContent
    );

    const bateSituacao = situacao === "todos" || card.dataset.situacao === situacao;
    const bateCurso = !curso || card.dataset.curso === curso;
    const bateTurma = !turma || card.dataset.turma === turma;
    const bateBusca = !termo || textoBusca.includes(termo);

    const visivel = bateSituacao && bateCurso && bateTurma && bateBusca;
    card.hidden = !visivel;

    if (visivel) visiveis++;
  });

  semResultados.hidden = visiveis > 0;
}

filtrosSituacao.forEach((btn) => {
  btn.addEventListener("click", () => {
    filtrosSituacao.forEach((b) => {
      b.classList.remove("filtro--ativo");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("filtro--ativo");
    btn.setAttribute("aria-pressed", "true");

    aplicarFiltros();
  });
});

selectCurso.addEventListener("change", aplicarFiltros);
selectTurma.addEventListener("change", aplicarFiltros);
inputBusca.addEventListener("input", aplicarFiltros);