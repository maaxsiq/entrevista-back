🟥 My Test – Backend API

API desenvolvida em NestJS, estruturada em Clean Architecture, separando claramente domínio, aplicação, infraestrutura e interface HTTP.
A API fornece habilidades de Pokémon consultando a PokeAPI.

🚀 Tecnologias

NestJS

TypeScript

Axios

Class-Validator

Clean Architecture

📂 Estrutura do Projeto
src/
application/
dto/
core/
entities/
repositories/
use-cases/
infrastructure/
mappers/
services/
interface/
http/
pokemon.module.ts
app.module.ts
main.ts

📘 Princípios aplicados

Core → domínio puro: entidades, contratos e casos de uso

Infrastructure → implementações externas (ex.: PokeAPI)

Application → validação (DTOs) e regras de entrada

Interface → controladores HTTP expostos ao cliente

Independência de frameworks: apenas infrastructure depende de NestJS

▶️ Como rodar o projeto
1️⃣ Instalar dependências
yarn

2️⃣ Subir o servidor
yarn start:dev

3️⃣ API disponível em:
http://localhost:3000

🔌 Endpoint disponível
GET /pokemon

Consulta habilidades de um Pokémon.

🧾 Parâmetros (query):
Nome Tipo Obrigatório Exemplo
pokemon string ✔️ pikachu
📌 Exemplo de requisição
GET http://localhost:3000/pokemon?pokemon=pikachu

📤 Resposta
{
"abilities": ["static", "lightning-rod"]
}

⚙️ CORS

Configurado em main.ts:

origin: "http://localhost:5173"

🧱 Build de produção
yarn build

🧪 Testes
yarn test
