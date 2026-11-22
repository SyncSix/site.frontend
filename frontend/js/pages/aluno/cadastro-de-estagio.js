// Funções que formatam o texto enquanto a pessoa digita

function somenteNumeros(texto) {
  return texto.replace(/\D/g, "");
}

function formatarCnpj(valor) {
  const n = somenteNumeros(valor).slice(0, 14);
  return n
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

function formatarCpf(valor) {
  const n = somenteNumeros(valor).slice(0, 11);
  return n
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function formatarCep(valor) {
  const n = somenteNumeros(valor).slice(0, 8);
  return n.replace(/(\d{5})(\d)/, "$1-$2");
}

function formatarTelefone(valor) {
  const n = somenteNumeros(valor).slice(0, 11);
  if (n.length <= 10) {
    return n.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
  }
  return n.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
}

// Liga cada campo à sua formatação
function ligarMascara(id, funcao) {
  const campo = document.getElementById(id);
  campo.addEventListener("input", function () {
    campo.value = funcao(campo.value);
  });
}

ligarMascara("cnpj", formatarCnpj);
ligarMascara("cpf", formatarCpf);
ligarMascara("cep", formatarCep);
ligarMascara("telefoneEmpresa", formatarTelefone);
ligarMascara("telefoneSupervisor", formatarTelefone);
