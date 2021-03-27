import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiasing;
        font-family: 'Roboto', sans-serif;
    }
    html, body, #root{
        background: var(--c900);
        color: var(--c50);
        height: 100%;
        font-family: 'Nunito Sans', sans-serif;

        input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        }
    }
    *, button, input{
        border:0;
        outline:0;

        font-family: 'Nunito Sans', sans-serif;
        color: var(--c50);
    }

    :root{
    --c000: #000000;
    --c900: #222222;
    --c800: #3b3b3b;
    --c700: #515151;
    --c600: #626262;
    --c500: #7E7E7E;
    --c400: #9E9E9E;
    --c300: #B1B1B1;
    --c200: #CFCFCF;
    --c100: #E1E1E1;
    --c50:  #F7F7F7;

    --primary: #7D41FF;
    --secondary: #332CAC;
    }
`;