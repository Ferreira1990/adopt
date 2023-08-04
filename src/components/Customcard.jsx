import Card from 'react-bootstrap/Card';
import Tags from './Tags';



function Customcard(props) {
    return (
      <Card style={{ width: '18rem' }} className='cstm'>
        <Card.Img className='cstmimg' width="200px" variant="top" src={props.image} />
        <Card.Body className='text-center'>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}
          </Card.Text>
          <Tags 
          color={props.color}
          text={props.text2}/>   
        </Card.Body>
      </Card>
    );
  }
  
  export default Customcard;