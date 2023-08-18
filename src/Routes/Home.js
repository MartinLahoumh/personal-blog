import welcome from '../images/Welcome.gif';
import monkey from '../images/Monkey.gif';
import about_me from '../images/about-me.png';
import experience from '../images/experience.png';
import art_animations from '../images/art-animations.png';
import yoshi from '../images/yoshi.png';
import dk1 from '../images/dk1.png';
import dk2 from '../images/dk2.png';
import ground from '../images/ground.jpg';
import flower from '../images/flower.webp';
import pikmin from '../images/pikmin.webp';
import projects from '../images/projects.png';
import blue from '../images/blue.png';
import red from '../images/red.png';
import green from '../images/green.png';
import yellow from '../images/yellow.png';
import '../styles/Home.css';

function Home(props) {
  return (
    <>
        <div className='body'>
        <img className='background' src={yoshi} />
        <div className='all-content'>
                <div className='options'>
                    <div className='icon' id='About_Me' onClick={props.routeFunc}>
                        <img className='icon-img'src={about_me} id='About_Me' onClick={props.routeFunc} />
                        <img className='icon-highlight' src={red} id='About_Me' onClick={props.routeFunc}/>
                        <h2 className='section-name' id='About_Me' onClick={props.routeFunc}>About Me.</h2>
                    </div>
                    <div className='icon' id='Experience' onClick={props.routeFunc}>
                        <img className='icon-highlight' id='Experience' src={green} onClick={props.routeFunc} />
                        <img className='icon-img' id='Experience' src={experience} onClick={props.routeFunc} />
                        <h2 className='section-name' id='Experience' onClick={props.routeFunc} >Experience.</h2>
                    </div>
                    <div className='icon' id='Projects' onClick={props.routeFunc}>
                        <img className='icon-highlight' src={yellow} id='Projects' onClick={props.routeFunc}/>
                        <img src={projects} className='projects' id='Projects' onClick={props.routeFunc}/>
                        <h2 className='section-name' id='Projects' onClick={props.routeFunc}>Projects.</h2>
                    </div>
                    <div className='icon'>
                        <img className='icon-highlight' src={blue} />
                        <img className='icon-img' src={art_animations} />
                        <h2 className='section-name'>Art/Animations.</h2>
                    </div>
                </div>
                <div className='welcome-message'>
                    <img className='welcome' src={welcome} />
                    <img className='monkey' src={monkey} />
                </div>
            </div>
        </div>
    </>
  );
}

export default Home;