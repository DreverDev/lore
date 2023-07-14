import styles from '@/styles/components/menu/Overlay.module.scss'


const Overlay = ({ isOpen, setIsOpen }) => {

    const toggleOpen = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.open : styles.close}`} onClick={toggleOpen}/>
    )
}

export default Overlay;