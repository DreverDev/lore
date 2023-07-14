import BookGenre from '../models/BookGenre';
import connection from '../connection';
import { getColor } from '@/utils/functionalities/getColor';

export const create = async (param) => {
    await connection();

    const elementToStore = new BookGenre(param);
    elementToStore.color = getColor();

    try {
        const storedElement = await elementToStore.save();
        return {
            status: 200,
            storedElement,
        };
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            message: "Error storing the author",
            error,
        };
    }
};

export const dump = async (elementsParams) => {
    await connection();

    const storedElements = [];

    try {
        for (const elementParam of elementsParams) {
            const elementToStore = new BookGenre(elementParam);
            const storedElement = await elementToStore.save();
            storedElements.push(storedElement);
        }

        return {
            status: 200,
            storedElements
        };
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: "Error storing the authors"
        };
    }
};

export const getAll = async () => {
    await connection();
    try {
        const bookGenres = await BookGenre.find({});

        return {
            status: 200,
            bookGenres,
        };
    } catch (error) {
        console.log(error)
    }

};

export const update = () => { };

export const remove = () => { };
