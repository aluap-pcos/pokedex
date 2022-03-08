import { useFavoritosContext } from '../../common/contexts/favoritosContext';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import { Main } from './style';

export default function Favoritos(){
    const {favoritos, setFavoritos} = useFavoritosContext()
    return (
        <>
            <Header/>
            <Main>
                {favoritos.map(pokemon => (
                    <Card pokemon={pokemon}/>
                ))}
            </Main>
        </>
    )
}