import yoshi from '../images/yoshi.png';
import about_me from '../images/about-me.gif';
import '../styles/basic.css';
import resume from '../images/resume.png';
import martin from '../images/martin.JPG';
import greeting from '../images/greeting.png';
import RegCard from '../Components/RegCard';
import '../styles/AboutMe.css';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ccny from '../images/ccny.jpg';
import rec from '../images/Recycletek.png';
import dog from '../images/Hourglassdog1.webp';
function AboutMe() {
  return (
    <>
        <div className='body'>
            <img className='background' src={yoshi} />
            <div className='content'>
                <img className='heading' id='heading-about-me' src={about_me}/>
                <div className='contact-content'>
                        <p className='contact-info'>+1(347)-569-9520</p>
                        <p className='contact-info' style={{marginLeft:'5px', marginRight:'5px'}}>&bull;</p>
                        <p className='contact-info'>Brooklyn,NY</p>
                        <p className='contact-info' style={{marginLeft:'5px', marginRight:'5px'}}>&bull;</p>
                        <p className='contact-info'>martinlahoumh103102@gmail.com</p>
                        <p className='contact-info' style={{marginLeft:'5px', marginRight:'5px'}}>&bull;</p>
                        <p className='contact-info'>https://github.com/MartinLahoumh</p>
                </div>
                <div className='martin'>
                    <img className='martin-img' src={martin} />
                    <img className='gretting' src={greeting} />
                </div>
                <div className='brief-content'>
                    <div className='breif-card'>
                        <p className='brief-title'>Education:</p>
                        <div style={{backgroundColor: '#ff908a'}} className='brief-img-container'>
                            <img className='brief-img' src={ccny} />
                        </div>
                        <ul>
                            <li className='brief-note'>Bachelors in Computer Science</li>
                            <li className='brief-note'>Graduating Fall 2024</li>
                        </ul>
                    </div>
                    <img className='rotate linear infinite' src={dog}/>
                    <div className='breif-card'>
                        <p className='brief-title'>Currently Employed At:</p>
                        <div style={{backgroundColor: '#93ff8a'}}className='brief-img-container'>
                            <img className='brief-img' src={rec} />
                        </div>
                        <ul>
                            <li className='brief-note'>Full Stack Developer</li>
                            <li className='brief-note'>Since Jun,2023</li>
                        </ul>
                    </div>
                </div>
                <div className='message-container'>
                    <p className='message'>&emsp;&emsp;&emsp;Hello! My name is Martin Lahoumh, a computer scientist from Brooklyn, NY. Being a kid growing up in the late 2000’s – early 2010’s era, I was heavily influenced by Newgrounds.com. Newgrounds is a site where ordinary people can post their art, voice demo’s, games, and animations to the world for free. This is where I discovered many of my inspirations, such as Arin Hanson (Egoraptor), Chris O’Neal (OneyNG) and Zach Hadel (Psychicpebles). I would study their art and watch streams where they would animate and mimic their techniques to figure out how to make characters feel more alive and jumpier when animating. Chris O’Neal, more importantly, was my biggest inspiration due to his heavy knowledge with… well everything. He is a talented musician, 3D/2D animator, and game designer and I’ve always wanted to drive my art in a creative field like that.</p><br/>
                    <p className='message'>&emsp;&emsp;&emsp;Newgrounds grew my interest in software development due to the vast amount of passion people had creating their own games simply off making people happy. Additionally, Nintendo also played a big part in my love of creating, seeing the passion that late president of Nintendo, Satoru Iwata, had when it came to developing games inspired me further to create my own games. In 2019, I got my official formal coding experience at All Star Code, a summer intensive program that teaches young boys how to… well code… From there, I would teach myself Unity 2D/3D along with C# to create small games that I personally would find cool. In 2022, I would get my first coding experience in the professional world by being a data science intern at NOAA-CESSERST. In 2023 I would find my passion for web and app development and use what I have learned in my first software engineering job at Recycletek as a Full Stack Developer, where I currently work (And I must say it has been a blast so far). To this day, I am a big avid fan of video games and cartoons and enjoy creating them whenever I have time to spare. </p>
                </div>
            </div>
        </div>
    </>
  );
}

export default AboutMe;