import styles from '@/styles/components/tables/BookTable.module.scss';
import BookFilters from './BookFilters';

const BookTableHeader = ({ books }) => {
    return (
        <header className={styles.tableHeader}>
            <BookFilters books={books} />
            <div className={styles.tableHeadings}>
                <span className={styles.center}>#</span>
                <span >Title</span>
                <span >Saga</span>
                <span >Author</span>
                <span className={styles.center} >Index</span>
                <span >Buy Date</span>
                <span >Start Date</span>
                <span >End Date</span>
                <span >State</span>
                <span >Genre</span>
                <span >Format</span>
                <span className={styles.center} >Price</span>
            </div>
        </header>
    )
}

export default BookTableHeader;
"#", "Title", "Sagas", "Authors", "Index", "Buy Date", "Start Date", "End Date", "State", "Genre", "Format", "Price"