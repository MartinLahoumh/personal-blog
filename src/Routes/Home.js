import welcome from '../images/Welcome.gif';
import monkey from '../images/Monkey.gif';
import about_me from '../images/about-me.png';
import experience from '../images/experience.png';
import art_animations from '../images/art-animations.png';
import '../styles/Home.css';
function Home() {
  return (
    <body>
        <div className='all-content'>
            <div className='options'>
                <div className = 'icon'>
                    <img className='icon-img' src={about_me} />
                    <p className='section'>About Me</p>
                </div>
                <div className = 'icon'>
                    <img className='icon-img' src={experience} />
                    <p className='section'>Experience</p>
                </div>
                <div className = 'icon'>
                    <img className='icon-img' src={experience} />
                    <p className='section'>Personal Projects</p>
                </div>
                <div className = 'icon'>
                    <img className='icon-img' src={art_animations} />
                    <p className='section'>Art/Animation</p>
                </div>
            </div>
            <div className='welcome-message'>
                <img className='welcome' src={welcome} />
                <img className='monkey' src={monkey} />
            </div>
        </div>
    </body>
  );
}

export default Home;