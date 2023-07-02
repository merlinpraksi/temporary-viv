
import React from 'react';
import "./UnderConstruction.css"
import { Redirect } from 'react-router-dom';
function App() {
      const redirectToBookingSite = () => {
        window.location.href = 'https://dikidi.net/1165290'; // Replace with your booking site URL
      };

      return (
        <div className="container">
          <h1 className="title">Veebileht on hetkel arendamisel</h1>
          <p className='message'>Broneeringu saate teha siit klikates nupule "Broneeri"</p>
          <button className='btn' onClick={redirectToBookingSite}>Broneeri</button>
        </div>
      );
    };




export default App;
