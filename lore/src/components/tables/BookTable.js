import { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {bookFields as headings} from '@/utils/fields/fields';


const BookTable = ({ books }) => {

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        {
                            headings.map(heading => {
                                return <th key={heading}>{heading}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => {
                            return (
                                <tr key={book._id}>
                                    <td>{index + 1}</td>
                                    <td>{book.title}</td>
                                    <td>
                                        {
                                            book.saga ? (
                                                book.saga.map(saga => <span key={saga._id}>{saga.name}</span>)
                                            ) : null
                                        }
                                    </td>
                                    <td>
                                        {
                                            book.author ? (
                                                book.author.map(author => <span key={author._id}>{author.name}</span>)
                                            ) : null
                                        }
                                    </td>
                                    <td>{moment.utc(book.buyDate).format('DD/MM/YY')}</td>
                                    <td>{book.finished ? <FontAwesomeIcon icon={faSquareCheck} /> : <FontAwesomeIcon icon={faSquare} />}</td>
                                    <td>
                                        {
                                            book.genre ? (
                                                book.genre.map(genre => <span key={genre._id}>{genre.name}</span>)
                                            ) : null
                                        }
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