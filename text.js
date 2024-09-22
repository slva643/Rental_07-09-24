import React, { useState } from 'react';

function App() {
  const [temperature, setTemperature] = useState(0);
  const [pressure, setPressure] = useState(0);

  return (
    <div>
      <h1>Simulação de Caldeira</h1>
      <div>
        <label>Temperatura: {temperature} °C</label>
        <input type="range" min="0" max="300" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
      </div>
      <div>
        <label>Pressão: {pressure} bar</label>
        <input type="range" min="0" max="20" value={pressure} onChange={(e) => setPressure(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
