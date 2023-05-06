import logo from './logo.svg';
import './App.css';
import Todo from './componets/Todo.js';

function App() {
  let data=[
    {
      name:"first Todo",
      id:1,
      completed:false
      
    }
  ]
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
        <Todo data={data}/>
      </header>
    </div>
  );
}

export default App;
