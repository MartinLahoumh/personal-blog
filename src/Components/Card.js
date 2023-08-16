import yoshi from '../images/yoshi.png';
import '../styles/Card.css';
import dog from '../images/dog.jpg';
import holder from '../images/holder.png';
import flower from '../images/flower.png';
const Card = (props)=> {
    
  return (
    <>
        <div className='card'>
            <img className='flower' src={flower} />
            <div style={{width: props.width, height:props.height}} className='card-content'>
                <div style={{backgroundColor: props.color}} className='card-img-container'>
                    <img className='card-img' src={props.img} />
                </div>
                <div className='card-desc'>
                    <img style={{position:'absolute', opacity: 0.2}} src={dog} />
                    <p className='card-title'>{props.title}</p>
                    <p className='card-years'>{props.years}</p>
                    <p className='card-role'>{props.role}</p>
                    <button style={{backgroundColor: props.color}} className='click-info' onClick={props.clickFunction} id = {props.title}>Click For More!</button>
                </div>
            </div>
            <img className='holder' src={holder}/>
        </div>
    </>
  );
}

export default Card;