import logo from './logo.svg';
import './App.css';
import styled from "styled-components";


const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
            Welcome To UMART!
        </h1>
        <label id="data">Press the button for a surprise</label>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Join us. Thrive.
        </p>
        <Button onClick={reset}>Reset Data Box</Button>
        <Button onClick={getItems}>Click to see our wonderful prices!</Button>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

function reset() {
  document.getElementById('data').innerText = " ";
}

function getItems() {

  const init = {
    method: 'GET',
  };

  // Simple GET request using fetch
  fetch('http://localhost:8080/api/v1/grocery', init)
      .then(response => response.json())
      .then(data => document.getElementById('data').innerText = JSON.stringify(data));
}

export default App;
