import styles from '@/styles/components/tables/BookTable.module.scss';
import BookTableRow from './BookTableRow';



const BookTableBody = ({ books }) => {

    return (
        <div className={styles.bookTableBody}>

            {
                books.map((book,index) => {
                    if(book.visible){
                        book.index = index;
                        return <BookTableRow key={book._id} book={book} />
                    }
                })
            }
        </div>
    )

}

export default BookTableBody;