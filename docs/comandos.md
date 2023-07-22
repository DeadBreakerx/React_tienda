# Comandos en Node.js
## Iniciar un proyecto de Node
```bash
npm init
npm i express
```
## para configurar babel
```bash
npm i @babel/cli @babel/node @babel/core @babel/preset-env -D
```
# Configuracion de Sequelize (Base de datos)
## Instalar Sequelize y driver (MYSQL)
```bash
npm install sequelize
npm install mysql2
```
## Instalar Sequelize CLI y Configurar
```bash
npm install -D sequelize-cli
# antes de ejecutar configuarar         se debe crear el archivo .sequelizerc y ahi colocar los parametros de creacion
npx sequelize-cli init
```
## Instalar dotenv para resguardar informacion clave
```bash
npm install dotenv      #se debe llamar importar, esta documentado en la pagina npm
```

## comenzamos a crear rutas dentro de src
Aqui se encuentran las rutas, url de uno o multiples archivos
luego creamos los controladores, creando una nueva carpeta llamada controllers

importamos auth.controller.js a auth.routes.js
importamos auth.routes.js a index.js

## Comenzamos a configurar los modelos del database en src/config/database.js
configuramos para desarrollo
posteriormente ejecutamos los comandos para generar los modelos que esta en sequelize-migrate.md

## Antes de generar las tablas e importar los modelos a la base de datos, se debe crear la base de datos
Creamos la base de datos con el nombre que se establecio en  src/config/database.js
ejecutamos el comando para migrar la base de datos:
```bash
npx sequelize-cli db:migrate
```