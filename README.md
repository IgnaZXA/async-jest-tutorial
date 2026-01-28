# async-jest-tutorial


following this guide: https://moldstud.com/articles/p-testing-asynchronous-code-with-mock-functions-in-jest-a-comprehensive-guide


## Comandos empleados en orden 
1 npm init -y
2 npm install --save-dev jest
3 npm install --save-dev babel-jest @babel/preset-env
4 npm run test

## Pasos

1. Despues del comando 3 he creado el archivo .babelrc y el archivo jest.config.js (solo creandolo y ya, se detectan automaticamente lo que son).

en el archivo .babelrc he añadido:

```
  { "presets": ["@babel/preset-env"] }
```
EXPLICACIÓN: 
Este paso de instalar babel-jest y de crear y escribir en este proyecto en el archivo .babelrc, es un paso que he hecho para poder usar la sintaxis de JS moderno (ESModule (export/import)) ya que Jest solo entiende JS antiguo (Commonjs --> module.exports ... require...)


2. Probamos que las configuraciones sean correctas: 
Hacemos una prueba con la funcion en el archivo ./src/math/sum.js y su respectivo archivo de test: __test__/sum.test.js
ejecutamos el comando 4, no sa problemas pues previamente hemos configurado en el package.json la property "scripts"."test": "jest",

Ha pasado el test por lo que no ha dado problemas usar ESModule.

3. Configuramos una script para hacer una promise.
