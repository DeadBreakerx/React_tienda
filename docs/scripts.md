# Comandos de package.json
## Seccion de scripts
```
"dev": "nodemon --exec babel-node src/index.js",        Este es para observar y actualizar src/index.js, el comando --exec es exclusivo de nodemon
"build": "npx babel src/ --out-dir dist"                Este es para transpilar el codigo src y guardarlo en el archivo dist. npx es para que instalar babel de manera global
"start": "node dist/index.js"                           Este es para ejecutar lo transpilado y trabajar en producción

```