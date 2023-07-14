"use client";
import BookTable from "@/components/tables/BookTable";
import { useEffect, useState } from "react";
import { useBooks } from "@/hooks/useBooks";

export default function Books() {

    const [books, setBooks] = useState([]);

    const { getAll } = useBooks();

    const getBooks = async () => {
        setBooks(await getAll());
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
