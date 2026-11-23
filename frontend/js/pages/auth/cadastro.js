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
