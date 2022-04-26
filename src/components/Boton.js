import React from "react";
import "../styles/Boton.css"
export default function Boton ({texto, clase, manejarClick}){
    return(
        <button className={`boton__${clase}`} onClick={manejarClick}>
            {texto}
        </button>
    );
}