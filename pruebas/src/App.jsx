import './App.css';
import Componente from './Componente';
import {useState} from 'react'


function App() {
  const [NombrePersona, setNombreNombrePersona] = useState ("")
  return (
    <>
      <h1>hola {NombrePersona}</h1>
      <Componente nombre={setNombreNombrePersona} txtbtn={"Entrar"}/>
    </>
  );
}

export default App;
