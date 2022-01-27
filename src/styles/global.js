import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #C6ECED;
        --steel: #7B8E8A;
        --water: #36AFF6;
        --rock: #776A3E;
        --poison: #611380;
        --psychic: #EC0E63;
        --normal: #ACA974;
        --ground: #BFAC21;
        --ice: #103D43;
        --grass: #48D0B0;
        --flying: #085764;
        --ghost: #472B53;
        --fire: #F66C6D;
        --fairy: #F87EA7;
        --fighting: #800B11;
        --electric: #969101;
        --dark: #5F4632;
        --dragon: #8A55FD;
        --bug: #BDDD6E;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
        
    }
`;