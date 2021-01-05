import logo from './images/origami_bird_icon.svg';
import './App.css';

//remove
import sampleData from "./sampleData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sampleData[0].imgSrc} className="App-logo" alt="logo" />
       
        <h1>The Nest</h1>
  
      </header>
    </div>
  );
}

export default App;
