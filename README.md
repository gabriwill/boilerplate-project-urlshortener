# [URL Shortener Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice)

Este repositório é a minha solução para o desafio [URL Shortener Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice) para obtenção do certificado do curso  [APIs and Microservices](https://www.freecodecamp.org/learn/apis-and-microservices) da [FreeCodeCamp](https://www.freecodecamp.org).

## 🎌 Objetivos

- Aplicar os conhecimentos obtidos no curso [APIs and Microservices](https://www.freecodecamp.org/learn/apis-and-microservices) da [FreeCodeCamp](https://www.freecodecamp.org).
- Montar uma API que passe nos testes:
	- :white_check_mark: A API pode receber uma requisição POST onde no ```body``` desta requisição contem uma URL e como resposta o server retorna um JSON neste formato ```{ original_url : 'https://freeCodeCamp.org', short_url : 1}```.
	- :white_check_mark: Quando o usuário visitar a rota ```/api/shorturl/<short_url>``` ele será redirecionado para a ```original_url``` registrada. 
	- :white_check_mark: Se uma URL inválida for passada para API ela deve retornar ```{ error : "invalid url" }```.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com)

## 📁 Libraries

- [Express](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [mongodb](https://www.npmjs.com/package/mongodb)
- [mongoose](https://www.npmjs.com/package/mongoose)

## ✨ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e um banco de dados [MongoDB](https://www.mongodb.com).

## 🚀 Getting Started

- Configure a URI do seu banco MongoDB na variável de ambiente ```MONGO_URI``` no arquivo ```.env```.
- Configure a porta que o seu servidor utilizará informando-a em uma variável de ambiente ```PORT``` no arquivo ```.env```.
- Rode os seguintes comandos no terminal para iniciar o server (Certifique-se que seu banco de dados está online):

```
# for npm users
 npm install
# then 
 npm start
```
## :octocat: Autor

Feito com 👨🏻‍💻 por Gabriel Willans 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-willans-780754200/)](https://www.linkedin.com/in/gabriel-willans-780754200/) [![Outlook Badge](https://img.shields.io/badge/-g.willans@outlook.com-00a0ee?style=flat-square&logo=microsoftoutlook&logoColor=white&link=mailto:g.willans@outlook.com)](mailto:g.willans@outlook.com)

