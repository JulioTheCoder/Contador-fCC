import React from "react";
import "../styles/Contador.css"

export default function Contador({numClicks}) {
    return(
        <div className="contador">
            {numClicks}
        </div>
    );
}