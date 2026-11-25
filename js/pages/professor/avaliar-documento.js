const form = document.getElementById("form-avaliacao");
const horas = document.getElementById("horas");
const justificativa = document.getElementById("justificativa");
const erro = document.getElementById("erro-form");
const botao = form.querySelector(".btn-primario");

botao.disabled = true;

form.addEventListener("change", (e) => {
  if (e.target.name === "decisao") {
    botao.disabled = false;
    erro.hidden = true;
    horas.classList.remove("campo--erro");
    justificativa.classList.remove("campo--erro");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const decisao = form.querySelector('input[name="decisao"]:checked')?.value;
  if (!decisao) return;

  let mensagem = "";

  if (decisao === "aprovar" && (!horas.value || Number(horas.value) <= 0)) {
    mensagem = "Informe a quantidade de horas a validar.";
    horas.classList.add("campo--erro");
  } else if (decisao !== "aprovar" && !justificativa.value.trim()) {
    mensagem = "Descreva o motivo para o aluno.";
    justificativa.classList.add("campo--erro");
  }

  if (mensagem) {
    erro.textContent = mensagem;
    erro.hidden = false;
    return;
  }

  // Aqui entra o envio da decisão (decisao, horas.value, justificativa.value)
  console.log({ decisao, horas: horas.value, justificativa: justificativa.value });
});