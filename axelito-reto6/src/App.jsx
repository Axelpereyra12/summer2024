import { useState } from 'react';
import './App.css';

function App() {
  const [NombreUsuario, setNombreUsuario] = useState("Bienvenide");

  let UsuarioClave = { nombre: "goku12", contraseña: "1234" };


  let AgregarNombre = (e) => {
    setNombreUsuario("Bienvenide " + e.target.value);
  };

  let MostrarAlert = ()=>{
    if(contraseña.value == UsuarioClave.contraseña && usuario.value == UsuarioClave.nombre){
      alert("es el usuario");
    };
  };

  return (
    <>
      <h1 id='titulo'>{NombreUsuario}</h1>
      <form className='formulario' action="">
        <label htmlFor="usuario">Ingrese su nombre de usuario</label>
        <input id='usuario' type="text" onChange={AgregarNombre}/>
        <label htmlFor="contraseña">Ingrese su contraseña</label>
        <input id='contraseña' type="text" />
        <button onClick={MostrarAlert}>Click</button>
      </form>
    </>
  );
}

export default App;
