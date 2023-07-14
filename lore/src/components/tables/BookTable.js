"use client";

import moment from "moment";
import { faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bookFields as headings } from '@/utils/fields/fields';
import { useRouter } from "next/navigation";
import { useDates } from "@/hooks/useDates";
import styles from '@/styles/components/tables/BookTable.module.scss';
import { useBookTableFormat } from "@/hooks/formatting/useBookTableFormat";

const SimpleTd = ({ text, center }) => {
    return <td className={center ? styles.center : ''}>{text}</td>;
}

const ComplexTd = ({ elements }) => {

    return (
        <td >
            <div className={styles.array}>
                {
                    elements ? (
                        elements.map(element => {
                            return <span key={element._id} style={{backgroundColor: element.color}}>{element.name}</span>
                        })
                    ) : null
                }
            </div>
        </td>
    )
}

const CheckTd = ({ checked, center }) => {
    return <td className={center ? styles.center : ''}><FontAwesomeIcon icon={checked ? faSquareCheck : faSquare} /></td>
}

const BookTable = ({ books }) => {

    const { tableFormat } = useDates();

    const router = useRouter();

    const handleRowClick = (id) => {
        router.push(`/books/${id}`);
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
                                    <SimpleTd text={index + 1} center />
                                    <SimpleTd text={book.title} />
                                    <ComplexTd elements={book.saga} />
                                    <ComplexTd elements={book.author} />
                                    <SimpleTd text={book.sagaIndex} center />
                                    <SimpleTd text={tableFormat(book.buyDate)} center />
                                    <SimpleTd text={tableFormat(book.startDate)} center />
                                    <SimpleTd text={tableFormat(book.endDate)} center />
                                    <CheckTd checked={book.finished ? true : false} center />
                                    <ComplexTd elements={book.genre} />
                                    <SimpleTd text={book.format ? book.format.name : null} center />
                                    <SimpleTd text={book.price} center />
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