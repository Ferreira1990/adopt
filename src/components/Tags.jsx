import Badge from 'react-bootstrap/Badge';


function Tags (props){
    return(
        <div>
                <Badge className='badgecstm' bg={props.color}>{props.text}</Badge>
        </div>

    )
}

export default Tags;