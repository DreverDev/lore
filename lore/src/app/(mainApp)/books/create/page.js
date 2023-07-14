"use client";
import React, { useEffect, useState } from 'react';
import { getAuthors } from '@/utils/frontControllers/controller';
import BookForm from '@/components/forms/bookForm/BookForm';

const CreateBook = () => {

    return (
        <main>
            <BookForm />
        </main>
    );
};

export default CreateBook;
