import { useState, useEffect } from 'react/cjs/react.development'
import Bar from '../../components/progress/Bar';
import btn from '../../image/btn.png'
import { api } from '../../services/api';
import { Main, Section } from './detailsstyle'
import { useParams, Link } from 'react-router-dom';
import BtnFavorito from '../../components/btnFavorito/BtnFavorito';
import Header from '../../components/header/Header';
import { useFavoritosContext } from "../../common/contexts/favoritosContext";

export default function Details(){
    const [pokemon, setPokemon] = useState({})
    let {route} = useParams();
    const {favoritos, setFavoritos, adicionaFavorito, removeFavorito} = useFavoritosContext()
    const jaFavoritado = favoritos.some(pokemons => pokemons.id === pokemon.id);


    useEffect(() => {
        api.get(`/pokemons/${route}`)
        .then((response) => {setPokemon(response.data); console.log(response.data); console.log(response.request)})
    }, [])


    return <>
        <Header/>
        
        <Main>
            <Section type={pokemon.types != undefined ? pokemon?.types[0] : ""}>
                <div className='about'>
                    <Link to='/' className='linkHome'><img src={btn}/></Link>
                    <h2>{pokemon?.name}</h2>
                    <BtnFavorito marginLeft={8} marginTop={-1.8} favoritado={jaFavoritado} onClick={() => jaFavoritado ? removeFavorito(pokemon.id) : adicionaFavorito(pokemon) }/>
                    <p className='number'>#00{pokemon?.id}</p>
                    <div className='image'>
                        <img src={pokemon?.image} alt={pokemon?.name}/>
                    </div>
                    <div className='atributes'>
                        <div>
                            <h3>{pokemon?.weight?.value+''+pokemon?.weight?.unit}</h3>
                            <p>Weight</p>
                        </div>
                        <div>
                            <h3>{pokemon.types != undefined ? pokemon?.types[0] : ""}</h3>
                            <p>Type</p>
                        </div>
                        <div>
                            <h3>{pokemon?.height?.value+''+pokemon?.height?.unit}</h3>
                            <p>Height</p>
                        </div>
                    </div>
                </div>
                <div className='stats'>
                {
                    pokemon?.stats?.map(stat => <Bar name={stat.name} value={stat.value}/>)
                }
                </div>
            </Section>
 
        </Main>
    </>
}