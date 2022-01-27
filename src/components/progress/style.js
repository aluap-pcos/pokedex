import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    .name{
        flex: 2;
        margin: auto;
        h4{
            align-self: flex-start;
            font-weight: bold;
            
            &::first-letter{
            text-transform: uppercase;
            }
        }
    }
    

    .value{
        margin: auto;
        flex: 8;
        display: flex;
        flex-direction: row;
        margin-left: 50px;
        p{
            align-self: flex-end;
            margin-right: 8px;
        }

        div{
            align-self: flex-end;
            width: 250px;
            height: 6px;
            background: #C4C4C4;
            margin-bottom: 4px;

            div{
                align-self: flex-start;
                width: ${(props) => props.value+'%'};
                height: 6px;
                background: #027FC5;
            }
        }
    }
`;