import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>Bienvenido!</h1>
      </header>
      <main>
       <ItemListContainer greeting="Productos"/>
      </main>
    </div>
  );
}

export default App;
