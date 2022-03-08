import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Section = styled.section`
    height: 436px;
    width: 877px;
    left: 91px;
    top: 157px;
    border-radius: 25px;
    background: ${props => 'var(--'+props.type+')'};
    margin: auto;
    display: flex;
    box-shadow: 0px 5px 5px 0px;

   .about{
        flex: 7;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;

        .linkHome{
            position: absolute;
            margin-left: -140px;
            margin-top: 30px;
        }
        h2 {
            text-align: center;
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 21px;
            font-weight: bold;
            margin-top: 16px;
            margin-bottom: 16px;

            color: #FFFFFF;

            &::first-letter{
                text-transform: uppercase;
            }
        }

        .number{
            color: #0000006B;
        }

        .image{
            height: 236px;
            width: 236px;
            left: 146px;
            top: 266px;
            border-radius: 0px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 150px;
            align-items: center;
            align-self: center;
            display: flex;
            justify-content: center;
            margin: auto;
            margin-top: 24px;

            img{
                height: 190px;
                width: 190px;
                margin: auto;
            }
        }

        .atributes{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 24px;
        }
   }
   .stats{
        flex: 9;
        border-radius: 25px;
        background: white;
        padding: 80px 48px 80px 48px;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
    }

`;