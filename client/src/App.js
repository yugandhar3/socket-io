import logo from './logo.svg';
import './App.css';
import { io } from "socket.io-client";
import { useEffect } from 'react';

const socket = io("http://localhost:3001");

function App() {
  useEffect(() => {
    socket.on('connect', () => {
      socket.on('Welcome', (data) => {
        console.log(data)
      })
      socket.emit('msg', 'Thankyou for joining for my channel')
    })
    return () => {
      socket.off('connect')
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
