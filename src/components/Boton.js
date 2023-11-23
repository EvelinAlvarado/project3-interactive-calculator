import React from "react";
import "../stylesheets/Boton.css";

// Creando componente funcional
function Boton(props) {
  // Definir funcion "esOperador(props.children)"
  const esOperador = (valor) => {
    /* (si valor no es un numero) y (valor no es un punto) y (valor no es igual): si se cumplen las 3 condiciones es considerado operador (TRUE) */
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  // Otra alternativa de dar la clase "operador:", se puede utilizar button en vez de div
  /* 
  if (esOperador(props.children)) {
    return (
      <div
        className="boton-contenedor operador"
        onClick={() => props.manejarClic(props.children)}
      >
        {props.children}
      </div>
    );
  } else {
    return (
      <div
        className="boton-contenedor"
        onClick={() => props.manejarClic(props.children)}
      >
        {props.children}
      </div>
    );
  } */

  return (
    /* creamos una clase que contiene {JS}, usamos template string `dentro ${usamos operador ternario}`: la funcion "esOperador" toma el valor de props.children, dependiendo de ese valor se asignara "operador" o null (sustituido por "")(ninguna cambio)  
    --usamos trimEnd() para remover (en string) el espacio dejado al final de la clase boton-contenedor al sustituir null por ""("operador" : null) */
    /* onClick: no estamos llamando a la funcion (se podria hacerlo tb), estamos escribiendo la funcion anonima que se ejecutara inmediatamente */
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {/* props.children: propiedad de props que indica que lo que esta entre la etiqueta de apertura y de cierre de un componente se considera "children". Ejm: <Boton>1</Boton>
      --Hasta ahora solo use para nombrar a un componente etiqueta de apertura. Ejem: <App />*/}
      {props.children}
    </div>
  );
}

export default Boton;
