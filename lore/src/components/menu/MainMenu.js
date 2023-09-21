"use client";
import { pages } from "@/utils/pages/pages";
import Link from "next/link";
import styles from '@/styles/components/menu/MainMenu.module.scss'
import { useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";

const MainMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    }

    const handleClickOutside = (event) => {
        if (!menuRef || !buttonRef) return;
        if (!menuRef.current?.contains(event.target) && !buttonRef.current?.contains(event.target) && isOpen) toggleOpen();

    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className={styles.mainMenu}>
            <span className={styles.hamburguer} ref={buttonRef} onClick={toggleOpen}><Hamburger toggled={isOpen} /></span>
            <nav ref={menuRef} className={`${styles.nav} ${isOpen ? styles.opened : styles.closed}`}>
                <ul>
                    {pages.map((item) => (
                        <li key={item.url}>
                            <Link className={styles.navLink} href={item.url}>
                                {item.name}
                                <span></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default MainMenu;