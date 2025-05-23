# DETALHES DO PROJETO
- Interface de loja de periféricos virtual fictícia desenvolvida com React.js e Node.js.
- Front-end elaborado com componentes React.js e suas bibliotecas.
- Back-end estruturado com Express.js (biblioteca do Node.js), para fornecer rotas de API, utilizar métodos HTTP e manipular objetos JSON (notação de objetos JavaScript) para o front-end.



# INSTRUÇÕES DE USO
Na loja, existe seções com diferentes finalidades:
- **Cabeçalho** | Navegação entre páginas ("Home" e "Carrinho").
- **Página principal ("Home")** | Exibe periféricos à venda e opção de adicionar à página "Carrinho".
- **Página do carrinho ("Carrinho")** | Oferece opção de compra e remoção de itens do carrinho.
- **Rodapé** | Exibe periféricos adquiridos e garante "reembolso" se clicados. 



# REQUISITOS
Para utilização do projeto, baixar e instalar o **[Node.js](https://nodejs.org/en)** a partir do site oficial.

### React.js

- **NAVEGAR PARA PASTA:**

Após clonar o repositório, em um novo terminal, executar respectivamente os códigos `cd PORTFOLIO-NOWTECH` e `cd React.js` para acessar na pasta correta. Depois, utilizar o código `npm install` para instalar o gerenciador de pacotes padrão.

- **INICIAR SERVIDOR DE DESENVOLVIMENTO:**

Para visualizar o site, executar o código `npm start` para inicar o servidor front-end. Haverá um redirecionamento para a URL **http://localhost:3000**. O servidor suporta hot-reloading, refletindo qualquer mudança no código instantaneamente no navegador.


### Node.js

- **NAVEGAR PARA PASTA:**

No terminal, executar respectivamente os códigos `cd PORTFOLIO-NOWTECH` (se não estiver nela) e `cd Node.js`. Depois, utilizar o código `npm install nodemon` para instalar uma ferramenta de atualização automática do Node.js.

- **INICIAR SERVIDOR DE DESENVOLVIMENTO:**
  
Executar o código `nodemon app.js` para inicar o servidor back-end. Ele operará na URL **http://localhost:8000**.



# OBSERVAÇÕES
Caso os códigos de inicialização forem executados no terminal antes das instalações orientadas, utilizar o atalho Ctrl+C para cancelar a operação.

Os servidores estão configurados para funcionar em uma rede local, permitindo o acesso a partir de qualquer origem devido às configurações gerais de **[CORS](<https://aws.amazon.com/pt/what-is/cross-origin-resource-sharing/#:~:text=Cross-origin%20resource%20sharing%20(CORS,resources%20in%20a%20different%20domain.>)**.
  
É possível navegar pelos objetos JSON armazenados digitando `/home`, `/carrinho` ou `/comprados` depois da URL do servidor back-end.
