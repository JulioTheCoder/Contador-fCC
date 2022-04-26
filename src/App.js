import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import {useState} from "react";

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarCount = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className= "freecodecamp-logo-contenedor">
        <img
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp'
          src={require("./img/freeCodeCamp-logo2__white.png")}
        />
      </div>
      <div className='principal'>
        <Contador numClicks={numClicks}/>
        <Boton texto={"Click"} clase={"click"} manejarClick={manejarClick} />
        <Boton texto={"Reiniciar"} clase={"reset"} manejarClick={reiniciarCount} />

      </div>
    </div>
  );
}

export default App;
