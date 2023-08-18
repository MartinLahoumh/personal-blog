import yoshi from '../images/yoshi.png';
import '../styles/PopUpCard.css';
import '../styles/ProjPopUpCard.css';
import dog from '../images/dog.jpg';
import holder from '../images/holder.png';
import calcVid from '../videos/calc.mp4';
const ProjPopUpCard = (props)=> {
    
  return (
    <>
        <div style={{width: props.width, height:props.height}}className='pop-card-content'>
            <div style={{backgroundColor: props.color}} className='proj-card-img-container'>
                <video className='proj-card-vid' src={props.video} autoPlay='true' controls='true' loop='true' />
            </div>
            <div className='pop-card-desc'>
                <img className='card-background' src={dog} />
                <p style={{marginBottom:'5px', fontSize: '50px'}}className='pop-card-title'>{props.title}</p>
                <div className='pop-details' style={{overflowY:'scroll'}}>
                    <ul style={{fontSize: '100%', fontFamily:'Ubuntu', lineHeight: '25px'}} dangerouslySetInnerHTML={{__html: props.details}}>
                    </ul>
                </div>
                <button style={{backgroundColor: props.color}} className='click-info' onClick={props.clickFunction} id = {props.title}>Go Back.</button>
            </div>
        </div>
    </>
  );
}

export default ProjPopUpCard;