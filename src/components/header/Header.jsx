import { HeaderP } from "./style";
import { Link } from "react-router-dom";
import logo from '../../image/logo.png'

export default function Header(){
    return <HeaderP>
            <Link to={`/favoritos`} className='favoritosLink'>
                <p>&#10084; Meus favoritos</p>
            </Link>
            <div className='logo'>
                <img src={logo} />
            </div>
        </HeaderP>;
}