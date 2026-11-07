document.querySelectorAll("[data-voltar]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.voltar) {
      window.location.href = btn.dataset.voltar; // destino fixo
    } else {
      window.history.back(); // volta para a página anterior
    }
  });
});