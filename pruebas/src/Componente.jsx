import { useState } from 'react';

function Componente(props) {
    const {nombre} = props
    const {txtbtn} = props
    const [texto, setTexto] = useState("");

    let usuarioSecreto = [{nombre: "pepeloco", contraseña: "123"}];

    const CargarNombre = (e) => {
        setTexto(e.target.value);
        nombre (e.target.value);
    };

    const Mostrar = () => {
        console.log(texto);
    };

    return ( 
        <>
            <label htmlFor="Nusuario">ingrese el nombre de usuario</label>
            <input id='Nusuario' type="text" onChange={CargarNombre} />
            <br />
            <label htmlFor="Contraseña">ingrese la contraseña</label>
            <input id='Contraseña' type="text" />
            <br />
            <button onClick={Mostrar}>{txtbtn}</button>
        </>
    );
}

export default Componente;
