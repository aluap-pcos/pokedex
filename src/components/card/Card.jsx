import { Container, Favoritado, StyledLink } from "./style";
import { Link } from "react-router-dom";
import BtnFavorito from "../btnFavorito/BtnFavorito";
import { useFavoritosContext } from "../../common/contexts/favoritosContext";

export default function Card(props){
    const {favoritos, setFavoritos, adicionaFavorito, removeFavorito} = useFavoritosContext()
    const jaFavoritado = favoritos.some(pokemons => pokemons.id === props.pokemon.id);
    return <div>
    <BtnFavorito marginLeft={9} marginTop={1.5} favoritado={jaFavoritado} onClick={() => jaFavoritado ? removeFavorito(props.pokemon.id) : adicionaFavorito(props.pokemon)}/>
    <StyledLink to={`/details/${props.pokemon.name}`}> 
        <Container type={props.pokemon.types[0]}>
            <h2>{props.pokemon.name}</h2>
            <p>#00{props.pokemon.id}</p> 
            <div>
                <img src={props.pokemon.image} alt="Imagem do pokémon"/>
            </div> 
        </Container>
    </StyledLink>
    </div>;
}