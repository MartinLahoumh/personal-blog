import './styles/App.css';
import logo from './images/martin-logo.png';
import Home from './Routes/Home';
import Ravaged_Rustworks from './music/Ravaged_Rustworks.mp3';
import Pikmin_Title_Screen from './music/Pikmin_Title_Screen.mp3';
import { useEffect, useState } from 'react';
/*
<div className = "diff">
          <p className = "sec">About Me</p>
          <p className = "sec">Experience</p>
          <p className = "sec">Personal Projects</p>
          <p className = "sec">Art/Animations</p>
        </div>*/
function App() {
  let [play,setPlay] = useState(false);
  let [musicList, setMusicList] = useState([Ravaged_Rustworks,Pikmin_Title_Screen]);
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
          setSong(musicList.length -1);
        }
        else{
          setSong(selectedSong - 1);
        }
      }
    }
    else{
      if(selectedSong == musicList.length - 1){
        setSong(0);
      }
      else{
        setSong(selectedSong + 1);
      }
    }
    audio.src = musicList[selectedSong];
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
  return (
    <>
      <div className="header">
        <img className = 'name' src={logo}/>
        <div className = "diff">
          <p className = "sec">About Me</p>
          <p className = "sec">Experience</p>
          <p className = "sec">Personal Projects</p>
          <p className = "sec">Art/Animations</p>
        </div>
      </div>
      <Home />
      <div className='media-player-container'>
        <div className='media-player'>
          <audio id='audio' src={musicList[0]}onTimeUpdate={audioTimeUpdate}>
          </audio>
          <button id='play-icon' className='play-icon' onClick={handlePlay}>Play</button>
          <div id='time'>0:00</div>
          <button id='prev-song' onClick={handleSongSelection}>Prev-Song</button>
          <input type='range' id='song-slider' max='100' defaultValue='0'></input>
          <button id='next-song'>Next Song</button>
          <button id='mute'>Mute</button>
          <input type='range' id='volume-slider' max='100' defaultValue='15'></input>
        </div>
      </div>
    </>
  );
}

export default App;
