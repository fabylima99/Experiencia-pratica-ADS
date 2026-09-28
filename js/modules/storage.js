// Função chamada quando qualquer formulário da página é enviado (evento "submit")
export function salvarCadastro(event) {
  // Impede o envio padrão do formulário, que recarregaria a página
  event.preventDefault();

  // Procura o campo de e-mail; só existe na página de cadastro
  const inputEmail = document.querySelector("#email");

  if (inputEmail) {
    // Lê a lista de cadastros já salva no navegador (ou começa uma lista vazia)
    const listaCadastros = JSON.parse(localStorage.getItem("cadastrosVoluntarios")) || [];

    // Adiciona o e-mail digitado ao final da lista
    listaCadastros.push({ email: inputEmail.value });

    // Grava a lista atualizada no LocalStorage, convertida para texto (JSON)
    localStorage.setItem("cadastrosVoluntarios", JSON.stringify(listaCadastros));

    // Avisa a pessoa que o cadastro foi salvo
    alert("Cadastro realizado com sucesso!");
  }
}
