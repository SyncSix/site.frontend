# Sistema Integrado de Trabalho e Estágio (SITE)

Protótipo visual mobile-first da Fatec Votorantim, com telas de autenticação e de acompanhamento de estágios para aluno, professor e secretaria. O projeto usa HTML, CSS e JavaScript e roda sem instalação ou build.

## Como visualizar

Abra o [index.html](index.html) no navegador para ir à tela de login. A fonte Poppins é carregada pelo Google Fonts quando a conexão está disponível.

| Fluxo de demonstração | Usuário | Senha |
| --- | --- | --- |
| Aluno | `aluno@fatec.sp.gov.br` | `Aluno@123` |
| Professor | `professor@fatec.sp.gov.br` | `Professor@123` |
| Secretaria | `secretaria@fatec.sp.gov.br` | `Secretaria@123` |
| Acesso em análise | `analise@fatec.sp.gov.br` | `Analise@123` |
| Acesso negado | `bloqueado@fatec.sp.gov.br` | `Bloqueado@123` |

O login usa essas contas fictícias para navegar entre as telas. As buscas, os filtros, as máscaras e a fila de acessos da secretaria rodam no navegador. Cadastro, recuperação de senha, envio de documentos e aprovação de estágios são demonstrações sem integração com servidor ou persistência. Use dados fictícios nos formulários. O campo de login exibe “Email ou RA”, porém a validação atual aceita apenas endereços de e-mail.

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `frontend/pages/auth/` | Login, primeiro acesso, recuperação de senha e estados de acesso. |
| `frontend/pages/aluno/` | Início, estágios, modalidades de atividade, cadastro, documentos e perfil. |
| `frontend/pages/professor/` | Início, lista de alunos, ficha, documentos, avaliação e relatório. |
| `frontend/pages/secretaria/` | Início, gestão de usuários e fila de solicitações de acesso. |
| `frontend/styles/global.css` | Variáveis de cor e tipografia e reset de estilos. |
| `frontend/styles/components/` e `frontend/js/components/` | Estilos e interações compartilhados. |
| `frontend/styles/pages/` e `frontend/js/pages/` | Estilos e scripts específicos, organizados pela mesma área das telas. |
| `frontend/assets/` | Imagens e ícones. |
| `frontend/docs/` | [Guia simplificado de desenvolvimento](frontend/docs/guia-simplificado-desenvolvimento.pdf). |

Cada tela carrega o CSS global uma vez, antes dos componentes e dos estilos da página. Cores reutilizadas e famílias tipográficas ficam no global. A lógica de cada tela fica na pasta da sua área quando há uma interação específica.

O guia em PDF descreve a estrutura inicial. Os caminhos da tabela e as instruções de execução acima refletem o repositório atual.

O código atual tem dez recursos visuais sem referência direta. São `icon-atividades.svg`, `icon-avaliacoes.svg`, `icon-book.svg`, `icon-documentos.svg`, `icon-home.png`, `icon-notificacao.svg`, `icon-relatorio.svg`, `icon-user.svg` e `icon-users.svg` em `assets/icons/`, além de `LogoFatecVoto.svg` em `assets/images/`.

## Responsividade

- As larguras de 320, 360, 390, 430 e 767 px foram verificadas no Chrome com emulação mobile. As barras de filtros de Estágios e da Lista de Alunos rolam horizontalmente dentro do próprio componente.
- Em Documentos do Estágio, o menu fixo sobrepõe o último botão mesmo no fim da rolagem. Na lista de Estágios, o menu também cobre a ação de nova atividade enquanto ela está presa à borda da janela.
- Em uma janela de 390 × 280 px, o logo do login e da recuperação de senha fica recortado no topo.
- Alguns caminhos CSS do fundo e dos ícones de senha e de voltar nas telas de autenticação apontam para uma pasta incorreta. A correção fará esses elementos aparecerem e faz parte dos ajustes visuais pendentes.
- A partir de 768 px, o CSS oculta a navegação inferior. As telas com espaçamento inferior próprio continuam reservando espaço para o menu, pois os estilos de página são carregados depois. O login já tem ajustes pontuais para essa largura. A navegação e o layout desktop das áreas internas ainda estão pendentes.

## Pull requests

O workflow [Validate Pull Request](.github/workflows/validate-pr.yml) roda em pull requests com destino à branch `main` e verifica se o nome da branch de origem é `developer`. Integre as mudanças em `developer` antes de abrir o PR para `main`.

O projeto usa a [licença MIT](LICENSE).
