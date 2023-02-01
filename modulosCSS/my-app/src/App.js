import logo from './efesios_3_16.png';
import estilo from './App.module.css';

function App() {
  return (
    <div className={estilo.App}>
      <header className={estilo.App_header}>
        <img src={logo} className={estilo.App_logo} alt="logo" />
        <p>
          Armadura de Deus
        </p>
        <a
          className={estilo.App_link}
          href="https://defesadoevangelho.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acesse o Site DefesaDoEvangelho
        </a>
      </header>
    </div>
  );
}

export default App;
