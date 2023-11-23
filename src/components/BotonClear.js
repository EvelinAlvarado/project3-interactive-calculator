import React from "react";
import "../stylesheets/BotonClear.css";

const BotonClear = (props) => (
  /* cuando ocurra un evento onClic en clear, se llamara a la funcion "manejarClic" */
  <div className="boton-clear" onClick={props.manejarClic}>
    {props.children}
  </div>
);

export default BotonClear;
