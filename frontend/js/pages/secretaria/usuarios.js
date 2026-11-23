const inputBusca = document.getElementById("busca-usuario");
const selectCurso = document.getElementById("curso");
const filtros = document.querySelectorAll(".filtros .filtro");
const cards = document.querySelectorAll(".usr-card");
const semResultados = document.querySelector(".sem-resultados");

function aplicarFiltros() {
  const tipo = document.querySelector(".filtros .filtro--ativo").dataset.filtro;
  const curso = selectCurso.value;
  const termo = normalizar(inputBusca.value);

  let visiveis = 0;

  cards.forEach((card) => {
    // Busca em nome, perfil/RA, curso e situação (não nos botões de ação)
    const texto = normalizar(
      [...card.querySelectorAll(".usr-card-topo, .usr-perfil, .usr-info, .usr-cursos")]
        .map((el) => el.textContent)
        .join(" ")
    );

    const bateTipo = tipo === "todos" || card.dataset.tipo === tipo;
    // data-curso pode ter mais de um valor (professor): "DSM CDN"
    const bateCurso = !curso || card.dataset.curso.split(" ").includes(curso);
    const bateBusca = !termo || texto.includes(termo);

    const visivel = bateTipo && bateCurso && bateBusca;
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

selectCurso.addEventListener("change", aplicarFiltros);
inputBusca.addEventListener("input", aplicarFiltros);