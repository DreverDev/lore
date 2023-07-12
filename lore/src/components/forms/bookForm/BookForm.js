"use client";
import { useState } from "react";
import SimpleInput from "../SimpleInput";

const BookForm = () => {

    const [selectedAuthors, setSelectedAuthors] = useState([])

    return (
        <form>
            <SimpleInput name='title' type='text' text='Title' />
            <SimpleInput name='price' type='number' text='Price' />
            <SimpleInput name='finished' type='check' text='Finished' />
            <SimpleInput name='buyDate' type='date' text='Buy date' />
            <SimpleInput name='startDate' type='date' text='Start date' />
            <SimpleInput name='endDate' type='date' text='End date' />
            <SimpleInput name='sagaIndex' type='text' text='Saga index' />

            <button type="submit">Submit</button>
        </form>
    )
}

export default BookForm;