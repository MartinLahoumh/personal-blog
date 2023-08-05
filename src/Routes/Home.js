import welcome from '../images/Welcome.gif'
import monkey from '../images/Monkey.gif'
import '../styles/Home.css';
function Home() {
  return (
    <body>
        <div className='all-content'>
            <div className='options'>
                <p className='section'>About Me</p>
                <p className='section'>Experience</p>
                <p className='section'>Personal Projects</p>
                <p className='section'>Art/Animations</p>
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