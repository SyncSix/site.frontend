const inputBusca = document.getElementById("busca-aluno");
const selectCurso = document.getElementById("curso");
const selectTurma = document.getElementById("turma");
const filtrosSituacao = document.querySelectorAll(".situacao .filtro");
const cardsAlunos = document.querySelectorAll(".item-aluno");

function aplicarFiltros() {
  const situacao = document.querySelector(".situacao .filtro--ativo").dataset.filtro;
  const curso = selectCurso.value;
  const turma = selectTurma.value;
  const termo = normalizar(inputBusca.value);

  cardsAlunos.forEach((card) => {
    const nome = normalizar(card.querySelector("h3").textContent);

    const bateSituacao = situacao === "todos" || card.dataset.situacao === situacao;
    const bateCurso = !curso || card.dataset.curso === curso;
    const bateTurma = !turma || card.dataset.turma === turma;
    const bateNome = !termo || nome.includes(termo);

    card.hidden = !(bateSituacao && bateCurso && bateTurma && bateNome);
  });
}

// Botões de situação
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

// Selects de curso e turma
selectCurso.addEventListener("change", aplicarFiltros);
selectTurma.addEventListener("change", aplicarFiltros);

// Busca por nome (filtra enquanto digita)
inputBusca.addEventListener("input", aplicarFiltros);
