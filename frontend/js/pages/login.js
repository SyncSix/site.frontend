const passwordInput = document.getElementById("password");
const toggleButton = document.querySelector(".toggle-password");

toggleButton.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";

  passwordInput.type = isHidden ? "text" : "password";
  toggleButton.classList.toggle("is-visible", isHidden);
  toggleButton.setAttribute("aria-pressed", String(isHidden));
  toggleButton.setAttribute(
    "aria-label",
    isHidden ? "Ocultar senha" : "Mostrar senha"
  );
});