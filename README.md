## Para rodar a API
```bash
# iniciar o servidor
yarn dev
```

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

## Mongo localmente (opcao 1) 
```bash
# Esse passo funciona no linux e mac
# -------------------------------------

# Crie a pasta `mongoData` na raiz da sua maquina
mkdir mongoData 

# rode esse comando para levantar o banco e liberar o terminal
mongod --dbpath ./mongoData --fork --logpath ./mongo.log

# utilizar terminal para acessar o client mongo
mongo

# criar/selecionar o banco de reviews
use reviews
```

## Mongo localmente (opcao 2)
```bash
# esse passo é somente para mac
# -------------------------------------
brew services start mongodb-community
brew services stop mongodb-community

# utilizar terminal para acessar o client mongo
mongo

# criar/selecionar o banco de reviews
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