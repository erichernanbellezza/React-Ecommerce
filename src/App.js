// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemList } from './containers/ItemListContainer/ItemList';



function App() {
  return (
    <>
    <div className="App">
      <header className="appHeader">
      <Navbar />
      </header>
      <ItemList/>
    </div>
    </>
  );
}

export default App;
