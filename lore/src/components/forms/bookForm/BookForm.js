"use client";
import { useEffect, useState } from "react";
import SimpleInput from "../SimpleInput";
import styles from '@/styles/components/forms/BookForm.module.scss';
import CheckInputs from "../CheckInputs";
import { useForm } from "@/hooks/forms/useForm";
import { useBooks } from "@/hooks/useBooks";
import { useAuthors } from "@/hooks/useAuthors";
import { useSagas } from "@/hooks/useSagas";
import { useGenres } from "@/hooks/useGenres";
import { useFormats } from "@/hooks/useFormats";
import SelectInput from "../SelectInput";
import { useRouter } from "next/navigation";

const BookForm = () => {

    const router = useRouter();

    const { form, changed } = useForm({});

    const [authors, setAuthors] = useState([]);
    const [sagas, setSagas] = useState([]);
    const [genres, setGenres] = useState([]);
    const [formats, setFormats] = useState([]);

    const { create: createBook} = useBooks();

    const { getAll: getAuthors } = useAuthors();
    const { getAll: getSagas } = useSagas();
    const { getAll: getGenres } = useGenres();
    const { getAll: getFormats } = useFormats();

    const [selectedAuthors, setSelectedAuthors] = useState([]);
    const [selectedSagas, setselectedSagas] = useState([]);
    const [selectedGenres, setselectedGenres] = useState([]);

    const getElements = async () => {
        setAuthors(await getAuthors());
        setSagas(await getSagas());
        setGenres(await getGenres());
        setFormats(await getFormats());
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newBook = form;
        newBook.author = selectedAuthors;
        newBook.saga = selectedSagas;
        newBook.genre = selectedGenres;
        const data = await createBook(newBook);
        if(data.status == 200) router.push("/books");
    }

    useEffect(() => {
        getElements();
    }, [])

    return (
        <div className={styles.bookForm}>
            {
                authors.length && sagas.length && genres.length && formats.length ? (
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <SimpleInput name='title' type='text' text='Title' required changed={changed} />
                        <SimpleInput name='price' type='number' text='Price' changed={changed} />
                        <SimpleInput name='buyDate' type='date' text='Buy date' changed={changed} />
                        <SimpleInput name='startDate' type='date' text='Start date' changed={changed} />
                        <SimpleInput name='endDate' type='date' text='End date' changed={changed} />
                        <SimpleInput name='finished' type='checkbox' text='Finished' changed={changed} />
                        <CheckInputs name="author" text="Author" elements={authors} state={selectedGenres} setState={setSelectedAuthors} />
                        <CheckInputs name="saga" text="Saga" elements={sagas} state={selectedSagas} setState={setselectedSagas} />
                        {selectedSagas.length ? <SimpleInput name='sagaIndex' type='text' text='Saga index' changed={changed} /> : null}
                        <CheckInputs name="genre" text="Genre" elements={genres} state={selectedGenres} setState={setselectedGenres} />
                        <SelectInput name="format" text="Format" elements={formats} changed={changed} />
                        <div className={styles.submitContainer}>
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                ) : <p>Loding form</p>
            }

        </div>
    )
}

export default BookForm;