// Importa o dicionário de rotas e a função de salvamento do LocalStorage
import { rotas } from "./modules/rotas.js";
import { salvarCadastro } from "./modules/storage.js";

// Dicionário para mapear os títulos que devem aparecer no <h1> de cada página
const titulosPaginas = {
  "/index.html": "Página Inicial",
  "/projetos.html": "Nossos Projetos",
  "/cadastro.html": "Cadastro de Voluntários"
};

// Função responsável por atualizar o conteúdo da tela e o cabeçalho
function renderizarConteudo(caminho) {
  const container = document.querySelector("main");
  const tituloH1 = document.querySelector("header h1") || document.querySelector("h1");

  // Normalização: se a rota for a raiz ("/") ou vazia, direciona para "/index.html"
  const rotaTratada = (caminho === "/" || caminho === "") ? "/index.html" : caminho;

  // Injeta o HTML da rota atual no container (ou exibe 404 se não encontrar)
  container.innerHTML = rotas[rotaTratada] || "<h2>404</h2><p>Página não encontrada</p>";

  // Atualiza o texto do <h1> caso ele exista no HTML
  if (tituloH1 && titulosPaginas[rotaTratada]) {
    tituloH1.textContent = titulosPaginas[rotaTratada];
  }
}

// Evento disparado quando o documento HTML termina de carregar completamente
document.addEventListener("DOMContentLoaded", () => {
  
  // Identifica a rota atual da URL do navegador e renderiza a tela inicial tratada
  const caminhoAtual = window.location.pathname;
  renderizarConteudo(caminhoAtual);

  // Seleciona todos os links da navegação para aplicar a troca de página sem recarregar
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
      // Impede o comportamento padrão do link de recarregar a página inteira
      event.preventDefault();

      // Obtém o endereço do link e garante que ele comece com "/"
      const href = link.getAttribute("href");
      const caminho = href.startsWith("/") ? href : "/" + href;

      // Atualiza a URL na barra de endereço do navegador sem dar refresh
      window.history.pushState({}, "", caminho);
      
      // Renderiza o novo conteúdo na tela
      renderizarConteudo(caminho);
    });
  });

  // Escuta os botões "Voltar" e "Avançar" do histórico do navegador
  window.addEventListener("popstate", () => {
    renderizarConteudo(window.location.pathname);
  });
});

// Escuta o envio de formulários na página para salvar os dados no storage
document.addEventListener("submit", salvarCadastro);