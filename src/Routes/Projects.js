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
            cardContent['details'] = '<li>Used pygame to create an app of the first level of the Donkey Kong arcade game.</li><br/><li>Utilized python classes to handle objects such as the player and their abilities (jump physics, player movement, and hitboxes), the projectiles and their abilities (such as a barrel falling off each ledge with an appropriate speed and its hitbox), and the main enemy (Donkey Kong) which would be the source of instantiating projectiles.</li>';
        }
        else if(id == 'Recycletek'){
            cardContent['color'] = "#93ff8a";
            cardContent['img'] = rec;
            cardContent['title'] = id;
            cardContent['years'] = 'Jun,2023-Present';
            cardContent['role'] = 'Full Stack Developer';
            cardContent['details'] = '<li>Created a blog page for the company staff and public website so that employees can create and post their blog post to the public blog website: https://recycletek.co/blogs</li><li>Used React to incorporate components for things such as adding a post or displaying a post in the existing staff website and used flask to create multiple routes under the /blog blueprint to the existing interface server for posting and getting from the database.</li><li>•	Used SQLAlchemy to add blog posts to a database so that it can be edited and viewed when needed by the use of its id.</li><li>•	Created my own branch on teams GitHub page for the blog feature as to not disrupt the dev branch (before merge).</li>';
        }
        else if(id == "Calculator"){
            cardContent['color'] = '#ffff88';
            cardContent['img'] = calc;
            cardContent['title'] = id;
            cardContent['video'] = calcVid;
            cardContent['details'] = '<li>Worked on a research project with a team of 5 to discover the effects that boundary layer winds had on the spread of regional pollution.</li><li>Utilized python, Numpy, Pandas, and Matlib to analyze netCDF, csv, and xlsx files in order to calculate trends of wind data and shape of nitrogen dioxide plumes.</li><li>Translated mentors matlab code into python to add onto his code on my end and create graphs of the new data collected.</li><li>•	Applied social sciences into the data that was collected to form a scientific presentation to which I presented at CCNY.</li>';
        }
        //setCardContent((prevData)=>({...prevData, ['details']:cardBody}));
        const container = document.getElementById('pop-up-section');
        const root = ReactDOM.createRoot(container);
        root.render(<ProjPopUpCard width='80%' height='80vh' color={cardContent['color']} img={cardContent['img']} video={cardContent['video']} title={cardContent['title']} role={cardContent['role']} years={cardContent['years']} details={cardContent['details']} clickFunction={goBackClick}/>);
        //document.getElementById('pop-up-section').append(<PopUpCard width='80%' height='80vh' color={cardContent['color']} img={cardContent['img']} title={cardContent['title']} role={cardContent['role']} years={cardContent['years']} details={cardContent['details']}/>);
    }
  return (
    <>
        <div className='body'>
            <img className='background' src={yoshi} />
            <div className='content'>
                <img className='heading' src={projects} />
                <div className='card-section'>
                    <Card className='card' id='1' color='#ff908a' height='40vh' img={dk} title='Donkey Kong' years = 'Feb,2023 - Mar,2023' role = 'Game Development' clickFunction={clickFunction}/>
                    <Card className='card' id='2' color='#93ff8a' height='40vh' img={spotify} title='Spotify API' years = 'Dec,2022 - Jan,2023' role = 'Full Stack Development' clickFunction={clickFunction}/>
                    <Card className='card' id='3' color='#ffff88' height='40vh' img={calc} title='Calculator' years = 'Dec,2022 - Dec,2022' role = 'Full Stack Development' clickFunction={clickFunction}/>
                </div>
                <div id='pop-up-section'className='pop-up-section'>
                   
                </div>
                
            </div>
        </div>
    </>
  );
}

export default Projects;