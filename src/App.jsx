import Ingresos from './Components/Ingresos';
import React,{useState} from "react";
import Citas from './Components/Citas';

function App() {

  const [citas, setCitas] = useState([]);
  const pushCitas = data => {
    let newCitas = [...citas]
    newCitas.push(data)
    newCitas = newCitas.reverse()
    setCitas(newCitas)
  }
  return (
    
    <div className="App">
      <header className="App-header">

        <h1>ADMINISTRADOR DE PACIENTES</h1>
          <div class="containter">
            <div class="row">

              <div class="one-half column">
                <h2>Crear mi Cita</h2>
                <form>
                  <Ingresos/>
                </form>
              </div>

              <div class="one-half column">
                <h2>Administra tus citas</h2>
                {citas.length ? citas.map((e, key) => (
              <Citas key={key} mascota={e.mascota} dueño={e.dueño} fecha={e.fecha} hora={e.hora} sintomas={e.sintomas} />
            )) : <h5></h5>}
              </div>

            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
