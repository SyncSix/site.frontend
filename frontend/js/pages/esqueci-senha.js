document.querySelectorAll("[data-voltar]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.voltar) {
      window.location.href = btn.dataset.voltar;
    } else {
      window.history.back();
    }
  });
});

// ===== Pop-up de erro (topo da tela) =====
function mostrarErro(mensagem, campo) {
  document.querySelector(".popup-overlay")?.remove();

  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  overlay.innerHTML = `
    <div class="popup" role="alert">
      <p id="popup-msg" class="popup-msg">${mensagem}</p>
      <button type="button" class="popup-btn">Fechar</button>
    </div>
  `;

  const popup = overlay.querySelector(".popup");

  const fechar = () => {
    document.removeEventListener("keydown", esc);
    popup.classList.add("saindo");

    const remover = () => {
      overlay.remove();
      campo?.focus();
    };

    popup.addEventListener("animationend", remover, { once: true });
    setTimeout(() => overlay.isConnected && remover(), 400); // plano B
  };

  const esc = (e) => {
    if (e.key === "Escape") fechar();
  };

  overlay.querySelector(".popup-btn").addEventListener("click", fechar);
  document.addEventListener("keydown", esc);

  document.body.appendChild(overlay);
  overlay.querySelector(".popup-btn").focus();
}

// ===== Validação da recuperação de senha =====
const form = document.querySelector("form");
const inputEmail = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!inputEmail.value.trim()) {
    mostrarErro("Informe seu Email ou RA.", inputEmail);
    return;
  }

});