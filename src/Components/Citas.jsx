import React,{Fragment} from "react";
import { useState } from 'react';


function Citas({nombre, dueno, fecha, hora, sintomas }){
  const [eliminado, setEliminado] = useState(false)
  const handleClick = e => setEliminado(!eliminado)

  return !eliminado &&

    
      <Fragment>
        <div class="citas">
            <p>Mascota: <span>{nombre}</span></p>
            <p>Dueño: <span>{dueno}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button className="button elimnar u-full-width" onClick={handleClick}>Eliminar ×</button>
        </div>
      </Fragment>
  ;
}
  
export default Citas;