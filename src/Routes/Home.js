import welcome from '../images/Welcome.gif';
import monkey from '../images/Monkey.gif';
import about_me from '../images/about-me.png';
import experience from '../images/experience.png';
import art_animations from '../images/art-animations.png';
import cardboard from '../images/cardboard.jpg';
import projects from '../images/projects.png';
import '../styles/Home.css';

function Home() {
  return (
    <>
        <body>
        
        <div className='all-content'>
                <div className='options'>
                    <div className='icon'>
                        <img className='icon-img'src={about_me} />
                        <h2 className='section-name'>About Me.</h2>
                    </div>
                    <div className='icon'>
                        <img className='icon-img' src={experience} />
                        <h2 className='section-name'>Experience.</h2>
                    </div>
                    <div className='icon'>
                        <img id = 'projects' src={projects} />
                        <h2 className='section-name'>Projects.</h2>
                    </div>
                    <div className='icon'>
                        <img className='icon-img' src={art_animations} />
                        <h2 className='section-name'>Art/Animations.</h2>
                    </div>
                </div>
                <div className='welcome-message'>
                    <img className='welcome' src={welcome} />
                    <img className='monkey' src={monkey} />
                </div>
            </div>
        </body>
    </>
  );
}

export default Home;