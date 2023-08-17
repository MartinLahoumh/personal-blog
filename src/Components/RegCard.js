import yoshi from '../images/yoshi.png';
import '../styles/Card.css';
import dog from '../images/dog.jpg';
import holder from '../images/holder.png';
import flower from '../images/flower.png';
const RegCard = (props)=> {
    
  return (
    <>
        <div className='card'>
            <div style={{width: props.width, height:props.height}} className='card-content'>
                <div style={{backgroundColor: props.color, height: '20vh'}} className='card-img-container'>
                    <img className='card-img' src={props.img} />
                </div>
                <div className='card-desc'>
                    <img style={{position:'absolute', opacity: 0.2}} src={dog} />
                    <p className='card-title'>{props.title}</p>
                    <p className='card-years'>{props.years}</p>
                    <p className='card-role'>{props.role}</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default RegCard;