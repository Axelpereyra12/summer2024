// comandos de consola

cd nombre de la carpeta//para pararme sobre una carpeta
pwd //para saber en que carpeta estoy parado
npm init //
npm i axios --save // instala axios en mi proyecto
npm i react --save // instala react al proyecto
npm create vite@latest // instala la ultima version de vite al proyecto
npm run dev //me permite correr el programa en un servidor

-localStorage-

// comandos consola visual
los 3 puntitos //ahi podes abrir la consola
cd // tenes que pararte en el archibo (el nombre del archivo no la carpeta)
npm run dev // arrancas el proyecto


//package-lok.JSON (carpeta donde se guarda todo lo que se va instalando)
//package-JSON (carpeta donde se guarda la informacion de las dependencias del proyecto)
//con npm se instalan cosas necesarias
//para que react funcione necesita muchas cosas y para eso esta vite que es el empaquetado de esas cosas

---------------------------ordenar carpetas---------------------------------------
//antes de empezar es recomendable ordenar las carpetas 

asset //aca iran los archivos estaticos, hacer las siguientes carpetas:
 -styles//donde iran los estilos (archivos css)
 -statics //aca iran las imagenes y react.svg

 containers //aca iran las paginas

 componentes //aca iran los componentes que cree


------------------componentes-------------------------------
//un componente es una funcion, que se exporta al main
//el nombe de la funcion tiene que ser igual al componente
//los componentes tienen que empezar con mayuscula
ffc // para crear un componente nuevo


//para que el componente se vea
-primero se exporta en app
-dentro del return <poner el nombre del componente> </>//entre esas llaves 

// <>componentes<> para ecribir mas de una cosa en un componente

//como se deve escrivir el componente para que no de error
function Compo2
() { //con esta parte abajo asi como se ve
    return ( <p>compo2</p> );
}

//carpetas (para mover componentes a carpetas)
los app no se mueven, sino los componentes que cree yo
y en la direccion poner .jsx al final

--------------------modulos (estilos)---------------------------------------
//para cada componente hacer su modulo (seria como su propio css)


// 1ro vas a crear archivo nuevo y pones:
NombreDelComponente.module.css
import { useState } from "react"
// 2do dentro del componente tenes que hacer un import del modulo
import style form './NombreDelModulo.style.css' //(esto seria como su url)

//dentro del modulo creas las clases 
//para definir una clase en el componente se usa className={style.nombreDeLaClase}

--------------------funciones--------------------------------
//se declaran dentro de la funcion pero antes del return


--------------------hooks (herramientas)----------------------------------
//para usar las herramientas primero se deven importar en el componente
//es una puerta trasera que avisa que esta pasandoalgo
import {NombreHerramienta} from 'react' //asi se importa

//herramientas:
useState //esta herramienta sirve para manejar el estado de un componente
//le avisa a react que algo en el dom cambio y lo acualiza para que se vea 


//como usar componentes:
//al principio de la funcion tengo que fijar el estado de los componentes
const [NombreComponente, setNombreComponente] = useState (0 o "") //indica como va a arrancar 

//despues tengo que usar el set de esos componentes en la funcion setNombreComponente();


-------------------------------props--------------------------------
// Los props son la posibilidad de pasar datos de un componente a otro (del padre al hijo).
// Se pueden usar en useState.

// En el componente padre, cuando llamo al hijo se coloca lo que le voy a mandar:
<Componente nombre={setNombreNombrePersona} txtbtn={"Entrar"}/> // En este caso, pasé dos cosas.
//                 Este es usando useState, y este es normal.

// En el componente hijo:
// En la función se pone props.
function Componente(props) {};

// Luego se deconstruyen:
const { nombre } = props;
const { txtbtn } = props;

// A menos que uses en la llamada del padre:
// {...ElNombre}

// Para usarlos se ponen entre llaves {Nombre}.



