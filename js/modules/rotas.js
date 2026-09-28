// Dicionário de rotas: a chave é o caminho da página e o valor é o HTML
// que o main.js coloca dentro da tag <main> ao navegar
export const rotas = {
  // Página Inicial: apresentação da ONG e contato
  "/index.html": `
    <section id="apresentacao">
      <h2>Bem-vindo à nossa ONG</h2>
      <p>Ajudamos animais resgatados a encontrarem um lar amoroso.</p>
      <picture>
        <source type="image/webp" srcset="img/cachorro_fundo_rosa-600w.webp 600w, img/cachorro_fundo_rosa-1200w.webp 1200w" sizes="600px">
        <source type="image/jpeg" srcset="img/cachorro_fundo_rosa-600w.jpg 600w, img/cachorro_fundo_rosa-1200w.jpg 1200w" sizes="600px">
        <img src="img/cachorro_fundo_rosa-600w.jpg" alt="Cachorro sentado de frente à um câmera em um fundo rosa claro" width="600">
      </picture>
    </section>

    <section id="contato">
      <h2>Contato</h2>
      <p>Email: contato@ong.org.br</p>
      <p>Telefone: (11) 99999-9999</p>
    </section>
  `,

  // Projetos: trabalho voluntário e doações
  "/projetos.html": `
    <section id="voluntariado">
      <h2>Trabalho Voluntário</h2>
      <p>Apoie nossa causa dedicando seu tempo aos animais resgatados. Você pode ajudar em diversas frentes:</p>
      <ul>
        <li><strong>Cuidado Direto:</strong>Auxílio na alimentação, passeios e higienização do abrigo.</li>
        <li><strong>Eventos e Feiras:</strong> Auxílio em feiras e eventos para encontrar lares responsáveis.</li>
        <li><strong>Lar Temporário:</strong> Acolhimento temporário de animais até a adoção definitiva.</li>
      </ul>
    </section>

    <section id="doacoes">
      <h2>Doações</h2>
      <p>Sua contribuição garante alimento, abrigo e cuidados médicos para os nossos resgatados. Veja como colaborar:</p>
      <ul>
        <li><strong>Doação de Suprimentos:</strong> Ração, medicamentos veterinários, produtos de limpeza e cobertas.</li>
        <li><strong>Ajuda Financeira:</strong> Contribuições via PIX para custear exames, vacinas e castrações.</li>
      </ul>
    </section>
  `,

  // Cadastro: formulário de dados pessoais e endereço
  "/cadastro.html": `
    <section id="form">
      <h2>Formulário de Cadastro</h2>
      <p>Preencha os campos abaixo para se cadastrar em nossa ONG:</p>

      <form>
        <div id="mensagem-sucesso" class="alerta alerta-sucesso" role="status" aria-live="polite" hidden>✓ Cadastro realizado com sucesso! Os dados foram salvos.</div>

        <fieldset>
          <legend>Dados Pessoais</legend>

          <div class="mb-3">
            <label for="nome-completo" class="form-label">Nome completo:</label>
            <input type="text" class="form-control" id="nome-completo" name="nome-completo" required placeholder="Digite seu nome completo">
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" required placeholder="Digite seu email">
          </div>

          <div class="mb-3">
            <label for="data-de-nascimento" class="form-label">Data de nascimento:</label>
            <input type="date" class="form-control" id="data-de-nascimento" name="data-de-nascimento" required>
          </div>

          <div class="mb-3">
            <label for="CPF" class="form-label">CPF:</label>
            <input type="text" class="form-control" id="CPF" name="CPF" required pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" placeholder="Digite seu CPF">
          </div>

          <div class="mb-3">
            <label for="telefone" class="form-label">Telefone:</label>
            <input type="tel" class="form-control" id="telefone" name="telefone" required pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}" placeholder="Digite seu telefone">
          </div>
        </fieldset>

        <fieldset>
          <legend>Cadastro de endereço</legend>

          <div class="mb-3">
            <label for="rua" class="form-label">Rua:</label>
            <input type="text" class="form-control" id="rua" name="rua" required placeholder="Digite o nome da rua">
          </div>

          <div class="mb-3">
            <label for="numero" class="form-label">Número:</label>
            <input type="text" class="form-control" id="numero" name="numero" required placeholder="Digite o número">
          </div>

          <div class="mb-3">
            <label for="complemento" class="form-label">Complemento (opcional):</label>
            <input type="text" class="form-control" id="complemento" name="complemento" placeholder="Digite o complemento">
          </div>

          <div class="mb-3">
            <label for="bairro" class="form-label">Bairro:</label>
            <input type="text" class="form-control" id="bairro" name="bairro" required placeholder="Digite o bairro">
          </div>

          <div class="mb-3">
            <label for="cidade" class="form-label">Cidade:</label>
            <input type="text" class="form-control" id="cidade" name="cidade" required placeholder="Digite a cidade">
          </div>

          <div class="mb-3">
            <label for="estado" class="form-label">Estado:</label>
            <input type="text" class="form-control" id="estado" name="estado" required placeholder="Digite o estado">
          </div>

          <div class="mb-3">
            <label for="cep" class="form-label">CEP:</label>
            <input type="text" class="form-control" id="cep" name="cep" required pattern="[0-9]{5}-[0-9]{3}" placeholder="Digite o CEP">
          </div>
        </fieldset>

        <input type="submit" class="btn btn-primary mt-3" value="Cadastrar">
      </form>
    </section>
  `
};
