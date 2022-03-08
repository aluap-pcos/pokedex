import { BotaoFavorito } from "./style";

export default function BtnFavorito({ marginLeft, marginTop, favoritado, onClick }){
    return <BotaoFavorito marginLeft={marginLeft} marginTop={marginTop} favoritado={favoritado} onClick={onClick}/>
}