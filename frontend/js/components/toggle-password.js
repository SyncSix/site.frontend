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
