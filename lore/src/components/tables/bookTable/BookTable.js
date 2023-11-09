"use client";

import styles from '@/styles/components/tables/BookTable.module.scss';
import BookTableHeader from "./BookTableHeader";
import BookTableBody from "./BookTableBody";
import { useEffect, useState } from "react";
import { useBooks } from '@/hooks/useBooks';

const BookTable = () => {

    const [books, setBooks] = useState([]);

    const { getAll } = useBooks();

    const getBooks = async () => {
        let prevBooks = await getAll();
        prevBooks = prevBooks.map(book => ({
            ...book,
            visible: true
        }))
        setBooks(prevBooks);
    }

    useEffect(() => {
        getBooks();
    }, [])

    return (
        <section className={styles.tableContainer}>
            <BookTableHeader books={books} />
            <BookTableBody books={books} />
        </section>

    );
}

export default BookTable;