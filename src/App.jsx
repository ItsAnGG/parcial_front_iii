import { useState } from 'react';
import './App.css'
import Card from './Components/Card'

function App() {

  const [nombre, setNombre] = useState("");
  const [preferencia, setPreferencia] = useState("");
  const [error, setError] = useState("");
  const [showCard, setShowCard] = useState(false);

  const hanldeSubmit = (event) => {
    event.preventDefault();

    if(nombre.length < 3 || nombre.trim()=== "" || preferencia.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setShowCard(false);
    } else {
      setError("");
      setShowCard(true);
    }

    console.log("===== DATOS =====");
    console.log(nombre);
    console.log(preferencia)
    console.log("=================");

  };

  return (
    <div className='App'>
      <form onSubmit={hanldeSubmit}>
        <h1>Carga de estudiantes</h1>
        <>
          <label>Ingresa tu nombre</label>
          <input type="text" placeholder='Min. 3 caracteres' value={nombre} onChange={(event)=> setNombre(event.target.value)} />
        </>
        <>
          <label>Animal preferido</label>
          <input type="text" placeholder='Min. 6 caracteres' value={preferencia} onChange={(event)=> setPreferencia(event.target.value)} />
        </>
        <button type='submit'>Enviar</button>
      </form>
      {error && <p className='errorMsg'>{error}</p>}
      {showCard && <Card name={nombre} pref={preferencia} />}
    </div>
  );
}

export default App
