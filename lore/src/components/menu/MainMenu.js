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

const fadeIn = keyframes`
    0% {
        opacity: 0
    }
    100% {
        opacity: 0.5
    }
`;

const StyledMenu = styled.div`
    background-color: ${props => props.theme.colors.primaryColor};
    position: absolute;
    top: ${props => props.theme.sizes.header};
    left: 0;
    width: 50%;
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

const StyledOverlay = styled.div`
    position: fixed;
    background-color: #000;
    top: ${props => props.theme.sizes.header};
    height: 100%;
    width: 100%;
    z-index: 5;
    cursor: pointer;
    animation: ${props => (props.$isOpen ? fadeIn : null)} 300ms forwards;
    display: ${(props) => (props.$isOpen ? "block" : "none")};
`

const MainMenu = ({ isOpen, setIsOpen }) => {

    const toggleOpen = () => {
        if(isOpen){
            setIsOpen(false);
        }else{
            setIsOpen(true);
        }
    }

    return (
        <>
            <StyledMenu className="main-menu" $isOpen={isOpen} >
                <h2 className="menu-title">Lore Menu</h2>
                <div className="menu-list">
                    <ul>
                        {
                            pages.map(item => {
                                return <li key={item.name} ><Link href={item.url} onClick={toggleOpen}>{item.name}</Link></li>
                            })
                        }
                    </ul>
                </div>
            </StyledMenu>
            <StyledOverlay className="menu-overlay" $isOpen={isOpen} onClick={toggleOpen}/>
        </>
    );
}

export default MainMenu;