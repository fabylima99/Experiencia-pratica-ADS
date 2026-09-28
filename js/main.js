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
// moverFoco: true em navegação via SPA; false no carregamento inicial
function renderizarConteudo(caminho, moverFoco = false) {
  const container = document.querySelector("main");
  const tituloH1 = document.querySelector("header h1") || document.querySelector("h1");

  // Usa apenas o nome do arquivo, ignorando subpastas (compatível com GitHub Pages)
  const partesDoCaminho = caminho.split("/").filter(Boolean);
  const arquivo = partesDoCaminho[partesDoCaminho.length - 1];
  const rotaTratada = arquivo && arquivo.endsWith(".html") ? "/" + arquivo : "/index.html";

  // Injeta o HTML da rota atual no container (ou exibe 404 se não encontrar)
  container.innerHTML = rotas[rotaTratada] || "<h2>404</h2><p>Página não encontrada</p>";

  // Atualiza o texto do <h1> caso ele exista no HTML
  if (tituloH1 && titulosPaginas[rotaTratada]) {
    tituloH1.textContent = titulosPaginas[rotaTratada];
  }

  document.title = titulosPaginas[rotaTratada] || "Página não encontrada";

  if (moverFoco) {
    container.focus();
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

      // Resolve o href relativo à página atual (compatível com subpastas)
      const destino = new URL(link.getAttribute("href"), window.location.href);

      // Atualiza a URL na barra de endereço do navegador sem dar refresh
      window.history.pushState({}, "", destino.pathname);

      renderizarConteudo(destino.pathname, true);
    });
  });

  // Escuta os botões "Voltar" e "Avançar" do histórico do navegador
  window.addEventListener("popstate", () => {
    renderizarConteudo(window.location.pathname, true);
  });

  const botaoMenu = document.querySelector(".menu-hamburger");
  const menuLinks = document.querySelector(".menu-links");

  if (botaoMenu && menuLinks) {
    botaoMenu.addEventListener("click", () => {
      const menuAberto = menuLinks.classList.toggle("aberto");
      botaoMenu.setAttribute("aria-expanded", menuAberto);
    });
  }
});

// Escuta o envio de formulários na página para salvar os dados no storage
document.addEventListener("submit", salvarCadastro);