import Book from '../models/Book';
import connection from '../connection';
import validateBook from '../../validators/book';

export const create = async (bookParam) => {
    await connection();
    try {
        validateBook(bookParam);
    } catch (error) {
        return {
            status: 400,
            message: error.message
        };
    }

    if (bookParam.buyDate) bookParam.buyDate = new Date(bookParam.buyDate);
    if (bookParam.startDate) bookParam.startDate = new Date(bookParam.startDate);
    if (bookParam.endDate) bookParam.endDate = new Date(bookParam.endDate);

    const bookToStore = new Book(bookParam);

    try {
        const storedBook = await bookToStore.save();
        return {
            status: 200,
            storedBook
        };
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            message: "Error storing the book"
        };
    }
};

export const read = async () => {
    await connection();
    console.log("si entra")
    try {
        const books = await Book.find({});
        return {
            status: 200,
            books,
        };
    } catch (error) {
        console.log(error)
    }

};

export const update = () => { };

export const remove = () => { };
