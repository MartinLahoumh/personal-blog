import yoshi from '../images/yoshi.png';
import '../styles/PopUpCard.css';
import dog from '../images/dog.jpg';
import holder from '../images/holder.png';
const PopUpCard = (props)=> {
    
  return (
    <>
        <div style={{width: props.width, height:props.height}}className='pop-card-content'>
            <div style={{backgroundColor: props.color}} className='pop-card-img-container'>
                <img className='pop-card-img' src={props.img} />
            </div>
            <div className='pop-card-desc'>
                <img className='card-background' src={dog} />
                <p className='pop-card-title'>{props.title}</p>
                <div className='pop-roles'>
                  <p className='pop-card-role'>{props.role}</p>
                  <p className='pop-card-years'>{props.years}</p>
                </div>
                <div className='pop-details' style={{overflowY:'scroll'}}>
                  <ul style={{fontSize: '100%', fontFamily:'Ubuntu', lineHeight: '25px', fontWeight:'600'}} dangerouslySetInnerHTML={{__html: props.details}}>
                  </ul>
                </div>
                <button style={{backgroundColor: props.color}} className='click-info' onClick={props.clickFunction} id = {props.title}>Go Back.</button>
            </div>
        </div>
    </>
  );
}

export default PopUpCard;