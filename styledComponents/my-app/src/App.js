import './App.css';
import styled from 'styled-components';

const Titulo = styled.h1`
color: red;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo>Deus é Fiel</Titulo>
      </header>
    </div>
  );
}

export default App;
