// Função chamada quando qualquer formulário da página é enviado (evento "submit")
export function salvarCadastro(event) {
  // Impede o envio padrão do formulário, que recarregaria a página
  event.preventDefault();

  const formulario = event.target;

  // Procura o campo de e-mail; só existe na página de cadastro
  const inputEmail = formulario.querySelector("#email");

  if (inputEmail) {
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
}
