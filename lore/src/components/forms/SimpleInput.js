import styles from '@/styles/components/forms/inputs/SimpleInput.module.scss'

const SimpleInput = ({ name, type, text, required, changed }) => {
    if (!name || !text || !type) return;
    return (
        <div className={`${styles.simpleInput} ${type == "checkbox" ? styles.checkbox : ""}`} >
            <label htmlFor={name}>{text}</label>
            <input
                name={name}
                type={type}
                step="any"
                required={required ? true : false}
                onChange={changed}
            />
        </div >
    )
}

export default SimpleInput;