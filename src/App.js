import './App.css';
import logo from './images/martin-logo.png';

function App() {
  return (
    <div className="header">
      <img className = 'name' src={logo}/>
      <div className = "diff">
        <p className = "sec">About Me</p>
        <p className = "sec">Experience</p>
        <p className = "sec">Personal Projects</p>
        <p className = "sec">Art/Animations</p>
      </div>
    </div>
  );
}

export default App;
