# Sistema de Votação de Mercados
Este é o projeto front-end desenvolvido para o teste da Grendene, que permite aos clientes votar em seus mercados favoritos e visualizar os resultados em tempo real. O sistema foi construído com React e se comunica com uma API em .NET que retorna dados simulados. O objetivo do sistema é criar interação entre os clientes, permitindo que escolham os mercados com melhores condições de compra.

## Como Executar o Projeto
### Pré-requisitos
- Node.js e npm instalados.
- A API de backend (feita em .NET)
### Passos para rodar o projeto
- Clone o repositório:
```
git clone https://github.com/ArturAbreuDev/market-grendene.git
```
- Navegue até a pasta do projeto:
```
cd nome-do-repositorio
```
- Instale as dependências:
```
npm install
```
- Execute o projeto:
```
npm start
```
- Acesse a aplicação no navegador em http://localhost:3000.

### Conectando com a API .NET
A API em .NET deve estar rodando no endereço https://dotnet-server-gi1x.onrender.com. Certifique-se de que a API está acessível e funcionando antes de rodar o frontend.

## Destaques do Código
#### Integração com a API
O frontend usa o fetch para fazer requisições à API .NET. A lógica principal de votação e consulta de resultados está contida nas funções handleVote e fetchResults, ambas utilizando a API de forma assíncrona com async/await para garantir que a aplicação não trave durante as operações de rede.

#### Feedback em tempo real
O sistema oferece feedback instantâneo ao usuário com o uso da biblioteca react-toastify. Mensagens de sucesso ou erro são exibidas para que o usuário saiba se o voto foi registrado corretamente ou se houve algum problema.

#### Organização e Reutilização
O código é organizado de maneira modular. Funções como showError e showSuccess foram abstraídas para evitar repetição de código, e constantes como URLs de API foram extraídas para facilitar manutenção e mudanças futuras.

## Possíveis Melhorias
#### Validação de Dados

- Atualmente, a validação do formulário é básica. Poderíamos adicionar validações mais robustas, como verificar se o cliente já votou naquela semana, seguindo as regras da estória.
- Outra melhoria seria adicionar feedback ao usuário em caso de inputs inválidos, como campos vazios.
#### Testes Automatizados

- Embora a aplicação funcione corretamente, testes automatizados poderiam ser adicionados para garantir que as funcionalidades cruciais, como o registro de votos e a consulta de resultados, continuem funcionando conforme esperado.
- Testes de interface e de integração usando bibliotecas como Jest e React Testing Library seriam úteis.
#### Experiência do Usuário

- Poderíamos melhorar a experiência visual com animações e transições de estados.
- O sistema poderia exibir um histórico de votações anteriores para o usuário ver quais mercados foram eleitos nas semanas passadas.
#### Melhoria na API

- Implementar uma conexão real com banco de dados na API .NET para armazenar os votos e garantir que o mercado não seja repetido no mesmo mês.
#### Autenticação

- Poderíamos adicionar uma autenticação simples, para garantir que os usuários só possam votar uma vez por semana.
## Considerações Finais
Este projeto é um MVP (Produto Viável Mínimo) focado em demonstrar a interação entre um frontend React e uma API backend em .NET. Ele cumpre os critérios das estórias de usuário fornecidas, permitindo votar em mercados e exibir os resultados. Há espaço para otimizações, tanto no código quanto na experiência do usuário, e a adição de funcionalidades mais robustas, como autenticação e validação de regras, enriqueceriam ainda mais o sistema.