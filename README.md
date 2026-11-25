# SITE — Sistema Integrado de Trabalho e Estágio

O SITE é um protótipo web do Projeto Integrador da Fatec Votorantim, desenvolvido pela equipe SyncSix. A plataforma reúne em um só lugar o acompanhamento de estágios pelos alunos, a avaliação de documentos pelos professores e a análise de acessos pela Secretaria Acadêmica.

O frontend usa HTML, CSS e JavaScript nativos. O layout segue a abordagem mobile-first, com navegação inferior em telas pequenas e menu lateral em telas maiores. O login usa contas fictícias e as interações simuladas acontecem no navegador. A autenticação real, o envio de documentos, a recuperação de senha por e-mail e a persistência das decisões dependem de integração com um backend.

## Perfis e fluxos

| Área | O que explorar |
| --- | --- |
| [Autenticação](pages/auth/login.html) | Login simulado, telas de primeiro acesso e recuperação de senha, e estados de acesso em análise ou não liberado. |
| [Aluno](pages/aluno/home.html) | Progresso, lista de estágios, formulário de cadastro, telas de documentos e perfil. |
| [Professor](pages/professor/home.html) | Listas de alunos e documentos, ficha do aluno, formulário de avaliação e relatório semestral de demonstração. |
| [Secretaria Acadêmica](pages/secretaria/home.html) | Consulta de usuários e simulação de liberação, correção ou bloqueio de acessos. |

## Como executar

Use o Git para clonar o repositório e um navegador moderno para acessar a aplicação. Os arquivos são servidos diretamente, sem etapa de compilação ou instalação de dependências do projeto.

```bash
git clone https://github.com/SyncSix/site.frontend.git
cd site.frontend
```

Abra o [`index.html`](index.html) da sua cópia local no navegador. A entrada redireciona para a tela de login. Os cenários fictícios de acesso estão no [script de login](js/pages/login.js).

Para executar via HTTP, abra um terminal na raiz do repositório. Se você tiver Python 3 instalado, use o comando abaixo e acesse [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

```bash
python -m http.server --bind 127.0.0.1 8000
```

Em ambientes em que o executável se chama `python3`, use `python3` no mesmo comando.

## Estrutura do repositório

| Caminho | Conteúdo |
| --- | --- |
| [`index.html`](index.html) | Ponto de entrada que redireciona para o login. |
| [`pages/`](pages/) | Páginas HTML em `auth/`, `aluno/`, `professor/` e `secretaria/`. |
| [`js/`](js/) | Componentes compartilhados em `components/` e scripts de tela em `pages/`. |
| [`styles/`](styles/) | Estilos de componentes e páginas, além de `global.css` e `responsividade.css`. |
| [`assets/`](assets/) | Ícones e imagens usados pelas telas e recursos de identidade visual. |
| [`docs/`](docs/) | Documentação do Projeto Integrador. |
| [`.github/workflows/`](.github/workflows/) | Automação de validação de pull requests. |

O [guia simplificado de desenvolvimento](docs/guia-simplificado-desenvolvimento.pdf) registra as convenções iniciais do projeto. Seus exemplos de caminhos e de execução refletem uma estrutura anterior. Use a estrutura e as instruções deste README para trabalhar na versão atual.

## Contribuição

1. Crie uma branch a partir de `developer` e faça as alterações nela.
2. Execute a aplicação e confira as telas afetadas em um viewport pequeno e em um maior. Verifique a navegação, os formulários relevantes e o console do navegador.
3. Abra um pull request para `developer` com um resumo da mudança e dos testes executados. O [workflow de validação](.github/workflows/validate-pr.yml) exige que pull requests destinados à `main` tenham origem em `developer`.

## Publicação

Configure a hospedagem estática para servir a raiz do repositório. O `index.html` é a entrada, e os recursos são referenciados por caminhos relativos, compatíveis com publicação em um subdiretório do domínio.

## Licença

Distribuído sob a [licença MIT](LICENSE). Copyright © 2026 SyncSix.
