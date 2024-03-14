#NODE-JS PRACTICAS
##Apuntes
### Comandos npm
1.npm init inicia un package.json
1.npm install +nombrepaquete : Lo instala. (para elegir que version instalar se le agrega @numero de la version)
1.npm unistall +nombrepaquete : Lo desinstala, lo saca de package.json>dependencias y elimina los archivos
1.npm updat nombrepaquete : lo actualizam con @elegimos si queremos una version q no sea la ultima

Siempre hay que agregar el node_modules al .gitignore para que no suba los modulos utilizados para programar ya que varian los archivos dependiendo del SO y el package.json los descarga automaticamente en cada pc.

Hay que tener mucho cuidado con la cantidad de dependencias que instalamos ya que ocupan mucho espacio

en package.json podemos poner "type":"module" debajo de "main" al objeto de configuraciones para hacer modulos sin ponerle la extension .mjs
package-lock.json : su proposito es normalizar los packages para diferentes equipos y S.O
##FLAGS:
    1. npm install "nombre" --save-dev jest (Son dependencias que solo usamos cuando estamos en la fase de desarrollo, es para que no se agregue a producción)
    2.npm install "nombre" --global (Instala una dependencia en forma global osea en todo el equipo no solo en el proyecto actual).
    3.cuando tenemos algo instalado con --global tambien hay que agregar --save-dev en cada proyecto que hagamos para que registre que ahi utilizaremos ese package, Hay algunos paquetes que piden que instalemos en global porque usa la consola, ej sass
    4. npm install "nombre" --no-save descarga una dependencia de forma temporal.cd

##Scripts:
    el objeto scripts de package.json nos permite crear un script personalizado poniendole el nombre y el comando por ejemplo "build": "npx @11ty/eleventy"
    Para ejecutar el script es npm run  y el nombre del script
    el script "start" es muy utilizado por lo tanto no hay wque agregar npm run sino npm start
    