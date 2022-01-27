import { Section } from "./style";

export default function Bar(props){
    return <Section value={props.value}>
        <div className='name'>
        <h4>{props.name}</h4>
        </div>
        <div className='value'>
            <p>{props.value}</p>
            <div>
                <div></div>
            </div>
        </div>
    </Section>
}