// src/components/Welcome.js
import React from 'react';

function Welcome() {
  // Funzione per mostrare l'alert di benvenuto
  const showAlert = () => {
    alert('Benvenuto!');
  };

  return (
    <div>
      {/* Titolo per l'applicazione */}
      <h1>Benvenuto su Applicazione React</h1>

      {/* Bottone per mostrare l'alert */}
      <button onClick={showAlert}>Mostra Alert di Benvenuto</button>
    </div>
  );
}

export default Welcome;
