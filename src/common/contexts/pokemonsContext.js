import { createContext, useContext, useState } from "react";
import { api } from '../../services/api';
import { useFavoritosContext } from "./favoritosContext";

export const PokemonsContext = createContext();

export default function PokemonsProvider({children}){
    const [pokemons, setPokemons] = useState([])

    return(
        <PokemonsContext.Provider
            value={
                {
                    pokemons,
                    setPokemons
                }
            }
        >
            {children}
        </PokemonsContext.Provider>
    )
}

export function usePokemonContext(){
    const { pokemons, setPokemons } = useContext(PokemonsContext);

    async function adicionarPokemons(){
        api.get("/pokemons")
        .then((response) => setPokemons(response.data))
    }

    return {
        pokemons,
        setPokemons,
        adicionarPokemons
    }
}