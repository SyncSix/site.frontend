// Deixa só uma opção selecionada por vez
const opcoes = document.querySelectorAll(".opcao");

opcoes.forEach(function (opcao) {
  opcao.addEventListener("click", function () {
    opcoes.forEach(function (o) {
      o.classList.remove("selecionada");
    });
    opcao.classList.add("selecionada");
  });
});