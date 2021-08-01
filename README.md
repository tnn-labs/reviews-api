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