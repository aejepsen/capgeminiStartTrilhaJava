import './App.css';
import styled from 'styled-components';

const Titulo = styled.h1`
color: red;
`;

const Versiculo = styled.p`
color: white;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo>Deus é Fiel</Titulo>
        <Versiculo>Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.
João 3:16</Versiculo>
      </header>
    </div>
  );
}

export default App;
