"use client";

import moment from "moment";
import { faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bookFields as headings } from '@/utils/fields/fields';
import { useRouter } from "next/navigation";

import styles from '@/styles/components/tables/BookTable.module.scss';


const BookTable = ({ books }) => {

    const router = useRouter();

    const handleRowClick = (id) => {
        router.push(`/books/${id}`)
    }

    return (
        <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr>
                        {
                            headings.map(heading => {
                                return heading == "#" ? <th key={heading} className={styles.center}>{heading}</th> : <th key={heading}>{heading}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => {
                            return (
                                <tr onClick={() => handleRowClick(book._id)} key={book._id}>
                                    <td className={styles.center}>{index + 1}</td>
                                    <td>{book.title}</td>
                                    <td >
                                        <div className={styles.array}>
                                            {
                                                book.saga ? (
                                                    book.saga.map(saga => <span key={saga._id}>{saga.name}</span>)
                                                ) : null
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.array}>
                                            {
                                                book.author ? (
                                                    book.author.map(author => <span key={author._id}>{author.name}</span>)
                                                ) : null
                                            }
                                        </div>
                                    </td>
                                    <td>{moment.utc(book.buyDate).format('DD/MM/YY')}</td>
                                    <td>{book.finished ? <FontAwesomeIcon icon={faSquareCheck} /> : <FontAwesomeIcon icon={faSquare} />}</td>
                                    <td>
                                        <div className={styles.array}>
                                            {
                                                book.genre ? (
                                                    book.genre.map(genre => <span key={genre._id}>{genre.name}</span>)
                                                ) : null
                                            }
                                        </div>
                                    </td>
                                    <td>{book.format ? book.format.name : null}</td>
                                    <td>{book.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    );
}

export default BookTable;