const abas = document.querySelectorAll('.menu-perfil button');
const formularios = document.querySelectorAll('.form-perfil');

abas.forEach(aba => {
  aba.addEventListener('click', () => {
    abas.forEach(a => {
      const ativa = a === aba;
      a.classList.toggle('ativo', ativa);
      a.setAttribute('aria-selected', ativa);
    });

    formularios.forEach(f => {
      f.hidden = f.id !== aba.dataset.alvo;
    });
  });
});

document.querySelectorAll('.toggle-password').forEach(toggleButton => {
  const passwordInput = document.getElementById(
    toggleButton.getAttribute('aria-controls')
  );

  toggleButton.addEventListener('click', () => {
    const isHidden = passwordInput.type === 'password';

    passwordInput.type = isHidden ? 'text' : 'password';
    toggleButton.classList.toggle('is-visible', isHidden);
    toggleButton.setAttribute('aria-pressed', String(isHidden));
    toggleButton.setAttribute(
      'aria-label',
      isHidden ? 'Ocultar senha' : 'Mostrar senha'
    );
  });
});

// Botão de voltar
document.querySelectorAll("[data-voltar]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.voltar) {
      window.location.href = "./login.html";
    } else {
      window.location.href = "./login.html";
    }
  });
});