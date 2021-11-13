import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [ races, setRaces] = useState(0);
  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/races/dwarf')
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setRaces(response)
    })   
    

  },[]);
  return (
    <div className="App">
      <header className="App-header">
      <h1>Dungeon and Dragons Races</h1>
              <div className="info">
                <img src="/dwarf.jpg" alt="dwarf" />
                <h1>Name: {races.name}</h1>
                <h1>Age: {races.age}</h1>
                <h1>Alignment: {races.alignment}</h1>             
                <h1>Size: {races.size}</h1>
                <h1>Size Description: {races.size_description}</h1>    
              </div>
              
      </header>
    </div>
  );
}

export default App;