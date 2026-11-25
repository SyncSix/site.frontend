document.querySelectorAll("[data-voltar]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const destino = btn.dataset.voltar;

    if (destino) {
      window.location.href = destino;
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "./login.html";
    }
  });
});