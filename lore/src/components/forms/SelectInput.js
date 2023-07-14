import styles from '@/styles/components/forms/inputs/SelectInput.module.scss';

const SelectInput = ({ name, text, elements, changed }) => {

    return (
        <div className={styles.selectInputs}>
            <label htmlFor={name} >{text}</label>
            <select name={name} defaultValue={""} onChange={changed ? changed : null}>
                <option value="" />
                {elements.map(element => {
                    return (
                        <option key={element._id} value={element._id}>{element.name}</option>
                    )
                })}
            </select>
        </div >
    );

}

export default SelectInput;