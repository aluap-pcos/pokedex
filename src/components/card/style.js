import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    width: 181px;
    height: 253px;
    justify-content: center;
    border-radius: 25px;
    background: ${props => 'var(--'+props.type+')'};
    padding-top: 16px;
    margin-bottom: 50px;

    .link{
        text-decoration: none;
        text-align: center;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        
        line-height: 21px;
        font-weight: bold;

        color: #FFFFFF;

        h2 {
            font-size: 18px;
            &::first-letter{
            text-transform: uppercase;
            }
        }

        &::houver{
            cursor: pointer;
        }
        
    }

    p{
        text-align: center;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        margin-bottom: 24px;

        color: rgba(0, 0, 0, 0.42);
    }

    div{
        text-align: center;
        width: 151px;
        height: 151px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 100px;
        background: rgba(255, 255, 255, 0.4);

        img{
            width: 130px;
            height: 130px;
        }
    }
`;