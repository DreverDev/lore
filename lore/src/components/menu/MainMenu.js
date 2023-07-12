"use client";
import { styled, keyframes } from "styled-components";
import { pages } from "@/utils/pages/pages";
import Link from "next/link";

const goingIn = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`;

const goingOut = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`;

const StyledMainMenu = styled.div`
    background-color: ${props => props.theme.colors.primaryColor};
    position: absolute;
    top: ${props => props.theme.sizes.header};
    left: 0;
    width: 20%;
    height: 100%;
    z-index: 10;
    padding: 30px;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
    animation: ${props => (props.$isOpen ? goingIn : goingOut)} 300ms forwards;

    @media(max-width: ${props => props.theme.breakpoints.mobileBreakpoint}){
        width: 75%;
    }

    ul{
        display: flex;
        flex-direction: column;
        li{
            list-style: none;
            padding: 5px;
            a{
                display: inline-block;
            }
        }
    }
`;

const MainMenu = ({ isOpen, setIsOpen }) => {

    const toggleOpen = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <StyledMainMenu $isOpen={isOpen} >
            <h2>Lore Menu</h2>
            <div>
                <ul>
                    {
                        pages.map(item => {
                            return <li key={item.name} ><Link href={item.url} onClick={toggleOpen}>{item.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        </StyledMainMenu>
    );
}

export default MainMenu;