# Projeto ONG - Resgate e Adoção Animal

Aplicação web front-end desenvolvida para uma ONG de proteção e resgate animal. O site apresenta a instituição, divulga seus projetos (voluntariado e doações) e disponibiliza um formulário de cadastro de voluntários, com navegação estilo Single Page Application (SPA) e persistência local dos dados enviados.

**Demo:** [fabylima99.github.io/Experiencia-pratica-ADS](https://fabylima99.github.io/Experiencia-pratica-ADS/)

## Funcionalidades

- **Navegação SPA:** troca de página (Início, Projetos, Cadastro) sem recarregar o navegador, com URL e histórico atualizados via History API.
- **Apresentação institucional:** exibição de informações da ONG e formas de contato.
- **Divulgação de projetos:** listagem das frentes de voluntariado e das formas de doação.
- **Cadastro de voluntários:** formulário com validação nativa do HTML (campos obrigatórios, padrões de CPF/telefone/CEP) e feedback visual de sucesso.
- **Persistência local:** os dados enviados no cadastro são salvos no `localStorage` do navegador.
- **Layout responsivo:** menu hamburguer em telas pequenas e grid adaptável (12 → 6 → 4 → 3 → 2 colunas) conforme o tamanho da tela.

## Tecnologias Utilizadas

- **HTML5 Semântico** — marcação estruturada com `header`, `nav`, `main`, `section` e `footer`, visando acessibilidade e SEO.
- **CSS3** — Design System próprio com variáveis em `:root`, layout responsivo (Flexbox/Grid) e estilização do menu, formulários e componentes.
- **JavaScript ES6+ (Modules)** — lógica dividida em módulos (`import`/`export`), roteamento client-side via History API (`pushState`/`popstate`) e persistência de dados no `localStorage`.
- **Bootstrap 5.3** — componentes e classes utilitárias para estilização do formulário de cadastro.
- **Git/GitHub** — versionamento e histórico de commits do desenvolvimento.

## Estrutura de Diretórios

```
├── index.html          # Página inicial (apresentação da ONG e contato)
├── cadastro.html        # Página de cadastro de voluntários
├── projetos.html         # Página de projetos (voluntariado e doações)
├── css/
│   └── styles.css        # Design System e estilos globais do site
├── img/
│   └── cachorro_fundo_rosa.jpg   # Imagens utilizadas nas páginas
└── js/
    ├── main.js            # Ponto de entrada: inicializa o roteamento SPA e os eventos de formulário
    └── modules/
        ├── rotas.js         # Dicionário de rotas com o HTML de cada página
        └── storage.js        # Função responsável por salvar os cadastros no localStorage
```

- **Raiz (`/`):** contém os três arquivos HTML que servem como pontos de entrada das páginas.
- **`/css`:** concentra o Design System (cores, tipografia, espaçamentos) e a responsividade do layout.
- **`/img`:** armazena os recursos visuais (imagens) utilizados no site.
- **`/js`:** contém o script principal (`main.js`), responsável por orquestrar a navegação sem recarregar a página.
- **`/js/modules`:** módulos ES6 reutilizáveis, separando as responsabilidades de roteamento (`rotas.js`) e armazenamento local (`storage.js`).

## Instalação e Execução Local

1. Clone o repositório:
   ```bash
   git clone https://github.com/fabylima99/Experiencia-pratica-ADS.git
   ```
2. Abra a pasta do projeto no seu editor de código preferido (ex: **Antigravity IDE**, VS Code).
3. Instale a extensão **Live Server** ou **Five Server**, caso ainda não tenha.
4. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"** (ou **"Open with Five Server"**).
5. O navegador abrirá automaticamente o projeto em `http://localhost:5500` (ou porta equivalente), com atualização automática a cada alteração salva.

## Fluxo de Versionamento

O histórico de commits reflete o desenvolvimento incremental do projeto, seguindo boas práticas de mensagens descritivas:

```bash
git add .
git commit -m "feat(css): estilizacao base e design system"
git commit -m "feat: implementa Design System no root e responsividade"
git commit -m "feat: implementa roteamento SPA com ES6 Modules e localStorage"
git commit -m "docs: adiciona o arquivo README.md do projeto"
git push origin main
```

O fluxo utilizado consiste em: realizar alterações localmente, revisar com `git status`/`git diff`, registrar commits atômicos e descritivos (prefixos `feat`, `docs`, etc.) e enviar as mudanças para o repositório remoto na branch `main` com `git push`.

## Autoria e Licença

**Autoria:** Fabiane Lima — Estudante de Análise e Desenvolvimento de Sistemas.

**Licença:** Este projeto foi desenvolvido para fins educacionais, como parte das atividades práticas da disciplina de Desenvolvimento Front-end para Web.
