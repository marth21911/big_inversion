import logo from './logo.svg';
import './App.css';
import PersonCard from './components/functionalPerson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PersonCard firstName = "Philip" lastName= "Fry" age = {1032} hairColor="orange"/>
      <PersonCard firstName = "Bender" lastName= "Bot" age = {8} hairColor="steel"/>
      <PersonCard firstName = "Leela" lastName= "Leeloo" age = {32} hairColor="purple"/>
      <PersonCard firstName = "Shelly" lastName= "Zoidberg" age = {45} hairColor="chitin"/>
      </header>
    </div>
  );
}

export default App;
