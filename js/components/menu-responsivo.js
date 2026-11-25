(() => {
  const menu = document.querySelector('.bottom-nav');
  const itemAtivo = menu?.querySelector('.bottom-nav__item.is-active');
  if (!itemAtivo) return;

  const telaAmpla = window.matchMedia('(min-width: 768px)');
  const itens = [...menu.querySelectorAll('.bottom-nav__item')];
  const atalhoPerfil = menu.querySelector('a[href="#perfil"]');
  const hrefOriginal = atalhoPerfil?.getAttribute('href');
  let estadoCompacto;

  function marcarPaginaAtual() {
    if (!telaAmpla.matches) return;

    for (const item of itens) {
      item.classList.toggle('is-active', item === itemAtivo);
      item.removeAttribute('aria-current');
    }

    const mesmaPagina = itemAtivo.pathname === window.location.pathname;
    itemAtivo.setAttribute('aria-current', mesmaPagina ? 'page' : 'location');
  }

  function adaptarNavegacao() {
    if (telaAmpla.matches) {
      estadoCompacto = itens.map((item) => ({
        ativo: item.classList.contains('is-active'),
        atual: item.getAttribute('aria-current'),
      }));
      // A tela Nova atividade usa um fragmento sem destino para o perfil.
      atalhoPerfil?.setAttribute('href', 'perfil.html');
      marcarPaginaAtual();
      return;
    }

    atalhoPerfil?.setAttribute('href', hrefOriginal);
    itens.forEach((item, indice) => {
      const { ativo, atual } = estadoCompacto[indice];
      item.classList.toggle('is-active', ativo);
      if (atual === null) {
        item.removeAttribute('aria-current');
      } else {
        item.setAttribute('aria-current', atual);
      }
    });
  }

  telaAmpla.addEventListener('change', adaptarNavegacao);
  // O estado continua correto ao abrir um link em outra aba ou voltar à página.
  menu.addEventListener('click', marcarPaginaAtual);
  window.addEventListener('pageshow', marcarPaginaAtual);

  if (telaAmpla.matches) adaptarNavegacao();
})();
