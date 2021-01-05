import logo from './images/origami_bird_icon.svg';
import './App.css';
import sampleData from "./sampleData";
import Stub from "./Stub";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <h1>The Nest</h1>

       
      </header>
      {console.log(sampleData)}
      {sampleData.map((datum) => {
          return <Stub datum={datum}/>
        })}
      
    </div>
  );
}

export default App;
