import styled from 'styled-components';

export const Search = styled.div`
        width: 900px;
        margin: auto;
        margin-top: -25px;
        margin-bottom: 50px;

        input{
            width: 80%;
            height: 45px;
            left: 98px;
            top: 115px;
            border: none;
            padding-left: 3em;

            background: #FFFFFF;
            border-radius: 10px;
        }

        button{
            width: 15%;
            height: 46px;
            left: 859px;
            top: 114px;
            font-weight: bold;
            color: #FFCB05;
            margin-left: 3%;

            background: #3763AD;
            border-radius: 10px;
        }
`;

export const Main = styled.main`
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Input = styled.input`
    width: 80%;
    height: 45px;
    left: 98px;
    top: 115px;
    border: none;
    padding-left: 3em;

    background: #FFFFFF;
    border-radius: 10px;
`;

export const Button = styled.button`
    width: 15%;
    height: 46px;
    left: 859px;
    top: 114px;
    font-weight: bold;
    color: #FFCB05;
    margin-left: 3%;

    background: #3763AD;
    border-radius: 10px;
`;