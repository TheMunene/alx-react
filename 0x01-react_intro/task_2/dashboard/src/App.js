import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

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

      <div className="App-body">
                <p>Login to access the full dashboard</p>
                <label htmlFor="Email">Email: </label>
                <input type="email" id="Email" name="Email"/>
                <label htmlFor="Password"> Password: </label>
                <input type="password" id="Password" name="Password"/>
                <button>Ok</button>
            </div>

      <hr className='hr'></hr>
      <footer className='App-footer'>
        <p>Copyright {currentDate} - {getFooter} </p>
      </footer>
      </div>
    </div>
  );
}

export default App;
