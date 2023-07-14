import Saga from '../models/Saga';
import connection from '../connection';
import { getColor } from '@/utils/functionalities/getColor';

export const create = async (authorParam) => {
    await connection();

    let elementToStore = new Saga(authorParam);
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
            const elementToStore = new Saga(elementParam);
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
        const sagas = await Saga.find({});

        return {
            status: 200,
            sagas,
        };
    } catch (error) {
        console.log(error)
    }

};

export const update = () => { };

export const remove = () => { };
