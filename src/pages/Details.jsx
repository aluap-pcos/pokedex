import { useState, useEffect } from 'react/cjs/react.development'
import Bar from '../components/progress/Bar';
import logo from '../image/logo.png'
import btn from '../image/btn.png'
import { api } from '../services/api';
import { Header, Main, Section } from '../styles/detailsstyle'
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function Details(){
    const [pokemon, setPokemon] = useState({})
    let {route} = useParams();


    useEffect(() => {
        api.get(`/pokemons/${route}`)
        .then((response) => {setPokemon(response.data); console.log(response.data); console.log(response.request)})
    }, [])


    return <>
        <Header>
            <h1><div><img src={logo} alt="Pokemon" /></div></h1>
        </Header>
        
        <Main>
            <Section type={pokemon.types != undefined ? pokemon?.types[0] : ""}>
                <div className='about'>
                    <Link to='/' className='linkHome'><img src={btn}/></Link>
                    <h2>{pokemon?.name}</h2>
                    <p className='number'>001</p>
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