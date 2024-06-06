import logo from './logo.jpg';
import './App.css';
import { getCurrentYear, getFooterCopy } from './utils';

const currentDate = new Date().getFullYear();
const getFooter = getFooterCopy(false);

function App() {
  return (
    <div className="App">
      <div>
      <header className="App-header">
        <img src={logo} alt="logo"></img>
        <h1>School dashboard</h1>
      </header>
    <hr className='hr'></hr>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
      </body>

    <hr className='hr'></hr>
      <footer className='App-footer'>
        <p>Copyright {currentDate} - {getFooter} </p>
      </footer>
      </div>
    </div>
  );
}

export default App;
