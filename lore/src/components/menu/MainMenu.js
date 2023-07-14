"use client";
import { pages } from "@/utils/pages/pages";
import Link from "next/link";
import styles from '@/styles/components/menu/MainMenu.module.scss'

const MainMenu = ({ isOpen, setIsOpen }) => {

    const toggleOpen = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <div className={`${styles.mainMenu} ${isOpen ? styles.open : styles.close}`} >
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
        </div>
    );
}

export default MainMenu;