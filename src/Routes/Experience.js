import yoshi from '../images/yoshi.png';
import experience from '../images/Experience.gif';
import '../styles/basic.css';
import Card from '../Components/Card';
import PopUpCard from '../Components/PopUpCard.js';
import ctp from '../images/cuny-tech-prep.png';
import rec from '../images/Recycletek.png';
import noaa from '../images/noaa-cessrst.png';
import resume from '../images/resume.png';
import '../styles/Experience.css';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
function Experience() {
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
            'years':'',
            'role':'',
            'details':'',
        }
        const id = event.target.id;
        if(id == 'Cuny Tech Prep'){
            cardContent['color'] = "#ff908a";
            cardContent['img'] = ctp;
            cardContent['title'] = id;
            cardContent['years'] = 'Aug,2023-Present';
            cardContent['role'] = 'Full Stack Student';
            cardContent['details'] = '<li>Info Coming Soon :)</li>';
        }
        else if(id == 'Recycletek'){
            cardContent['color'] = "#93ff8a";
            cardContent['img'] = rec;
            cardContent['title'] = id;
            cardContent['years'] = 'Jun,2023-Present';
            cardContent['role'] = 'Full Stack Developer';
            cardContent['details'] = '<li>Created a blog page for the company staff and public website so that employees can create and post their blog post to the public blog website: https://recycletek.co/blogs</li><li>Used React to incorporate components for things such as adding a post or displaying a post in the existing staff website and used flask to create multiple routes under the /blog blueprint to the existing interface server for posting and getting from the database.</li><li>Used SQLAlchemy to add blog posts to a database so that it can be edited and viewed when needed by the use of its id.</li><li>Created my own branch on teams GitHub page for the blog feature as to not disrupt the dev branch (before merge).</li>';
        }
        else if(id == "NOAA-CESSRST"){
            cardContent['color'] = '#ffff88';
            cardContent['img'] = noaa;
            cardContent['title'] = id;
            cardContent['years'] = 'Jun,2022-Aug,2022';
            cardContent['role'] = 'Data Science Intern';
            cardContent['details'] = '<li>Worked on a research project with a team of 5 to discover the effects that boundary layer winds had on the spread of regional pollution.</li><li>Utilized python, Numpy, Pandas, and Matlib to analyze netCDF, csv, and xlsx files in order to calculate trends of wind data and shape of nitrogen dioxide plumes.</li><li>Translated mentors matlab code into python to add onto his code on my end and create graphs of the new data collected.</li><li>Applied social sciences into the data that was collected to form a scientific presentation to which I presented at CCNY.</li>';
        }
        //setCardContent((prevData)=>({...prevData, ['details']:cardBody}));
        const container = document.getElementById('pop-up-section');
        const root = ReactDOM.createRoot(container);
        root.render(<PopUpCard width='80%' height='65vh' color={cardContent['color']} img={cardContent['img']} title={cardContent['title']} role={cardContent['role']} years={cardContent['years']} details={cardContent['details']} clickFunction={goBackClick}/>);
        //document.getElementById('pop-up-section').append(<PopUpCard width='80%' height='80vh' color={cardContent['color']} img={cardContent['img']} title={cardContent['title']} role={cardContent['role']} years={cardContent['years']} details={cardContent['details']}/>);
    }
  return (
    <>
        <div className='body'>
            <img className='background' src={yoshi} />
            <div className='content'>
            <div id='pop-up-section'className='pop-up-section'></div>
                <img className='heading' src={experience} />
                <div className='card-section'>
                    <Card className='card' id='1' color='#ff908a' width='100%'height='35vh' img={ctp} title='Cuny Tech Prep' years = 'Aug,2023 - Present' role = 'Full Stack Student' clickFunction={clickFunction}/>
                    <Card className='card' id='2' color='#93ff8a' width='100%' height='35vh' img={rec} title='Recycletek' years = 'Jun,2023 - Present' role = 'Full Stack Developer' clickFunction={clickFunction}/>
                    <Card className='card' id='3' color='#ffff88' width='100%' height='35vh' img={noaa} title='NOAA-CESSRST' years = 'Jun,2022 - Aug,2022' role = 'Data Science Intern' clickFunction={clickFunction}/>
                </div>
                
                
            </div>
        </div>
    </>
  );
}

export default Experience;