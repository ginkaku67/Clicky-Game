import React from 'react';
import './App.css';
import Game from './components/Game.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1>Eye/Memory Test</h1>
            <p className="lead">This is a test designed to challenge your eyesight, memory, and patience. Please start by clicking on any of the checkerboard patterns below. If you click on a pattern more than once, you fail and the game will restart. Subjects who score under 6 may have to submit to retaking their driver's license test.</p>

          </div>
        </div>
      </header>
      <div>
        <Game></Game>
     
   
  <div id="parent">
   <footer className="page-footer font-small black pt-4">
      <div className="footer-copyright text-center py-3">This game was produced by the Latverian Bereau of Motorvehicles and Unusually Fast Pedestians.</div>
    </footer>
  </div>
  </div>
    </div>
    );
  }
 
export default App;