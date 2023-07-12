"use client";
import { styled, keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {
        opacity: 0
    }
    100% {
        opacity: 0.5
    }
`;

const StyledOverlayMainMenu = styled.div`
    position: fixed;
    background-color: #000;
    top: ${props => props.theme.sizes.header};
    height: 100%;
    width: 100%;
    z-index: 5;
    cursor: pointer;
    animation: ${props => (props.$isOpen ? fadeIn : null)} 300ms forwards;
    display: ${(props) => (props.$isOpen ? "block" : "none")};
`;


const Overlay = ({ isOpen, setIsOpen }) => {

    const toggleOpen = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <StyledOverlayMainMenu $isOpen={isOpen} onClick={toggleOpen}/>
    )
}

export default Overlay;