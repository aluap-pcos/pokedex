import styled from "styled-components";
import favorito from "../../image/favorito.png";
import favoritar from "../../image/favoritar.png";

export const BotaoFavorito = styled.button`
    position: absolute;
    width: 1.4rem;
    height: 1.2rem;
    margin-left: ${props => props.marginLeft+'rem'};
    margin-top: ${props => props.marginTop+'rem'};
    background: none;
    border: 0ch;
    background-image: ${props => (props.favoritado ? 'url('+favorito+')' : 'url('+favoritar+')')};
`;