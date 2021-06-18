
- Para desplegar y verificar nuestro avance de código en línea de comando digitar el comando vercel,
  con ello se generaran dos opciones:
  inspect: ver los logs de l ejecución de nustros programás en vercel
  preview: ver en el navegador el avance de nuestra aplicación

- ejemplo inspect: https://vercel.com/**********/serverless/**************************************
- ejemplo preview: https://serverless-h20vyzngq-cesar-vaesco.vercel.app/api/index

| Librería | Sito web | Comando usado para el proyecto | Funcionalidad |
|---|---|---|---|
| express  | https://expressjs.com/es/  | npm install -S express@4.17.1  (instalando versión expecifica)| **** |
| colors  | https://www.npmjs.com/package/colors  | npm i colors| **** |
| vercel | https://vercel.com/cli | npm i -g vercel | instalar la línea de comandos de vercel / ver avance de nuesto código |


proyecto vercel
```
Instalando CLI  - Vercel

    - En el directorio donde queremos iniciar un proyecto con vercel utilizamos el comando -- vercel init --
        Esta opción va a desplegar un menú en el cúal se le podra indicar a vercel en que tipo de proyecto nos podremos
        basar para arrancar nuestro proyecto, para este ejercicio sera custom-build

    - Ya construido el proyecto se genera una carpeta llamada **custom-build** con cuatro archivos iniciales:
        .gitignore - .vercelignore - package.json y README.md

    - La carpeta creada se pude renombrar, para el proyecto la hemos nombrado serverless

```

```
Vincular nuestro proyecto a la nube de Vercel

    - Al ejecutar el comando vercel en línea de comandos se van configuranco opciones que vercel requiere
        para configurar nuestro proycto y poder hostearlo en su nube

```
![Vercel configuración](img/inicializar_vercel.png)



# Custom Build Example

This directory is a brief example of using a Custom Build script that can be deployed with Vercel and zero configuration.

## Deploy Your Own

Deploy your own Custom Built project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/vercel/tree/main/examples/custom-build)

_Live Example: https://custom-build.now-examples.now.sh_

### How We Created This Example

To get started deploying a Custom Built project with Vercel, you can use the [Vercel CLI](https://vercel.com/download) to initialize the project:

```shell
$ vercel init custom-build
```
