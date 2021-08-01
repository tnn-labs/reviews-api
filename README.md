## Passos feitos na criacao do projeto
```bash
# inicializar package
yarn init -y

# instalar express
yarn add express

# instalar mongoose
yarn add mongoose

# instalar nodemon
yarn add nodemon -D

# instalar cors
yarn add cors
```

## Mongo
```bash
# levantar o banco localmente
mongod --dbpath ./reviews-api/data --fork --logpath ./mongo.log

# utilizar terminal para acessar o mondo
mongo

# selecionar o banco de reviews
use reviews
```

## Shape de dados
```json
{
  "title": "React Avançado",
  "thumb": "https://img-c.udemycdn.com/course/240x135/3210857_1c0e.jpg",
  "school": "Udemy - Willian Justen",
  "description": "Criar ecommerce de games",
  "year": "2021",
  "testimonial": "O curso apresentou-me novas ferramentas, me ajudou a estruturar o Front-End e aplicar testes",
  "url": "https://reactavancado.com.br/",
  "technologies": ["NextJS", "TypeScript", "Jest", "Testing Library", "Storybook", "Cypress", "Strapi", "Apollo", "GraphQL"]
}
```