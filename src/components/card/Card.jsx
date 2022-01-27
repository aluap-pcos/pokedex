import { Container } from "./style";
import { Link } from "react-router-dom";

export default function Card(props){
    return <Container type={props.types[0]}>
        <h2><Link to={`/details/${props.name}`}className="link">{props.name}</Link></h2>
        <p>001</p> 
        <div>
            <img src={props.image}/>
        </div> 
    </Container>;
}