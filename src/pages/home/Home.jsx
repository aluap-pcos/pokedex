import { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { Search, Main, H2 } from './homestyle'
import Header from '../../components/header/Header';
import { usePokemonContext } from '../../common/contexts/pokemonsContext';
import { useFavoritosContext } from '../../common/contexts/favoritosContext';


export default function Home(){
    const {favoritos, inicializar} = useFavoritosContext();
    const {pokemons, setPokemons, adicionarPokemons} = usePokemonContext();
    const [search, setSearch] = useState('');
    let iniciou = false;

    useEffect(() => {
        adicionarPokemons().then(inicializar);
        console.log("pronto");
        console.log(favoritos);
        console.log(pokemons);
    }, [])

    return (
    <>
        <Header/>
        <Search>
            <form>
                <input 
                type='text' 
                placeholder='Digite o nome do Pokémon' 
                value={search}
                onChange={event => setSearch(event.target.value)}/>
                <button type='submit'>Buscar</button>
            </form>
        </Search>
        <Main>
            {pokemons.filter((pokemon) => {
                if(search == ""){
                    return pokemon;
                }
                else if(pokemon.name.toLowerCase().includes(search.toLowerCase())){
                    return pokemon;
                } 
            }).map(pokemon => (
                <Card pokemon={pokemon}/>
                //name={pokemon.name} id={pokemon.id} types={pokemon.types} image={pokemon.image}
            ))
            }
        </Main>
    </>
    );     
}