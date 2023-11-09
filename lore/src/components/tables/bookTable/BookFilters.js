"use client";
import FilterSelect from '@/components/inputs/FilterSelect';
import { useAuthors } from '@/hooks/useAuthors';
import { useFormats } from '@/hooks/useFormats';
import { useGenres } from '@/hooks/useGenres';
import { useSagas } from '@/hooks/useSagas';
import styles from '@/styles/components/tables/BookTable.module.scss';
import { useEffect, useState } from 'react';

const BookFilters = ({ books }) => {

    const [authors, setAuthors] = useState([]);
    const [sagas, setSagas] = useState([]);
    const [genres, setGenres] = useState([]);
    const [formats, setFormats] = useState([]);

    const { getAll: getAuthors } = useAuthors();
    const { getAll: getSagas } = useSagas();
    const { getAll: getGenres } = useGenres();
    const { getAll: getFormats } = useFormats();

    const getElements = async () => {
        setAuthors(await getAuthors());
        const prevAuthors = await getAuthors();
        setAuthors(
            prevAuthors.map(prevAuthor => ({
                value: prevAuthor._id,
                label: prevAuthor.name
            }))
        )
        const prevSagas = await getSagas();
        setSagas(
            prevSagas.map(prevSaga => ({
                value: prevSaga._id,
                label: prevSaga.name
            }))
        )
        const prevGenres = await getGenres();
        setGenres(
            prevGenres.map(prevGenre => ({
                value: prevGenre._id,
                label: prevGenre.name
            }))
        )
        const prevFormats = await getFormats();
        setFormats(
            prevFormats.map(prevFormat => ({
                value: prevFormat._id,
                label: prevFormat.name
            }))
        )
    }

    useEffect(() => {
        getElements();

    }, [])

    const finishedValues = [
        {
            value: true,
            label: 'Finished'
        },
        {
            value: false,
            label: 'Unfinished'
        }
    ]

    return (
        <div>
            <div className={styles.bookFilters}>
                <FilterSelect options={finishedValues} placeholder={'Finished'} />
                {sagas.length && <FilterSelect options={sagas} placeholder={'Saga'} />}
                {authors.length && <FilterSelect options={authors} placeholder={'Author'} />}
            </div>
        </div>
    )
}

export default BookFilters;