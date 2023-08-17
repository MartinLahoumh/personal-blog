import './styles/App.css';
import logo from './images/martin-logo.png';
import Home from './Routes/Home';
import Experience from './Routes/Experience';
import AboutMe from './Routes/AboutMe';
import Ravaged_Rustworks from './music/Ravaged_Rustworks.mp3';
import Pikmin_Title_Screen from './music/Pikmin_Title_Screen.mp3';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
/*
<div className = "diff">
          <p className = "sec">About Me</p>
          <p className = "sec">Experience</p>
          <p className = "sec">Personal Projects</p>
          <p className = "sec">Art/Animations</p>
        </div>*/


function App() {
  let [play,setPlay] = useState(false);
  //let [musicList, setMusicList] = useState([Ravaged_Rustworks,Pikmin_Title_Screen]);
  let [musicList, setMusicList] = useState({
    '0':[Ravaged_Rustworks, 'Ravaged Rustworks'],
    '1': [Pikmin_Title_Screen, 'Pikmin Title Screen']
  });
  let [selectedSong, setSong] = useState(0);
  const handlePlay = ()=>{
    const audio = document.getElementById('audio');
    if(!play){
      document.getElementById('play-icon').innerText = "Pause";
      setPlay(true);
      audio.play();
    }
    else{
      document.getElementById('play-icon').innerText = "Play";
      setPlay(false);
      audio.pause();
    }
  }

  const handleSongSelection = (event)=>{
    const audio = document.getElementById('audio');
    if(event.target.id == 'prev-song'){
      if(audio.currentTime < 3){
        if(selectedSong == 0){
          setSong(Object.keys(musicList).length -1);
        }
        else{
          setSong(selectedSong - 1);
        }
      }
    }
    else{
      if(selectedSong == Object.keys(musicList).length - 1){
        setSong(0);
      }
      else{
        setSong(selectedSong + 1);
      }
    }
    audio.src = musicList[selectedSong][0];
    document.getElementById('song-name').innerText = musicList[selectedSong][1];
    audio.currentTime = 0;
    audio.load();
    audio.play();
  }
  function secToMin(time){
    let minute = 0;
    let second = 0;
    if(time >= 60){
      minute = Math.floor(time/60);
      second = ((time - 60)%100) + Math.floor(time%10);
      if(second > 9){
        second = second + 10;
      }
      else{
        second = "0" + second;
      }
    }
    else{
      minute = 0;
      second = Math.floor(time);
      if(second <= 9){
        second = "0" + second;
      }
    }
    return minute + ":" + second;
  }

  const audioTimeUpdate = ()=>{
    const audio = document.getElementById('audio');
    const time = document.getElementById('time');
    time.innerHTML = secToMin(audio.currentTime) + "/" + secToMin(audio.duration);
  }

  const pageRoute = (event)=>{
    if(event.target.id == 'Home'){
      const container = document.getElementById('page');
      container.innerHTML = '';
      const root = ReactDOM.createRoot(container);
      root.render(<Home />);
    }
    else if(event.target.id == 'Experience'){
      const container = document.getElementById('page');
      container.innerHTML = '';
      const root = ReactDOM.createRoot(container);
      root.render(<Experience/>);
    }
    else if(event.target.id == 'About-Me'){
      const container = document.getElementById('page');
      container.innerHTML = '';
      const root = ReactDOM.createRoot(container);
      root.render(<AboutMe/>);
    }
  }
  return (
    <>
      <div className="header">
        <img id='Home' onClick={pageRoute} className = 'name' src={logo}/>
        <div className = "diff">
          <p id='About-Me' className = "sec" onClick={pageRoute}>About Me</p>
          <p id='Experience' className = "sec" onClick={pageRoute}>Experience</p>
          <p className = "sec">Personal Projects</p>
          <p className = "sec">Art/Animations</p>
        </div>
      </div>
      <div id='page'>
        <Home />
      </div>
      <div className='media-player-container'>
        <div className='media-player'> 
          <audio id='audio' src={musicList[0][0]}onTimeUpdate={audioTimeUpdate}>
          </audio>
          <p id='song-name' className='song-name'>Ravaged Rustworks</p>
          <button id='play-icon' className='play-icon' onClick={handlePlay}>Play</button>
          <div className='song-selection'>
            <button id='prev-song' className='prev-song'onClick={handleSongSelection}>Prev</button>
            <div id='time' className='time'>0:00/3:29</div>
            <button id='next-song' className='next-song' onClick={handleSongSelection}>Next</button>
          </div>
          <div className='volume-control'>
            <button id='mute' className='mute'>Mute</button>
            <input type='range' id='volume-slider' max='100' defaultValue='15' step='5'></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
