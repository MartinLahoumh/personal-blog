import './styles/App.css';
import logo from './images/martin-logo.png';
import Home from './Routes/Home';
import Experience from './Routes/Experience';
import AboutMe from './Routes/AboutMe';
import Projects from './Routes/Projects';
import Ravaged_Rustworks from './music/Ravaged_Rustworks.mp3';
import Pikmin_Title_Screen from './music/Pikmin_Title_Screen.mp3';
import Creative_Exercise from './music/Creative_Exercise.mp3';
import Select_Area from './music/Select_Area_Selector_4.mp3';
import City_Day from './music/City_Day.mp3';
import Mini_Game from './music/Mini_Game.mp3';
import Bouncy_Beanstalk_Walk from './music/Bouncy_Beanstalk_Walk.mp3';
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
    '0':[Creative_Exercise, 'Creative Exercise - Mario Paint'],
    '1': [Mini_Game, 'Mini Game - Yoshi\'s Crafted World'],
    '2': [Bouncy_Beanstalk_Walk, 'Bouncy Beanstalk Walk - Yoshi\'s New Island'],
    '3': [City_Day, 'City Day - Animal Crossing City Folk'],
    '4': [Pikmin_Title_Screen, 'Pikmin Title Screen - Pikmin'],
  });
  let selectedSong = 0;

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
    console.log(selectedSong);
    const audio = document.getElementById('audio');
    if(event.target.id == 'prev-song'){
      if(audio.currentTime < 3){
        if(selectedSong == 0){
          console.log("HERE");
          selectedSong = Object.keys(musicList).length -1;
        }
        else{
          console.log("NOT");
          selectedSong = selectedSong - 1;
        }
      }
    }
    else{
      if(selectedSong == Object.keys(musicList).length - 1){
        selectedSong = 0;
      }
      else{
        selectedSong = selectedSong + 1;
      }
    }
    console.log("SELECTED: ", selectedSong);
    audio.src = musicList[selectedSong][0];
    document.getElementById('song-name').innerText = musicList[selectedSong][1];
    audio.currentTime = 0;
    audio.pause();
    audio.load();
    audio.play();
  }
  
  function secToMin(time){
    let minute = 0;
    let second = 0;
    if(time >= 60){
      minute = Math.floor(time/60);
      second = Math.floor(Math.abs((minute * 60) - time));
      if(second <= 9){
        second = "0" + Math.floor(second);
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
    time.innerHTML = secToMin(audio.currentTime) + "/" + secToMin(Math.floor(audio.duration));
    audio.addEventListener("input", volumeLevel);
    if(audio.currentTime == audio.duration){
      if(selectedSong == Object.keys(musicList).length - 1){
        selectedSong = 0;
      }
      else{
        selectedSong += 1;
      }
      audio.src = musicList[selectedSong][0];
      document.getElementById('song-name').innerText = musicList[selectedSong][1];
      audio.currentTime = 0;
      audio.pause();
      audio.load();
      audio.play();
    }
  }

  const volumeLevel = ()=>{
    const audio = document.getElementById('audio');
    audio.volume = document.getElementById('volume-slider').value /100;
    console.log("HERE");
  }

  const pageRoute = (event)=>{
    if(event.target.id == 'Home'){
      const container = document.getElementById('page');
      container.innerHTML = '';
      const root = ReactDOM.createRoot(container);
      root.render(<Home routeFunc={pageRoute} />);
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
    else if(event.target.id == 'Projects'){
      const container = document.getElementById('page');
      container.innerHTML = '';
      const root = ReactDOM.createRoot(container);
      root.render(<Projects />);
    }
  }
  return (
    <>
      <div className="header">
        <img id='Home' onClick={pageRoute} className = 'name' src={logo}/>
        <div className = "diff">
          <p id='About-Me' className = "sec" onClick={pageRoute}>About Me</p>
          <p id='Experience' className = "sec" onClick={pageRoute}>Experience</p>
          <p id='Projects' className = "sec" onClick={pageRoute}>Personal Projects</p>
        </div>
      </div>
      <div id='page'>
        <Home routeFunc={pageRoute} />
      </div>
      <div className='media-player-container'>
        <div className='media-player'> 
          <audio id='audio' src={musicList[selectedSong][0]} onTimeUpdate={audioTimeUpdate}>
          </audio>
          <p id='song-name' className='song-name'>Creative Exercise - Mario Paint</p>
          <button id='play-icon' className='play-icon song-btn' onClick={handlePlay}>Play</button>
          <div className='song-selection'>
            <button id='prev-song' className='prev-song song-btn'onClick={handleSongSelection}>Prev</button>
            <div id='time' className='time'>0:00/1:59</div>
            <button id='next-song' className='next-song song-btn' onClick={handleSongSelection}>Next</button>
          </div>
          <div className='volume-control'>
            <button id='mute' className='mute song-btn' onClick={()=>{document.getElementById('audio').volume = 0; document.getElementById('volume-slider').value = 0;}}>Mute</button>
            <input type='range' id='volume-slider' max='100' defaultValue='15' step='5' onClick={volumeLevel}></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
