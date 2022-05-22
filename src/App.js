
import './App.css';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar />
    
      <header className="App-header">
      <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
