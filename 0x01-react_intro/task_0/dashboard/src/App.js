import logo from './logo.jpg';
import './App.css';

 function App() {
  return (
    <div >
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
        <p>Copyright 2020 - holberton School</p>
      </footer>

    </div>
  );
}

export default App;
