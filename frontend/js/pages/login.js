// ===== Mock Usuários =====
const USUARIOS = [
  // Telas principais
  {
    login: "aluno@fatec.sp.gov.br",
    senha: "Aluno@123",
    destino: "../aluno/home.html", // ajuste para a home do aluno
  },
  {
    login: "professor@fatec.sp.gov.br",
    senha: "Professor@123",
    destino: "../professor/home.html", // ajuste para a home do professor
  },
  {
    login: "secretaria@fatec.sp.gov.br",
    senha: "Secretaria@123",
    destino: "../secretaria/home.html", // ajuste para a home da secretaria
  },

  // Fluxos especiais
  {
    login: "analise@fatec.sp.gov.br",
    senha: "Analise@123",
    destino: "../acesso-analise.html",
  },
  {
    login: "bloqueado@fatec.sp.gov.br",
    senha: "Bloqueado@123",
    destino: "../acesso-bloqueado.html",
  },
];

const form = document.querySelector("form");
const inputLogin = document.getElementById("email");
const inputSenha = document.getElementById("password");
const passwordInput = document.getElementById("password");
const toggleButton = document.querySelector(".toggle-password");

toggleButton.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";

  passwordInput.type = isHidden ? "text" : "password";
  toggleButton.classList.toggle("is-visible", isHidden);
  toggleButton.setAttribute("aria-pressed", String(isHidden));
  toggleButton.setAttribute(
    "aria-label",
    isHidden ? "Ocultar senha" : "Mostrar senha",
  );
});

// ===== Pop-up de erro =====
function mostrarErro(mensagem) {
  // evita abrir dois pop-ups
  document.querySelector(".popup-overlay")?.remove();

  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  overlay.innerHTML = `
    <div class="popup" role="alertdialog" aria-modal="true" aria-labelledby="popup-msg">
      <p id="popup-msg" class="popup-msg">${mensagem}</p>
      <button type="button" class="popup-btn">Fechar</button>
    </div>
  `;

  const fechar = () => {
    overlay.remove();
    inputLogin.focus();
  };

  overlay.querySelector(".popup-btn").addEventListener("click", fechar);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) fechar();
  });
  document.addEventListener("keydown", function esc(e) {
    if (e.key === "Escape") {
      fechar();
      document.removeEventListener("keydown", esc);
    }
  });

  document.body.appendChild(overlay);
  overlay.querySelector(".popup-btn").focus();
}

// ===== Validação =====
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const login = inputLogin.value.trim().toLowerCase();
  const senha = inputSenha.value;

  if (!login || !senha) {
    mostrarErro("Preencha o usuário e a senha.");
    return;
  }

  const usuario = USUARIOS.find(
    (u) => u.login.toLowerCase() === login && u.senha === senha,
  );

  if (!usuario) {
    mostrarErro("Usuário ou senha não cadastrados.");
    inputSenha.value = "";
    return;
  }

  window.location.href = usuario.destino;
});
