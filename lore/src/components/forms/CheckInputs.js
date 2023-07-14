import styles from '@/styles/components/forms/inputs/CheckInputs.module.scss';
import { useState } from 'react';
import { faSquareCheck, faSquare, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckButton = ({ element, state, setState }) => {
    const [checked, setChecked] = useState(false);

    const handleClick = () => {

        let tempState = [];

        if (checked) {
            setChecked(false);
            tempState = state.filter(item => item != element._id);
        } else {
            setChecked(true);
            tempState = [...state];
            tempState.push(element._id);
        }
        setState(tempState);
    }

    return (
        <div className={`${styles.checkButton} ${checked ? styles.checked : null}`} onClick={handleClick}>
            <FontAwesomeIcon className={styles.svg} icon={checked ? faSquareCheck : faSquare} />
            <label>{element.name}</label>
        </div>
    );
}

const CheckInputs = ({ name, text, elements, state, setState }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleChecks = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    return (
        <div className={styles.checkInputs}>
            <label htmlFor={name} className={styles.mainLabel} onClick={toggleChecks}>
                <span>{text}</span>
                <FontAwesomeIcon className={styles.svg} icon={isOpen ? faChevronUp : faChevronDown} />
            </label>
            <div className={`${styles.dropdown} ${isOpen ? styles.open : styles.close}`}>
                <div className={styles.checkInputsGroup}>
                    {
                        elements.map(element => {
                            return (
                                <div key={element._id} className={styles.checkInput}>
                                    <CheckButton element={element} state={state} setState={setState} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    );

}

export default CheckInputs;