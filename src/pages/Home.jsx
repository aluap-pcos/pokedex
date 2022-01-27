import { useEffect, useState } from 'react';
import Card from '../components/card/Card';
import logo from '../image/logo.png'
import { api } from '../services/api';
import {Header, Main, H2 } from '../styles/homestyle'


export default function Home(){
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        api.get("/pokemons")
        .then((response) => setPokemons(response.data))
    }, [])

    return (
    <>
        <Header>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='formulario'>
                <form>
                    <input 
                    type='text' 
                    placeholder='Digite o nome do Pokémon' 
                    value={search}
                    onChange={event => setSearch(event.target.value)}/>
                    <button type='submit'>Buscar</button>
                </form>
            </div>
        </Header>
        <Main>
            {pokemons.filter((pokemon) => {
                if(search == ""){
                    return pokemon;
                }
                else if(pokemon.name.toLowerCase().includes(search.toLowerCase())){
                    return pokemon;
                }
            }).map(pokemon => (
                <Card name={pokemon.name} key={pokemon.id} types={pokemon.types} image={pokemon.image}/>
            ))
            }
        </Main>
    </>
    );     
}