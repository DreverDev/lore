import { useDates } from '@/hooks/useDates';
import styles from '@/styles/components/tables/BookTable.module.scss';

const BookTableRow = ({ book }) => {

    const { tableFormat } = useDates();

    const bookState = (
        book.finished ? 'Finished' : (
            book.startDate ? 'Reading' : 'Pending'
        )
    )

    return (
        <article className={`${styles.tableRow} ${styles[bookState]}`}>
            <span className={styles.center}>{book.index}</span>
            <span>{book.title}</span>
            <span className={styles.complex}>
                {
                    book.saga.map(saga => <span key={`${book.title}_${saga.name}`}>{saga.name}</span>)
                }

            </span>
            <span className={styles.complex}>
                {
                    book.author.map(author => <span key={`${book.title}_${author.name}`}>{author.name}</span>)
                }
            </span>
            <span className={styles.center}>{book.sagaIndex}</span>
            <span>{tableFormat(book.buyDate)}</span>
            <span>{tableFormat(book.startDate)}</span>
            <span>{tableFormat(book.endDate)}</span>
            <span className={`${styles.bookState} ${styles[bookState]}`}>{bookState}</span>
            <span className={styles.complex}>
                {
                    book.genre.map(genre => <span key={`${book.title}_${genre.name}`}>{genre.name}</span>)
                }
            </span>
            <span>{book.format.name}</span>
            <span className={styles.center}>{book.price}</span>
        </article>
    )
}

export default BookTableRow;