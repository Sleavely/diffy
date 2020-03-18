import React from 'react';
import DiffViewer from './DiffViewer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Diffy</h1>
      </header>
      <section style={{ paddingTop: '2em', paddingBottom: '10vh' }}>
        <DiffViewer />
      </section>
      <footer>
        <p>
          Built and hosted by <a href="https://joakimhedlund.com">Joakim Hedlund</a>.
          Powered by <a href="https://www.npmjs.com/package/react-diff-viewer" target="_blank" rel="noopener">react-diff-viewer</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
