import yoshi from '../images/yoshi.png';
import projects from '../images/Projects.gif';
import '../styles/basic.css';
import Card from '../Components/Card';
import PopUpCard from '../Components/PopUpCard.js';
import ctp from '../images/cuny-tech-prep.png';
import rec from '../images/Recycletek.png';
import noaa from '../images/noaa-cessrst.png';
import resume from '../images/resume.png';
import calc from '../images/calc.PNG';
import spotify from '../images/spotify.PNG'
import dk from '../images/dk.PNG';
import '../styles/Experience.css';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ProjPopUpCard from '../Components/ProjPopUpCard';
import calcVid from '../videos/calc.mp4';
import spotifyVid from '../videos/spotify.mp4';
import dkVid from '../videos/dk.mp4';
function Projects() {
    /*
    <div className='resume-section'>
                    <p className='resume-name'>Resume</p>
                    <img className='resume-img' src={resume} />
                </div>
    */
    const goBackClick = ()=>{
        const container = document.getElementById('pop-up-section');
        container.innerHTML = '';
    }
    const clickFunction = (event)=>{
        let cardContent = {
            'color':'',
            'img':'',
            'title':'',
            'video': '',
            'details':'',
        }
        const id = event.target.id;
        if(id == 'Donkey Kong'){
            cardContent['color'] = "#ff908a";
            cardContent['img'] = dk;
            cardContent['title'] = id;
            cardContent['video'] = dkVid;
            cardContent['details'] = '<li><a href=\'https://github.com/MartinLahoumh/DonkeyKongArcade\'>Source Code</a></li><li>Used pygame to create an app of the first level of the Donkey Kong arcade game.</li><br/><li>Utilized python classes to handle objects such as the player and their abilities (jump physics, player movement, and hitboxes), the projectiles and their abilities (such as a barrel falling off each ledge with an appropriate speed and its hitbox), and the main enemy (Donkey Kong) which would be the source of instantiating projectiles.</li><li>Recreated all sprites and animations using Procreate.</li>';
        }
        else if(id == 'Spotify API'){
            cardContent['color'] = "#93ff8a";
            cardContent['title'] = id;
            cardContent['video'] = spotifyVid;
            cardContent['details'] = '<li><a href=\'https://github.com/MartinLahoumh/spotifyAPI\'>Source Code</a></li><li>Built an app that creates a playlist for a user’s Spotify account to which the user can add their own preferred songs to that playlist using Spotify’s API.</li><li>Utilized express and node.js to gain access to a user’s Spotify profile by going through Spotify’s OAuth 2.0 authentication to gain an access token.</li><li>Used a POST request to create the playlist that the user would create on the app. This would redirect them to a page to place songs on their playlist.</li><li>Sent a GET request to get the songs the user listed (with the most popular version of the song title being selected) and then would send a POST request for those songs to be added to the users newly created Spotify playlist.</li><li>Applied CSS grid and flex box to create an original design for the website by scratch with no frameworks</li>';
        }
        else if(id == "Calculator"){
            cardContent['color'] = '#ffff88';
            cardContent['title'] = id;
            cardContent['video'] = calcVid;
            cardContent['details'] = '<li><a href=\'https://github.com/MartinLahoumh/Calculator\'>Source Code</a></li><li>Worked on a Calculator with no tutorial what so ever in order to strengthen my HTML, CSS, and JavaScript skills.</li><li>Created a unique looking display using CSS grid and flexbox.</li><li>Practice use of multiple windows on a screen to test out responsiveness of a website.</li><li>Used Procreate to create all animations.</li>';
        }
        //setCardContent((prevData)=>({...prevData, ['details']:cardBody}));
        const container = document.getElementById('pop-up-section');
        const root = ReactDOM.createRoot(container);
        root.render(<ProjPopUpCard width='80%' height='70vh' color={cardContent['color']} img={cardContent['img']} video={cardContent['video']} title={cardContent['title']} role={cardContent['role']} years={cardContent['years']} details={cardContent['details']} clickFunction={goBackClick}/>);
        //document.getElementById('pop-up-section').append(<PopUpCard width='80%' height='80vh' color={cardContent['color']} img={cardContent['img']} title={cardContent['title']} role={cardContent['role']} years={cardContent['years']} details={cardContent['details']}/>);
    }
  return (
    <>
        <div className='body'>
            <img className='background' src={yoshi} />
            <div className='content'>
                <img style={{width:'33%'}}className='heading' src={projects} />
                <div className='card-section'>
                    <Card className='card' id='1' color='#ff908a' height='35vh' img={dk} title='Donkey Kong' years = 'Feb,2023 - Mar,2023' role = 'Game Development' clickFunction={clickFunction}/>
                    <Card className='card' id='2' color='#93ff8a' height='35vh' img={spotify} title='Spotify API' years = 'Dec,2022 - Jan,2023' role = 'Full Stack Development' clickFunction={clickFunction}/>
                    <Card className='card' id='3' color='#ffff88' height='35vh' img={calc} title='Calculator' years = 'Dec,2022 - Dec,2022' role = 'Full Stack Development' clickFunction={clickFunction}/>
                </div>
                <div id='pop-up-section'className='pop-up-section'>
                   
                </div>
                
            </div>
        </div>
    </>
  );
}

export default Projects;