import React from 'react';
import DiffViewer from './DiffViewer';
import githubCorner from './github-corner-right.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Diffy</h1>
        <a
          href="https://github.com/Sleavely/diffy"
          className="github-corner"
          aria-label="View source on GitHub"
        >
          <img src={githubCorner} alt="Octocat" />
        </a>
      </header>
      <section style={{
        margin: '0 auto',
        maxWidth: '1280px',
        paddingTop: '2em',
        paddingBottom: '10vh'
      }}>
        <DiffViewer />
      </section>
      <footer>
        <p>
          Built and hosted by <a href="https://joakimhedlund.com">Joakim Hedlund</a>.
          Powered by <a href="https://www.npmjs.com/package/react-diff-viewer">react-diff-viewer</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
