"use client";
import BookTable from "@/components/tables/BookTable";
import { useEffect, useState } from "react";
import {getBooks as getBooksController} from '@/utils/frontControllers/controller';

export default function Books() {

    const [books, setBooks] = useState([])

    const getBooks = async () => {
        setBooks(await getBooksController());
    }

    useEffect(() => {
        getBooks();
    }, [])

    return (
        <main>
            {books.length > 0 || Object.keys(books).length > 0 ? (
                <BookTable books={books} />
            ) : (
                <p>No hay libros disponibles.</p>
            )}
        </main>
    )
}
