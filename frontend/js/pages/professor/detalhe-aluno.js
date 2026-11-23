const cursos = {
  DSM: "Desenvolvimento de Software Multiplataforma",
  CDN: "Ciência de Dados para Negócios",
  CO: "Controle de Obras",
  ENGC: "Engenharia Civil",
};

// Status do balão (as classes já existem no CSS da ficha)
const status = {
  estagio: { texto: "Em andamento", classe: "ficha-status--andamento" },
  equivalencia: { texto: "Equivalência", classe: "ficha-status--analise" },
  pendente: { texto: "Pendente", classe: "ficha-status--correcao" },
};

// id: [nome, ra, curso, turma, situacao, total, estagio, equivalencia]
const dados = {
  1: ["Ana Beatriz", "999999999", "DSM", 2, "estagio", 240, 120, 60],
  2: ["Eliane Rocha", "888888801", "CDN", 4, "equivalencia", 240, 30, 60],
  3: ["Lucas Almeida", "888888802", "DSM", 3, "estagio", 240, 150, 0],
  4: ["Mariana Souza", "888888803", "ENGC", 1, "pendente", 120, 40, 0],
  5: ["Rafael Mendes", "888888804", "CO", 5, "equivalencia", 240, 40, 60],
  6: ["Gabriel Ferreira", "888888805", "DSM", 2, "estagio", 240, 60, 0],
  7: ["Camila Torres", "888888806", "DSM", 2, "pendente", 120, 80, 0],
  8: ["Pedro Lima", "888888807", "DSM", 2, "equivalencia", 240, 60, 60],
  9: ["Juliana Costa", "888888808", "CDN", 4, "estagio", 240, 200, 0],
  10: ["Thiago Santos", "888888809", "CDN", 4, "equivalencia", 240, 10, 60],
  11: ["Fernanda Dias", "888888810", "ENGC", 1, "estagio", 240, 30, 0],
  12: ["Bruno Carvalho", "888888811", "ENGC", 6, "pendente", 120, 20, 0],
  13: ["Larissa Prado", "888888812", "CO", 5, "estagio", 240, 210, 0],
  14: ["Henrique Rocha", "888888813", "DSM", 6, "equivalencia", 240, 50, 60],
  15: ["Patrícia Nunes", "888888814", "CO", 3, "pendente", 120, 60, 0],
};

// Lê o número depois do "?id=" na URL (se não achar, usa o aluno 1)
const id = new URLSearchParams(location.search).get("id");
const [nome, ra, curso, turma, situacao, total, estagio, equivalencia] =
  Object.hasOwn(dados, id) ? dados[id] : dados[1];

const validadas = estagio + equivalencia;
const campo = (n) => document.querySelector(`[data-campo="${n}"]`);

campo("nome").textContent = nome;
campo("ra").textContent = ra;
campo("curso-turma").textContent = `${cursos[curso]} · ${turma}º semestre`;

const balao = campo("status");
balao.textContent = status[situacao].texto;
balao.className = `ficha-status ${status[situacao].classe}`;

campo("horas").textContent = `${validadas}h de ${total}h validadas`;
campo("restante").textContent =
  validadas >= total
    ? "Carga horária concluída"
    : `Faltam ${total - validadas}h para concluir`;
campo("estagio").textContent = `${estagio}h`;
campo("equivalencia").textContent = `${equivalencia}h`;

campo("barra").style.width = `${Math.min((validadas / total) * 100, 100)}%`;
campo("barra-aria").setAttribute("aria-valuenow", validadas);
campo("barra-aria").setAttribute("aria-valuemax", total);

document.title = `Ficha · ${nome}`;