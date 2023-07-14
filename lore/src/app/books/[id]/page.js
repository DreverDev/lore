"use client";
import { useEffect, useState } from "react";
import { useBooks } from "@/hooks/useBooks";

const BookPage = ({ params }) => {

    const { id } = params;

    const { getOne } = useBooks();

    const [book, setBook] = useState({});

    const getBook = async () => {
        setBook(await getOne(id));
    }

    useEffect(() => {
        getBook();
    }, [])

    return (
        <main>
            {
                book._id ? 
                (
                    <div>
                        <div>Book title: {book.title}</div>
                    </div>
                ) : (
                    <div></div>
                )
            }
        </main>
    )

}

export default BookPage;