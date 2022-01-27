import { Container } from "./style";
import { Link } from "react-router-dom";

export default function Card(props){
    return <Container type={props.types[0]}>
        <Link to={`/details/${props.name}`}className="link"><h2>{props.name}</h2></Link>
        <p>001</p> 
        <div>
            <img src={props.image}/>
        </div> 
    </Container>;
}