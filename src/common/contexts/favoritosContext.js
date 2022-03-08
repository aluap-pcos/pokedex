import { createContext, useContext, useState } from "react";
import { usePokemonContext } from "./pokemonsContext";

const FavoritosContext = createContext();

export default function FavoritosProvider({children}){
    const [favoritos, setFavoritos] = useState([])

    return(
        <FavoritosContext.Provider
            value={
                {
                    favoritos,
                    setFavoritos
                }
            }
        >
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritosContext(){
    const { favoritos, setFavoritos } = useContext(FavoritosContext);
    const { pokemons, setpokemons } = usePokemonContext();

    function adicionaFavorito(favoritado){
        const listaFavoritos = [...favoritos];
        listaFavoritos.push(favoritado);
        localStorage.setItem(favoritado.id, favoritado.name)
        return setFavoritos(listaFavoritos);
    }

    function removeFavorito(id){
        localStorage.removeItem(id);
        let listaFavoritos = favoritos.filter(pokemon => pokemon.id !== id);
        return setFavoritos(listaFavoritos)
    }

    async function inicializar(){
        const listaFavoritos = [];
        pokemons.map(pokemon => {
            if(!listaFavoritos.includes(pokemon)){
                if(localStorage.getItem(pokemon.id) !== null){
                    listaFavoritos.push(pokemon);
                }
            }
        })
        return setFavoritos(listaFavoritos);
    }

    return{
        favoritos,
        setFavoritos,
        adicionaFavorito,
        removeFavorito,
        inicializar
    }
}

