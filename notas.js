
---------------------------------------variables------------------------------------------------------------------
//al ser un lenguaje de tipeado detecta solo el tipo de dato por lo que no hay que espesificar
var el nombre = ; //para declararlas 

--------------------------------------conectar js a html-------------------------------------------------
en html poner al final del body
<script src="./el nombre del archivo"></script>

--------------------------------------mostrar datos------------------------------------------------------
para pedir o mostrar datos
alert("el texto") //muestra un cartelito


------------------------------------comandos de consola---------------------------------------------

console.log(el parametro); //Imprime un mensaje o un objeto en la consola del navegador.
console.table(el parametro); // imprime los datos en forma de tabla en la consola del navegador (esta bueno para objetos)
console.warn("el texto"); // imprime un cartel de alerta con el texto
console.error("el texto"); // imprime un cartel de error con el texto

-------------------------------------traer datos de html---------------------------------------------------
creo un variable = document.getElementById("el id"); //busca el elementos en html y lo trae qa js
                                                     // .value; poner eso al final si se trae de un input

la variable.innerHTML = //me permite editar el valor del html
                        //tambien puedo crear una variable y asignarle al html ese valor
                        // si uso += en vez de modificar todo le sumas a lo que ya tienes

------------------------------------operadores ternarios--------------------------------------------------
// sirven para ecribir menos codigo

//operador terneario en if
condición ? expresiónSiVerdadero : expresiónSiFalso; //la estructura
edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"; //ejemplo

//los dos puntos serian el else, pero si es de un solo valor sin else se usa &&
edad >= 18 && console.log("es mayor") //ejemplo


-------------------------------------funciones--------------------------------------------------------------

const nombreFuncion = (los parametros) => {}; //asi se declaran las funciones

parseInt() //esta funcion transforma un texto de un input a un numero

--------------------------------------listener--------------------------------------------------------------
la variable.addEventListener("el evento a escuchar", la funcion); //usando una funcion ya existente 
la variable.addEventListener("el evento a escuchar", ()=>{}); // creando una funcion anonima

dos atributos que pueden ir dentro de la funcion:
//para este hay que poner "evento" dentro del parentesis
evento.target.getatribute("el atributo"); //muestra el atributo seleccionado

el atributo.setatribute("") // sirve para cambiar el atributo

//un ejemplo para cambiar de img al seleccionar una opcion de un select
let paises = document.getElementById("paises"); //se instancio el select de html
paises.addEventListener("change", ()=>{ //se hace un listener que escuvha a un change
    la Imagen.setAttribute("src" + paises.value + ".png"); //se usa get atribute para setear con el dato seleccionado
});
---------------------------------------css en js---------------------------------------------------------
//estas formas de pueden usar en botonoes con listener o en funciones
//con objeto me refiero a lo traido por id que antes se deve declarar como variable

el objeto.style.el atributo a cambiar = ""; //cambiando manualmente
el objeto.classList.add("el nombre de la clase"); //para agregar clases ya creadas en el css
el objeto.classList.remove("el nombre de la clase"); //para quitar una clase
el objeto.classList.toggle("el nombre de la clase"); //si no la tiene la pone y si la tiene la saca a la clase

-------------------------------------editar html de js (template string)-------------------------------------------------
//primero se hace un modelo en html (modelo seria la maqueta)
// se hace un for y lo iteras por las veces que queres que se duplique el modelo
//despues de crea una variable para asignar el modelo
// por ultimo edito el contenedor con innerHTML
let nombre = `el modelo`;

//para editar un valor en el modelo se usa lo siguiente
${el valor nuevo o una variable} //${}

//ejemplo
for(x=0; x<= ContadorTareas; x++){ //el for que itera por las veces que quiero 
    let ModeloDeTarea = `<div class="Bloque_De_Tareas"> 
                        <p id="SinTareas" class="Parrafo_SinTareas">no tenes taras pendientes</p>
                        <p id="P_Tarea_Nueva" class="P_Tarea_Nueva">${BaseDeDatos[x].nombre}</p>
                        <button class="boton_EliminarTarea" id="boton_EliminarTarea">x</button>
                        <button class="boton_TildarTarea" id="boton_TildarTarea">p</button>
                     </div>`; //la variable y le asigno el modelo

    Bloque_De_Tareas.innerHTML+=ModeloDeTarea; //el += es para agregar y que no se sobre escriba
};  

--------------------------------------------onchange---------------------------------------------------
//onchange en JavaScript es comúnmente utilizado con elementos de formulario como inputs  y listas 
//Cuando el usuario interactúa con uno de estos elementos y luego cambia el foco de ese elemento
//(por ejemplo, hace clic fuera del campo o presiona la tecla Tab para moverse a otro campo)
// el evento onchange se activa y permite retornar una funcion.

//cuando se salga del input se activara la funcion del onchange
<body>
    <label for="nombre">Ingresá tu nombre:</label>
    <input type="text" id="nombre" onchange="mostrarSaludo()"> 
</body> 


function mostrarSaludo() {
    var nombre = document.getElementById("nombre").value;
    alert("Hola " + nombre + "! Bienvenido/a a nuestra página.");
}




---------------------------------------------metodos de arrays-------------------------------------------
nombre.push(""); //agrega el ultimo elemento
nombre.unshift (""); //agrega el primer elemento
nombre.pop(); //quita el ultimo elemento;

nombre.length-1 //simboliza la cantidad de elementos que tiene el array (ta bueno para usar en un for)
------------------------------------splice------
cuando es un array simple (chico)
nombre.splice(n,n) //sirve para eliminar de un array
// primer parametro la posicion, segundo parametro cuantos elementos quiero eliminar



cuando es un array grande y no sabes donde esta cada cosa
//se tiene que hacer una funcion primero que rrecorra el array y retorne la posicion de lo que buscamos

let fruras = ["manzana", "pera", "zandia"]; //el array

let funcion= frutas.findindex((fruta) => { //en el parentesis pongo lo que se busva
    return fruta == "manzana";
}); //funcion que retorna la posicion en donde esta la manzana

frutas.splice(funcion,1) //borro la manzana



cuando se trata de objetos en arrays
//es lo mismo solo que en el retun se pone lo del parentesis. lo que se busca del objeto
let datos = [
    { nombre: "jonatan", apellido: "ariste"},
    { nombre: "axel", apellido: "pereyra"},
    { nombre: "lionel", apellido: "messi"},
    ]; //el objeto en el array

let funcionObjetos= datos.findindex((ubicacion) => { //en el parentesis pongo lo que se busva
    return ubicacion.nombre == "lionel";
}); //funcion que retorna la posicion en donde esta la manzana

datos.splice(funcionObjetos,1) //borro el objeto con ese nombre

---------------------------------------map------------------
//el map es una funcion que recorre todo el array y adentro tiene una funcion para hacer algo
//La función de map espera un parámetro que representa cada elemento del array 

const numeros = [1, 2, 3, 4, 5];

// Usando el método map para duplicar cada número
const numerosDuplicados = numeros.map((numero)=>{ //lo del parentesis representara cada elemento
     return numero * 2;
});

console.log(numerosDuplicados)


---------------------------------------filter--------
//permite generar un filtro de mis elementos de js
//recorre todos los elementos del array y filtra solo aquellos que cumplan la condicion

//1ro se crea una variable
//2do se pone el array.filter (en este caso simulo un array con objetos)
// 3ro dentro del parentecis va una funcion anonima y paso algo como parametro para que use
//4to creo la condicion 
// todas los objetos que cumplan aparte de retornar las va a guardar en esa variable

let personas = [ //el array con  3 objetos
    { nombre: 'Juan', edad: 25, sexo: 'masculino' },
    { nombre: 'María', edad: 35, sexo: 'femenino' },
    { nombre: 'Pedro', edad: 50, sexo: 'masculino' }
];

//la funcion
let mayoresDeEdad = personas.filter((persona) => {
    if (persona.edad >= 18) return persona;
});

----------------------------------reduce----------------------
//cumple la funcion de recorrer el array como el filter
//solo que este retorna un resultado de una ecuacion

//reduce() es una función reductora que toma dos parámetros:
//el acumulador (que almacena el resultado parcial de la operación)  
// el valor actual (lo que vale ese elemento)
// el 0 del final es para indicar que al acumulador empieza en 0

let SumaDeEdades = personas.reduce((acumulador,ValorActual) => {
    return acumulador + ValorActual.edad;
}, 0); // Se añade el valor inicial del acumulador, en este caso, 0


-------------------------------------find-------------------------
//me permite encontrar un objeto y traerlo con todos sus datos
//el proceso es lo mismo que todos

let Buscado = personas.find((dato)=>{
    if (dato.nombre == "juan") return dato
});

----------------------------------spread operator--------------
//sirve para desarmar arrays y juntarlos sin que queden como separados

let frutas = [banana, manzana];
let frutitas = [pera, melon];

// se usa con ...
let frutas locas = [...frutas, ...frutitas]; //aca junte los dos arrays sin que se separen en dos


--------------------------------------------objetos------------------------------------------------------------

//asi se declara
let humano = {
    ojos: 2,
    piernas:2,
    cabeza:1,
};

//se le puede agregar mas cosas por fuera
nombre.el item = el valor;

----------------------------------------------------destructuracion------------------------------------------
//característica que permite desempaquetar valores de arreglos o propiedades de objetos
// en variables individuales de forma más concisa. 

//suponiendo que tengo un objeto de peliculas y a cada item lo quiero hacer variable

const NombreDePelicula = Pelicula.Nombre // en vez de hacer asi
const GeneroDePelicula = Pelicula.Genro

const{,Nombre, Genero} = Pelicula; //puedo  hacer asi
//(y se creo Nombre.Pelicula y Genero.Pelicula)


-----------------------------------------------numero random-------------------------------------------------
const random = math.floor(math.random()*el numero maximo);
//math.floor hace que el numero sea entero
//math.random crea un numero aleatoreo

------------------------------------------------clases--------------------------------------------------------
//el constructor es el encargado de definir los parametros que se usaran en esa clase
// la palabra this le dice al codigo que se esta refiriendo a tal ambiente

class curso {
    constructor(nombre,videos,unidades){
        this.nombre=nombre;
        this.video=video;
        this.unidades=unidades;
    }
}

//para generar otro
const nombre = new nombre de la clase (los parametros);
const cursoA = new curso("html",40,5);


//para editar o agregar a los parametros (forma no recomendada)
el nombre.el parametro=;
cursoA.nombre="pepito loco";


//para editar o agregar a los parametros (forma  recomendada)

//con set seteo el valor
set nombre(valorNuevo){
    return(this.parametro=valorNuevo);
}

//con get pido un valor
get nombre(){
    return this.parametro;
}

//la ventaja de hacer con get y set es que puedo poner condicionales como if 
//y dependiendo de la condicion que se modifique el parametro o no

--------------------------------------------para validad dato---------------------------------------------
//se usa typeoff para preguntar por el tipo de dato

//aca pregunto si el tipo de dato de la variable es string
if(typeof nombre == "string"){};


-----------------------------------------------jason--------------------------------------------------------
//un objeto JSON en JavaScript es algo que se puede compartir,
//ya que está diseñado para ser fácilmente interpretable y utilizable por diferentes aplicaciones y sistemas.

const datos = [// asi se escribe
    {tipo: "pista", marca: "kawasaki", modelo: 2013},
    {tipo: "cafe racer", marca: "kawasaki", modelo: 2019},
    {tipo: "bobber", marca: "zanella", modelo: 2018},
]

//se hace en un archivo aparte
nombre del archivo.jason

//para usar en js se deve parsear por que sino lo toma como string
let conversion = JSON.parse(nombre del json);

//para convertir un objeto a json (al reves)
let objetoAjson = JSON.stringify (nombre del objeto);

--------------------------------------fetch (llamada asincronica)----------------------------------------
// es una función que se utiliza para realizar peticiones HTTP asíncronas
//a recursos en la web, típicamente para obtener datos de un servidor.
//Puede solicitar recursos como archivos JSON, HTML, imágenes, y más,

const respuesta = await fetch ( // es como una funcion y se pone el link
    el link del json
);

const personajes =  await respuesta.json(); //esto es como parsear el json, asi lo decodificamos
//tambien se le podria hacer un map para rrecorrer por que esto en si es un array

------------------------------------------remove-------------------------------------------------------
//esta funcion sirve para eliminar cosas dede el id

// hay dos formas de usarlo
id del elemento. remove (); //borra el elemento directo
id del contenedor PannerNode.removeChild(id del objeto); //borra desde el contenedor padre

//se aconseja la segunda por q de esta manera no tenemos que parsear todos los id a js solo el del padre

//parra borrar algo desde un boton:

//e.target Esta propiedad que devuelve el elemento en el que se originó el evento.

contenedor.addEventListener("click", (e)=>{ //e es el evento que indica que se apreto el boton
    e.target.parentNode.remove(); 
});

// el.target.parentNode.remove esta diciendo borrar al padre del boton
//si pongo remove solo borraria al boton

//-------------------------todo esto en dos pasos---------------------------------------
//para evitar que se borre todo al hacer click en cualquier lado se usa .tagName
// .tagName me sirve para saber en que elemeto se hizo click
// con e.target.id en vez de usar un objeto como boton uso un id


//se hace una funcion eliminar
function eliminarElemento(e) {
    if (e.target.tagName === "BUTTON"){ //pregunto si se apreto un boton 
        e.target.parentNode.remove();
    } //esta funcion borra solo si se hizo click en un boton
   }

   //al contenedor padre le le hace un listener con la funcion
   contenedor.addEventListener("click", eliminarElemento); 

---------------------------------localStorage----------------------------------------------
//sirve para guardar un dato en el navegador

//1ro
//el primer paso hacerlo siempre dentro de un evento de click
//hacemos el set de localStorage, primero nos pide un nombre y luego un string,pero nosotros le mandamos el objeto o array
localStorage.setItem("elegir un nombre", JSON.stringify(el array)); // y con JSON.stringify transformamos el objeto o array a string

//2do
//fuera del evento click
//hacemos el get de localStorage, creas una variable y le asignas lo que guardaste
let DataRecuperada = localStorage.getItem("el nombre que elegimos");//traemos los datos
DataRecuperada = JSON.parse(DataRecuperada); //parseamos el json para que vuelva a ser un objeto

//3ro
//al ingresar preguntar si hay datos en el localStorage
//este paso se tiene que hacer por que tenemos que cargar los datos guardados
if(DataRecuperada.length > 0){ // con .length recorro toda la base
    el objeto = DataRecuperada; //si hay datos se los cargo al objeto o el array
}

//esto es para verrificar 
console.log("el tipo de dato es:" typeof DataRecuperada); //uso el typeof para saber el tipo de dato
console.log("la cantidad de datos es:"  DataRecuperada.length);// .length para saber la cantidad

//metodos de localStorage
localStorage.setItem //para guardar
localStorage.getItem
localStorage.clear //borra todo el localStorage
localStorage.setItem();




const Verificar = (e)=>{
    console.log(e.target.value);
  };

  //if(el.target.getatribute("id")==el array){tire el popapp};