// Mostra ou limpa a mensagem de erro logo após o campo, criando o elemento se necessário
function exibirErro(campo, valido) {
  let erro = campo.nextElementSibling;
  if (!erro || !erro.classList.contains("erro-campo")) {
    erro = document.createElement("span");
    erro.className = "erro-campo";
    erro.setAttribute("role", "alert");
    campo.insertAdjacentElement("afterend", erro);
  }
  erro.textContent = valido
    ? ""
    : campo.value === ""
      ? "Este campo é obrigatório."
      : "Formato inválido.";
}

// Função chamada quando qualquer formulário da página é enviado (evento "submit")
export function salvarCadastro(event) {
  // Impede o envio padrão do formulário, que recarregaria a página
  event.preventDefault();

  const formulario = event.target;

  // Procura o campo de e-mail; só existe na página de cadastro
  const inputEmail = formulario.querySelector("#email");
  if (!inputEmail) return;

  // Valida cada campo: remove espaços nas pontas, checa se ficou vazio e
  // respeita as regras nativas do HTML (required, type, pattern)
  const campos = Array.from(formulario.querySelectorAll('input:not([type="submit"])'));
  let formularioValido = true;

  campos.forEach((campo) => {
    campo.value = campo.value.trim();
    const vazio = campo.value === "";
    const valido = !(campo.required && vazio) && campo.checkValidity();

    campo.classList.toggle("campo-invalido", !valido);
    campo.classList.toggle("campo-valido", valido && !vazio);
    exibirErro(campo, valido);

    if (!valido) formularioValido = false;
  });

  if (!formularioValido) return;

  // Lê todos os campos preenchidos no formulário (nome, e-mail, CPF, endereço...)
  const dadosCadastro = Object.fromEntries(new FormData(formulario).entries());

  // Lê a lista de cadastros já salva no navegador (ou começa uma lista vazia)
  const listaCadastros = JSON.parse(localStorage.getItem("cadastrosVoluntarios")) || [];

  // Adiciona o cadastro completo ao final da lista
  listaCadastros.push(dadosCadastro);

  // Grava a lista atualizada no LocalStorage, convertida para texto (JSON)
  localStorage.setItem("cadastrosVoluntarios", JSON.stringify(listaCadastros));

  const mensagemSucesso = document.querySelector("#mensagem-sucesso");
  if (mensagemSucesso) {
    mensagemSucesso.hidden = false;
  }
}
