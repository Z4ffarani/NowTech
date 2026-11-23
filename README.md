![NowTech](./assets/banner.png)

**[Publicação](https://www.linkedin.com/posts/kaique-zaffarani_reactjs-nodejs-frontend-activity-7214116795673161728-cx3e)**

Interface de uma loja virtual fictícia de periféricos, desenvolvida com React.js e Node.js. O front-end foi elaborado com componentes React.js e suas bibliotecas. O back-end foi estruturado com Express.js (biblioteca do Node.js) para fornecer rotas de API, utilizar métodos HTTP e manipular objetos JSON (notação de objetos JavaScript) para o front-end.

---

## Interface

| Seção | Conteúdo |
|---|---|
| **Cabeçalho** | Navegação entre as páginas "Home" e "Carrinho" |
| **Página principal ("Home")** | Exibe os periféricos à venda e a opção de adicioná-los à página "Carrinho" |
| **Página do carrinho ("Carrinho")** | Oferece a opção de compra e de remoção de itens do carrinho |
| **Rodapé** | Exibe os periféricos adquiridos e garante o "reembolso" se forem clicados |

---

## Arquitetura

```
NowTech/
├── React.js/   — front-end (componentes React) · porta 3000
└── Node.js/    — back-end (Express) · porta 8000
      └── rotas /home, /carrinho e /comprados, com dados em arquivos JSON
```

---

## Como executar

### Pré-requisitos
- **[Node.js](https://nodejs.org/pt)**

### Back-end

```bash
git clone https://github.com/Z4ffarani/NowTech.git
cd NowTech/Node.js
npm install
npx nodemon App.js
```

O servidor roda em `http://localhost:8000`.

### Front-end

Em outro terminal:

```bash
cd NowTech/React.js
npm install
npm start
```

Acesse: `http://localhost:3000`. O servidor suporta hot-reloading, refletindo qualquer mudança no código instantaneamente no navegador.

---

## Observações

- Se os comandos de inicialização forem executados antes das instalações indicadas, use o atalho Ctrl+C no terminal para cancelar a operação.
- Os servidores estão configurados para funcionar em rede local, permitindo o acesso a partir de qualquer origem devido às configurações gerais de **[CORS](https://aws.amazon.com/pt/what-is/cross-origin-resource-sharing/)**.
- É possível navegar pelos objetos JSON armazenados digitando `/home`, `/carrinho` ou `/comprados` depois da URL do servidor back-end.

---

## Tecnologias

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com)
[![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=white)](https://nodemon.io)
