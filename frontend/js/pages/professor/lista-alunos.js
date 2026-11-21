const filtrosSituacao = document.querySelectorAll(".situacao .filtro");
const cardsAlunos = document.querySelectorAll(".item-aluno");

filtrosSituacao.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Visual do botão selecionado
    filtrosSituacao.forEach((b) => {
      b.classList.remove("filtro--ativo");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("filtro--ativo");
    btn.setAttribute("aria-pressed", "true");

    // Filtro dos cards
    const escolhido = btn.dataset.filtro;

    cardsAlunos.forEach((card) => {
      const visivel =
        escolhido === "todos" || card.dataset.situacao === escolhido;
      card.hidden = !visivel;
    });
  });
});