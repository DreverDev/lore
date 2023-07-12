"use client";
import React, { useEffect, useState } from 'react';
import { getAuthors } from '@/utils/frontControllers/controller';
import BookForm from '@/components/forms/bookForm/BookForm';

const CreateBook = () => {
    const [authors, setAuthors] = useState([]);
    const [sagas, setSagas] = useState([]);
    const [formats, setFormats] = useState([]);
    const [genres, setGenres] = useState([]);

    const [formData, setFormData] = useState({
        title: '',
        buyDate: '',
        startDate: '',
        endDate: '',
        price: '',
        sagaIndex: '',
        finished: false
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData(prevState => ({
            ...prevState,
            [name]: fieldValue
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar cualquier lógica con los datos del formulario
        console.log(formData);
    };

    const handleElements = async () => {
        const auth = await getAuthors();
        setAuthors(auth)
    }

    useEffect(() => {
        handleElements();
    }, [])

    return (
        <BookForm />
    );
};

export default CreateBook;
