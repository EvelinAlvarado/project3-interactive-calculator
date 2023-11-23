import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla.js";
import BotonClear from "./components/BotonClear.js";
import { useState } from "react";
/* mathjs: libreria externa de funciones matematicas para js y Nodejs */
import { evaluate } from "mathjs";

function App() {
  // 1)Creamos un estado "input"(del componente App) con una funcion que actualiza el input "setInput", con valor inicial de "" vacio.
  const [input, setInput] = useState("");

  /* 3) creamos funcion para actualizar el input */
  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  // Evaluar el input: se tiene que importar la libreria
  const calcularResultado = () => {
    /* si input (truthy) es true se ejecuta la funcion */
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos");
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de FreeCodeCamp"
        />
      </div>
      <div className="contenedor-calculadora">
        {/* 2)pasamos el props input con el valor de la variable del estado "input" */}
        <Pantalla input={input} />
        <div className="fila">
          {/* 4)le pasamos a los botones un props manejarClic llamando a la funcion "agregarInput"
          Nota: solo se pasa el nombre de la funcion, si tuvieran parentesis agregarInput() significaria que quiero llamar a la funcion y pasar el resultado (Esto significa que la función agregarInput se ejecuta inmediatamente cuando se renderiza el componente, no cuando se hace clic en el botón.). Solo queremos pasar la funcion para poder llamarla dentro del componente (Cuando el botón se hace clic(cuando ocurra el evento clic), se ejecutará la función agregarInput definida) */}
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          {/* en este caso le asignams un addEventListener, y escribimos una funcion anonima, se podria tambien asignarlo a una constante (como "agregarInput") */}
          <BotonClear manejarClic={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

// TODO:
/* 
1) crear componente para el logo de freeCodeCamp
2) implementar correcciones a la calculadora
*/
