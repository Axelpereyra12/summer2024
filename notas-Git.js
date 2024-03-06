
-------------------------------------------------git (repositorio local)-----------------------------------
//------------carpetas
//para crear carpeta
mkdir NombreCarpeta
//para pararme en una carpeta
cd NombreCarpeta
//para salir de una carpeta
cd ..
//para crear un repositorio de git dentro de la carpeta
git Init

//-----------archivos
//para ver los archivos que tengo en la carpeta y tambien puedo ver las carpetas
ls

//para crear un archivo
Touch Nombre.ElFotmato //(js.html.css)

//para subir de a un archivo a stageArea (2do estadio)
git add NombreArchivo

//para subir todos los archivos a stagearea juntos
git add .

//para ver el estado de los arvichos
git status //puedo verificar si estan listos para el comit o si hay modificaciones

//para comitear los archivos que tenemos en el sageArea
git commit //(abre una consola)
//i para poner el texto del commit, para salir escp y luego :wq

//para comitear todos los archivos (hasta los que no estan en stageArea)
git commit -m "el texto"

//para ver la informacion de los comit que se hicieron
git log

//si despues de hacer un cambio no lo subis al stageArea y haces commit ese cambio no lo sube el commit

//----------acceder a versiones anteriores
//para volver el tiempo atras
git checkout UrlDelDestino

//para conseguit las url de las lineas temporales (cada commit que hice)
git log

//para volver a lugares del futuro
git checkout master //vuelvo al origen
git log //vuelvo a tener todas las lineas
git checkout UrlDelDestino //me voy al destino


//---------para que git ignore alguna cosa como una carpeta 
Touch.gitignore //se crea en la rais del proyecto
//despues de eso va a aparecer una carpeta en visual, y ahi tengo q poner el nombre del archivo

//-----------ramas
//una rama seria como una dimension, yo puedo crear cosas en otras dimensiones
//para crear una rama
git branch NombreRama
//para ver las ramas que tengo
git branch
//para pararme en una rama
git checkout NombreRama

//despues es trabajar normal hacer los mismos pasos que lo anterior

-------------------------------------------------github (repositorio en la nube)-----------------------------------
