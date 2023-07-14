import Book from '../models/Book';
import Saga from '../models/Saga';
import Author from '../models/Author';
import BookGenre from '../models/BookGenre';
import Format from '../models/Format';
import connection from '../connection';
import validateBook from '../../validators/book';

export const create = async (param) => {
    await connection();
    try {
        validateBook(param);
    } catch (error) {
        return {
            status: 400,
            message: error.message
        };
    }

    if (param.buyDate) param.buyDate = new Date(param.buyDate);
    if (param.startDate) param.startDate = new Date(param.startDate);
    if (param.endDate) param.endDate = new Date(param.endDate);

    const bookToStore = new Book(param);

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

export const getAll = async () => {
    await connection();
    try {
        const elements = await Book.find({})
            .populate({ path: 'saga', select: '_id name' })
            .populate({ path: 'author', select: '_id name' })
            .populate({ path: 'genre', select: '_id name' })
            .populate({ path: 'format', select: '_id name' })
            .sort({buyDate: 1, saga: 1, sagaIndex: 1});
        return {
            status: 200,
            elements,
        };
    } catch (error) {
        console.log(error)
    }

};

export const getOne = async (id) => {
    await connection();
    try {
        const element = await Book.findById(id)
            .populate({ path: 'saga', select: '_id name' })
            .populate({ path: 'author', select: '_id name' })
            .populate({ path: 'genre', select: '_id name' })
            .populate({ path: 'format', select: '_id name' });
        return {
            status: 200,
            element,
        };
    } catch (error) {
        console.log(error)
    }
}

export const update = async ({ id, params }) => {
    console.log(params)
    // Primero, obten el documento
    const book = await Book.findOne({ _id: id });

    // Actualizar campos no-array
    for (let field in params) {
        if (field !== 'add' && field !== 'remove') {
            book[field] = params[field];
        }
    }

    // Operaciones de adición
    if (params.add) {
        for (let field in params.add) {
            book[field].addToSet(...params.add[field]);
        }
    }

    // Operaciones de eliminación
    if (params.remove) {
        for (let field in params.remove) {
            params.remove[field].forEach(item => {
                const index = book[field].indexOf(item);
                if (index !== -1) book[field].splice(index, 1);
            });
        }
    }

    // Guardar el documento actualizado
    const updatedElement = await Book.findOneAndUpdate({ _id: id }, book, { new: true });

    return {
        status: 200,
        updatedElement,
    }
};

export const remove = () => { };
