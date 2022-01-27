import { useEffect } from "react/cjs/react.development";
import Bar from "../progress/Bar";

export default function CompleteCard(props){
    console.log(props.pokemon);
    return <div>
        <section>
            <button></button>
            <h2>{props?.name}</h2>
            <p>001</p>
            <div>
                <img src={props?.image} alt={props?.name}/>
            </div>
            <div>
                <h3>{props?.weight?.value+''+props?.weight?.unit}</h3>
                <p>Weight</p>
            </div>
            <div>
                <h3>{props?.types[0]}</h3>
                <p>Type</p>
            </div>
            <div>
                <h3>{props?.height?.value+''+props?.height?.unit}</h3>
                <p>Height</p>
            </div>
        </section>
        <section>
            {
                props?.stats?.map(stat => <Bar name={stat.name} value={stat.value}/>)
            }
        </section>
    </div>
}