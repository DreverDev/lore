import Author from '../models/Author';
import connection from '../connection';

export const create = async (authorParam) => {
    await connection();

    const elementToStore = new Author(authorParam);

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
            const elementToStore = new Author(elementParam);
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

export const read = async () => {
    await connection();
    try {
        const authors = await Author.find({})
        .sort({name: 1});
        return {
            status: 200,
            authors,
        };
    } catch (error) {
        console.log(error)
    }

};

export const update = () => { };

export const remove = () => { };
