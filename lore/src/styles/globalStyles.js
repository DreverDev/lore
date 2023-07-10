import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    body{
        font-family: ${props => props.theme.fonts.primaryFont};
        color: ${props => props.theme.colors.fontColor};
        background-color: ${props => props.theme.colors.bgColor};
        margin: 0;
        height: 100vh;
        overflow: hidden;
        font-size: ${props => props.theme.fontSizes.regular};
    }

    a{
        text-decoration: none;
        color: inherit;
        transition: all ease-in-out 100ms;
        &:hover{
            color: ${props => props.theme.colors.fontHoverColor};
        }
    }
`;

export default GlobalStyles;