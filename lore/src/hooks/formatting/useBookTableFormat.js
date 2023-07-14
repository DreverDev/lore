import { useColoring } from "../useColoring";

export const useBookTableFormat = () => {

    const { getColors } = useColoring();

    const setSagaColors = (books) => {
        let sagaColors = [];
        // getNumColors
        let maxes = [];
        for (let book of books) {
            book.saga ? maxes.push(book.saga.length) : null;
        }
        const colors = getColors(Math.max(...maxes));
        for(let book of books){
            console.log(book.saga.filter(item => item))
            // const newSagas = book.saga.filter()
        }
    }

    const getFullBooks = (books) => {
        // getNumColors
        setSagaColors(books);

        // // Add sagasColors
        // if(book.saga){
        //     for(let el of book.saga){

        //     }
        // }
    }

    return {
        getFullBooks,
    }
}