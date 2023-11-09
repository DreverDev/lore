import styles from '@/styles/components/tables/BookFilters.module.scss';

const FilterSelect = ({ options, placeholder }) => {

    return (
        <select className={styles.select} defaultValue={""} placeholder={placeholder}>
            {
                placeholder && <option value="" disabled hidden>{placeholder}</option>
            }
            {
                options && options.length ? (
                    options.map(option => (<option key={`option_${option.value}`} value={option.value}>{option.label}</option>))
                ) : null
            }
        </select>
    )
}

export default FilterSelect;