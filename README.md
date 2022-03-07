# Projeto API Introdução ao S.O.L.I.D

- Nessa aplicação foi feita uma API, que Cria e Lista Usúarios, onde o usúario pode cadastrar um name, email, e também é possível tornar esse usúario ADMIN, a aplicação também gera um ID para esse usúario, pegando também o horário automáticamente no sistema.
- O Usúario só pode listar todos os usúarios criados, se ele for um usúario Admin. 

# Ferramentas

- Foi utilizado o Typescript/Javascript como linguagem para desenvolver o Backend.
- framework/biblioteca Express, UUID, Jest, TS-Node-Dev, Typescript e suas tipagens.
- Foi utilizado o Jest/Supertest para rodar os scripts dos testes unitários das rotas HTTP.
= Foi utilizado a ferramenta/software Insomnia para trabalhar com as requisições HTTP, fazer o teste funcional da aplicação.

# Requisitos

- [x] Deve ser possível cadastrar um name e um email.
- [x] Deve ser possível listar todas os usúarios, se o usúario que estiver requisitando for um ADM.
- [x] Deve ser possível alterar o usuário para (ADM), se o usúario possuir o mesmo ID.

# Regras de negócio

- [x] Não deve ser possível cadastrar um usúario se o mesmo e-mail já tiver sido cadastrado com outro usúario.
- [x] Não deve ser possível listar os usúario cadastrados, se o usúario requisitante não for ADM.
- [x] Não deve ser possível listar os usúario cadastrados, se o usúario requisitante não for ADM e não tiver um ID válido.

# Para rodar essa aplicação siga os seguintes passos:

- Copie a url do repositório na aba `CODE`.
- Com o git instalado, execute o seguinte comando => `git clone "Aqui vai a url copiada acima`.
- Com o `Nodejs` e o `Yarn` instalados, Na sua IDE preferida, abra o terminal do `git`, e execute o seguinte comando => `yarn`, para baixar as dependências da aplicação.
- Para rodar o projeto execute o seguinte comando => `yarn dev`.
- Para testar o funcional da aplicação será necessário instalar o software `Insomnia` e criar as rotas da aplicação.
- Para rodar os testes unitarios das rotas da aplicação execute o seguinte comando => `yarn test`.

# Para rodar a documentação da aplicação

- Com a aplicação já startada  ... NO seu navegador de internet digite => `http://localhost:8080/api-docs`
